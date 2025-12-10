import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, CloudLightning, Map, ArrowRight, AlertTriangle, CheckCircle2, Zap, FileWarning, Terminal, Database, Activity, GitCommit } from 'lucide-react';

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-32 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
      
      {/* Background High Voltage Cable Visualization */}
      <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#1a1d24] hidden md:block z-0">
        <motion.div 
            className="absolute left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-tevel-green to-transparent blur-[2px] opacity-60"
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-24 text-center">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-tevel-electric/10 border border-tevel-electric/20 text-tevel-electric text-xs font-mono mb-6"
           >
              <Activity size={12} className="animate-pulse" />
              LIVE GRID SCENARIOS
           </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">תרחישים מבצעיים</h2>
          <p className="text-xl text-slate-400 font-light flex items-center justify-center gap-2 max-w-2xl mx-auto">
             הפער בין מה שיש לכם היום לבין מה ש-TEVEL מספקת
          </p>
        </div>

        <div className="space-y-32">
            
            {/* Case 1: Recurring Faults */}
            <UseCaseCard 
                alignment="left"
                icon={RefreshCw}
                title="תקלות חוזרות (The Phantom Fault)"
                scenario="חורף | קו מתח גבוה 161 | אירוע 3 בחודש"
                id="INC_4092_RECURRING"
                color="tevel-electric"
                dataSources={['SCADA_HIST', 'MAINTENANCE_LOGS', 'WEATHER_API']}
                problem={{
                    title: "היום: זיכרון קצר",
                    desc: "המוקדן רואה 'תקלה חדשה'. הוא לא יודע שלפני שבועיים היה דיווח דומה, ושבכל פעם שיורד גשם המבודד הספצי הזה נפרץ.",
                    alert: "New Fault Detected"
                }}
                solution={{
                    title: "TEVEL: זיהוי דפוס",
                    desc: "המערכת מזהה מיידית: זהו האירוע השלישי באותו מיקום תחת תנאי לחות זהים. המלצה: החלפת מבודד ולא רק איפוס.",
                    result: "Root Cause Identified"
                }}
            />

            {/* Case 2: Storm Overload */}
            <UseCaseCard 
                alignment="right"
                icon={CloudLightning}
                title="עומס סערה (Alarm Flood)"
                scenario="סופה דרגה 3 | 500+ התראות בדקה"
                id="INC_5501_STORM"
                color="tevel-voltage"
                dataSources={['SCADA_RT', 'GIS_MAPS', 'CRM_CALLS']}
                problem={{
                    title: "היום: עיוורון מבצעי",
                    desc: "המסכים נצבעים באדום. 400 התראות על 'מתח נמוך' ועוד 100 על 'קצר'. המוקדן לא יכול להבין מה גרם למה ואיפה להתחיל.",
                    alert: "System Overload: 542 Alerts"
                }}
                solution={{
                    title: "TEVEL: הקבצה חכמה",
                    desc: "המערכת מקפלת 500 התראות ל-3 אירועי-על: 'שנאי ראשי בתחמ״ש צפון נפל'. כל השאר הן רק תוצאות. התמונה מתבהרת ברגע.",
                    result: "3 Critical Events Isolated"
                }}
            />

            {/* Case 3: Cascading Event */}
            <UseCaseCard 
                alignment="left"
                icon={Map}
                title="אירוע מתגלגל (Cascading Failure)"
                scenario="תחנת משנה A -> קו B -> תחנה C"
                id="INC_6602_CASCADE"
                color="tevel-green"
                dataSources={['GRID_TOPOLOGY', 'PROTECTION_RELAYS', 'SENSOR_IOT']}
                problem={{
                    title: "היום: חקירה בדיעבד",
                    desc: "שרשרת של נפילות. לוקח שעות להבין: איפה זה התחיל? מה גרם למה? הצוותים רודפים אחרי הזנב של האירוע.",
                    alert: "Multi-Site Trip Sequence"
                }}
                solution={{
                    title: "TEVEL: ציר-זמן סיבתי",
                    desc: "בנייה אוטומטית של גראף האירוע: מקור (תחנה A) -> התפשטות (קו B). המלצה מיידית: בידוד אזור C למניעת המשך קריסה.",
                    result: "Propagation Path Mapped"
                }}
            />

        </div>
      </div>
    </section>
  );
};

