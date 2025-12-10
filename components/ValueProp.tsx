
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Network, ShieldCheck, ArrowLeft, TrendingUp } from 'lucide-react';

const values = [
  { 
    title: "יצירת קטגוריה חדשה",
    text: "TEVEL מוסיפה יכולת שלא קיימת במערכות תפעוליות: הבנה רציפה של הקשר ובניית תמונת מצב חיה שמחברת בין אירועים.", 
    icon: Target,
    id: "CATEGORY_CREATION"
  },
  { 
    title: "חוסן טכנולוגי",
    text: "המנוע של TEVEL יודע לפרש מגוון רחב של נתונים ולבנות מהם מבנה משמעותי ועקבי, שמאפשר התמצאות מהירה והבנה אמינה.", 
    icon: Network,
    id: "DEFENSIBILITY"
  },
  { 
    title: "בידול מהותי בשוק",
    text: "TEVEL הופכת מידע מפוזר לסיפור ברור ומעודכן, שמבליט תובנות ודפוסים מתפתחים ומאפשר תגובה מדויקת בזמן אמת.", 
    icon: ShieldCheck,
    id: "COMPETITIVE_EDGE"
  },
  { 
    title: "שוק רחב והזדמנות",
    text: "ארגוני תשתית, ביטחון, אנרגיה וחקירה זקוקים ליכולת להבין קשר בין אירועים. TEVEL נותנת מענה ישיר לצורך הולך וגדל זה.", 
    icon: TrendingUp,
    id: "MARKET_OPPORTUNITY"
  }
];


const ValueProp: React.FC = () => {
  return (
    <section className="py-32 bg-[#12141a] border-t border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tevel-green/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 text-right"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
               <Users size={12} className="text-tevel-green" />
               STRATEGIC CALL TO ACTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              שותפות אסטרטגית <br/>
              <span className="text-tevel-green relative inline-block">
                והשקעה בחדשנות
              </span>
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed font-light">
               TEVEL מחפשת שותפים אסטרטגיים כדי להטמיע את הטכנולוגיה בסביבה תפעולית קריטית ולהבטיח יתרון תחרותי.
            </p>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">
              אנו מזמינים אתכם לבחון השקעה אסטרטגית שתבטיח לכם גישה בלעדית ראשונית לטכנולוגיית ה-Context Engine, הטמעה אקסקלוסיבית ומיצוב כמובילי חדשנות.
            </p>
            
            <div className="w-full h-80 bg-[#1a1d24] border border-white/5 rounded-3xl relative overflow-hidden flex items-center justify-center group hover:border-tevel-green/30 transition-all duration-500 shadow-2xl">
                 <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                 {/* Decorative connecting line */}
                 <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-tevel-green to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 <div className="flex items-center gap-8 z-10">
                    <div className="flex flex-col items-center">
                         <div className="w-24 h-24 bg-[#151921] rounded-full flex items-center justify-center text-slate-200 text-2xl font-bold border border-white/10 shadow-lg z-10 relative group-hover:scale-110 transition-transform duration-500">
                            Partner
                            <div className="absolute inset-0 rounded-full border border-white/5 animate-[ping_3s_infinite]"></div>
                         </div>
                         <div className="mt-4 text-[10px] tracking-[0.2em] text-slate-500 font-bold uppercase">Enterprise</div>
                    </div>
                    
                    <div className="w-10 h-10 bg-tevel-green rounded-full flex items-center justify-center text-black font-bold animate-pulse shadow-[0_0_20px_#00CF95] z-20">
                        <ArrowLeft size={20} className="rotate-180" />
                    </div>
                    
                    <div className="flex flex-col items-center">
                         <div className="w-24 h-24 bg-tevel-green/5 rounded-full flex items-center justify-center text-tevel-green text-2xl font-bold border border-tevel-green/30 shadow-[0_0_40px_rgba(0,207,149,0.15)] z-10 relative group-hover:scale-110 transition-transform duration-500">
                            TEVEL
                            <div className="absolute inset-0 rounded-full border border-tevel-green/20 animate-[ping_3s_infinite_1.5s]"></div>
                         </div>
                         <div className="mt-4 text-[10px] tracking-[0.2em] text-tevel-green font-bold uppercase">Cognitive OS</div>
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
                  className="relative p-6 rounded-2xl bg-[#15181e] border border-white/5 hover:border-tevel-green/40 hover:bg-[#1a1e26] transition-all duration-300 group overflow-hidden hover:-translate-y-1"
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-tevel-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-[#0e1014] border border-white/5 flex items-center justify-center text-tevel-green shrink-0 group-hover:scale-110 group-hover:bg-tevel-green group-hover:text-black transition-all duration-300 group-hover:rotate-[-12deg]">
                        <item.icon size={20} />
                      </div>
                      <div>
                          <span className="text-xs text-slate-500 font-mono mb-2 block">{item.id}</span>
                          <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                          <span className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.text}</span>
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
