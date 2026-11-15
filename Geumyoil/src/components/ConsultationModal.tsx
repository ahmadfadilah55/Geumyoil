import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2, MessageSquare, Phone, User, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
}

export const ConsultationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  initialProgram = ''
}) => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    program: initialProgram || (language === 'en' ? 'General Consultation' : 'Konsultasi Umum')
  });

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        program: initialProgram || (language === 'en' ? 'General Consultation' : 'Konsultasi Umum')
      }));
      setSubmitted(false);
    }
  }, [isOpen, initialProgram, language]);

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build pre-filled WhatsApp link
    const targetPhone = '6289633663799'; // Admin WhatsApp
    const message = `Halo Admin Geumyoil, saya ingin konsultasi gratis:%0A%0A` +
      `👤 *Nama:* ${encodeURIComponent(formData.name)}%0A` +
      `📱 *WA:* ${encodeURIComponent(formData.phone)}%0A` +
      `📍 *Kota:* ${encodeURIComponent(formData.city)}%0A` +
      `🎯 *Program:* ${encodeURIComponent(formData.program)}`;

    const waUrl = `https://wa.me/${targetPhone}?text=${message}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      
      <div 
        className="bg-white border border-slate-200 text-slate-900 rounded-3xl w-full max-w-[95vw] sm:max-w-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tighter text-slate-900">
              {t.modal.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              {t.modal.desc}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
              
              <div className="sm:col-span-1">
                <label className="text-xs font-semibold text-slate-600 block mb-1">{t.modal.name} *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder={t.modal.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#CD2E3A]"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label className="text-xs font-semibold text-slate-600 block mb-1">{t.modal.wa} *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder={t.modal.waPlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#CD2E3A]"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label className="text-xs font-semibold text-slate-600 block mb-1">{language === 'en' ? 'City / Location *' : 'Kota Domisili *'}</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder={language === 'en' ? 'e.g. Jakarta / Bandung' : 'Contoh: Jakarta / Bandung'}
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#CD2E3A]"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label className="text-xs font-semibold text-slate-600 block mb-1">{t.modal.program}</label>
                <div className="relative">
                  <input
                    type="text"
                    readOnly
                    value={formData.program}
                    className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-600 cursor-not-allowed focus:outline-none"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#CD2E3A] hover:bg-[#a8252f] text-white font-black tracking-tighter text-sm rounded-full shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.modal.submit}</span>
                </button>
              </div>

              <div className="sm:col-span-2 text-[10px] text-slate-500 text-center">
                🔒 {language === 'en' ? 'Your data is strictly confidential & only used for Geumyoil consultation services.' : 'Data Anda terjamin kerahasiaannya & hanya digunakan untuk layanan konsultasi Geumyoil.'}
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#0047A0]/20 text-[#0047A0] border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{language === 'en' ? 'Form Submitted!' : 'Formulir Terkirim!'}</h3>
            <p className="text-xs text-slate-600">
              {language === 'en' ? 'Opening WhatsApp chat with Geumyoil consultant...' : 'Membuka obrolan WhatsApp dengan Admin Konsultan Geumyoil...'}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-slate-100 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-full cursor-pointer"
            >
              {language === 'en' ? 'Close Window' : 'Tutup Window'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
