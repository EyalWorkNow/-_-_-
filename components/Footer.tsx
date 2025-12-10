
import React from 'react';
import { Asterisk, Linkedin, Mail, CheckCircle2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-tevel-base relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Brand */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
             <div className="flex items-center gap-2 group cursor-default">
                <div className="relative">
                    <Asterisk className="w-8 h-8 text-tevel-green group-hover:animate-spin" strokeWidth={3} />
                    <div className="absolute inset-0 bg-tevel-green/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-2xl font-bold tracking-wider font-sans text-white">TEVEL</span>
            </div>
            <div className="max-w-3xl text-slate-400 text-lg leading-relaxed">
                <p className="font-semibold text-white mb-2">סיכום</p>
                TEVEL היא פלטפורמת תוכנה המיועדת להפוך את ניהול רשת החשמל לחכם ומבוסס הקשר. 
                אנחנו מחפשים שותפים לדרך שיעזרו לנו לעצב את המוצר כך שיתאים בדיוק לאתגרים של רשת החשמל הלאומית.
            </div>
        </div>

        {/* System Status Indicator */}
        <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A0C10] border border-white/10 rounded-full">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-xs font-mono text-slate-400">STATUS: <span className="text-emerald-400">IN DEVELOPMENT</span></span>
            </div>
        </div>
        
        {/* Social / Contact */}
        <div className="flex justify-center gap-4 mb-12">
            <a href="mailto:eyalatiyawork@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-tevel-green transition-colors border border-transparent hover:border-tevel-green/30">
                <Mail size={20} />
            </a>
            <button className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-colors border border-transparent hover:border-blue-400/30">
                <Linkedin size={20} />
            </button>
        </div>

        <p className="text-slate-600 text-sm">
          © 2025 TEVEL. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
