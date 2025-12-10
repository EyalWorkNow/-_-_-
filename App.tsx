
// Static Application - No API Key Required
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import UseCases from './components/UseCases';
import ValueProp from './components/ValueProp';
import PocPlan from './components/PocPlan';
import Footer from './components/Footer';

interface Spark {
  id: number;
  top: number;
  left: number;
  size: number;
  rotation: number;
}

export default function App() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  // Effect to randomly generate sparks
  useEffect(() => {
    const interval = setInterval(() => {
      const newSpark: Spark = {
        id: Date.now(),
        top: Math.random() * 90 + 5,
        left: Math.random() * 90 + 5,
        size: Math.random() * 100 + 50,
        rotation: Math.random() * 360
      };
      
      setSparks(prev => [...prev.slice(-4), newSpark]); // Keep only last 5 sparks
    }, 2000); // New spark every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-tevel-base text-tevel-text font-sans selection:bg-tevel-green selection:text-tevel-base overflow-x-hidden">
      
      {/* Dynamic Grid Background (The "Grid") */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        {/* Voltage Lines - Main Grid Power */}
        <div className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tevel-electric/10 to-transparent blur-[1px]"></div>
        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tevel-green/10 to-transparent blur-[1px]"></div>
        <div className="absolute left-[15%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-tevel-electric/10 to-transparent blur-[1px]"></div>
        <div className="absolute right-[15%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-tevel-voltage/5 to-transparent blur-[1px]"></div>
      </div>

      {/* Global Sparks Overlay */}
      <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
        {sparks.map((spark) => (
            <div 
                key={spark.id}
                className="absolute animate-spark-flash opacity-0"
                style={{ 
                    top: `${spark.top}%`, 
                    left: `${spark.left}%`,
                    '--rot': `${spark.rotation}deg`
                } as React.CSSProperties}
            >
               {/* SVG Lightning Bolt */}
               <svg width={spark.size} height={spark.size} viewBox="0 0 100 100" fill="none" stroke="rgba(0, 207, 149, 0.4)" strokeWidth="2" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 8px #00CF95)' }}>
                   <path d="M50 0 L 30 50 L 60 50 L 40 100" />
               </svg>
            </div>
        ))}
      </div>

      {/* Static / Hum Effect Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      
      {/* Vignette */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,10,0.9)_100%)]"></div>

      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-0">
          <Hero />
          <Problem />
          <Solution />
          <UseCases />
          <ValueProp />
          <PocPlan />
        </main>
        <Footer />
      </div>
    </div>
  );
}