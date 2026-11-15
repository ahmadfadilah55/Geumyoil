import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/koreaData';

interface FAQProps {
  onOpenConsultation: (question?: string) => void;
}

export const FAQSection: React.FC<FAQProps> = ({ onOpenConsultation }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<'all' | 'general' | 'career' | 'study' | 'payment'>('all');

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-white text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Masih Punya{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
              Pertanyaan?
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Temukan jawaban cepat seputar kursus, pendaftaran kerja EPS-TOPIK, beasiswa kuliah, dan informasi pendaftaran:
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 mb-8 shadow-2xs space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari pertanyaan... (contoh: umur, pendaftaran, beasiswa, EPS)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 text-slate-900 pl-10 pr-4 py-2.5 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'all', label: 'Semua Pertanyaan' },
              { id: 'general', label: 'Umum & Kursus' },
              { id: 'career', label: 'Kerja EPS-TOPIK' },
              { id: 'study', label: 'Beasiswa Studi' },
              { id: 'payment', label: 'Pendaftaran' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  category === cat.id
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#CD2E3A] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#CD2E3A] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#CD2E3A]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-500 text-xs sm:text-sm bg-white rounded-2xl border border-slate-200">
              Tidak ada hasil FAQ yang sesuai. Klik tombol di bawah untuk bertanya langsung via WhatsApp.
            </div>
          )}
        </div>

        {/* Ask Direct WA Box */}
        <div className="mt-8 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-2xs border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">Pertanyaanmu belum terjawab di atas?</h4>
            <p className="text-xs sm:text-sm text-slate-300">Tim konsultan kami aktif merespons 24/7 melalui WhatsApp.</p>
          </div>
          <button
            onClick={() => onOpenConsultation('Pertanyaan Khusus dari FAQ')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#CD2E3A] hover:bg-[#a8252f] text-white text-xs sm:text-sm font-bold rounded-full shadow-2xs hover:shadow-md transition-all cursor-pointer shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tanya Admin Via WA</span>
          </button>
        </div>

      </div>
    </section>
  );
};
