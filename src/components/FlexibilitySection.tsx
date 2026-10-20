import React from 'react';

interface FlexibilityProps {
  onOpenConsultation: (mode?: string) => void;
}

export const FlexibilitySection: React.FC<FlexibilityProps> = () => {
  return (
    <section className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Level Progression Stepper (3-Column Harmonized) */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Jenjang Level{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
                Terstruktur
              </span>
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Kurikulum mengacu pada sertifikasi resmi TOPIK (Test of Proficiency in Korean) &amp; EPS-TOPIK HRD Korea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Level 1: Basic */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#0047A0] uppercase tracking-wider">LEVEL 1 &amp; 2</span>
                <h4 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mt-1 leading-snug">BASIC (초급)</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Pengenalan abjad Hangeul, tata bahasa dasar, perkenalan diri, angka Korea, dan kosakata aktivitas harian.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-[#0047A0] font-semibold">
                Target: Lulus TOPIK Level 1-2 &amp; Lancar Sapaan
              </div>
            </div>

            {/* Level 2: Intermediate */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#CD2E3A] uppercase tracking-wider">LEVEL 3 &amp; 4</span>
                <h4 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mt-1 leading-snug">INTERMEDIATE (중급)</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Percakapan tempat kerja, mengekspresikan pendapat, memahami berita sederhana, dan persiapan ujian EPS-TOPIK.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-[#CD2E3A] font-semibold">
                Target: Syarat Utama Kerja EPS / Kuliah S1 Korea
              </div>
            </div>

            {/* Level 3: Advanced */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#16A48F] uppercase tracking-wider">LEVEL 5 &amp; 6</span>
                <h4 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mt-1 leading-snug">ADVANCED (고급)</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Bahasa Korea tingkat profesional/bisnis, negosiasi, penerjemah, penulisan artikel ilmiah &amp; beasiswa S2/S3.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-[#16A48F] font-semibold">
                Target: Master / Beasiswa GKS Full / Penerjemah
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
