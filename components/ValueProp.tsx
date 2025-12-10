import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Zap, Clock, Users, Rocket, Key, ArrowLeft } from 'lucide-react';

const values = [
  { text: "מערכת שנבנית לפי הצרכים שלכם (Tailor Made)", icon: Zap, id: "01" },
  { text: "זיכרון תפעולי שלא תלוי באנשים ומשמר ידע", icon: Users, id: "02" },
  { text: "חיסכון בזמן חקירה וחיבור בין מערכות", icon: Clock, id: "03" },
  { text: "שכבת בינה שתשרת אתכם שנים קדימה", icon: Rocket, id: "04" },
  { text: "תנאי רישוי וקדימות בפיצ’רים לשותף ראשון", icon: Key, id: "05" }
];

const ValueProp: React.FC = () => {
  return (
    <section className="py-32 bg-[#12141a] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 text-right"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              למה לכם להיות <br/>
              <span className="text-tevel-green relative inline-block">
                Design Partner?
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-tevel-green opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              זו לא סתם רכישת תוכנה, זו הזדמנות לעצב את הדור הבא של ניהול תשתיות קריטיות ולקבל מוצר שתפור בדיוק למידות של חברת החשמל.
            </p>
            
            <div className="w-full h-80 bg-[#1a1d24] border border-white/5 rounded-3xl relative overflow-hidden flex items-center justify-center group hover:border-tevel-green/30 transition-all duration-500 shadow-2xl">
                 <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                 {/* Decorative connecting line */}
                 <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-tevel-green to-transparent opacity-50"></div>
                 
                 <div className="flex items-center gap-8 z-10">
                    <div className="flex flex-col items-center">
                         <div className="w-24 h-24 bg-[#151921] rounded-full flex items-center justify-center text-slate-200 text-2xl font-bold border border-white/10 shadow-lg z-10 relative">
                            IEC
                            <div className="absolute inset-0 rounded-full border border-white/5 animate-[ping_3s_infinite]"></div>
                         </div>
                         <div className="mt-4 text-[10px] tracking-[0.2em] text-slate-500 font-bold uppercase">Strategic Partner</div>
                    </div>
                    
                    <div className="w-10 h-10 bg-tevel-green rounded-full flex items-center justify-center text-black font-bold animate-pulse shadow-[0_0_20px_#00CF95] z-20">
                        <ArrowLeft size={20} className="rotate-180" />
                    </div>
                    
                    <div className="flex flex-col items-center">
                         <div className="w-24 h-24 bg-tevel-green/5 rounded-full flex items-center justify-center text-tevel-green text-2xl font-bold border border-tevel-green/30 shadow-[0_0_40px_rgba(0,207,149,0.15)] z-10 relative">
                            TEVEL
                            <div className="absolute inset-0 rounded-full border border-tevel-green/20 animate-[ping_3s_infinite_1.5s]"></div>
                         </div>
                         <div className="mt-4 text-[10px] tracking-[0.2em] text-tevel-green font-bold uppercase">Technology Core</div>
                    </div>
                 </div>
            </div>
          </motion.div>

          <div className="lg:w-7/12 w-full">
             <div className="grid sm:grid-cols-2 gap-5">
              {values.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${index === values.length - 1 ? 'sm:col-span-2' : ''} relative p-6 rounded-2xl bg-[#15181e] border border-white/5 hover:border-tevel-green/40 hover:bg-[#1a1e26] transition-all duration-300 group overflow-hidden`}
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-tevel-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-[#0e1014] border border-white/5 flex items-center justify-center text-tevel-green shrink-0 group-hover:scale-110 group-hover:bg-tevel-green group-hover:text-black transition-all duration-300">
                        <item.icon size={20} />
                      </div>
                      <div>
                          <span className="text-xs text-slate-500 font-mono mb-1 block">VAL_{item.id}</span>
                          <span className="text-lg text-slate-200 font-medium leading-snug group-hover:text-white transition-colors">{item.text}</span>
                      </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProp;