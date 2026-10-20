import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';

interface MoreSectionProps {
  onOpenConsultation?: (program?: string) => void;
}

export const MoreSection: React.FC<MoreSectionProps> = ({ onOpenConsultation }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/faq' || location.hash === '#faq') {
      const faqEl = document.getElementById('faq');
      if (faqEl) {
        faqEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <TestimonialsSection />
      <div className="border-t border-slate-200">
        <FAQSection onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
