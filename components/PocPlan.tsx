import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Database, FileText, ArrowLeftRight, Handshake, Zap, Power } from 'lucide-react';

const steps = [
  { icon: Crosshair, text: "בחירת תרחיש", sub: "תקלה חוזרת בקו X" },
  { icon: Database, text: "חיבור דאטה", sub: "SCADA ולוגים" },
  { icon: FileText, text: "בניית \"סיפור\"", sub: "ניתוח אוטומטי" },
  { icon: ArrowLeftRight, text: "מדידת ערך", sub: "לפני / אחרי" },
  { icon: Handshake, text: "Partnership", sub: "יציאה לדרך" }
];

const PocPlan: React.FC = () => {
  const handleContact = () => {
    window.location.href = "mailto:eyalatiyawork@gmail.com?subject=TEVEL%20POC%20Partnership";
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#05070A] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
             <div className="inline-flex items-center gap-2 bg-tevel-green/5 text-tevel-green px-4 py-1.5 rounded-sm mb-6 border border-tevel-green/20">
                 <Power size={16} />
                 <span className="font-mono text-sm font-bold tracking-widest uppercase">Initializing POC Protocol</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">POC קצר וממוקד</h2>
             <p className="text-slate-400 text-xl">סגירת מעגל מהירה להוכחת ערך</p>
        </div>

        {/* Timeline Visualization - Circuit Breakers */}
        <div className="relative">
             
             {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-[50px] left-0 right-0 h-1 bg-[#1a1d24] rounded-full overflow-hidden">
                <motion.div 
                    className="absolute top-0 right-0 h-full w-full bg-gradient-to-l from-tevel-green via-tevel-electric to-transparent"
                    initial={{ x: '100%' }}
                    whileInView={{ x: '0%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                ></motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex flex-col items-center text-center group"
                    >
                        {/* Switch Node */}
                        <div className="w-24 h-24 rounded-xl bg-[#0B0D11] border border-white/10 flex items-center justify-center relative mb-6 group-hover:border-tevel-green transition-all duration-300 shadow-xl">
                            {/* Inner Light */}
                            <div className="absolute inset-0 bg-tevel-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            
                            <div className="w-16 h-16 rounded-lg bg-[#151921] border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-tevel-green group-hover:scale-110 transition-all duration-300 z-10">
                                <step.icon size={28} />
                            </div>
                            
                            {/* Status LED */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-slate-800 border border-slate-600 group-hover:bg-tevel-green group-hover:border-tevel-green group-hover:shadow-[0_0_10px_#00CF95] transition-all duration-500"></div>

                            {/* Step Number */}
                            <div className="absolute -bottom-3 w-8 h-8 bg-[#05070A] border border-white/10 rounded flex items-center justify-center text-xs font-mono font-bold text-slate-500 group-hover:text-tevel-green group-hover:border-tevel-green transition-colors z-20">
                                0{index + 1}
                            </div>
                        </div>

                        {/* Text */}
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tevel-green transition-colors">{step.text}</h3>
                        <p className="text-slate-500 text-sm">{step.sub}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center bg-gradient-to-b from-[#0F1218] to-[#05070A] rounded-2xl p-12 max-w-4xl mx-auto border border-white/5 relative overflow-hidden group"
        >
             {/* Background glow on hover */}
             <div className="absolute inset-0 bg-tevel-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             <h3 className="text-2xl font-bold text-white mb-8 relative z-10">מוכנים לחבר את הרשת?</h3>
             
             <button 
                onClick={handleContact}
                className="relative z-10 bg-tevel-green text-tevel-base font-bold text-xl py-5 px-16 rounded-sm hover:bg-emerald-400 shadow-[0_0_30px_rgba(0,207,149,0.3)] hover:shadow-[0_0_60px_rgba(0,207,149,0.6)] transition-all transform hover:-translate-y-1 flex items-center gap-3 mx-auto group-hover:scale-105 duration-300"
             >
                <Zap className="fill-current animate-pulse" />
                בואו נצא לדרך
             </button>
             <p className="mt-6 text-slate-500 text-sm relative z-10 font-mono">NO_RISK_ASSESSMENT // TIME_BOUND_POC</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PocPlan;