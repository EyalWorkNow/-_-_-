
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    RefreshCw, CloudLightning, Map, AlertTriangle, CheckCircle2, X, 
    Activity, Database, FileSearch, Zap, Sun, Thermometer, Binary, 
    Cpu, ChevronLeft, ChevronRight, BarChart3, ScanLine 
} from 'lucide-react';

// Data Structure for Scenarios
const scenarios = [
    {
        id: "INC_4092",
        code: "PREVENTIVE",
        icon: RefreshCw,
        title: "ניהול תקלות חוזרות",
        subtitle: "מניעה בקווי מתח עליון",
        color: "tevel-electric",
        stats: { type: "RECURRING", risk: "HIGH", stability: 45 },
        fullDetails: {
            context: "קו 161 ק״ו חווה טריפים רגעיים (Transient Faults) במהלך חודשי החורף. הצוותים בשטח לא מוצאים נזק פיזי וסוגרים את האירוע כ״לא נמצא ממצא״.",
            dataSources: ['SCADA_HISTORY', 'MAINTENANCE_LOGS', 'WEATHER_DATA'],
            problem: {
                title: "האתגר: שחיקת ידע ו״עיוורון״ היסטורי",
                desc: "מכיוון שהתקלות קורות במשמרות שונות, המוקדן רואה רק את האירוע הנוכחי. אין חיבור אוטומטי שמראה שזו הפעם החמישית בחודש שהקו נופל בדיוק ב-80% לחות.",
                alert: "UNIDENTIFIED RECURRING PATTERN"
            },
            solution: {
                title: "הפתרון: קורלציה רב-ממדית",
                desc: "TEVEL סורקת אחורה שנתיים של נתונים, מזהה את הדפוס החוזר, ומצליבה אותו עם נתוני מזג אוויר היסטוריים. המערכת מתריעה: ״סבירות גבוהה לכשל בידוד עקב לחות״ ושולחת צוות לניקוי מבודדים לפני כשל קבוע.",
                impact: "מניעת השבתה של קו קריטי וחיסכון בשעות צוות."
            }
        }
    },
    {
        id: "INC_5501",
        code: "LOAD_MGMT",
        icon: CloudLightning,
        title: "ניהול רשת בסופה",
        subtitle: "התמודדות עם הצפת התראות",
        color: "tevel-voltage",
        stats: { type: "EXTREME", risk: "CRITICAL", stability: 12 },
        fullDetails: {
            context: "בזמן סופה דרגה 3, מתקבלות במוקד 4,000 התראות בדקה. חלקן מגיעות מציוד קצה, חלקן מדיווחי 103, וחלקן מקצרים רגעיים.",
            dataSources: ['SCADA_RT', 'GIS_TOPOLOGY', 'OMS_CALLS'],
            problem: {
                title: "האתגר: עומס קוגניטיבי קיצוני",
                desc: "המסכים נצבעים באדום. המוקדנים לא מסוגלים להבדיל בין שנאי שנשרף לבין סנסור שמשדר שגיאה בגלל רוח. הזמן לאיתור מוקד התקלה עולה משמעותית.",
                alert: "CRITICAL ALARM FLOODING"
            },
            solution: {
                title: "הפתרון: מנוע איחוד התראות (Clustering)",
                desc: "TEVEL משתמשת בטופולוגית הרשת כדי להבין ש-500 ההתראות האחרונות נובעות כולן מנפילה של קו הזנה ראשי אחד. היא מסננת את הרעש ומציגה למפעיל אירוע בודד: ״נפילת הזנה בתחמ״ש צפון״.",
                impact: "קיצור זמן התגובה (MTTR) ב-40% ושיפור תמונת המצב."
            }
        }
    },
    {
        id: "INC_6602",
        code: "CASCADE",
        icon: Map,
        title: "ניתוח כשל מתגלגל",
        subtitle: "הבנת התפשטות אירועים",
        color: "tevel-green",
        stats: { type: "TOPOLOGY", risk: "SYSTEMIC", stability: 30 },
        fullDetails: {
            context: "תקלה בשנאי גוררת עומס יתר על קו מקביל, שגורם להפעלה של הגנות במרחק 20 ק״מ משם. האירוע נראה כמו מספר תקלות נפרדות.",
            dataSources: ['PROTECTION_RELAYS', 'GRID_MODEL', 'PMU_DATA'],
            problem: {
                title: "האתגר: חוסר הבנה של וקטור ההתפשטות",
                desc: "המפעיל מנסה לטפל בסימפטומים (הקווים שנופלים) במקום במקור הבעיה. קיים סיכון ממשי ל-Blackout אזורי עקב טיפול שגוי.",
                alert: "UNKNOWN PROPAGATION VECTOR"
            },
            solution: {
                title: "הפתרון: ניתוח טופולוגי דינמי",
                desc: "המערכת בונה גרף של האירוע בזמן אמת, מסמנת את ״חולה 0״ (המקור) וממליצה על פעולת בידוד (Islanding) כירורגית שתעצור את ההתפשטות בלי להפיל את כל האזור.",
                impact: "מניעת קריסה רחבה ושמירה על יציבות הרשת."
            }
        }
    },
    {
        id: "INC_7021",
        code: "DER_STABILITY",
        icon: Sun,
        title: "אינטגרציית מתחדשות",
        subtitle: "ניהול תנודות מתח בייצור",
        color: "tevel-voltage",
        stats: { type: "RENEWABLES", risk: "MEDIUM", stability: 60 },
        fullDetails: {
            context: "שכונה חדשה עם 80% חדירת פאנלים סולאריים (PV). מעבר עננים מהיר גורם לנפילה של 5MW בייצור תוך שניות, ויוצר הבהובי מתח (Flicker).",
            dataSources: ['SMART_METERS', 'SOLAR_FORECAST', 'DMS_GRID'],
            problem: {
                title: "האתגר: חוסר יציבות דינמי",
                desc: "מערכות הניהול הקלאסיות מגיבות לאט מדי לשינוי. המתח ברשת יורד מתחת לתקן, והגנות של ממירים קופצות, מה שמחמיר את הנפילה.",
                alert: "VOLTAGE SAG DETECTED"
            },
            solution: {
                title: "הפתרון: חיזוי מיקרו-אקלימי",
                desc: "TEVEL משלבת תחזית עננות ברזולוציה גבוהה עם נתוני המונים החכמים. היא מזהה את הנפילה הצפויה 5 דקות מראש ומנחה אוטומטית את השנאים (OLTC) לשנות דרגה או להפעיל סוללות אגירה.",
                impact: "שמירה על איכות חשמל (Power Quality) ומניעת ניתוקי ממירים."
            }
        }
    },
    {
        id: "INC_8810",
        code: "CYBER_PHYS",
        icon: Binary,
        title: "אנומליה פיזיקלית",
        subtitle: "זיהוי חשד למניפולציית מידע",
        color: "tevel-electric",
        stats: { type: "SECURITY", risk: "CRITICAL", stability: 8 },
        fullDetails: {
            context: "מערכת ה-SCADA מדווחת שקו ראשי עמוס ב-120% ועומד להישרף, אך המתח בקצות הקו נשאר תקין לחלוטין.",
            dataSources: ['SCADA_LOGS', 'PHYSICS_ENGINE', 'CURRENT_SENSORS'],
            problem: {
                title: "האתגר: זיוף נתונים (Spoofing)",
                desc: "תוקף מנסה לגרום למפעיל לנתק קו ראשי על ידי זיוף נתוני עומס. בעיניים אנושיות זה נראה כמו תקלה אמיתית הדורשת תגובה מיידית.",
                alert: "PHYSICS VIOLATION DETECTED"
            },
            solution: {
                title: "הפתרון: אימות פיזיקלי (Digital Twin)",
                desc: "TEVEL מריצה סימולציה פיזיקלית בזמן אמת. היא מזהה שהזרם המדווח לא תואם את מפלי המתח לפי חוק אוהם (Ohm's Law) ומתריעה: ״חשד למניפולציית מידע - הפיזיקה לא תואמת ללוגיקה״.",
                impact: "מניעת ניתוק שווא של קווים אסטרטגיים עקב מתקפת סייבר."
            }
        }
    },
    {
        id: "INC_9005",
        code: "ASSET_HEALTH",
        icon: Thermometer,
        title: "בריאות שנאים",
        subtitle: "חיזוי כשל לפי ניתוח גזים",
        color: "tevel-green",
        stats: { type: "PREDICTIVE", risk: "HIGH", stability: 55 },
        fullDetails: {
            context: "שנאי משנה ראשי מראה עלייה מתונה בטמפרטורה. ערכי הגזים (DGA) עדיין בתקן, אבל העומס צפוי לעלות בגלל גל חום.",
            dataSources: ['DGA_SENSORS', 'LOAD_PROFILE', 'TEMP_HISTORY'],
            problem: {
                title: "האתגר: הדרדרות סמויה",
                desc: "בניתוח נפרד, כל פרמטר נראה תקין. אך השילוב של עומס חום קיצוני מחר עם רמת האצטילן הנוכחית עלול לגרום לפריצה פנימית ופיצוץ.",
                alert: "INSULATION BREAKDOWN RISK"
            },
            solution: {
                title: "הפתרון: מודל הזדקנות חכם",
                desc: "TEVEL משקללת את קצב עליית הגזים ביחס לעומס הצפוי. היא ממליצה להסיט עומס לשנאי מקביל באופן יזום 24 שעות לפני גל החום.",
                impact: "הארכת חיי השנאי ומניעת נזק קטסטרופלי לתחמ״ש."
            }
        }
    }
];

