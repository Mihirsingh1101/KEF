import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Book, PenSquare, FileText, Video, Sun, Moon, X, Download, Eye } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";   // <-- your firebase config

// ICON MAPPING
const categoryIcons = {
    Books: <Book className="w-4 h-4" />,
    Blogs: <PenSquare className="w-4 h-4" />,
    'Case Studies': <FileText className="w-4 h-4" />,
    PDFs: <FileText className="w-4 h-4" />,
    Research: <FileText className="w-4 h-4" />,
    Videos: <Video className="w-4 h-4" />,
    News: <FileText className="w-4 h-4" />
};

const categories = ['All', 'Books', 'Blogs', 'Case Studies', 'Research', 'Videos', 'News'];

// PARTICLES BACKGROUND
const ParticlesComponent = React.memo(({ isDarkMode }) => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => ({
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 80, duration: 0.4 } },
        },
        particles: {
            color: { value: isDarkMode ? '#fff7e6' : '#4f4f4f' },
            links: {
                color: isDarkMode ? '#ffb347' : '#ff7e00',
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1.2
            },
            move: { enable: true, outModes: { default: 'bounce' }, speed: 1 },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    }), [isDarkMode]);

    if (init) return <Particles id="tsparticles" options={options} />;
    return null;
});

// 🔥 FETCH FIRESTORE CONTENT
const fetchContent = async () => {
    try {
        // adjust these for each subcollection you create later
        const blogsRef = collection(db, "artifacts", "default-app-id", "public", "data", "blogs");
        const newsRef = collection(db, "artifacts", "default-app-id", "public", "data", "newsItems");

        const [blogsSnap, newsSnap] = await Promise.all([
            getDocs(blogsRef),
            getDocs(newsRef),
        ]);

        const blogs = blogsSnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            category: "Blogs"
        }));

        const news = newsSnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            category: "News"
        }));

        return [...blogs, ...news];
    } catch (err) {
        console.error("Error fetching content:", err);
        return [];
    }
};

