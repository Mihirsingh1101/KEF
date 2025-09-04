import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Book, PenSquare, FileText, Video, Tag, UploadCloud, Sun, Moon, ArrowUpDown, X, Download, Eye } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { Dialog } from '@headlessui/react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// --- NEW MOCK DATA: Kullad Economy Fest & Indian Culture ---
const initialContent = [
    {
        id: 1,
        title: 'Mitti: The Soul of Indian Pottery',
        category: 'Books',
        tags: ['History', 'Craft', 'Terracotta'],
        views: 1850,
        date: '2025-09-01T10:00:00Z',
        description: 'An exploration of India’s ancient tradition of terracotta pottery, tracing its history from the Indus Valley Civilization to its modern-day revival.'
    },
    {
        id: 2,
        title: 'The Kullad Revival: A Sustainable Success',
        category: 'Blogs',
        tags: ['Sustainability', 'Economy', 'VocalForLocal'],
        views: 2750,
        date: '2025-08-25T14:30:00Z',
        description: 'How the humble kullad is making a massive comeback, empowering local artisans and promoting an eco-friendly lifestyle across the nation.'
    },
    {
        id: 3,
        title: 'Empowering Artisans: A Kumbh Mela Story',
        category: 'Case Studies',
        tags: ['Social Impact', 'Business', 'Artisans'],
        views: 1250,
        date: '2025-09-10T09:00:00Z',
        description: 'A case study on how a cooperative of potters successfully scaled their kullad production for the Kumbh Mela, leading to significant economic upliftment.'
    },
    {
        id: 4,
        title: 'The Carbon Footprint of Clay vs. Plastic',
        category: 'Research',
        tags: ['Environment', 'Science', 'EcoFriendly'],
        views: 1500,
        date: '2025-08-15T11:00:00Z',
        description: 'A scientific paper comparing the environmental impact of single-use plastics with traditional Indian clay products like kullads.'
    },
    {
        id: 5,
        title: 'Crafting the Kullad: A Glimpse into the Fest',
        category: 'Videos',
        tags: ['Festival', 'Art', 'Culture'],
        views: 3800,
        date: '2025-09-05T16:00:00Z',
        description: 'A short film showcasing the intricate process of making a kullad, from sourcing the clay to the final firing, set against the vibrant backdrop of the festival.'
    },
    {
        id: 6,
        title: 'Chai, Culture, and Conversation',
        category: 'Blogs',
        tags: ['Chai', 'Lifestyle', 'Community'],
        views: 2100,
        date: '2025-09-12T12:00:00Z',
        description: 'Exploring the deep-rooted connection between chai served in kullads and the culture of community bonding in India.'
    }
];


// ICON MAPPING
const categoryIcons = {
    Books: <Book className="w-4 h-4" />,
    Blogs: <PenSquare className="w-4 h-4" />,
    'Case Studies': <FileText className="w-4 h-4" />,
    PDFs: <FileText className="w-4 h-4" />,
    Research: <FileText className="w-4 h-4" />,
    Videos: <Video className="w-4 h-4" />,
};
const categories = ['All', 'Books', 'Blogs', 'Case Studies', 'Research', 'Videos'];

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

    const particlesLoaded = (container) => console.log(container);

    const options = useMemo(() => ({
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: 'repulse' },
                resize: true,
            },
            modes: {
                repulse: { distance: 80, duration: 0.4 },
            },
        },
        particles: {
            color: { value: isDarkMode ? '#ffffff' : '#4f4f4f' },
            links: { color: isDarkMode ? '#ffffff' : '#4f4f4f', distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.2 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    }), [isDarkMode]);

    if (init) {
        return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
    }
    return null;
});

