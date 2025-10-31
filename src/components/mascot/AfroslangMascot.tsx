import React from 'react';

interface AfroslangMascotProps {
  size?: number;
  animated?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: 'full' | 'head' | 'logo'; // full body, head only, or simplified logo
}

export function AfroslangMascot({
  size = 128,
  animated = true,
  interactive = false,
  onClick,
  className = '',
  variant = 'full'
}: AfroslangMascotProps) {
  // Color palette from design specs
  const colors = {
    skin: '#5B3922',
    skinHighlight: '#7A5238',
    hat: '#E7C887',
    hatBand: '#8B4C24',
    shirt: '#D63A2E',
    shorts: '#35597C',
    sandals: '#8B5A2B',
    outline: '#2A1B0A',
    teeth: '#FFFFFF',
    mouth: '#C53030',
    eyes: '#2A1B0A',
    africaMap: '#10B981',
  };

  const baseClasses = `cursor-${interactive ? 'pointer' : 'default'} transition-transform ${interactive ? 'hover:scale-110' : ''} ${animated ? 'animate-bounce' : ''} ${className}`;

  // Calculate dimensions based on size
  const viewBox = variant === 'full' ? '0 0 200 240' : variant === 'head' ? '60 20 80 80' : '0 0 100 100';
  
  if (variant === 'logo') {
    // Simplified logo version - just head and hat
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hat */}
        <ellipse cx="50" cy="25" rx="35" ry="12" fill={colors.hat} stroke={colors.outline} strokeWidth="2" />
        <rect x="20" y="25" width="60" height="8" fill={colors.hatBand} stroke={colors.outline} strokeWidth="1" />
        
        {/* Head */}
        <circle cx="50" cy="55" r="25" fill={colors.skin} stroke={colors.outline} strokeWidth="2" />
        <ellipse cx="45" cy="50" rx="4" ry="5" fill={colors.skinHighlight} />
        <ellipse cx="55" cy="50" rx="4" ry="5" fill={colors.skinHighlight} />
        
        {/* Eyes */}
        <ellipse cx="43" cy="52" rx="3" ry="4" fill={colors.eyes} />
        <ellipse cx="57" cy="52" rx="3" ry="4" fill={colors.eyes} />
        
        {/* Eyebrows */}
        <path d="M 38 46 Q 43 44 48 46" stroke={colors.outline} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 52 46 Q 57 44 62 46" stroke={colors.outline} strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Mouth - Big smile */}
        <path d="M 38 62 Q 50 70 62 62" stroke={colors.outline} strokeWidth="2.5" fill={colors.mouth} strokeLinecap="round" />
        <path d="M 42 64 Q 50 68 58 64" stroke={colors.teeth} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 'head') {
    // Head only version
    return (
      <svg
        width={size}
        height={size}
        viewBox="60 20 80 80"
        className={baseClasses}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hat */}
        <ellipse cx="100" cy="30" rx="28" ry="10" fill={colors.hat} stroke={colors.outline} strokeWidth="2" />
        <rect x="75" y="30" width="50" height="6" fill={colors.hatBand} stroke={colors.outline} strokeWidth="1" />
        
        {/* Head */}
        <circle cx="100" cy="65" r="28" fill={colors.skin} stroke={colors.outline} strokeWidth="2" />
        
        {/* Face highlights */}
        <ellipse cx="92" cy="58" rx="3" ry="4" fill={colors.skinHighlight} opacity="0.6" />
        <ellipse cx="108" cy="58" rx="3" ry="4" fill={colors.skinHighlight} opacity="0.6" />
        
        {/* Eyes */}
        <ellipse cx="90" cy="60" rx="2.5" ry="3.5" fill={colors.eyes} />
        <ellipse cx="110" cy="60" rx="2.5" ry="3.5" fill={colors.eyes} />
        
        {/* Eyebrows */}
        <path d="M 85 54 Q 90 52 95 54" stroke={colors.outline} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 105 54 Q 110 52 115 54" stroke={colors.outline} strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Mouth - Big open smile */}
        <ellipse cx="100" cy="75" rx="18" ry="12" fill={colors.mouth} stroke={colors.outline} strokeWidth="2" />
        <ellipse cx="100" cy="72" rx="12" ry="8" fill={colors.teeth} />
      </svg>
    );
  }

  // Full body version - emerging from Africa map
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 200 240"
      className={baseClasses}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Africa Map Silhouette (bottom layer) */}
      <path
        d="M 20 180 Q 30 160 50 170 Q 70 160 90 165 Q 110 155 130 160 Q 150 150 170 155 Q 180 160 180 200 Q 170 220 150 230 Q 120 235 100 230 Q 80 235 60 230 Q 40 225 30 210 Q 20 200 20 180 Z"
        fill={colors.africaMap}
        opacity="0.3"
        stroke={colors.africaMap}
        strokeWidth="2"
      />

      {/* Body - Emerging from map */}
      {/* Legs */}
      <path
        d="M 85 180 L 75 220 L 80 225 L 90 220 L 85 180 Z"
        fill={colors.skin}
        stroke={colors.outline}
        strokeWidth="2"
      />
      <path
        d="M 115 180 L 125 220 L 120 225 L 110 220 L 115 180 Z"
        fill={colors.skin}
        stroke={colors.outline}
        strokeWidth="2"
      />

      {/* Sandals */}
      <ellipse cx="80" cy="225" rx="8" ry="4" fill={colors.sandals} stroke={colors.outline} strokeWidth="1.5" />
      <ellipse cx="120" cy="225" rx="8" ry="4" fill={colors.sandals} stroke={colors.outline} strokeWidth="1.5" />

      {/* Shorts (Blue Denim) */}
      <path
        d="M 70 160 L 80 180 L 90 180 L 100 160 L 100 155 L 90 155 L 85 160 L 75 160 L 70 155 Z"
        fill={colors.shorts}
        stroke={colors.outline}
        strokeWidth="2"
      />
      <path
        d="M 100 160 L 110 180 L 120 180 L 130 160 L 130 155 L 120 155 L 115 160 L 105 160 L 100 155 Z"
        fill={colors.shorts}
        stroke={colors.outline}
        strokeWidth="2"
      />
      {/* Shorts shading */}
      <path
        d="M 75 165 L 85 175 L 90 175 L 95 165 Z"
        fill="#2A4660"
        opacity="0.4"
      />
      <path
        d="M 105 165 L 115 175 L 120 175 L 125 165 Z"
        fill="#2A4660"
        opacity="0.4"
      />

      {/* Torso with defined abs (S-shape) */}
      <path
        d="M 75 120 L 85 160 L 100 160 L 115 160 L 125 120 L 120 115 L 105 120 L 95 120 L 80 115 Z"
        fill={colors.skin}
        stroke={colors.outline}
        strokeWidth="2"
      />
      {/* Abs definition (subtle S-shape line) */}
      <path
        d="M 85 135 Q 90 140 95 135 Q 100 130 105 135 Q 110 140 115 135"
        stroke={colors.outline}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
      />
      {/* Torso highlight */}
      <ellipse cx="100" cy="140" rx="15" ry="8" fill={colors.skinHighlight} opacity="0.3" />

      {/* Shirt (Red, open) */}
      <path
        d="M 80 110 L 85 120 L 90 120 L 95 115 L 100 110 L 105 115 L 110 120 L 115 120 L 120 110 L 115 105 L 105 105 L 100 100 L 95 105 L 85 105 Z"
        fill={colors.shirt}
        stroke={colors.outline}
        strokeWidth="2"
      />
      {/* Shirt collar/open detail */}
      <path
        d="M 92 105 L 100 100 L 108 105"
        stroke={colors.outline}
        strokeWidth="2"
        fill="none"
      />
      {/* Shirt folds */}
      <path
        d="M 88 115 L 88 120"
        stroke={colors.outline}
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M 112 115 L 112 120"
        stroke={colors.outline}
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Arms - Dynamic pose */}
      {/* Left arm (extended forward/up) */}
      <path
        d="M 70 130 Q 60 125 55 140 Q 50 155 60 160 Q 65 158 62 152 Q 58 145 65 145 Q 68 138 70 135 Z"
        fill={colors.skin}
        stroke={colors.outline}
        strokeWidth="2"
      />
      {/* Right arm (extended forward/up) */}
      <path
        d="M 130 130 Q 140 125 145 140 Q 150 155 140 160 Q 135 158 138 152 Q 142 145 135 145 Q 132 138 130 135 Z"
        fill={colors.skin}
        stroke={colors.outline}
        strokeWidth="2"
      />
      {/* Hands - Rounded fists */}
      <circle cx="58" cy="155" r="6" fill={colors.skin} stroke={colors.outline} strokeWidth="1.5" />
      <circle cx="142" cy="155" r="6" fill={colors.skin} stroke={colors.outline} strokeWidth="1.5" />

      {/* Head */}
      <circle cx="100" cy="80" r="30" fill={colors.skin} stroke={colors.outline} strokeWidth="2" />
      
      {/* Face highlights */}
      <ellipse cx="90" cy="75" rx="3" ry="4" fill={colors.skinHighlight} opacity="0.6" />
      <ellipse cx="110" cy="75" rx="3" ry="4" fill={colors.skinHighlight} opacity="0.6" />

      {/* Eyes - Simple, oval with thick outline */}
      <ellipse cx="88" cy="82" rx="3.5" ry="5" fill={colors.eyes} />
      <ellipse cx="112" cy="82" rx="3.5" ry="5" fill={colors.eyes} />
      {/* Eye highlights */}
      <ellipse cx="89" cy="80" rx="1.5" ry="2" fill="#FFFFFF" />

      {/* Eyebrows - Curved and expressive */}
      <path d="M 82 74 Q 88 72 94 74" stroke={colors.outline} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 106 74 Q 112 72 118 74" stroke={colors.outline} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Mouth - Wide grin with white teeth and red inner mouth */}
      <ellipse cx="100" cy="95" rx="22" ry="14" fill={colors.mouth} stroke={colors.outline} strokeWidth="2.5" />
      <ellipse cx="100" cy="92" rx="14" ry="9" fill={colors.teeth} />
      {/* Teeth separations */}
      <path d="M 92 92 L 92 97" stroke={colors.outline} strokeWidth="1" opacity="0.3" />
      <path d="M 100 92 L 100 97" stroke={colors.outline} strokeWidth="1" opacity="0.3" />
      <path d="M 108 92 L 108 97" stroke={colors.outline} strokeWidth="1" opacity="0.3" />

      {/* Hat - Straw hat with band (on top of head) */}
      <ellipse cx="100" cy="50" rx="32" ry="12" fill={colors.hat} stroke={colors.outline} strokeWidth="2" />
      {/* Hat band */}
      <rect x="70" y="50" width="60" height="7" fill={colors.hatBand} stroke={colors.outline} strokeWidth="1" />
      {/* Hat shading */}
      <ellipse cx="100" cy="52" rx="28" ry="8" fill="#F5E6B3" opacity="0.5" />
      {/* Hat rim */}
      <ellipse cx="100" cy="56" rx="35" ry="4" fill="#D4B575" opacity="0.6" />
    </svg>
  );
}
