import React from 'react';
import { ShieldCheck, GraduationCap, Briefcase, Sparkles, CheckCircle2, ArrowRight, Play, Star, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenConsultation: (program?: string) => void;
  onNavigateContact?: () => void;
  onNavigatePlus?: () => void;
  onScrollToQuiz?: () => void;
  onScrollToHangeul?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onNavigateContact,
  onNavigatePlus,
  onScrollToQuiz,
  onScrollToHangeul
}) => {
  const { language, t } = useLanguage();

  const heroPoints = [
    {
      title: language === 'en' ? 'Pengajar Berpengalaman' : 'Pengajar Berpengalaman',
      desc:
        language === 'en'
          ? 'Belajar bersama pengajar dengan metode yang terarah dan interaktif.'
          : 'Belajar bersama pengajar dengan metode yang terarah dan interaktif.',
      color: '#CD2E3A'
    },
    {
      title: language === 'en' ? 'Kurikulum Terstruktur' : 'Kurikulum Terstruktur',
      desc:
        language === 'en'
          ? 'Materi dirancang sesuai level dan tujuan belajar.'
          : 'Materi dirancang sesuai level dan tujuan belajar.',
      color: '#CD2E3A'
    },
    {
      title: language === 'en' ? 'Kelas Sesuai Tujuan' : 'Kelas Sesuai Tujuan',
      desc:
        language === 'en'
          ? 'Essentials, TOPIK, hingga EPS-TOPIK.'
          : 'Essentials, TOPIK, hingga EPS-TOPIK.',
      color: '#CD2E3A'
    },
    {
      title: language === 'en' ? 'Fleksibel & Nyaman' : 'Fleksibel & Nyaman',
      desc:
        language === 'en'
          ? 'Pilih Online, Hybrid, atau Offline Class.'
          : 'Pilih Online, Hybrid, atau Offline Class.',
      color: '#CD2E3A'
    },
    {
      title: language === 'en' ? 'Konsultasi Studi & Karier' : 'Konsultasi Studi & Karier',
      desc:
        language === 'en'
          ? 'Dapatkan arahan untuk merencanakan langkahmu menuju Korea.'
          : 'Dapatkan arahan untuk merencanakan langkahmu menuju Korea.',
      color: '#CD2E3A'
    }
  ];

  return (
    <section className="relative pt-8 pb-16 lg:pt-10 lg:pb-20 bg-transparent text-slate-900 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#9a212a]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-300/80 mb-6 text-xs sm:text-sm font-semibold text-[#CD2E3A] shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#CD2E3A] animate-ping"></span>
              <span className="flex h-2 w-2 rounded-full bg-[#CD2E3A] -ml-4"></span>
              <span> {t.hero.greeting} </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              {t.hero.titlePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleSuffix}
            </h1>

            {/* Core Value Highlights (5 Points) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full max-w-2xl mb-8">
              {heroPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: point.color }}
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {point.title}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-snug">
                      {point.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={() => onOpenConsultation('Konsultasi')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-[#CD2E3A] hover:bg-[#a8252f] rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>{t.hero.ctaConsult}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Geumyoil+ Global Courses Feature Link */}
            {onNavigatePlus && (
              <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                <span className="font-semibold text-slate-500">{t.hero.alsoAvailable}</span>
                <button
                  onClick={onNavigatePlus}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-all cursor-pointer border border-slate-200/80 shadow-2xs group"
                >
                  <span>🌐</span>
                  <span>{t.hero.globalTitle}</span>
                  <span className="text-[11px] text-slate-500 font-normal hidden sm:inline">{t.hero.globalSub}</span>
                  <ArrowRight className="w-3 h-3 text-[#CD2E3A] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Right Visual Interactive Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-rose-500 to-amber-400 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              {/* Main Card Container */}
              <div className="relative bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-2xl overflow-hidden">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#CD2E3A]"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-[#0047A0]"></div>
                  </div>
                </div>

                {/* Hero Image Showcase */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 group">
                  <img
                    src="https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&q=80&w=1000"
                    alt="Seoul Namsan Tower & City Skyline"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>

                {/* Interactive Triple Path Highlights inside Card */}
                <div className="space-y-3">
                  <div
                    onClick={() => onOpenConsultation('Kursus Bahasa Korea')}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/80 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                        1
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{t.hero.card1Title}</div>
                        <div className="text-[11px] text-slate-500">{t.hero.card1Sub}</div>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => onOpenConsultation('Studi ke Korea')}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/80 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#CD2E3A]/10 border border-[#CD2E3A]/20 flex items-center justify-center text-[#CD2E3A] font-bold">
                        2
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{t.hero.card2Title}</div>
                        <div className="text-[11px] text-slate-500">{t.hero.card2Sub}</div>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => onOpenConsultation('Kerja di Korea')}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/80 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#16A48F]/10 border border-[#16A48F]/20 flex items-center justify-center text-[#16A48F] font-bold">
                        3
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{t.hero.card3Title}</div>
                        <div className="text-[11px] text-slate-500">{t.hero.card3Sub}</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
