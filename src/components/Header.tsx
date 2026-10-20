import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenConsultation: (program?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [classesDropdownOpen, setClassesDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileClassesOpen, setMobileClassesOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const classesRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const mobileClassesRef = useRef<HTMLDivElement>(null);
  const mobileMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (classesRef.current && !classesRef.current.contains(e.target as Node)) {
        setClassesDropdownOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreDropdownOpen(false);
      }
      if (mobileClassesRef.current && !mobileClassesRef.current.contains(e.target as Node)) {
        setMobileClassesOpen(false);
      }
      if (mobileMoreRef.current && !mobileMoreRef.current.contains(e.target as Node)) {
        setMobileMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setClassesDropdownOpen(false);
    setMoreDropdownOpen(false);
    setMobileClassesOpen(false);
    setMobileMoreOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isClassesActive =
    location.pathname === '/kelas' ||
    location.pathname === '/classes' ||
    location.pathname.startsWith('/kelas/') ||
    location.pathname.startsWith('/kelas-');

  const isProgramActive =
    location.pathname === '/program' ||
    location.pathname === '/layanan' ||
    location.pathname === '/hubungi-kami' ||
    location.pathname === '/biaya';

  const isMoreActive =
    location.pathname === '/lainnya' ||
    location.pathname === '/more' ||
    location.pathname === '/testimoni' ||
    location.pathname === '/faq';

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 text-slate-900 py-3'
          : 'bg-white text-slate-900 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            id="header-logo"
          >
            <Logo className="w-10 h-10 group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-[#16A48F]">
                Jumat
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Beranda */}
            <button
              onClick={() => handleNavClick('/')}
              className={`px-3 py-2 text-sm font-bold hover:bg-slate-100/80 rounded-lg transition-colors cursor-pointer ${
                location.pathname === '/' ? 'text-[#CD2E3A] bg-red-50/50' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.nav.home}
            </button>

            {/* 2. Kelas Dropdown (Click to Open) */}
            <div ref={classesRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setClassesDropdownOpen(!classesDropdownOpen);
                  setMoreDropdownOpen(false);
                }}
                className={`px-3 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  classesDropdownOpen
                    ? 'bg-slate-100 text-slate-900'
                    : isClassesActive
                    ? 'text-[#CD2E3A] bg-red-50/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
                aria-expanded={classesDropdownOpen}
                aria-haspopup="true"
              >
                <span>{t.nav.classes}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    classesDropdownOpen ? 'rotate-180 text-slate-900' : 'opacity-70'
                  }`}
                />
              </button>

              {/* Kelas Dropdown Menu */}
              {classesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <button
                    onClick={() => handleNavClick('/kelas/essentials')}
                    className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-800 hover:text-[#0047A0] hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                  >
                    {t.nav.classesEssentials}
                  </button>

                  <button
                    onClick={() => handleNavClick('/kelas/topik')}
                    className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-800 hover:text-[#16A48F] hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                  >
                    {t.nav.classesTopik}
                  </button>

                  <button
                    onClick={() => handleNavClick('/kelas/eps-topik')}
                    className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-800 hover:text-[#CD2E3A] hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                  >
                    {t.nav.classesEpsTopik}
                  </button>
                </div>
              )}
            </div>

            {/* 3. Program */}
            <button
              onClick={() => handleNavClick('/program')}
              className={`px-3 py-2 text-sm font-bold hover:bg-slate-100/80 rounded-lg transition-colors cursor-pointer ${
                isProgramActive ? 'text-[#CD2E3A] bg-red-50/50' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.nav.program}
            </button>

            {/* 3. Geumyoil+ */}
            <button
              onClick={() => handleNavClick('/geumyoil-plus')}
              className={`px-3 py-2 text-sm font-bold hover:bg-slate-100/80 rounded-lg transition-colors cursor-pointer flex items-center gap-0.5 ${
                location.pathname === '/geumyoil-plus' ? 'text-[#CD2E3A] bg-red-50/50' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Geumyoil</span>
              <span className="text-[#CD2E3A] font-black text-sm leading-none -mt-0.5">+</span>
            </button>

            {/* 4. Karir */}
            <button
              onClick={() => handleNavClick('/karir')}
              className={`px-3 py-2 text-sm font-bold hover:bg-slate-100/80 rounded-lg transition-colors cursor-pointer ${
                location.pathname === '/karir' || location.pathname === '/career'
                  ? 'text-[#CD2E3A] bg-red-50/50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.nav.career}
            </button>

            {/* 5. Artikel */}
            <button
              onClick={() => handleNavClick('/artikel')}
              className={`px-3 py-2 text-sm font-bold hover:bg-slate-100/80 rounded-lg transition-colors cursor-pointer ${
                location.pathname === '/artikel' || location.pathname === '/articles'
                  ? 'text-[#CD2E3A] bg-red-50/50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.nav.articles}
            </button>

            {/* 6. Lainnya Dropdown (Click to Open) */}
            <div ref={moreRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setMoreDropdownOpen(!moreDropdownOpen);
                }}
                className={`px-3 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  moreDropdownOpen
                    ? 'bg-slate-100 text-slate-900'
                    : isMoreActive
                    ? 'text-[#CD2E3A] bg-red-50/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
                aria-expanded={moreDropdownOpen}
                aria-haspopup="true"
              >
                <span>{t.nav.more}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreDropdownOpen ? 'rotate-180 text-slate-900' : 'opacity-70'
                  }`}
                />
              </button>

              {/* Lainnya Dropdown Menu */}
              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <button
                    onClick={() => handleNavClick('/testimoni')}
                    className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-800 hover:text-[#CD2E3A] hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                  >
                    {t.nav.moreTestimonials}
                  </button>

                  <button
                    onClick={() => handleNavClick('/faq')}
                    className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-800 hover:text-[#0047A0] hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                  >
                    {t.nav.moreFaq}
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-cta-btn"
              onClick={() => onOpenConsultation('Konsultasi')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#CD2E3A] hover:bg-[#a8252f] rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t.nav.freeConsultation}</span>
            </button>
          </div>

          {/* Mobile menu button & Action */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultation('Konsultasi')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#CD2E3A] hover:bg-[#a8252f] rounded-full shadow"
            >
              {language === 'en' ? 'Consult' : 'Konsultasi'}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            {/* 1. Beranda */}
            <button
              onClick={() => handleNavClick('/')}
              className={`w-full text-left px-4 py-3 text-sm font-bold hover:bg-slate-100 rounded-xl transition-colors cursor-pointer ${
                location.pathname === '/' ? 'text-[#CD2E3A] bg-red-50' : 'text-slate-800'
              }`}
            >
              <span>{t.nav.home}</span>
            </button>

            {/* 2. Kelas (Accordion Dropdown) */}
            <div ref={mobileClassesRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setMobileClassesOpen(!mobileClassesOpen);
                  setMobileMoreOpen(false);
                }}
                className={`flex items-center justify-between w-full text-left px-4 py-3 text-sm font-bold rounded-xl transition-colors cursor-pointer ${
                  mobileClassesOpen
                    ? 'bg-slate-100 text-slate-900'
                    : isClassesActive
                    ? 'text-[#CD2E3A] bg-red-50'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
                aria-expanded={mobileClassesOpen}
              >
                <span>{t.nav.classes}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileClassesOpen ? 'rotate-180 text-slate-900' : ''
                  }`}
                />
              </button>

              {mobileClassesOpen && (
                <div className="mt-1.5 mb-2 ml-1 mr-1 p-1.5 bg-slate-50/90 border border-slate-200 rounded-2xl shadow-sm space-y-0.5 animate-in fade-in zoom-in-95 duration-150">
                  <button
                    onClick={() => handleNavClick('/kelas/essentials')}
                    className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-800 hover:text-[#0047A0] hover:bg-white rounded-xl transition-colors cursor-pointer"
                  >
                    {t.nav.classesEssentials}
                  </button>

                  <button
                    onClick={() => handleNavClick('/kelas/topik')}
                    className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-800 hover:text-[#16A48F] hover:bg-white rounded-xl transition-colors cursor-pointer"
                  >
                    {t.nav.classesTopik}
                  </button>

                  <button
                    onClick={() => handleNavClick('/kelas/eps-topik')}
                    className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-800 hover:text-[#CD2E3A] hover:bg-white rounded-xl transition-colors cursor-pointer"
                  >
                    {t.nav.classesEpsTopik}
                  </button>
                </div>
              )}
            </div>

            {/* 3. Program */}
            <button
              onClick={() => handleNavClick('/program')}
              className={`w-full text-left px-4 py-3 text-sm font-bold hover:bg-slate-100 rounded-xl transition-colors cursor-pointer ${
                isProgramActive ? 'text-[#CD2E3A] bg-red-50' : 'text-slate-800'
              }`}
            >
              <span>{t.nav.program}</span>
            </button>

            {/* 3. Geumyoil+ */}
            <button
              onClick={() => handleNavClick('/geumyoil-plus')}
              className={`w-full text-left px-4 py-3 text-sm font-bold hover:bg-slate-100 rounded-xl transition-colors cursor-pointer ${
                location.pathname === '/geumyoil-plus' ? 'text-[#CD2E3A] bg-red-50' : 'text-slate-800'
              }`}
            >
              <span className="inline-flex items-center gap-0.5">
                <span>Geumyoil</span>
                <span className="text-[#CD2E3A] font-black text-base leading-none">+</span>
                <span className="text-xs text-slate-500 font-normal ml-1.5">
                  {language === 'en' ? '(8 Languages)' : '(8 Bahasa)'}
                </span>
              </span>
            </button>

            {/* 4. Karir */}
            <button
              onClick={() => handleNavClick('/karir')}
              className={`w-full text-left px-4 py-3 text-sm font-bold hover:bg-slate-100 rounded-xl transition-colors cursor-pointer ${
                location.pathname === '/karir' ? 'text-[#CD2E3A] bg-red-50' : 'text-slate-800'
              }`}
            >
              <span>{t.nav.career}</span>
            </button>

            {/* 5. Artikel */}
            <button
              onClick={() => handleNavClick('/artikel')}
              className={`w-full text-left px-4 py-3 text-sm font-bold hover:bg-slate-100 rounded-xl transition-colors cursor-pointer ${
                location.pathname === '/artikel' ? 'text-[#CD2E3A] bg-red-50' : 'text-slate-800'
              }`}
            >
              <span>{t.nav.articles}</span>
            </button>

            {/* 6. Lainnya (Dropdown - Click to Open) */}
            <div ref={mobileMoreRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setMobileMoreOpen(!mobileMoreOpen);
                }}
                className={`flex items-center justify-between w-full text-left px-4 py-3 text-sm font-bold rounded-xl transition-colors cursor-pointer ${
                  mobileMoreOpen
                    ? 'bg-slate-100 text-slate-900'
                    : isMoreActive
                    ? 'text-[#CD2E3A] bg-red-50'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
                aria-expanded={mobileMoreOpen}
              >
                <span>{t.nav.more}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileMoreOpen ? 'rotate-180 text-slate-900' : ''
                  }`}
                />
              </button>

              {mobileMoreOpen && (
                <div className="mt-1.5 mb-2 ml-1 mr-1 p-1.5 bg-slate-50/90 border border-slate-200 rounded-2xl shadow-sm space-y-0.5 animate-in fade-in zoom-in-95 duration-150">
                  <button
                    onClick={() => handleNavClick('/testimoni')}
                    className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-800 hover:text-[#CD2E3A] hover:bg-white rounded-xl transition-colors cursor-pointer"
                  >
                    {t.nav.moreTestimonials}
                  </button>

                  <button
                    onClick={() => handleNavClick('/faq')}
                    className="w-full text-left px-3.5 py-2 text-xs font-bold text-slate-800 hover:text-[#0047A0] hover:bg-white rounded-xl transition-colors cursor-pointer"
                  >
                    {t.nav.moreFaq}
                  </button>
                </div>
              )}
            </div>

            {/* Consultation CTA in Mobile Menu */}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('Konsultasi');
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#CD2E3A] hover:bg-[#a8252f] rounded-full shadow-md transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.nav.freeConsultation}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
