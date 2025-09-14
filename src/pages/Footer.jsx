import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Youtube, Send, ArrowUp } from 'lucide-react';
// 1. Import the Link component from react-router-dom
import { Link } from 'react-router-dom';

// Custom SVG Icon for Kullad
const KulladIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 20h14" />
        <path d="M6.5 14c0-2.2 1.8-4 4-4h3c2.2 0 4 1.8 4 4v6H6.5v-6Z" />
        <path d="M8 10V8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2" />
    </svg>
);

// Custom SVG Icon for Diya
const DiyaIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9z" />
        <path d="M12 14a2 2 0 0 1-2-2c0-1.1.9-2 2-2s2 .9 2 2a2 2 0 0 1-2 2z" />
        <path d="M12 4v2" />
    </svg>
);


// Floating Symbol Component
const FloatingSymbol = ({ children, duration, delay, position }) => (
    <motion.div
        className="absolute z-0 text-amber-500/20"
        style={position}
        animate={{ y: [0, -10, 0] }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
    >
        {children}
    </motion.div>
);

// Back to Top Button Component
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-amber-600 to-orange-700 text-white shadow-lg shadow-amber-500/30`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <ArrowUp size={24} />
        </motion.button>
    );
};

// Main Footer Component
const CulturalFooter = () => {
    // 2. Updated navLinks to an array of objects for better mapping
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Schedule", path: "/schedule" },
        { name: "Content", path: "/content" }, // Assuming you will have an /events route 
    ];

    const socialLinks = [
        { Icon: Instagram, href: '#' },
        { Icon: Linkedin, href: '#' },
        { Icon: Twitter, href: '#' },
        { Icon: Youtube, href: '#' }
    ];

    return (
        <>
            <footer className="relative bg-[#26170F] dark:bg-black text-white py-12 px-8 overflow-hidden border-t-4 border-amber-600">
                {/* Floating Background Symbols */}
                <FloatingSymbol duration={10} delay={0} position={{ top: '10%', left: '5%' }}><DiyaIcon className="w-24 h-24" /></FloatingSymbol>
                <FloatingSymbol duration={12} delay={2} position={{ top: '50%', right: '10%' }}><KulladIcon className="w-20 h-20" /></FloatingSymbol>
                <FloatingSymbol duration={15} delay={4} position={{ bottom: '15%', left: '20%' }}><DiyaIcon className="w-16 h-16" /></FloatingSymbol>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {/* Branding Section */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500" style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.4)' }}>
                            KEF 2025
                        </h2>
                        <p className="text-gray-300">Celebrating India’s Culture & Innovation.</p>
                        <p className="font-semibold text-amber-200">भारत की संस्कृति, युवाओं का उत्सव</p>
                    </div>

                    {/* Quick Navigation Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-amber-400">Quick Links</h3>
                        <ul className="space-y-2">
                            {/* 3. Replaced <a> with <Link> and used the 'to' prop */}
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="hover:text-amber-400 transition-colors duration-300 hover:pl-2">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-amber-400">Stay Connected</h3>
                        <p className="text-gray-300">Join our community for the latest updates.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full py-2 px-4 bg-gray-800/50 border border-amber-800 rounded-l-lg focus:outline-none focus:border-amber-500"
                            />
                            <motion.button
                                type="submit"
                                className="bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 rounded-r-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Send size={20} />
                            </motion.button>
                        </form>
                    </div>

                    {/* Social Media Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-amber-400">Follow Us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map(({ Icon, href }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    target="_blank" // Opens social links in a new tab
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800/50 rounded-full border border-amber-800"
                                    whileHover={{
                                        scale: 1.2,
                                        boxShadow: '0 0 15px rgba(251, 191, 36, 0.6)',
                                        color: '#FBBF24'
                                    }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center text-gray-400 mt-12 pt-8 border-t border-amber-900/50 relative z-10">
                    <p>&copy; {new Date().getFullYear()} Kullad Economy Fest. All Rights Reserved.</p>
                </div>
            </footer>
            <BackToTopButton />
        </>
    );
};

export default CulturalFooter;