const UseCases: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<typeof scenarios[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
      if (containerRef.current) {
          const scrollAmount = 320; // Card width + gap
          const currentScroll = containerRef.current.scrollLeft;
          containerRef.current.scrollTo({
              left: direction === 'left' ? currentScroll + scrollAmount : currentScroll - scrollAmount,
              behavior: 'smooth'
          });
      }
  };

  return (
    <section id="use-cases" className="py-24 bg-[#05070A] border-t border-white/5 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tevel-electric/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-tevel-electric/5 border-l-2 border-tevel-electric text-tevel-electric text-xs font-mono mb-4"
               >
                  <Activity size={12} className="animate-pulse" />
                  LIVE INCIDENT FEED
               </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">תרחישי אמת ופתרונות</h2>
              <p className="text-slate-400 font-light max-w-xl">
                 לוג אירועים חיים: בחר תרחיש כדי לראות את ניתוח הנתונים המלא
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="flex gap-2">
                <button onClick={() => scroll('right')} className="p-3 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors group">
                    <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
                </button>
                <button onClick={() => scroll('left')} className="p-3 rounded-full border border-white/10 hover:bg-white/5 text-white transition-colors group">
                    <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
                </button>
            </div>
        </div>

        {/* Carousel Container */}
        <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {scenarios.map((scenario, index) => (
                <CompactUseCaseCard 
                    key={scenario.id} 
                    data={scenario} 
                    onClick={() => setSelectedScenario(scenario)} 
                    index={index}
                />
            ))}
            {/* Spacer for right padding */}
            <div className="w-1 shrink-0"></div>
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
            {selectedScenario && (
                <Modal 
                    scenario={selectedScenario} 
                    onClose={() => setSelectedScenario(null)} 
                />
            )}
        </AnimatePresence>

      </div>
    </section>
  );
};

// --- Compact Card Component ---

interface CompactCardProps {
    data: typeof scenarios[0];
    onClick: () => void;
    index: number;
}

const CompactUseCaseCard: React.FC<CompactCardProps> = ({ data, onClick, index }) => {
    const Icon = data.icon;
    
    // Theme Colors
    const colors = {
        "tevel-electric": "border-tevel-electric/30 text-tevel-electric shadow-[0_0_20px_rgba(59,130,246,0.1)]",
        "tevel-voltage": "border-tevel-voltage/30 text-tevel-voltage shadow-[0_0_20px_rgba(250,204,21,0.1)]",
        "tevel-green": "border-tevel-green/30 text-tevel-green shadow-[0_0_20px_rgba(0,207,149,0.1)]",
    };

    const riskColor = {
        "CRITICAL": "bg-tevel-danger",
        "HIGH": "bg-orange-500",
        "MEDIUM": "bg-yellow-500",
        "SYSTEMIC": "bg-purple-500"
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={onClick}
            className={`
                flex-shrink-0 w-[280px] md:w-[320px] snap-center
                relative bg-[#0C0F14] border border-white/5 rounded-xl overflow-hidden group cursor-pointer 
                transition-all duration-300 hover:-translate-y-2
            `}
        >
            {/* Scanning Line Effect on Hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-scan-fast z-20"></div>

            {/* Status Top Bar */}
            <div className="h-10 bg-[#080A0E] border-b border-white/5 flex items-center justify-between px-4">
                 <div className="flex items-center gap-2">
                     <div className={`w-2 h-2 rounded-full animate-pulse ${riskColor[data.stats.risk as keyof typeof riskColor] || 'bg-slate-500'}`}></div>
                     <span className="text-[10px] font-mono text-slate-400 tracking-wider">{data.id}</span>
                 </div>
                 <div className="flex gap-0.5">
                     <div className="w-1 h-2 bg-slate-800 rounded-sm"></div>
                     <div className="w-1 h-2 bg-slate-800 rounded-sm"></div>
                     <div className="w-1 h-2 bg-tevel-green rounded-sm"></div>
                 </div>
            </div>

            {/* Main Content */}
            <div className="p-6 relative">
                 {/* Live Graph Background */}
                 <div className="absolute bottom-0 left-0 w-full h-24 opacity-10 pointer-events-none flex items-end justify-between px-2 gap-1">
                     {[...Array(12)].map((_, i) => (
                         <div 
                            key={i} 
                            className={`w-full bg-current ${data.color === 'tevel-electric' ? 'text-tevel-electric' : 'text-tevel-green'} rounded-t-sm transition-all duration-700 ease-in-out`}
                            style={{ 
                                height: `${Math.random() * 60 + 10}%`,
                                animation: `pulse 2s infinite ${i * 0.1}s`
                            }}
                         ></div>
                     ))}
                 </div>

                 {/* Icon Badge */}
                 <div className={`
                    w-12 h-12 rounded-lg border bg-[#05070A] flex items-center justify-center mb-5 relative z-10
                    transition-colors duration-300 group-hover:bg-white/5
                    ${colors[data.color]}
                 `}>
                    <Icon size={24} />
                 </div>

                 <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-tevel-green transition-colors">{data.title}</h3>
                 <p className="text-sm text-slate-500 leading-snug mb-6">{data.subtitle}</p>

                 {/* Bottom Action Area */}
                 <div className="flex items-center justify-between pt-4 border-t border-white/5 relative z-10">
                     <div className="flex flex-col">
                         <span className="text-[9px] font-mono text-slate-500 uppercase">RISK LEVEL</span>
                         <span className="text-xs font-bold text-white">{data.stats.risk}</span>
                     </div>
                     
                     <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                         <div className="flex items-center gap-2 text-xs font-mono text-tevel-green font-bold bg-tevel-green/10 px-3 py-1.5 rounded border border-tevel-green/20">
                             <ScanLine size={12} />
                             DECIPHER
                         </div>
                     </div>
                 </div>
            </div>
        </motion.div>
    );
};

