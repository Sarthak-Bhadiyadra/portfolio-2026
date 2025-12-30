'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../lib/data';
import { ArrowUpRight, Hexagon, Code, Layers } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-40 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header HUD Style */}
                <div className="flex flex-col gap-6 mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-4"
                    >
                        <div className="px-3 py-1 glass-hud rounded-md flex items-center gap-2">
                            <Layers size={14} className="text-primary glow-violet" />
                            <span className="hud-label !text-primary">PROJECT_REPOSITORY_v2.0</span>
                        </div>
                        <div className="h-[1px] flex-grow bg-white/5" />
                    </motion.div>
                    
                    <h2 className="text-5xl sm:text-7xl md:text-9xl text-white">
                        Selected <br /> <span className="text-secondary glow-lime italic">Deployments.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Background Neon Leak */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className="relative glass-hud p-6 sm:p-10 md:p-14 rounded-[2rem] flex flex-col gap-8 h-full">
                                {/* Top Meta Line */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Hexagon size={16} className="text-primary animate-pulse" />
                                        <span className="hud-label !text-white/40">BUILD_0{index + 1}</span>
                                    </div>
                                    <span className="hud-label !text-secondary opacity-0 group-hover:opacity-100 transition-opacity">SOURCE_ACCESS</span>
                                </div>

                                {/* Project Title */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-none group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/40 text-md leading-relaxed max-w-sm">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Decorative HUD bar */}
                                <div className="w-full h-8 glass-hud rounded bg-white/5 overflow-hidden flex items-center px-1">
                                    <div className="h-4 bg-primary/40 group-hover:bg-primary transition-all duration-1000" style={{ width: `${60 + (index * 10)}%` }} />
                                </div>

                                {/* Tech Specs Grid */}
                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {project.technologies.map((tech, i) => (
                                        <div 
                                            key={i}
                                            className="px-3 py-1.5 border border-white/5 rounded text-[9px] font-mono text-white/30 uppercase tracking-widest group-hover:border-secondary/30 group-hover:text-white transition-all"
                                        >
                                            <span className="text-secondary mr-2">/</span>
                                            {tech}
                                        </div>
                                    ))}
                                </div>

                                {/* Actions */}
                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full glass-hud flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"
                                    >
                                        <ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
                                    </a>
                                )}
                                
                                <div className="absolute top-1/2 -left-4 w-1 h-20 bg-primary/20 rounded-full group-hover:bg-primary group-hover:h-32 transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Sync */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 flex justify-center"
                >
                    <a href={portfolioData.personalInfo.socialLinks.github} target="_blank" className="px-8 sm:px-12 py-4 sm:py-6 glass-hud rounded-full flex items-center gap-4 group">
                        <Code size={18} className="text-secondary" />
                        <span className="hud-label !text-white group-hover:text-secondary transition-colors text-[9px] sm:text-[10px]">EXPLORE_SOURCE_CONTROL</span>
                        <div className="w-4 sm:w-8 h-[1px] bg-white/10 group-hover:w-20 group-hover:bg-secondary transition-all" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
