import React, { useState } from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import heroSeoulImg from '../assets/images/hero_seoul_study_1794647533327.jpg';

interface HeroProps {
  onOpenConsultation: (program?: string) => void;
  onNavigateClasses?: () => void;
  onNavigateContact?: () => void;
  onNavigatePlus?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onNavigateClasses,
  onNavigatePlus,
}) => {
  const { language, t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const pathways = [
    {
      num: '01',
      title: language === 'en' ? 'Korean Language' : 'Bahasa Korea',
      sub: language === 'en' ? 'Essentials & TOPIK 1–6' : 'Essentials & TOPIK 1–6',
      program: 'Kursus Bahasa Korea',
    },
    {
      num: '02',
      title: language === 'en' ? 'Study & Scholarships' : 'Studi & Beasiswa',
      sub: language === 'en' ? 'GKS & Korean Universities' : 'GKS & Kampus Korea',
      program: 'Studi ke Korea',
    },
    {
      num: '03',
      title: language === 'en' ? 'Official Career' : 'Kerja Resmi G2G',
      sub: language === 'en' ? 'EPS-TOPIK Preparation' : 'Persiapan EPS-TOPIK',
      program: 'Kerja di Korea',
    },
  ];

  return (
    <section className="relative pt-10 pb-12 lg:pt-14 lg:pb-16 bg-transparent text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#CD2E3A] mb-4">
              <span>{t.hero.greeting}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600 font-medium">
                {language === 'en' ? 'Korean Study & Career Consultant' : 'Konsultan Studi & Bahasa Korea'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-slate-900 leading-[1.12] tracking-tight text-balance mb-5">
              {t.hero.titlePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleSuffix}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              {language === 'en'
                ? 'Master Korean from zero to TOPIK & EPS-TOPIK certification, with direct mentoring for university admissions, scholarships, and official careers in South Korea.'
                : 'Belajar Bahasa Korea dari nol hingga mahir, persiapan sertifikat TOPIK & EPS-TOPIK, hingga pendampingan studi dan karir resmi ke Korea Selatan.'}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={() => onOpenConsultation('Konsultasi')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#CD2E3A] hover:bg-[#b52530] rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CD2E3A] focus-visible:ring-offset-2"
              >
                <span>{t.hero.ctaConsult}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onNavigateClasses && (
                <button
                  type="button"
                  onClick={onNavigateClasses}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
                >
                  <span>{language === 'en' ? 'Explore Classes' : 'Lihat Pilihan Kelas'}</span>
                </button>
              )}
            </div>

            {/* Clean Hairline Divider + 3 Pathways + Geumyoil+ Link */}
            <div className="mt-9 pt-7 border-t border-slate-200/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {pathways.map((item) => (
                  <button
                    key={item.num}
                    type="button"
                    onClick={() => onOpenConsultation(item.program)}
                    className="group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CD2E3A] rounded-lg"
                  >
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#CD2E3A] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                      {item.sub}
                    </div>
                  </button>
                ))}
              </div>

              {onNavigatePlus && (
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-4 text-xs">
                  <span className="text-slate-500 font-medium">
                    {t.hero.alsoAvailable}{' '}
                    <span className="text-slate-700 font-semibold">{t.hero.globalTitle}</span>
                  </span>
                  <button
                    type="button"
                    onClick={onNavigatePlus}
                    className="inline-flex items-center gap-1 font-bold text-[#0F4C81] hover:text-[#CD2E3A] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C81] rounded"
                  >
                    <span>{language === 'en' ? 'Explore Geumyoil+' : 'Lihat Geumyoil+'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Editorial Visual Column */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100 group">
              {!imageError ? (
                <img
                  src={heroSeoulImg}
                  alt={language === 'en' ? 'University campus in Seoul with Namsan Tower' : 'Suasana kampus modern di Seoul Korea Selatan'}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-[#0F4C81] to-[#CD2E3A] flex flex-col items-center justify-center p-8 text-center text-white">
                  <GraduationCap className="w-12 h-12 mb-3 text-white/90" />
                  <p className="text-lg font-bold">Geumyoil Korean Study Consultant</p>
                  <p className="text-sm text-white/80 mt-1">Seoul &amp; Busan Study Pathways</p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
                <div>
                  <p className="text-xs font-medium text-white/80">
                    Seoul &amp; Busan Pathways · Online, Hybrid &amp; Offline
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                    {language === 'en'
                      ? 'Structured Guidance from Beginner to University Admission'
                      : 'Pendampingan Terstruktur dari Pemula hingga Kampus Impian'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
