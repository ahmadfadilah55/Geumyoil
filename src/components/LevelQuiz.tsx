import React, { useState } from 'react';
import { HelpCircle, CheckCircle, Sparkles, ArrowRight, ArrowLeft, RotateCcw, MessageSquare, Award } from 'lucide-react';

interface QuizProps {
  onOpenConsultation: (customNotes?: string) => void;
}

export const LevelQuiz: React.FC<QuizProps> = ({ onOpenConsultation }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    level: '',
    mode: '',
    timeline: ''
  });

  const handleSelect = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (step < 4) {
      setStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ goal: '', level: '', mode: '', timeline: '' });
  };

  const generateRecommendation = () => {
    let program = 'Paket Reguler Percakapan Bahasa Korea';
    let path = 'Percakapan Harian';
    let duration = '2 - 3 Bulan';
    let categoryName = 'Program Reguler Standard';
    let offset = 0;

    // Determine category & offset based on user's goal
    if (answers.goal === 'Kerja Resmi EPS-TOPIK (G2G)') {
      program = 'Paket Intensif EPS-TOPIK';
      path = 'Kerja Resmi Korea';
      duration = '3 Bulan Intensif';
      categoryName = 'Program Kerja EPS-TOPIK';
      offset = 500000;
    } else if (answers.goal === 'Studi Kuliah & Beasiswa GKS') {
      program = 'Paket Sukses Studi & Beasiswa Korea (GKS)';
      path = 'Studi Korea Selatan';
      duration = '4 - 6 Bulan Mentoring';
      categoryName = 'Program TOPIK Fokus';
      offset = 300000;
    } else if (answers.goal === 'Ujian Sertifikasi TOPIK') {
      program = 'Paket Bimbingan TOPIK Fokus (Level 1 - 6)';
      path = 'Sertifikasi Resmi TOPIK';
      duration = '3 Bulan Intensif';
      categoryName = 'Program TOPIK Fokus';
      offset = 300000;
    } else {
      program = 'Paket Reguler Percakapan Bahasa Korea';
      path = 'Percakapan Harian';
      duration = '2 - 3 Bulan';
      categoryName = 'Program Reguler Standard';
      offset = 0;
    }

    return { program, path, duration, categoryName, estCost: 'Jadwal & Konsultasi Terbuka' };
  };

  const rec = generateRecommendation();

  return (
    <section id="quiz-level" className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0047A0] border border-blue-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Uji Penempatan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Tes Level &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
              Rekomendasi Program
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Isi survei singkat di bawah ini dan temukan program belajar yang paling tepat untukmu:
          </p>
        </div>

        {/* Quiz Box Wrapper */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-2xs relative">
          


          {/* QUESTION 1: GOAL */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="text-lg font-bold text-slate-900">
                1. Apa tujuan utama kamu belajar Bahasa Korea?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Kerja Resmi EPS-TOPIK (G2G)', desc: 'Ingin bekerja di industri resmi Korea Selatan' },
                  { title: 'Studi Kuliah & Beasiswa GKS', desc: 'Ingin masuk S1/S2/S3 universitas di Korea Selatan' },
                  { title: 'Lancar Percakapan & Hobi', desc: 'Suka K-Pop/K-Drama dan ingin lancar berkomunikasi' },
                  { title: 'Ujian Sertifikasi TOPIK', desc: 'Perlu sertifikat resmi TOPIK Level 1 - 6 untuk karir' }
                ].map((opt) => (
                  <button
                    key={opt.title}
                    onClick={() => handleSelect('goal', opt.title)}
                    className="p-5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 hover:border-[#CD2E3A]/50 text-left transition-all group cursor-pointer"
                  >
                    <div className="font-bold text-sm text-slate-900 group-hover:text-[#CD2E3A]">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* QUESTION 2: LEVEL */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="text-lg font-bold text-slate-900">
                2. Seberapa jauh kemampuan Bahasa Korea-mu saat ini?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Pemula Nol Besar', desc: 'Sama sekali belum tahu abjad Hangeul' },
                  { title: 'Sudah Bisa Baca Hangeul', desc: 'Bisa membaca huruf tapi belum mengerti arti kalimat' },
                  { title: 'Pernah Belajar Dasar', desc: 'Mengerti kosakata dasar &amp; sapaan harian' },
                  { title: 'Sudah Memiliki TOPIK 1-2', desc: 'Ingin lanjut ke level Intermediate / Advanced' }
                ].map((opt) => (
                  <button
                    key={opt.title}
                    onClick={() => handleSelect('level', opt.title)}
                    className="p-5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 hover:border-[#CD2E3A]/50 text-left transition-all group cursor-pointer"
                  >
                    <div className="font-bold text-sm text-slate-900 group-hover:text-[#CD2E3A]">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali ke pertanyaan sebelumnya</span>
                </button>
              </div>
            </div>
          )}

          {/* QUESTION 3: MODE */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="text-lg font-bold text-slate-900">
                3. Metode belajar apa yang lebih kamu sukai?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Online Group Class', desc: 'Kelas 3 – 5 Murid Per Kelas' },
                  { title: 'Online Private Class', desc: 'Kelas Privat 1 On 1' },
                  { title: 'Hybrid Private Class', desc: 'Kelas Privat 1 On 1 Pertemuan Online & Offline at the cafe' },
                  { title: 'Offline Private Class', desc: 'Kelas Privat 1 On 1 Pertemuan Offline at the cafe' }
                ].map((opt) => (
                  <button
                    key={opt.title}
                    onClick={() => handleSelect('mode', opt.title)}
                    className="p-5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 hover:border-[#CD2E3A]/50 text-left transition-all group cursor-pointer"
                  >
                    <div className="font-bold text-sm text-slate-900 group-hover:text-[#CD2E3A]">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali ke pertanyaan sebelumnya</span>
                </button>
              </div>
            </div>
          )}

          {/* QUESTION 4: TIMELINE */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="text-lg font-bold text-slate-900">
                4. Kapan target waktu kamu ingin mencapai hasil/berangkat?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Segera (< 3 Bulan)', desc: 'Mengejar gelombang pendaftaran terdekat' },
                  { title: 'Dalam 3 - 6 Bulan', desc: 'Persiapan matang sebelum keberangkatan' },
                  { title: 'Dalam 6 - 12 Bulan', desc: 'Santai tapi terstruktur konsisten' },
                  { title: 'Masih Eksplorasi Rencana', desc: 'Ingin tanya-tanya informasi dulu' }
                ].map((opt) => (
                  <button
                    key={opt.title}
                    onClick={() => {
                      handleSelect('timeline', opt.title);
                      setStep(5);
                    }}
                    className="p-5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 hover:border-[#CD2E3A]/50 text-left transition-all group cursor-pointer"
                  >
                    <div className="font-bold text-sm text-slate-900 group-hover:text-[#CD2E3A]">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali ke pertanyaan sebelumnya</span>
                </button>
              </div>
            </div>
          )}

          {/* RESULT SUMMARY (STEP 5) */}
          {step === 5 && (
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-6 sm:p-8">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CD2E3A]/20 text-[#CD2E3A] text-xs font-bold mb-4">
                  <Award className="w-4 h-4" />
                  <span>Rekomendasi Spesial Terkalkulasi</span>
                </div>

                <h4 className="text-2xl font-black tracking-tighter text-slate-900 mb-2">
                  {rec.program}
                </h4>
                <p className="text-xs text-slate-600 mb-6">
                  Berdasarkan jawabanmu: <strong>{answers.goal}</strong> ({answers.level}) via {answers.mode}.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 items-stretch">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between h-full min-h-[90px]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Jalur Program</span>
                    <p className="text-sm font-extrabold text-[#CD2E3A] leading-snug flex-1 flex items-center">{rec.path}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between h-full min-h-[90px]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Estimasi Durasi</span>
                    <p className="text-sm font-extrabold text-amber-600 leading-snug flex-1 flex items-center">{rec.duration}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between h-full min-h-[90px]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">{rec.categoryName}</span>
                    <p className="text-sm font-extrabold text-[#0047A0] font-mono leading-snug flex-1 flex items-center">{rec.estCost}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const targetPhone = '6289633663799';
                      const message = `Halo Admin Geumyoil, saya ingin berkonsultasi mengenai rekomendasi program dari hasil Tes Level saya:%0A%0A🎯 *Program:* ${rec.program}%0A🌟 *Tujuan:* ${answers.goal}%0A📈 *Level:* ${answers.level}%0A🖥️ *Format:* ${answers.mode}%0A%0AMohon panduannya lebih lanjut.`;
                      window.open(`https://wa.me/${targetPhone}?text=${message}`, '_blank');
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#CD2E3A] hover:bg-[#a8252f] text-white font-bold rounded-full shadow-lg transition-all cursor-pointer text-xs uppercase tracking-wider"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Klaim Rekomendasi &amp; Konsultasi WA</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="px-5 py-3.5 bg-white hover:bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200 cursor-pointer"
                  >
                    Ulangi Quiz
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

