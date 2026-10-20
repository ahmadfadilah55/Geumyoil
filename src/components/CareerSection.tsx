import React from 'react';
import {
  Award,
  Trophy,
  Users,
  Inbox,
  Clock
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CareerSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="karir" className="pt-8 pb-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {language === 'en' ? (
              <>
                Build the Future of Korean Education{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
                  Together
                </span>
              </>
            ) : (
              <>
                Tumbuh & Berkembang{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
                  Bersama Geumyoil
                </span>
              </>
            )}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {language === 'en'
              ? 'Connecting Indonesian youth with quality language learning and official educational & career pathways in South Korea.'
              : 'Menghubungkan impian generasi muda Indonesia dengan pendidikan bahasa berkualitas dan peluang resmi studi serta karir di Korea Selatan.'}
          </p>
        </div>

        {/* Main Status: Untuk saat ini belum ada lowongan yang tersedia */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 text-center shadow-2xs relative overflow-hidden">
            {/* Subtle decorative background glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-teal-50/50 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-400 border border-slate-200/80 shadow-2xs">
                <Inbox className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{language === 'en' ? 'Recruitment Status: Closed' : 'Status Rekrutmen: Belum Dibuka'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {language === 'en'
                  ? 'Currently, There Are No Open Vacancies'
                  : 'Untuk Saat Ini Belum Ada Lowongan yang Tersedia'}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                {language === 'en'
                  ? 'Thank you for your enthusiasm and interest in joining Geumyoil.'
                  : 'Terima kasih atas antusiasme dan ketertarikan Anda untuk bergabung bersama Geumyoil.'}
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Badges Grid (Culture & Values at Geumyoil) */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              {language === 'en' ? 'Working Culture at Geumyoil' : 'Budaya & Nilai Kerja di Geumyoil'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {language === 'en'
                ? 'What you can look forward to when opportunities arise'
                : 'Pengalaman bertumbuh yang kami hadirkan untuk seluruh anggota tim'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0047A0] flex items-center justify-center mb-2 font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-slate-900">
                {language === 'en' ? 'Korean Immersion' : 'Kultur & Bahasa'}
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#16A48F] flex items-center justify-center mb-2 font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-slate-900">
                {language === 'en' ? 'Hybrid & Flexible' : 'Kerja Fleksibel'}
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2 font-bold">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-slate-900">
                {language === 'en' ? 'Performance Bonus' : 'Insentif & Bonus'}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
