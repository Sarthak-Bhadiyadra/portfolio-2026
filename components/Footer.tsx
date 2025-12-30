import { portfolioData } from '../lib/data';

const Footer = () => {
    return (
        <footer className="py-20 bg-background border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
                
                <div className="flex flex-col gap-2">
                    <span className="hud-label !text-white/40">
                        {portfolioData.personalInfo.name.toUpperCase()} {" // "} FULL_STACK_DEV
                    </span>
                    <p className="hud-label !text-[8px] !text-white/10">
                        © {new Date().getFullYear()} ENGINEERED_WITH_NEXT_JS_&_FRAMER_MOTION.
                    </p>
                </div>

                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-4 px-4 py-2 glass-hud rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary glow-lime animate-pulse" />
                        <span className="hud-label !text-secondary !tracking-widest">SIGNAL_STABLE</span>
                    </div>
                    <div className="w-[1px] h-4 bg-white/5" />
                    <span className="hud-label !text-white/10">v.1.0.0-ALPHA-NODES</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
