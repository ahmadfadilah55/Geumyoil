import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TriplePath } from './TriplePath';
import { FlexibilitySection } from './FlexibilitySection';
import { ContactSection } from './ContactSection';

interface ProgramSectionProps {
  onOpenConsultation: (program?: string) => void;
}

export const ProgramSection: React.FC<ProgramSectionProps> = ({ onOpenConsultation }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/hubungi-kami' || location.hash === '#hubungi-kami' || location.pathname === '/biaya') {
      const contactEl = document.getElementById('hubungi-kami');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div>
        <FlexibilitySection onOpenConsultation={onOpenConsultation} />
        <TriplePath onOpenConsultation={onOpenConsultation} />
      </div>
      <div className="border-t border-slate-200">
        <ContactSection onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};
