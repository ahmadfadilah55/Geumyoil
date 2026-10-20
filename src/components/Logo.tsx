import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <img 
    src="/assets/geumyoil.png" 
    alt="Geumyoil Logo" 
    className={`${className} object-contain`} 
  />
);
