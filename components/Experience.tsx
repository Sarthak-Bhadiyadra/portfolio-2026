'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../lib/data';
import { Shield } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className=" bg-background relative overflow-hidden">
             {/* Background glow leaks */}
            <div className="light-leak top-0 left-[-10%] w-[800px] h-[800px] bg-primary/5" />
            <div className="light-leak bottom-0 right-[-10%] w-[600px] h-[600px] bg-secondary/5" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                <div className="flex flex-col gap-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4"
                    >
                        <div className="px-3 py-1 glass-hud rounded-md flex items-center gap-2">
                            <Shield size={14} className="text-primary glow-violet" />
                            <span className="hud-label !text-primary">PROFESSIONAL_ROADMAP</span>
                        </div>
                        <div className="h-[1px] w-24 bg-white/10" />
                    </motion.div>
                    
                    <h2 className="text-7xl md:text-9xl text-white">
                        Career <br /> <span className="text-secondary glow-lime italic">Evolution.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-32">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 group"
                        >
                            {/* Milestone Marker */}
                            <div className="lg:col-span-1 flex flex-col items-center">
                                <div className="w-16 h-16 rounded-2xl glass-hud flex items-center justify-center border-primary/40 group-hover:border-primary transition-all duration-500 relative">
                                    <span className="text-xs font-mono text-primary font-bold">0{index + 1}</span>
                                    {index !== portfolioData.experience.length - 1 && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-primary/40 to-transparent" />
                                    )}
                                </div>
                            </div>

                            {/* Experience Card */}
                            <div className="lg:col-span-11 relative">
                                <div className="glass-hud p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] overflow-hidden group-hover:bg-white/[0.02] transition-all duration-700">
                                    {/* Duration float */}
                                    <div className="absolute top-6 sm:top-10 right-6 sm:right-10 flex flex-col items-end gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                                        <span className="hud-label !text-[8px] sm:text-[10px]">{exp.duration}</span>
                                        <div className="h-[2px] w-8 sm:w-12 bg-secondary/50 glow-lime" />
                                    </div>

                                    <div className="max-w-3xl">
                                        <h3 className="text-xl sm:text-4xl md:text-6xl text-white mb-4 leading-none group-hover:text-primary transition-colors">
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg sm:text-2xl font-medium text-primary/60 mb-6 sm:mb-10">{exp.company}</p>
                                        
                                        <p className="text-white/40 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-2xl">
                                            {exp.description}
                                        </p>

                                        {/* Dynamic "Tech Intensity" Bar */}
                                        <div className="flex flex-col gap-4 mb-12 max-w-sm">
                                            <div className="flex items-center justify-between hud-label !text-[8px]">
                                                <span>ROLE_INTENSITY</span>
                                                <span className="text-secondary">92%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '92%' }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className="h-full bg-secondary glow-lime" 
                                                />
                                            </div>
                                        </div>

                                        {/* Status Chip */}
                                        <div className="flex items-center gap-6">
                                            <div className="px-4 py-2 glass-hud rounded-lg flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary glow-violet animate-pulse" />
                                                <span className="hud-label !text-primary truncate">VERIFIED_CONTRIBUTOR</span>
                                            </div>
                                            <div className="h-[1px] flex-1 bg-white/5" />
                                        </div>
                                    </div>

                                    {/* Bottom Scanline effect */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