interface ModalProps {
    scenario: typeof scenarios[0];
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ scenario, onClose }) => {
    const Icon = scenario.icon;

    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
        >
            {/* Backdrop with Blur and Cursor Pointer for clear exit hint */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity cursor-pointer" onClick={onClose}></div>

            {/* Modal Card */}
            <motion.div 
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-[#0C0F14] w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative z-20 flex flex-col"
            >
                {/* Header Bar */}
                <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 md:px-8 bg-[#080A0E] shrink-0">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <Icon size={20} className="text-white" />
                        </div>
                        <div>
                             <h2 className="text-lg font-bold text-white leading-none mb-1">{scenario.title}</h2>
                             <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                                 <span>ID: {scenario.id}</span>
                                 <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                                 <span>CODE: {scenario.code}</span>
                             </div>
                        </div>
                    </div>
                    
                    {/* Improved Close Button */}
                    <button 
                        onClick={onClose}
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-tevel-danger text-slate-300 hover:text-white border border-white/10 hover:border-tevel-danger/50 transition-all duration-300"
                    >
                        <span className="text-sm font-bold">סגור</span>
                        <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row h-full overflow-hidden">
                    
                    {/* Left Panel: Context & Data */}
                    <div className="md:w-5/12 bg-[#0A0C10] border-l border-white/5 p-8 overflow-y-auto relative custom-scrollbar">
                        {/* Technical Details */}
                        <div className="mb-8">
                            <div className="text-xs font-mono text-tevel-electric mb-4 uppercase tracking-widest flex items-center gap-2">
                                <Database size={12} /> Data Ingestion
                            </div>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {scenario.fullDetails.dataSources.map(ds => (
                                    <div key={ds} className="px-3 py-2 bg-[#15181E] border border-white/10 rounded-md text-[10px] font-mono text-slate-300 flex items-center gap-2 shadow-sm">
                                        <div className="w-1.5 h-1.5 bg-tevel-green rounded-full animate-pulse"></div>
                                        {ds}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                                <FileSearch size={12} /> Scenario Context
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                {scenario.fullDetails.context}
                            </p>
                        </div>
                    </div>

                    {/* Right Panel: Analysis & Solution */}
                    <div className="md:w-7/12 bg-[#0C0F14] p-8 overflow-y-auto relative custom-scrollbar">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

                        {/* Problem Block */}
                        <div className="mb-10 relative">
                             <div className="absolute -right-4 top-2 w-1 h-full bg-gradient-to-b from-tevel-danger/40 to-transparent rounded-full"></div>
                             
                             <div className="flex items-center gap-3 mb-3 text-tevel-danger">
                                 <AlertTriangle size={18} />
                                 <h3 className="font-bold text-sm tracking-wide uppercase">Operational Challenge</h3>
                             </div>
                             <h4 className="text-xl font-bold text-white mb-3">{scenario.fullDetails.problem.title}</h4>
                             <p className="text-slate-400 text-sm leading-relaxed mb-4">{scenario.fullDetails.problem.desc}</p>
                             
                             <div className="inline-flex items-center gap-2 px-3 py-1 bg-tevel-danger/10 border border-tevel-danger/20 rounded text-[10px] font-mono text-tevel-danger font-bold">
                                 ALERT: {scenario.fullDetails.problem.alert}
                             </div>
                        </div>

                        {/* Connection Visualization */}
                        <div className="flex items-center gap-4 mb-10 opacity-30">
                            <div className="h-px bg-white flex-1"></div>
                            <div className="px-2 py-1 border border-white rounded text-[10px] font-mono">TEVEL ENGINE PROCESSING</div>
                            <div className="h-px bg-white flex-1"></div>
                        </div>

                        {/* Solution Block */}
                        <div className="relative">
                             <div className="absolute -right-4 top-2 w-1 h-full bg-gradient-to-b from-tevel-green/40 to-transparent rounded-full"></div>
                             
                             <div className="flex items-center gap-3 mb-3 text-tevel-green">
                                 <Cpu size={18} />
                                 <h3 className="font-bold text-sm tracking-wide uppercase">System Resolution</h3>
                             </div>
                             
                             <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                                 <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tevel-green/50 to-transparent"></div>
                                 
                                 <h4 className="text-lg font-bold text-white mb-2">{scenario.fullDetails.solution.title}</h4>
                                 <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                     {scenario.fullDetails.solution.desc}
                                 </p>
                                 
                                 <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                     <div className="bg-tevel-green/20 text-tevel-green p-1.5 rounded-full">
                                         <CheckCircle2 size={14} />
                                     </div>
                                     <span className="text-xs text-white font-medium">
                                         {scenario.fullDetails.solution.impact}
                                     </span>
                                 </div>
                             </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default UseCases;
