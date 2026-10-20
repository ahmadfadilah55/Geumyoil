import React from 'react';
import { ContactSection } from './ContactSection';

interface PricingProps {
  onOpenConsultation: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  return <ContactSection onOpenConsultation={onOpenConsultation} />;
};
