import React from 'react';
import { Asterisk } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-tevel-base">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
             <div className="flex items-center gap-2">
                <Asterisk className="w-8 h-8 text-tevel-green" strokeWidth={3} />
                <span className="text-2xl font-bold tracking-wider font-sans text-white">TEVEL</span>
            </div>
            <div className="max-w-2xl text-slate-400 text-lg leading-relaxed">
                <p className="font-semibold text-white mb-2">סיכום</p>
                TEVEL יוצרת לחברת החשמל מה שאין היום:
                זיכרון ארגוני חי שמחבר את כל המערכות ואת כל האירועים — ונותן תמונת מצב אחת, ברורה ומניעה לפעולה.
            </div>
        </div>
        <p className="text-slate-600 text-sm mt-12">
          © 2025 TEVEL. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;