// MAIN COMPONENT
const KnowledgeHub = () => {
    const [dbContent, setDbContent] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('Newest');
    const [selectedItem, setSelectedItem] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [showSignInPrompt, setShowSignInPrompt] = useState(false);

    const { user } = useAuth() || {};
    const navigate = useNavigate();

    // fetch data on mount
    useEffect(() => {
        const load = async () => {
            const data = await fetchContent();
            setDbContent(data);
        };
        load();
    }, []);

    // Filter + Sort content from DB
    const filteredContent = useMemo(() => (dbContent || [])
        .filter(item => (selectedCategory === 'All' || item.category === selectedCategory))
        .filter(item => item.title?.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            switch (sortOrder) {
                case 'Most Viewed': return (b.views || 0) - (a.views || 0);
                case 'Popular':
                    // Use the .createdAt field and its .toDate() method here as well
                    return ((b.views || 0) / (Date.now() - b.createdAt.toDate().getTime())) -
                        ((a.views || 0) / (Date.now() - a.createdAt.toDate().getTime()));
                default: return b.createdAt.toDate() - a.createdAt.toDate();
            }
        }), [dbContent, searchTerm, selectedCategory, sortOrder]);

    useEffect(() => {
        if (isDarkMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [isDarkMode]);

    // Download handler
    const handleDownload = async (item) => {
        if (!user) {
            setShowSignInPrompt(true);
            return;
        }
        try {
            if (item.downloadUrl) {
                const a = document.createElement('a');
                a.href = item.downloadUrl;
                a.download = `${item.title.replace(/\s+/g, '_')}`;
                document.body.appendChild(a);
                a.click();
                a.remove();
            } else {
                const blob = new Blob([
                    // Use createdAt.toDate() for the date and .text for the description
                    `Title: ${item.title}\n\nDate: ${item.createdAt.toDate().toLocaleString()}\n\nDescription:\n${item.text}`
                ], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${item.title.replace(/\s+/g, '_')}.txt`;
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(url);
            }
        } catch (err) {
            console.error('Download failed', err);
        }
    };

    return (
        <div className="bg-gradient-to-b from-red-900 via-orange-900 to-yellow-900 dark:from-black dark:via-gray-900 dark:to-black min-h-screen text-gray-200 transition-colors">

            {/* Dark Mode Toggle */}
            <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isDarkMode ? 'moon' : 'sun'}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>

            {/* Hero Section */}
            <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ParticlesComponent isDarkMode={isDarkMode} />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300"
                    style={{ textShadow: '0 0 20px rgba(255,140,0,0.6)' }}
                >
                    Kullhad Economy Fest
                </motion.h1>
            </header>

            {/* Filters */}
            <main className="container mx-auto p-6 -mt-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/20 dark:bg-gray-900/60 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/50 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search content..."
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full py-2 pl-12 pr-4 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-orange-400 transition-colors"
                        />
                    </div>
                    <div className="flex gap-4">
                        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="py-2 px-4 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-orange-400">
                            {categories.map(cat => <option key={cat} className="dark:bg-gray-800">{cat}</option>)}
                        </select>
                        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="py-2 px-4 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-orange-400">
                            <option className="dark:bg-gray-800">Newest</option>
                            <option className="dark:bg-gray-800">Most Viewed</option>
                            <option className="dark:bg-gray-800">Popular</option>
                        </select>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredContent.map(item => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedItem(item)}
                                className="group relative cursor-pointer bg-white/10 dark:bg-gray-900/60 rounded-xl overflow-hidden shadow-lg border border-white/20 dark:border-gray-800/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                                <div className="relative p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-300 border border-orange-400/50">
                                            {categoryIcons[item.category]}
                                            <span>{item.category}</span>
                                        </div>
                                        <span className="text-xs text-gray-300">{item.createdAt ? item.createdAt.toDate().toLocaleDateString() : ""}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">{item.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags?.map(tag => <span key={tag} className="text-xs bg-gray-200/30 dark:bg-gray-700 px-2 py-1 rounded-full">{tag}</span>)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>

            {/* Side Drawer */}
            <AnimatePresence>
                {selectedItem && (
                    <Dialog open={true} onClose={() => setSelectedItem(null)} className="relative z-50">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                        <div className="fixed inset-0 flex justify-end">
                            <Dialog.Panel as={motion.div}
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ duration: 0.5 }}
                                className="w-full max-w-md bg-gradient-to-b from-orange-100 to-yellow-50 dark:from-gray-900 dark:to-gray-800 shadow-2xl p-8 flex flex-col"
                            >
                                <div className="flex-grow space-y-6">
                                    <div className="flex items-center justify-between">
                                        <Dialog.Title className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400">{selectedItem.title}</Dialog.Title>
                                        <button onClick={() => setSelectedItem(null)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"><X /></button>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">{selectedItem.text}</p>
                                    <div className="flex gap-2 px-3 py-1 text-sm rounded-full bg-orange-500/20 text-orange-400 border border-orange-400/50 w-fit">
                                        {categoryIcons[selectedItem.category]}
                                        <span>{selectedItem.category}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedItem.tags?.map(tag => <span key={tag} className="text-sm bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full">{tag}</span>)}
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-8">
                                    <button onClick={() => handleDownload(selectedItem)} className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white rounded-lg hover:brightness-110 shadow-lg"><Download size={20} /> Download</button>
                                    <button onClick={() => alert('Preview action — implement your viewer here')} className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"><Eye size={20} /> Preview</button>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>

            {/* Sign-in Prompt */}
            <AnimatePresence>
                {showSignInPrompt && (
                    <Dialog open={true} onClose={() => setShowSignInPrompt(false)} className="fixed inset-0 z-50">
                        <div className="fixed inset-0 bg-black/60" />
                        <div className="fixed inset-0 flex items-center justify-center p-4">
                            <Dialog.Panel as={motion.div} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="w-full max-w-md bg-white/90 dark:bg-gray-900/90 p-6 rounded-xl shadow-2xl border border-white/20">
                                <Dialog.Title className="text-2xl font-bold mb-2">Please sign in to download</Dialog.Title>
                                <p className="text-sm mb-4">Downloading content is available for registered users only. Please sign in or create an account to continue.</p>
                                <div className="flex gap-3 justify-end">
                                    <button onClick={() => { setShowSignInPrompt(false); navigate('/signup'); }} className="px-4 py-2 rounded bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold">Create account</button>
                                    <button onClick={() => { setShowSignInPrompt(false); navigate('/signin'); }} className="px-4 py-2 rounded border">Sign in</button>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    );
};

export default KnowledgeHub;
