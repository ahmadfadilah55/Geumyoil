import React, { useState } from 'react';
import { Volume2, Sparkles, BookOpen, Check, ArrowRight, Lightbulb } from 'lucide-react';
import { HANGEUL_WORDS } from '../data/koreaData';
import { HangeulWord } from '../types';

interface HangeulWidgetProps {
  onOpenConsultation: () => void;
}

export const HangeulWidget: React.FC<HangeulWidgetProps> = ({ onOpenConsultation }) => {
  const [selectedWord, setSelectedWord] = useState<HangeulWord>(HANGEUL_WORDS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userQuizAnswer, setUserQuizAnswer] = useState<string | null>(null);

  const handlePlayAudio = (text: string) => {
    setIsPlaying(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.85;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlaying(false), 1000);
    }
  };

  return (
    <section id="hangeul-demo" className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-[#16A48F] border border-teal-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Aksara Korea</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Coba Belajar Hangeul Pertama Mu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
              Sekarang!
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Klik kata-kata di bawah untuk mendengarkan pelafalan asli Bahasa Korea dan memahami maknanya:
          </p>
        </div>

        {/* Main Flashcard & Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Word Pills Selector Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            <div className="text-xs font-mono uppercase text-slate-500 mb-1">Pilih Kosakata:</div>
            {HANGEUL_WORDS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedWord(item);
                  handlePlayAudio(item.hangul);
                }}
                className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                  selectedWord.id === item.id
                    ? 'bg-[#CD2E3A]/20 border-[#CD2E3A] text-slate-900 shadow-lg shadow-rose-950/40'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold font-mono text-[#0047A0]">{item.hangul}</span>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 block">{item.romanization}</span>
                    <span className="text-xs text-slate-800 font-medium">{item.meaning}</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-600">
                  <Volume2 className="w-4 h-4 text-blue-400" />
                </div>
              </button>
            ))}
          </div>

          {/* Active Word Display Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#9a212a]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              {/* Category tag & Audio Button */}
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-300 rounded-full text-xs font-semibold">
                  {selectedWord.category}
                </span>

                <button
                  onClick={() => handlePlayAudio(selectedWord.hangul)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isPlaying
                      ? 'bg-[#CD2E3A] text-white scale-105 shadow-lg'
                      : 'bg-[#0047A0] hover:bg-[#003380] text-white'
                  }`}
                >
                  <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-bounce' : ''}`} />
                  <span>{isPlaying ? 'Memutar Suara...' : 'Dengarkan Pelafalan'}</span>
                </button>
              </div>

              {/* Big Hangul Text */}
              <div className="text-center my-6">
                <div className="text-5xl sm:text-6xl font-black text-[#0047A0] font-mono tracking-wide mb-3">
                  {selectedWord.hangul}
                </div>
                <div className="text-lg font-semibold text-[#CD2E3A] font-mono tracking-wider">
                  [{selectedWord.romanization}]
                </div>
                <div className="text-2xl font-bold text-slate-900 mt-3">
                  "{selectedWord.meaning}"
                </div>
              </div>

              {/* Tips / Context Box */}
              <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 flex items-start gap-3 my-6">
                <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">Tips Penggunaan:</div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {selectedWord.tips}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA in Hangeul Card */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Ingin menguasai 500+ kosakata penting lainnya dalam 3 bulan?
              </span>
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#CD2E3A] hover:bg-[#a8252f] text-white font-bold text-xs rounded-full shadow-md transition-all cursor-pointer"
              >
                <span>Daftar Kelas Bahasa Korea</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
