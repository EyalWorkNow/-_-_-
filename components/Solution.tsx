
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, History, GitPullRequest, Filter, Search, Activity, Radio, Workflow, Database } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-32 relative overflow-hidden bg-[#080A0E]">
      
      {/* Circuit Board Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-circuit-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      
      {/* Animated Traces */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
        <motion.path 
            d="M 0 400 H 100 V 200 H 300"
            fill="none"
            stroke="#00CF95"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
            d="M 100% 600 H 80% V 800 H 60%"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block mb-4"
          >
             <div className="flex items-center gap-2 justify-center text-tevel-green font-bold tracking-widest uppercase text-xs border border-tevel-green/30 bg-tevel-green/5 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,207,149,0.15)] group cursor-default">
                <div className="w-2 h-2 bg-tevel-green rounded-full animate-pulse"></div>
                <span>🧠 THE AI CONTEXT ENGINE</span>
                <Radio size={12} className="text-tevel-green group-hover:animate-ping opacity-70" />
             </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            הפתרון של TEVEL: <span className="text-transparent bg-clip-text bg-gradient-to-r from-tevel-green to-tevel-electric drop-shadow-[0_0_10px_rgba(0,207,149,0.3)]">The AI Context Engine</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed"
          >
            TEVEL היא ה-Cognitive OS שהופכת דאטה גולמית למידע קוהרנטי. שכבת תוכנה קוגניטיבית הממוצבת מעל תשתיות הדאטה הקיימות.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Core Module - Dynamic Context Matching */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 lg:col-span-8 row-span-2 bg-[#0C0F14] rounded-3xl border border-white/5 relative overflow-hidden group transition-all duration-500 hover:border-tevel-green/20 hover:shadow-[0_0_50px_rgba(0,207,149,0.1)] flex flex-col"
          >
            {/* Hover Laser Scan Effect */}
            <div className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-tevel-green to-transparent opacity-0 group-hover:opacity-50 group-hover:animate-scan-fast pointer-events-none z-20"></div>

            {/* Header Bar */}
            <div className="w-full h-10 border-b border-white/5 bg-[#05070A]/50 flex items-center justify-between px-6 backdrop-blur-sm z-10">
                <span className="text-[10px] text-tevel-green font-mono uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-tevel-green rounded-full animate-pulse"></span>
                    DYNAMIC_CONTEXT_MATCHING.EXE
                </span>
            </div>

            <div className="p-10 relative flex-1 flex flex-col justify-between z-10">
                {/* Background Core Glow */}
                <div className="absolute right-[-10%] top-[-10%] w-[60%] h-[100%] bg-tevel-green/5 blur-3xl rounded-full pointer-events-none group-hover:bg-tevel-green/10 transition-colors duration-700"></div>
                
                <div className="absolute bottom-10 left-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                    <Brain size={250} strokeWidth={0.5} />
                </div>
                
                <div className="relative">
                    <div className="w-14 h-14 bg-[#0B0D11] border border-tevel-green/30 rounded-2xl flex items-center justify-center text-tevel-green mb-6 shadow-[0_0_20px_rgba(0,207,149,0.1)] group-hover:shadow-[0_0_30px_rgba(0,207,149,0.2)] transition-shadow group-hover:scale-110 duration-300">
                        <GitPullRequest size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-tevel-green transition-colors">Dynamic Context Matching (הייחוד שלנו)</h3>
                    <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
                    כל פיסת מידע מנותחת בהקשר רחב, והמערכת קובעת באופן אוטונומי אם היא משלימה את ההבנה, מחזקת פרשנות קיימת או מייצרת מסלול חקירה חדש.                    </p>
                </div>
                
                {/* Data Flow Visualization */}
                <div className="mt-10">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">
                        <Activity size={12} className="text-tevel-green animate-pulse" />
                        Scoring Active Hypotheses
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Hypothesis_A: 98%', 'Hypothesis_B: 12%', 'New_Anomaly_Detected'].map((tag, i) => (
                            <span key={tag} className="px-3 py-1.5 bg-[#05070A] rounded border border-white/5 text-slate-300 font-mono text-[10px] flex items-center gap-2 hover:border-tevel-green/30 hover:text-tevel-green transition-colors cursor-default group/tag">
                                <span className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-tevel-green' : 'bg-slate-600'} group-hover/tag:bg-tevel-green group-hover/tag:animate-ping`}></span>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Module: Universal Normalization */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="md:col-span-6 lg:col-span-4 bg-[#0C0F14] rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors group relative overflow-hidden flex flex-col"
          >
              <div className="w-full h-8 border-b border-white/5 bg-[#05070A]/30 flex items-center px-4 justify-between">
                  <span className="text-[9px] text-blue-400 font-mono tracking-wider">UNIVERSAL_NORMALIZATION</span>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div className="p-8 flex-1">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="w-10 h-10 bg-[#0B0D11] rounded-lg flex items-center justify-center text-blue-400 mb-4 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Database size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">נורמליזציה אוניברסלית</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                  המערכת מאחדת נתונים מפוזרים — טקסט, לוגים, מדידות וידאו — לכדי מודל אחד שמדבר באותה שפה, כך שניתן סוף-סוף לראות את התמונה המלאה.                  </p>
              </div>
          </motion.div>

          {/* Module: Narrative Guidance */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:col-span-3 lg:col-span-4 bg-[#0C0F14] rounded-3xl border border-white/5 hover:border-purple-500/30 transition-colors group relative overflow-hidden flex flex-col"
          >
               <div className="w-full h-8 border-b border-white/5 bg-[#05070A]/30 flex items-center px-4 justify-between">
                  <span className="text-[9px] text-purple-400 font-mono tracking-wider">NARRATIVE_GUIDANCE</span>
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
              <div className="p-8 flex-1">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-10 h-10 bg-[#0B0D11] rounded-lg flex items-center justify-center text-purple-400 mb-4 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Workflow size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">הכוונה נרטיבית</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                      המנוע מסנתז את המידע המעודכן, מציג את "הסיפור המעודכן", ומייצר המלצות חקירתיות: "הקונטקסט השתנה, יש לבדוק לוגים של משאבה Y".
                  </p>
              </div>
          </motion.div>

          {/* Module: Organizational Memory */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:col-span-3 lg:col-span-4 bg-[#0C0F14] rounded-3xl border border-white/5 hover:border-orange-500/30 transition-colors group relative overflow-hidden flex flex-col"
          >
               <div className="w-full h-8 border-b border-white/5 bg-[#05070A]/30 flex items-center px-4 justify-between">
                  <span className="text-[9px] text-orange-400 font-mono tracking-wider">ORGANIZATIONAL_MEMORY</span>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="p-8 flex-1">
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="w-10 h-10 bg-[#0B0D11] rounded-lg flex items-center justify-center text-orange-400 mb-4 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <History size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">זיכרון ארגוני חי</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                      חיבור בין אירועי עבר לידע הווה. מניעת מצב שבו בעיות שנפתרו בעבר נותרות "חדשות" ומבזבזות זמן יקר בפתרון מחדש.
                  </p>
              </div>
          </motion.div>

           {/* Module: Gap Detection */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="md:col-span-6 lg:col-span-8 bg-[#0C0F14] rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors group flex items-center justify-between relative overflow-hidden px-8 py-6"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10 flex items-center gap-6">
                <div className="w-12 h-12 bg-[#0B0D11] rounded-xl flex items-center justify-center text-red-400 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Search size={24} />
                </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-3">
                        זיהוי חורים בנרטיב
                    </h3>
                    <p className="text-slate-400 text-sm">המערכת מזהה אוטומטית מה חסר בסיפור ושואלת: "מה החור שנותר בנרטיב כדי להבין את התמונה המלאה?"</p>
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Solution;