interface UseCaseCardProps {
    alignment: 'left' | 'right';
    icon: React.ElementType;
    title: string;
    scenario: string;
    id: string;
    color: string;
    dataSources: string[];
    problem: { title: string, desc: string, alert: string };
    solution: { title: string, desc: string, result: string };
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ alignment, icon: Icon, title, scenario, id, color, dataSources, problem, solution }) => {
    
    // Color mapping for dynamic styles
    const colorClasses: Record<string, string> = {
        'tevel-green': 'text-tevel-green border-tevel-green shadow-[#00CF95]',
        'tevel-electric': 'text-tevel-electric border-tevel-electric shadow-[#3B82F6]',
        'tevel-voltage': 'text-tevel-voltage border-tevel-voltage shadow-[#FACC15]',
    };
    
    const borderColor = colorClasses[color]?.split(' ')[1] || 'border-white';
    const textColor = colorClasses[color]?.split(' ')[0] || 'text-white';
    const shadowColor = colorClasses[color]?.split(' ')[2] || 'shadow-white';

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col ${alignment === 'right' ? 'md:items-end' : 'md:items-start'}`}
        >
            {/* Connection Node to Main Line */}
            <div className={`hidden md:flex absolute top-12 ${alignment === 'right' ? 'left-1/2 -translate-x-[18px]' : 'left-1/2 -translate-x-[14px]'} items-center z-20`}>
                 <div className={`w-3 h-3 rounded-full bg-[#05070A] border-2 ${borderColor} ${shadowColor} shadow-[0_0_15px]`}></div>
                 <div className={`h-[1px] w-16 bg-gradient-to-r ${alignment === 'right' ? 'from-transparent to-white/20' : 'from-white/20 to-transparent'}`}></div>
            </div>

            <div className={`w-full md:w-[90%] lg:w-[85%] relative group perspective-1000 ${alignment === 'right' ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                
                {/* Main Card Container */}
                <div className="bg-[#0A0C10] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl relative">
                    
                    {/* Header Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white/5 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-[#05070A] border border-white/10 ${textColor}`}>
                                <Icon size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white leading-none">{title}</h3>
                                <span className="text-xs text-slate-500 font-mono mt-1 block">{scenario}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                             <span className="px-2 py-1 rounded bg-black border border-white/10 text-[10px] font-mono text-slate-400">{id}</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/5">
                        
                        {/* LEFT: THE PROBLEM (CHAOS) */}
                        <div className="md:w-1/2 p-8 relative overflow-hidden">
                             {/* Background Noise */}
                             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                             <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-tevel-danger/0 via-tevel-danger/20 to-tevel-danger/0"></div>
                             
                             <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4 text-tevel-danger">
                                    <AlertTriangle size={18} />
                                    <span className="font-bold text-sm tracking-widest uppercase">Current State (Chaos)</span>
                                </div>
                                <h4 className="text-xl font-bold text-slate-200 mb-3">{problem.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {problem.desc}
                                </p>
                                
                                {/* Visual Alert Box */}
                                <div className="bg-tevel-danger/5 border border-tevel-danger/20 rounded p-3 flex items-center justify-between">
                                    <span className="text-xs font-mono text-tevel-danger animate-pulse">⚠ {problem.alert}</span>
                                    <div className="flex gap-0.5">
                                        {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-tevel-danger/40 rounded-sm"></div>)}
                                    </div>
                                </div>
                             </div>
                        </div>

                        {/* CENTER: TRANSFORMATION ARROW (Mobile only, or overlay) */}
                        <div className="md:hidden flex justify-center -my-3 relative z-10">
                            <div className="bg-[#0A0C10] border border-white/10 rounded-full p-2 text-slate-500">
                                <ArrowRight className="rotate-90" size={16} />
                            </div>
                        </div>

                        {/* RIGHT: THE SOLUTION (TEVEL) */}
                        <div className="md:w-1/2 p-8 relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                             <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-tevel-green/20 to-transparent"></div>
                             
                             <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4 text-tevel-green">
                                    <Database size={18} />
                                    <span className="font-bold text-sm tracking-widest uppercase">TEVEL Context Engine</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{solution.title}</h4>
                                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                    {solution.desc}
                                </p>

                                {/* Success Result Box */}
                                <div className={`bg-black/40 border ${borderColor} border-opacity-30 rounded p-3 flex items-center justify-between shadow-[0_0_15px_-5px] ${shadowColor}`}>
                                    <span className={`text-xs font-mono font-bold ${textColor} flex items-center gap-2`}>
                                        <CheckCircle2 size={12} />
                                        {solution.result}
                                    </span>
                                </div>
                                
                                {/* Data Sources Tags */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {dataSources.map(ds => (
                                        <span key={ds} className="text-[9px] font-mono px-2 py-1 rounded bg-[#05070A] border border-white/10 text-slate-500 flex items-center gap-1">
                                            <GitCommit size={8} /> {ds}
                                        </span>
                                    ))}
                                </div>
                             </div>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default UseCases;