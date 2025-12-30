'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../lib/data';
import Image from 'next/image';
import { Terminal, Cpu, Activity, Globe } from 'lucide-react';

const Hero = () => {
    const { name, title, description, careerStartDate } = portfolioData.personalInfo;

    const calculateExperience = (startDateStr: string) => {
        const start = new Date(startDateStr);
        const now = new Date();
        const diffMs = now.getTime() - start.getTime();
        const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
        return years.toFixed(1);
    };

    const expYears = calculateExperience(careerStartDate);

    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 overflow-hidden bg-background">
            {/* Background elements */}
            <div className="light-leak top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20" />
            <div className="light-leak bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-secondary/10" />
            <div className="scanline-overlay" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center relative z-10">
                
                {/* Left Side: Text & HUD */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="px-3 py-1 glass-hud rounded-md flex items-center gap-2">
                                <Terminal size={12} className="text-secondary" />
                                <span className="hud-label !text-secondary">ENVIRONMENT_ACTIVE</span>
                            </div>
                            <div className="h-[1px] w-20 bg-white/10" />
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] mb-4 leading-[0.9] tracking-tighter">
                            <span className="block text-white">{name.split(' ')[0]}</span>
                            <span className="block text-primary glow-violet italic">{name.split(' ').slice(1).join(' ')}.</span>
                        </h1>

                        <p className="max-w-lg text-lg text-white/40 font-medium leading-relaxed mb-10">
                            {description}
                        </p>

                        <div className="flex items-center gap-6">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 sm:px-10 py-4 sm:py-5 bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] rounded-sm hover:bg-secondary transition-all"
                            >
                                Access_Portfolio
                            </motion.a>
                            <a href="#contact" className="hud-label text-white/60 hover:text-white transition-colors">CONTACT_ME</a>
                        </div>
                    </motion.div>

                    {/* Technical HUD Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        {[
                            { label: 'EXPERIENCE', val: `${expYears}+ YRS`, icon: <Activity size={12} /> },
                            { label: 'PROJECTS', val: '6+ LIVE', icon: <Globe size={12} /> },
                            { label: 'STACK', val: 'MERN', icon: <Cpu size={12} /> },
                            { label: 'PING', val: '24ms', icon: <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> }
                        ].map((stat, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="glass-hud p-4 rounded-lg flex flex-col gap-2"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="hud-label !text-[12px]">{stat.label}</span>
                                    <span className="text-white/20">{stat.icon}</span>
                                </div>
                                <span className="text-sm font-bold text-white font-mono">{stat.val}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Image & Holographic Mask */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-5 relative flex justify-center lg:justify-end mt-20 lg:mt-0"
                >
                    <div className="relative w-full max-w-md aspect-[4/5] group animate-float-hud">
                        {/* Image Container with Geometric Mask */}
                        <div className="absolute inset-0 z-10 glass-hud border-white/20 overflow-hidden rounded-[2rem] transform rotate-3 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-1000">
                            <Image 
                                src="/test.png" 
                                alt={name}
                                fill
                                priority
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            {/* Inner Scanned Overlay */}
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-30" />
                        </div>

                        {/* Floating Decorative HUD circles */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 border border-secondary/20 rounded-full animate-spin-slow" />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-primary/20 rounded-full animate-pulse" />
                        
                        {/* Status Label Overlay */}
                        <div className="absolute top-1/2 -right-12 z-20 bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-xl hidden xl:block shadow-2xl">
                            <div className="flex flex-col gap-4">
                                <span className="hud-label !text-secondary">ENGINEER_ID: web developer</span>
                                <div className="h-[1px] w-full bg-white/5" />
                                <span className="text-xs font-mono text-white/60">STACK_PROFICIENCY: FULL STACK</span>
                                <span className="text-xs font-mono text-white/60">CLASS: {title.toUpperCase()}</span>
                                <span className="text-xs font-mono text-white/60">AVAILABILITY: [OPEN]</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
