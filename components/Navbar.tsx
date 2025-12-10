import React, { useState, useEffect } from 'react';
import { Menu, X, Asterisk, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      // The CSS scroll-padding-top in index.html handles the offset, 
      // but we can add extra logic here if needed.
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleContact = () => {
    window.location.href = "mailto:eyalatiyawork@gmail.com?subject=TEVEL%20Design%20Partnership%20Inquiry";
  };

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="relative w-full max-w-5xl pointer-events-auto">
            {/* The Floating Pill */}
            <nav className={`relative w-full transition-all duration-300 ${scrolled ? 'bg-[#0A0C10]/90 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]' : 'bg-[#0A0C10]/60'} backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 md:px-6 md:py-3 flex justify-between items-center z-50 overflow-hidden group`}>

                {/* Ambient Glows */}
                <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-tevel-green/60 to-transparent shadow-[0_0_15px_#00CF95] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Electric Arcs on Hover */}
                <div className="absolute inset-0 rounded-full border border-white/5 group-hover:border-tevel-green/20 transition-colors duration-500"></div>

                {/* Logo */}
                <a href="#" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 px-2 group/logo relative z-10">
                    <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-tevel-green/10 rounded-full group-hover/logo:bg-tevel-green/20 transition-colors border border-white/5 group-hover/logo:border-tevel-green/30">
                        <Asterisk className="w-5 h-5 md:w-6 md:h-6 text-tevel-green animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-0 bg-tevel-green/20 rounded-full blur-md opacity-0 group-hover/logo:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-xl md:text-2xl font-bold tracking-wider font-sans text-white group-hover/logo:text-tevel-green transition-colors">TEVEL</span>
                </a>

                {/* Desktop Links - Inner Pill */}
                <div className="hidden md:flex items-center gap-1 bg-black/20 rounded-full px-2 py-1 border border-white/5 backdrop-blur-md">
                  {['האתגר', 'הפתרון', 'שימושים'].map((item, i) => {
                      const ids = ['#problem', '#solution', '#use-cases'];
                      return (
                          <a 
                            key={item} 
                            href={ids[i]} 
                            onClick={(e) => scrollToSection(e, ids[i])}
                            className="px-6 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all relative overflow-hidden group/link"
                          >
                              <span className="relative z-10">{item}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-500"></div>
                          </a>
                      )
                  })}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4 relative z-10">
                     <button 
                        onClick={handleContact}
                        className="bg-tevel-green text-tevel-base font-bold py-2.5 px-6 rounded-full hover:bg-emerald-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,207,149,0.2)] hover:shadow-[0_0_30px_rgba(0,207,149,0.5)] flex items-center gap-2 text-sm border border-transparent hover:border-white/20"
                     >
                        <Zap size={16} className="fill-current" />
                        תיאום פגישה
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-300 p-3 rounded-full hover:bg-white/10 transition-colors relative z-10"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu Dropdown (Detached) */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 mt-3 bg-[#0C0E12]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-2 flex flex-col gap-1 shadow-2xl overflow-hidden z-40 mx-2"
                    >
                        <div className="p-4 space-y-2">
                          <a href="#problem" onClick={(e) => scrollToSection(e, '#problem')} className="block px-4 py-3 text-center text-slate-300 hover:text-white hover:bg-white/5 rounded-2xl transition-colors border border-transparent hover:border-white/5">האתגר</a>
                          <a href="#solution" onClick={(e) => scrollToSection(e, '#solution')} className="block px-4 py-3 text-center text-slate-300 hover:text-white hover:bg-white/5 rounded-2xl transition-colors border border-transparent hover:border-white/5">הפתרון</a>
                          <a href="#use-cases" onClick={(e) => scrollToSection(e, '#use-cases')} className="block px-4 py-3 text-center text-slate-300 hover:text-white hover:bg-white/5 rounded-2xl transition-colors border border-transparent hover:border-white/5">שימושים</a>
                        </div>
                        <div className="p-2 bg-black/20 rounded-b-3xl">
                           <button 
                                onClick={handleContact}
                                className="w-full bg-tevel-green text-tevel-base font-bold py-4 rounded-2xl shadow-[0_0_15px_rgba(0,207,149,0.2)]"
                           >
                              תיאום פגישה
                           </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;