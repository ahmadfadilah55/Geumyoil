import React from 'react';
import { BookOpen, GraduationCap, Briefcase, ArrowRight, Award } from 'lucide-react';
import { SERVICE_PROGRAMS } from '../data/koreaData';

interface TriplePathProps {
  onOpenConsultation: (program?: string) => void;
}

export const TriplePath: React.FC<TriplePathProps> = ({ onOpenConsultation }) => {
  const filteredPrograms = SERVICE_PROGRAMS;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#0047A0]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#CD2E3A]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#16A48F]" />;
      default:
        return <Award className="w-5 h-5 text-[#16A48F]" />;
    }
  };

  return (
    <section id="layanan" className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-transparent text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Tiga Program Utama{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
              dalam Satu Pintu
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Apa tujuanmu ke Korea Selatan? Belajar Bahasa Korea, kuliah di universitas terbaik, atau bekerja secara resmi? Pilih program yang sesuai dengan jalur impianmu di bawah ini:
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between p-6 sm:p-7 group"
            >
              <div>
                {/* Header Row: Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-2xs ${
                      program.category === 'language'
                        ? 'bg-blue-50/80 border-blue-100 text-[#0047A0]'
                        : program.category === 'study'
                        ? 'bg-rose-50/80 border-rose-100 text-[#CD2E3A]'
                        : 'bg-teal-50/80 border-teal-100 text-[#16A48F]'
                    }`}
                  >
                    {getIcon(program.iconName)}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border shadow-2xs ${
                      program.category === 'language'
                        ? 'bg-blue-50 text-[#0047A0] border-blue-200/60'
                        : program.category === 'study'
                        ? 'bg-rose-50 text-[#CD2E3A] border-rose-200/60'
                        : 'bg-teal-50 text-[#16A48F] border-teal-200/60'
                    }`}
                  >
                    {program.badge}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-snug">
                  {program.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1 mb-4">
                  {program.subtitle}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#16A48F] shrink-0" />
                      <span className="leading-snug font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenConsultation(program.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white shadow-2xs transition-all cursor-pointer ${
                    program.category === 'language'
                      ? 'bg-[#0047A0] hover:bg-[#003380]'
                      : program.category === 'study'
                      ? 'bg-[#CD2E3A] hover:bg-[#a8252f]'
                      : 'bg-[#16A48F] hover:bg-[#128372]'
                  }`}
                >
                  <span>Konsultasi {program.title.split('(')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sell Copywriting Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
            <div className="text-[#0047A0] font-bold text-xs uppercase tracking-wider mb-2">Program Bahasa Korea:</div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              "Lancar Hangeul dalam 3 bulan dengan metode pengajaran praktis dari guru berpengalaman dan bersertifikat."
            </p>
          </div>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
            <div className="text-[#CD2E3A] font-bold text-xs uppercase tracking-wider mb-2">Program Studi Korea:</div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              "Kuliah di Korea bukan sekedar mimpi. Dapatkan bimbingan memilih kampus terbaik sesuai target beasiswa &amp; bakatmu."
            </p>
          </div>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs">
            <div className="text-[#16A48F] font-bold text-xs uppercase tracking-wider mb-2">Program Kerja Resmi:</div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              "Bukan sekedar kursus, kami dampingi prosesmu dari persiapan dasar sampai kontrak kerja resmi di tangan."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
