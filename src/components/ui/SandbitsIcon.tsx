import React from 'react';

interface SandbitsIconProps {
  className?: string;
  size?: number;
}

export function SandbitsIcon({ className = '', size = 20 }: SandbitsIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Coin outer circle */}
      <circle cx="12" cy="12" r="9" fill="#D4A574" stroke="#B8860B" strokeWidth="1.5" />
      
      {/* Coin inner highlight */}
      <circle cx="12" cy="10" r="6" fill="#F4D03F" opacity="0.6" />
      
      {/* Coin center circle */}
      <circle cx="12" cy="12" r="5" fill="#D4A574" />
      
      {/* Sand particles falling through */}
      <circle cx="11" cy="14" r="1" fill="#8B6F47" opacity="0.8" />
      <circle cx="13" cy="15.5" r="0.8" fill="#8B6F47" opacity="0.7" />
      <circle cx="10.5" cy="16.5" r="0.6" fill="#8B6F47" opacity="0.6" />
      <circle cx="13.5" cy="17" r="0.7" fill="#8B6F47" opacity="0.7" />
      <circle cx="11.5" cy="18" r="0.5" fill="#8B6F47" opacity="0.5" />
      
      {/* Sand stream lines */}
      <line x1="10.5" y1="13" x2="10" y2="19" stroke="#8B6F47" strokeWidth="0.5" opacity="0.4" strokeDasharray="1,1" />
      <line x1="12" y1="13" x2="11.5" y2="19" stroke="#8B6F47" strokeWidth="0.5" opacity="0.4" strokeDasharray="1,1" />
      <line x1="13.5" y1="13" x2="13" y2="19" stroke="#8B6F47" strokeWidth="0.5" opacity="0.4" strokeDasharray="1,1" />
      
      {/* Coin shine */}
      <ellipse cx="10" cy="9" rx="2" ry="1.5" fill="white" opacity="0.3" />
    </svg>
  );
}
