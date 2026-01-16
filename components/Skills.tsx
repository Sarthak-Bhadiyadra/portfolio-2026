'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../lib/data';
import { Cpu, Database, Cloud, Layout, Terminal, Zap } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        { title: 'Frontend', items: portfolioData.skills.frontend, icon: <Layout size={18} /> },
        { title: 'Backend', items: portfolioData.skills.backend, icon: <Cpu size={18} /> },
        { title: 'Database', items: portfolioData.skills.database, icon: <Database size={18} /> },
        { title: 'Cloud', items: portfolioData.skills.cloud, icon: <Cloud size={18} /> },
        { title: 'CRM', items: portfolioData.skills.crm, icon: <Terminal size={18} /> },
        { title: 'Tools', items: portfolioData.skills.tools, icon: <Zap size={18} /> },
    ];

    return (
        <section id="skills" className="py-40 bg-background relative overflow-hidden">
             {/* Background glow leas */}
            <div className="light-leak  left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10" />

            <div className="max-w-7xl mx-auto px-6">
                
                <div className="flex flex-col gap-6 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4"
                    >
                        <div className="px-3 py-1 glass-hud rounded-md flex items-center gap-2">
                            <Cpu size={14} className="text-secondary glow-lime" />
                            <span className="hud-label !text-secondary">TECH_STACK_CONFIG</span>
                        </div>
                    </motion.div>
                    
                    <h2 className="text-5xl sm:text-7xl md:text-9xl text-white">
                        Tech <br /> <span className="text-primary glow-violet italic">Ecosystem.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-hud p-6 sm:p-10 rounded-[2rem] group hover:border-primary/40 transition-all flex flex-col gap-8 relative overflow-hidden"
                        >
                            {/* Category Header */}
                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                                        {category.title}
                                    </h3>
                                </div>
                                <span className="hud-label !text-white/20">0{index + 1}</span>
                            </div>

                            {/* Skills List */}
                            <div className="flex flex-wrap gap-3 relative z-10">
                                {category.items.map((skill, i) => (
                                    <div 
                                        key={i}
                                        className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-sm font-mono text-white/40 group-hover:text-white group-hover:border-white/10 transition-all flex items-center gap-2"
                                    >
                                        <div className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {skill}
                                    </div>
                                ))}
                            </div>

                            {/* Background decorative elements */}
                            <div className="absolute -bottom-10 -right-10 text-9xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-primary/5 transition-colors">
                                {category.title.charAt(0)}
                            </div>
                            
                            {/* Bottom Pulse Bar */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                            <motion.div 
                                animate={{ x: ['100%', '-100%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-primary blur-sm"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
