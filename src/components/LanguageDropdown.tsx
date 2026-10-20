import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

interface LanguageDropdownProps {
  compact?: boolean;
  className?: string;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  compact = false,
  className = ''
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: {
    code: Language;
    label: string;
    sublabel: string;
    flagEmoji: string;
    flagSvg: React.ReactNode;
  }[] = [
    {
      code: 'id',
      label: 'Bahasa Indonesia',
      sublabel: 'Indonesian',
      flagEmoji: '🇮🇩',
      flagSvg: (
        <svg viewBox="0 0 36 24" className="w-5 h-3.5 rounded-xs shadow-xs border border-slate-200 overflow-hidden shrink-0">
          <rect width="36" height="12" y="0" fill="#ce1126" />
          <rect width="36" height="12" y="12" fill="#ffffff" />
        </svg>
      )
    },
    {
      code: 'en',
      label: 'English',
      sublabel: 'English Language',
      flagEmoji: '🇬🇧',
      flagSvg: (
        <svg viewBox="0 0 36 24" className="w-5 h-3.5 rounded-xs shadow-xs border border-slate-200 overflow-hidden shrink-0">
          <rect width="36" height="24" fill="#012169" />
          <line x1="0" y1="0" x2="36" y2="24" stroke="#ffffff" strokeWidth="4" />
          <line x1="0" y1="24" x2="36" y2="0" stroke="#ffffff" strokeWidth="4" />
          <line x1="0" y1="0" x2="36" y2="24" stroke="#c8102e" strokeWidth="2" />
          <line x1="0" y1="24" x2="36" y2="0" stroke="#c8102e" strokeWidth="2" />
          <rect x="15" width="6" height="24" fill="#ffffff" />
          <rect y="9" width="36" height="6" fill="#ffffff" />
          <rect x="16.5" width="3" height="24" fill="#c8102e" />
          <rect y="10.5" width="36" height="3" fill="#c8102e" />
        </svg>
      )
    }
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100/90 hover:bg-slate-200 border border-slate-200/90 transition-all cursor-pointer shadow-2xs group"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Ganti Bahasa / Switch Language"
      >
        <span className="flex items-center">{currentLang.flagSvg}</span>
        <span className="font-bold tracking-tight uppercase font-mono text-[11px] text-slate-800">
          {currentLang.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-slate-800' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 border-b border-slate-100 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <Globe className="w-3 h-3" />
            <span>Pilih Bahasa / Language</span>
          </div>

          <div className="py-1">
            {languages.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-red-50/70 text-[#CD2E3A] font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {lang.flagSvg}
                    <div>
                      <div className="leading-tight">{lang.label}</div>
                      <div className="text-[10px] text-slate-400 font-normal">{lang.sublabel}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#CD2E3A] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
