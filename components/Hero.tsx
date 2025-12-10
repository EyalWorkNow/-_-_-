
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronDown, Zap, Activity, Cpu, Crosshair } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse Movement Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax
  const xSpring = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const ySpring = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize coordinates -1 to 1
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    
    mouseX.set(x * 20); // Tilt amount
    mouseY.set(y * 20);
  };

  const handleContact = () => {
    window.location.href = "mailto:eyalatiyawork@gmail.com?subject=TEVEL%20Strategic%20Partnership";
  };

  const scrollToLearnMore = () => {
      const element = document.getElementById('problem');
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  // Transforms for elements
  const rotateX = useTransform(ySpring, [20, -20], [10, -10]); // Inverted tilt
  const rotateY = useTransform(xSpring, [-20, 20], [-10, 10]);
  const contentX = useTransform(xSpring, [-20, 20], [10, -10]); // Parallax text
  const contentY = useTransform(ySpring, [-20, 20], [10, -10]);

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden perspective-[1000px]"
    >
      
      {/* Dynamic 3D Background Layer */}
      <motion.div 
        style={{ rotateX, rotateY }}
        className="absolute inset-0 pointer-events-none overflow-hidden transition-transform duration-100 ease-out will-change-transform"
      >
        {/* Top Arc Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-b from-tevel-electric/10 to-transparent rounded-full blur-[100px] opacity-60"></div>
        
        {/* Grid Floor Perspective */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[200vw] h-[100vh] opacity-30 [transform:perspective(1000px)_rotateX(60deg)]">
           <div className="w-full h-full grid-bg border-t border-tevel-green/20 animate-flow" style={{ backgroundSize: '80px 80px' }}></div>
        </div>
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        style={{ x: contentX, y: contentY }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          
          {/* Status Badge - Interactive */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#0A0C12]/60 backdrop-blur-md border border-white/10 mb-10 shadow-[0_0_30px_rgba(0,207,149,0.1)] group hover:border-tevel-green/50 hover:shadow-[0_0_30px_rgba(0,207,149,0.2)] transition-all cursor-crosshair select-none"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tevel-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tevel-green shadow-[0_0_10px_#00CF95]"></span>
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-tevel-green group-hover:animate-pulse">SYSTEM STATUS: DEVELOPMENT PHASE</span>
            <div className="w-px h-3 bg-white/10 mx-2"></div>
            <span className="text-xs font-mono text-slate-400">IEC PROPOSAL v2.0</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center mb-8 relative select-none"
          >
            {/* TEVEL LOGO */}
            <div className="relative mb-2 inline-block">
                 <span className="text-8xl md:text-9xl lg:text-[10rem] font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] relative z-10">
                    TEVEL
                 </span>
                 {/* Glitch Duplicates */}
                 <span className="absolute top-0 left-0 text-8xl md:text-9xl lg:text-[10rem] font-black text-tevel-green/20 tracking-tighter blur-[2px] animate-pulse pointer-events-none select-none">TEVEL</span>
            </div>

            {/* Sub Headline */}
            <span className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-400 tracking-wide mt-2 mb-4 font-sans">
              שכבת ההקשר התפעולי
            </span>

            {/* Main Hook */}
            <div className="relative py-2 px-8">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tevel-green/10 to-transparent blur-2xl rounded-full"></div>
               <span className="relative block text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-tevel-green via-white to-tevel-electric animate-flow pb-2 leading-tight" style={{ backgroundSize: '200% auto' }}>
                 לחבר את המידע לסיפור תפעולי אחד
               </span>
            </div>
          </motion.h1>

          {/* Description / Value Prop */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-14"
          >
             <div className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm max-w-4xl">
                <span className="text-lg md:text-xl text-slate-300 font-light text-center leading-relaxed">
                    אנחנו לא מבקשים להחליף את המערכות הקיימות, אלא לחבר ביניהן.
                    <br/>
                    TEVEL היא <span className="text-white font-bold">שכבת אינטגרציה</span> חכמה שקוראת נתונים ממקורות שונים כמו SCADA, CRM ויומני אירועים,
                    מבינה את הקשר ביניהם ומציגה למפעיל תמונה ברורה שמסבירה מה קורה עכשיו ולמה.
                </span>
             </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 relative z-20"
          >
            <button 
                onClick={handleContact}
                className="group relative px-10 py-5 bg-tevel-green text-tevel-base font-bold text-lg rounded-full overflow-hidden transition-all hover:bg-emerald-400 shadow-[0_0_40px_rgba(0,207,149,0.3)] hover:shadow-[0_0_60px_rgba(0,207,149,0.6)] border border-transparent hover:border-white/20 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] skew-x-12 group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                <Zap className="w-5 h-5 fill-current" />
                תיאום שיחת אפיון
              </span>
            </button>
            <button 
                onClick={scrollToLearnMore}
                className="px-10 py-5 bg-transparent border border-white/10 text-white font-semibold text-lg rounded-full hover:bg-white/5 hover:border-tevel-electric/50 transition-all backdrop-blur-sm flex items-center gap-3 group active:scale-95"
            >
              <span>איך זה עובד?</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform text-tevel-electric" />
            </button>
          </motion.div>

        </div>
      </motion.div>

      {/* "Reactor Core" Visualization - Now Interactive & 3D */}
      <motion.div 
        style={{ rotateX, rotateY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none -z-10 transition-transform duration-75 ease-out"
      >
         {/* Inner Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-tevel-green/10 rounded-full blur-[80px]"></div>
         
         {/* Rotating Rings (Orbits) with varying speeds and tilt */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full animate-spin-slow shadow-[0_0_50px_rgba(0,207,149,0.1)]">
             <div className="absolute -top-1 left-1/2 w-3 h-3 bg-tevel-green rounded-full shadow-[0_0_20px_#00CF95]"></div>
         </div>
         
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-dashed border-white/5 rounded-full animate-spin-reverse-slow">
              <div className="absolute bottom-1/4 right-[10%] w-2 h-2 bg-tevel-electric rounded-full shadow-[0_0_15px_#3B82F6]"></div>
         </div>
         
         {/* Central Core Pulsing */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-black border border-tevel-green/30 rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(0,207,149,0.2)]">
             <div className="w-[140px] h-[140px] rounded-full border border-dashed border-tevel-green/50 animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute inset-0 bg-tevel-green/10 rounded-full animate-pulse-fast"></div>
         </div>

         {/* Electric Arcs (SVG) */}
         <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 1200">
             <motion.circle 
                cx="600" cy="600" r="350" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="1" 
                strokeOpacity="0.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
             {/* Random connecting lines */}
             <motion.line x1="600" y1="600" x2="800" y2="300" stroke="#00CF95" strokeWidth="1" strokeOpacity="0.2" />
             <motion.line x1="600" y1="600" x2="400" y2="900" stroke="#00CF95" strokeWidth="1" strokeOpacity="0.2" />
         </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
