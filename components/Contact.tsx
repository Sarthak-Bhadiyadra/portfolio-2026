'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Copy, ExternalLink, Zap, Radio } from 'lucide-react';
import { portfolioData } from '../lib/data';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = portfolioData.personalInfo.email;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="contact"
            className=" bg-background relative overflow-hidden"
        >
            {/* Background glows */}
            <div className="light-leak top-[-10%] right-[-10%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-primary/10" />
            <div className="light-leak bottom-[-10%] left-[-10%] w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-secondary/10" />

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* LEFT SIDE — widened */}
                    <div className="lg:col-span-7 xl:col-span-6 flex flex-col gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex flex-col gap-8"
                        >
                            <div className="px-3 py-1 glass-hud rounded-md flex items-center gap-2 max-w-fit">
                                <Zap size={14} className="text-secondary glow-lime" />
                                <span className="hud-label !text-secondary">UPLINK_HUB</span>
                            </div>

                            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white leading-tight">
                                Let&apos;s
                                <span className="block sm:inline"><br /></span>
                                <span className="text-primary glow-violet italic">Connect.</span>
                            </h2>

                            <p className="text-base sm:text-lg md:text-xl text-white/40 leading-relaxed max-w-full sm:max-w-md">
                                Open for collaborations, architectural consultations, and full-stack opportunities.
                                <span className="text-white"> System response latency: &lt; 24h.</span>
                            </p>
                        </motion.div>

                        {/* Status Card */}
                        <div className="glass-hud p-5 sm:p-6 rounded-2xl flex items-center gap-4 sm:gap-6 max-w-full sm:max-w-xs group overflow-hidden relative mb-3">
                            <div className="absolute inset-0 bg-secondary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
                            <div className="relative w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                                <Radio size={20} className="text-secondary animate-pulse" />
                            </div>
                            <div className="relative flex flex-col">
                                <span className="hud-label !text-secondary !text-[8px]">
                                    CONNECTION_STATUS
                                </span>
                                <span className="text-white font-mono font-bold tracking-tight">
                                    ACTIVE_FOR_HIRE
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE — slightly narrower */}
                    <div className="lg:col-span-5 xl:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                         {/* Email Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="md:col-span-2 glass-hud p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col md:flex-row md:items-center justify-between gap-8 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                                    <Mail size={24} className="text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="hud-label !text-primary">
                                        DIRECT_PROTOCOL
                                    </span>
                                    <span className="text-lg sm:text-xl md:text-2xl text-white font-medium break-all sm:break-normal">
                                        {email}
                                    </span>
                                </div>
                            </div>

                            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-4">                               

                                <a
                                    href={`mailto:${email}`}
                                    className="px-6 py-4 bg-white text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary transition-all flex items-center justify-center gap-3"
                                >
                                    SEND_SIGNAL
                                    <ExternalLink size={12} />
                                </a>
                            </div>
                        </motion.div>

                        {/* LinkedIn */}
                        <motion.a
                            href={portfolioData.personalInfo.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glass-hud p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col gap-6 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[#0077b5]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700" />
                            <div className="relative flex items-center justify-between">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0077b5]/40 transition-colors">
                                    <Linkedin size={20} className="text-white/60 group-hover:text-[#0077b5] transition-colors" />
                                </div>
                                <ExternalLink size={14} className="text-white/20 group-hover:text-white transition-colors" />
                            </div>
                            <div className="relative flex flex-col gap-1">
                                <span className="hud-label">PROFESSIONAL_NETWORK</span>
                                <span className="text-2xl text-white font-bold tracking-tight">
                                    LinkedIn
                                </span>
                            </div>
                        </motion.a>

                        {/* GitHub */}
                        <motion.a
                            href={portfolioData.personalInfo.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-hud p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col gap-6 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700" />
                            <div className="relative flex items-center justify-between">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/40 transition-colors">
                                    <Github size={20} className="text-white/60 group-hover:text-white transition-colors" />
                                </div>
                                <ExternalLink size={14} className="text-white/20 group-hover:text-white transition-colors" />
                            </div>
                            <div className="relative flex flex-col gap-1">
                                <span className="hud-label">SOURCE_REPOSITORY</span>
                                <span className="text-2xl text-white font-bold tracking-tight">
                                    GitHub
                                </span>
                            </div>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
