import React from 'react';
import { MapPin, Phone, Mail, Instagram, Globe, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { OFFICE_LOCATIONS } from '../data/koreaData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#16A48F] text-white pt-10 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-white/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-white p-1.5 rounded-xl flex items-center justify-center shadow-sm">
                <Logo className="w-7 h-7" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Geumyoil
              </span>
            </div>
            <p className="text-xs text-teal-50/90 leading-relaxed max-w-sm font-medium">
              {t.footer.tagline}
            </p>
          </div>

          {/* Social Media - Middle Column */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">{t.footer.social}</h4>
            <div className="flex items-center gap-2 pt-0.5">
              <a
                href="https://www.instagram.com/geumyoil.id/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6289633663799"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Office Locations - Right Column */}
          <div className="lg:col-span-5 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">{t.footer.address}</h4>
            <div className="space-y-2 text-xs">
              {OFFICE_LOCATIONS.map((loc) => (
                <div key={loc.city} className="space-y-0.5">
                  <div className="font-bold text-white">{loc.city}</div>
                  <div className="text-[11px] leading-relaxed text-teal-50/80">{loc.address}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back To Top */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-teal-50/80">
          <div>
            &copy; {new Date().getFullYear()} Geumyoil Korea Consulting. {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-teal-50 hover:text-white transition-colors cursor-pointer font-medium"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
