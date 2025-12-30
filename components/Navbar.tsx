'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../lib/data';
import { Shield, Box, Zap, MessageSquare } from 'lucide-react';
import { useParams, usePathname } from 'next/navigation';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {};
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Skills', href: '#skills', icon: <Zap size={14} /> },
        { name: 'Experience', href: '#experience', icon: <Shield size={14} /> },
        { name: 'Projects', href: '#projects', icon: <Box size={14} /> },
        { name: 'Contact', href: '#contact', icon: <MessageSquare size={14} /> },
    ];
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateHash = () => {
            setActiveSection(window.location.hash || "");
        };

        // Set initial value
        updateHash();

        // Listen for hash changes
        window.addEventListener("hashchange", updateHash);

        return () => {
            window.removeEventListener("hashchange", updateHash);
        };
    }, []);

    return (
        <nav className="fixed top-8 left-0 w-full z-50 px-6 pointer-events-none">
            <motion.div 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="max-w-fit mx-auto glass-hud rounded-full px-4 sm:px-8 py-2 sm:py-3 pointer-events-auto flex items-center gap-4 sm:gap-10"
            >
                {/* Logo / System ID */}
                <a href="#home" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 group-hover:scale-110 transition-transform">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    </div>
                    <span className="hud-label group-hover:text-white transition-colors">
                        {portfolioData.personalInfo.name.split(' ')[0].toUpperCase()}
                    </span>
                </a>

                {/* Separator */}
                <div className="w-[1px] h-6 bg-white/10" />

                {/* Nav Links */}
                <div className="flex items-center gap-4 sm:gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-secondary transition-all group ${activeSection === link.href ? '!text-secondary' : ''}`}
                        >
                            <span className={`text-white/20 group-hover:text-secondary glow-lime transition-colors ${activeSection === link.href ? '!text-secondary' : ''}`}>
                                {link.icon}
                            </span>
                            <span className="hidden md:block">{link.name}</span>
                        </a>
                    ))}
                </div>

                {/* Status Indicator */}
                <div className="hidden xl:flex items-center gap-3 pl-4 border-l border-white/10">
                    <div className="flex flex-col items-end">
                        <span className="hud-label !text-[8px] !tracking-wider truncate">AVAILABLITY</span>
                        <div className="flex gap-1 mt-1">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-2 h-1 ${i < 4 ? 'bg-secondary glow-lime' : 'bg-white/10'}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