// MAIN COMPONENT
const KnowledgeHub = () => {
    const [content, setContent] = useState(initialContent);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('Newest');
    const [selectedItem, setSelectedItem] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode for neo-dark theme

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: acceptedFiles => {
            // In a real app, you would handle the file upload here,
            // perhaps adding a new content item to the state/database.
            console.log(acceptedFiles);
            alert(`${acceptedFiles.length} files dropped! Check the console.`);
        }
    });

    const filteredContent = useMemo(() => content
        .filter(item => (selectedCategory === 'All' || item.category === selectedCategory))
        .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            switch (sortOrder) {
                case 'Most Viewed': return b.views - a.views;
                case 'Popular': return (b.views / (Date.now() - new Date(b.date).getTime())) - (a.views / (Date.now() - new Date(a.date).getTime()));
                default: return new Date(b.date) - new Date(a.date);
            }
        }), [content, searchTerm, selectedCategory, sortOrder]);
    
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className="bg-gray-100 dark:bg-black min-h-screen transition-colors duration-500 font-sans text-gray-800 dark:text-gray-200">
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
            <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <ParticlesComponent isDarkMode={isDarkMode} />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400 dark:from-orange-300 dark:via-amber-400 dark:to-yellow-300"
                    style={{ textShadow: '0 0 15px rgba(255, 165, 0, 0.5)' }}
                >
                    Kullad Economy Fest
                </motion.h1>
            </header>

            <main className="container mx-auto p-4 sm:p-8 -mt-16 relative z-10">
                 {/* Filters and Search */}
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/30 dark:bg-gray-900/50 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/50 mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between"
                >
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search content..." onChange={e => setSearchTerm(e.target.value)} className="w-full py-2 pl-12 pr-4 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-amber-500 transition-colors" />
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <select onChange={e => setSelectedCategory(e.target.value)} className="py-2 px-4 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-amber-500">
                            {categories.map(cat => <option key={cat} className="dark:bg-gray-800">{cat}</option>)}
                        </select>
                        <select onChange={e => setSortOrder(e.target.value)} className="py-2 px-4 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-amber-500">
                            <option className="dark:bg-gray-800">Newest</option>
                            <option className="dark:bg-gray-800">Most Viewed</option>
                            <option className="dark:bg-gray-800">Popular</option>
                        </select>
                    </div>
                </motion.div>

                {/* File Uploader */}
                <motion.div 
                    {...getRootProps()}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`p-8 text-center cursor-pointer rounded-xl border-2 border-dashed transition-all duration-300 mb-8 ${isDragActive ? 'border-amber-500 bg-amber-500/10' : 'border-gray-400 dark:border-gray-600 hover:border-amber-400'}`}
                >
                    <input {...getInputProps()} />
                    <UploadCloud className="mx-auto text-gray-500 dark:text-gray-400 mb-2 h-8 w-8" />
                    <p>{isDragActive ? 'Drop the files here...' : "Drag 'n' drop files here, or click to select (Admin)"}</p>
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
                                transition={{ duration: 0.4, ease: 'backOut' }}
                                onClick={() => setSelectedItem(item)}
                                className="group relative cursor-pointer bg-white/10 dark:bg-gray-900/60 rounded-xl overflow-hidden shadow-lg border border-white/20 dark:border-gray-800/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: 'blur(20px)' }}></div>
                                <div className="relative p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-400/50">
                                            {categoryIcons[item.category]}
                                            <span>{item.category}</span>
                                        </div>
                                        <span className="text-xs text-gray-400">{new Date(item.date).toLocaleDateString()}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-400 transition-colors duration-300">{item.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map(tag => <span key={tag} className="text-xs bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-full">{tag}</span>)}
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
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
                        <div className="fixed inset-0 flex justify-end">
                            <Dialog.Panel as={motion.div}
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full max-w-md bg-gray-100 dark:bg-gray-900 shadow-2xl p-8 flex flex-col"
                            >
                                <div className="flex-grow space-y-6">
                                    <div className="flex items-center justify-between">
                                        <Dialog.Title className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">{selectedItem.title}</Dialog.Title>
                                        <button onClick={() => setSelectedItem(null)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"><X /></button>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">{selectedItem.description}</p>
                                    <div className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/50 w-fit">
                                        {categoryIcons[selectedItem.category]}
                                        <span>{selectedItem.category}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedItem.tags.map(tag => <span key={tag} className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">{tag}</span>)}
                                    </div>
                                </div>
                                <div className="flex-shrink-0 flex gap-4 mt-8">
                                    <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-lg shadow-amber-500/30"><Download size={20} /> Download</button>
                                    <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"><Eye size={20} /> Preview</button>
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