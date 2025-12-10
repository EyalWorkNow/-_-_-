
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Unplug, AlertOctagon, ZapOff, XCircle, BarChart3, RefreshCw } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-32 relative bg-[#05070A] overflow-hidden">
      
      {/* Dynamic Background - Red Alert Mode */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tevel-danger to-transparent opacity-50 shadow-[0_0_20px_#EF4444] animate-scanline"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.03),transparent_70%)]"></div>
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-tevel-danger/10"></div>
         <div className="absolute left-1/2 top-0 h-full w-[1px] bg-tevel-danger/10"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-[#1A0505] border border-tevel-danger/30 text-tevel-danger px-6 py-2 rounded-full text-sm font-mono font-bold mb-8 relative overflow-hidden group shadow-[0_0_15px_rgba(239,68,68,0.2)]"
            >
                <div className="absolute inset-0 bg-tevel-danger/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                <div className="w-2 h-2 rounded-full bg-tevel-danger animate-pulse"></div>
                <BarChart3 size={14} className="animate-pulse" />
                <span className="tracking-widest">GRID DIAGNOSTIC // INTEGRATION CHALLENGES</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight tracking-tight">
                אתגר האינטגרציה: <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-200 to-slate-500 relative inline-block group">
                  <span className="absolute inset-0 animate-glitch opacity-0 group-hover:opacity-100 text-tevel-danger mix-blend-overlay">נתק מערכתי</span>
                  נתק מערכתי
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-tevel-danger/50 shadow-[0_0_10px_#EF4444]"></span>
                </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
               מערכות הליבה מייצרות כמויות עצומות של נתונים, אך העדר סנכרון מלא ביניהן יוצר "איי מידע" ומקשה על גיבוש תמונת מצב אחודה בזמן אמת.
            </p>
        </div>

        {/* Cards Grid - Deconstructed Dashboard Look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
           
           {/* Card 1: Data Silos */}
           <ProblemCard 
              delay={0.1}
              icon={Database}
              id="ERR_01"
              title="ביזור מערכות מידע"
              subtitle="Decentralization"
              description="ריבוי פלטפורמות שונות כמו SCADA, לוגים ו-IoT שאינן מדברות בשפה אחידה, מה שמקשה על הצלבת נתונים מהירה וניתוח רוחבי."
              stat="5+"
              statLabel="מערכות נפרדות"
              visual={
                <div className="flex justify-between items-end h-12 w-full gap-1 mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    <div className="w-full bg-slate-700 h-[40%] rounded-sm group-hover:h-[60%] transition-all duration-300"></div>
                    <div className="w-full bg-slate-700 h-[80%] rounded-sm group-hover:h-[50%] transition-all duration-300 delay-75"></div>
                    <div className="w-full bg-tevel-danger h-[20%] rounded-sm animate-pulse group-hover:h-[90%] transition-all duration-300 delay-100"></div>
                    <div className="w-full bg-slate-700 h-[60%] rounded-sm group-hover:h-[30%] transition-all duration-300 delay-150"></div>
                </div>
              }
           />

           {/* Card 2: Knowledge Erosion */}
           <ProblemCard 
              delay={0.2}
              icon={ZapOff}
              id="ERR_02"
              title="שחיקת ידע תפעולי"
              subtitle="Knowledge Erosion"
              description="תלות גבוהה בגורם האנושי ואיבוד תובנות קריטיות בין משמרות. הידע נשאר אצל המפעיל ולא הופך לחלק מהזיכרון הארגוני של המערכת."
              stat="High"
              statLabel="תלות בגורם אנושי"
              visual={
                <div className="flex flex-col gap-2 mt-4 w-full opacity-70 group-hover:opacity-100 transition-opacity">
                    <div className="h-1 w-full bg-slate-700 rounded-full"></div>
                    <div className="h-1 w-[40%] bg-tevel-danger rounded-full animate-pulse group-hover:w-[90%] transition-all duration-500"></div>
                    <div className="h-1 w-[70%] bg-slate-700 rounded-full"></div>
                </div>
              }
           />

           {/* Card 3: Cognitive Overload */}
           <ProblemCard 
              delay={0.3}
              icon={AlertOctagon}
              id="ERR_03"
              title="עומס קוגניטיבי"
              subtitle="Cognitive Overload"
              description="הצפת המוקד באלפי התראות, שרבות מהן הן התראות סרק, מה שמקשה על המוקדנים לבודד את אירועי השורש ולטפל בבעיה האמיתית."
              stat="CRITICAL"
              statLabel="יחס אות לרעש"
              visual={
                 <div className="mt-4 flex items-center justify-center gap-1 w-full opacity-80">
                    {[...Array(10)].map((_,i) => (
                        <div key={i} className={`w-1 bg-tevel-danger rounded-sm animate-flicker`} style={{ height: Math.random() * 20 + 10 + 'px', animationDelay: Math.random() + 's' }}></div>
                    ))}
                 </div>
              }
           />

           {/* Card 4: Lack of Sync */}
           <ProblemCard 
              delay={0.4}
              icon={Unplug}
              id="ERR_04"
              title="העדר תמונת מצב"
              subtitle="Lack of Integrated View"
              description="קושי לחבר באופן לוגי ומהיר בין דיווחי שטח, נתוני SCADA וקריאות מוקד 103 לכדי אירוע מערכתי אחד ברור ופעיל."
              stat="N/A"
              statLabel="סנכרון חלקי"
              visual={
                <div className="mt-4 w-full h-12 border border-dashed border-slate-600 rounded flex items-center justify-center group-hover:border-tevel-danger/50 transition-colors">
                    <div className="relative">
                        <XCircle className="text-tevel-danger animate-ping absolute opacity-50" size={16} />
                        <XCircle className="text-tevel-danger relative" size={16} />
                    </div>
                </div>
              }
           />

        </div>
      </div>
    </section>
  );
};

interface ProblemCardProps {
    delay: number;
    icon: React.ElementType;
    id: string;
    title: string;
    subtitle: string;
    description: string;
    stat: string;
    statLabel: string;
    visual: React.ReactNode;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ delay, icon: Icon, id, title, subtitle, description, stat, statLabel, visual }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="group relative h-full"
        >
            {/* Holographic Card Container */}
            <div className="h-full bg-[#0A0C10]/80 backdrop-blur-sm border border-white/5 p-1 rounded-2xl overflow-hidden transition-all duration-300 hover:border-tevel-danger/40 hover:bg-[#0F0505]/90 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] hover:-translate-y-1">
                
                {/* Header Strip */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5 rounded-t-xl group-hover:bg-tevel-danger/10 group-hover:border-tevel-danger/20 transition-colors">
                    <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-tevel-danger animate-pulse"></div>
                         <span className="font-mono text-[10px] text-tevel-danger/80 tracking-widest">{id}</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1 group-hover:text-tevel-danger transition-colors">
                        <RefreshCw size={10} className="group-hover:animate-spin" />
                        {subtitle}
                    </div>
                </div>

                <div className="p-6 relative">
                    {/* Background Glitch Texture */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    
                    {/* Icon */}
                    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#05070A] border border-white/10 text-slate-400 group-hover:text-tevel-danger group-hover:border-tevel-danger/30 transition-all shadow-lg group-hover:scale-110 duration-300">
                        <Icon size={24} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tevel-danger transition-colors">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-tevel-danger/30 transition-colors min-h-[80px]">
                        {description}
                    </p>

                    {/* Fake Data Viz */}
                    <div className="mt-6 pt-6 border-t border-white/5">
                         <div className="flex justify-between items-end mb-2">
                             <span className="text-[10px] font-mono text-slate-500 uppercase">{statLabel}</span>
                             <span className="text-xl font-mono font-bold text-white group-hover:text-tevel-danger">{stat}</span>
                         </div>
                         {visual}
                    </div>
                </div>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-tevel-danger transition-colors duration-300 rounded-tl-lg"></div>
            <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-tevel-danger transition-colors duration-300 rounded-br-lg"></div>
        </motion.div>
    );
}

export default Problem;
