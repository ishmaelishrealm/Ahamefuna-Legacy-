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
  // Color palette - lighter skin tone, proper straw hat colors
  const colors = {
    skin: '#8B5A3C', // Medium brown (not too dark)
    skinHighlight: '#A67B5B',
    hat: '#E7C887', // Light tan straw
    hatStraw: '#D4B575', // Straw texture color
    hatBand: '#8B4C24', // Darker brown band
    shirt: '#D63A2E', // Red shirt
    shorts: '#35597C', // Blue denim shorts
    sandals: '#8B5A2B',
    outline: '#2A1B0A',
    teeth: '#FFFFFF',
    tongue: '#C53030', // Red tongue
    mouth: '#8B1A1A',
    eyes: '#2A1B0A',
    africaMap: '#10B981',
  };

  const baseClasses = `cursor-${interactive ? 'pointer' : 'default'} transition-transform ${interactive ? 'hover:scale-110' : ''} ${animated ? 'animate-bounce' : ''} ${className}`;

  // Calculate dimensions based on size
  const viewBox = variant === 'full' ? '0 0 200 260' : variant === 'head' ? '60 20 80 80' : '0 0 100 100';
  
  // Shared straw hat patterns for all variants
  const strawHatPatterns = (
    <defs>
      <pattern id="strawTextureSmall" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
        <rect width="6" height="6" fill={colors.hat} />
        <line x1="0" y1="2" x2="6" y2="2" stroke={colors.hatStraw} strokeWidth="0.4" opacity="0.5" />
        <line x1="0" y1="4" x2="6" y2="4" stroke={colors.hatStraw} strokeWidth="0.4" opacity="0.4" />
        <line x1="2" y1="0" x2="2" y2="6" stroke={colors.hatStraw} strokeWidth="0.4" opacity="0.3" />
        <line x1="4" y1="0" x2="4" y2="6" stroke={colors.hatStraw} strokeWidth="0.4" opacity="0.4" />
      </pattern>
    </defs>
  );
  
  if (variant === 'logo') {
    // Simplified logo version - just head and hat with laughing expression
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
      >
        {strawHatPatterns}
        {/* Hat with straw texture */}
        <ellipse cx="50" cy="25" rx="35" ry="12" fill="url(#strawTextureSmall)" stroke={colors.outline} strokeWidth="2" />
        <rect x="18" y="25" width="64" height="7" fill={colors.hatBand} stroke={colors.outline} strokeWidth="1" rx="2" />
        
        {/* Head */}
        <circle cx="50" cy="55" r="25" fill={colors.skin} stroke={colors.outline} strokeWidth="2" />
        <ellipse cx="45" cy="50" rx="3" ry="4" fill={colors.skinHighlight} opacity="0.6" />
        <ellipse cx="55" cy="50" rx="3" ry="4" fill={colors.skinHighlight} opacity="0.6" />
        
        {/* Eyes - closed in laughter */}
        <path d="M 40 48 Q 45 46 50 48" stroke={colors.outline} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 50 48 Q 55 46 60 48" stroke={colors.outline} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        
        {/* Eyebrows */}
        <path d="M 38 46 Q 43 44 48 46" stroke={colors.outline} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 52 46 Q 57 44 62 46" stroke={colors.outline} strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Mouth - Big laughing smile with tongue */}
        <path d="M 38 62 Q 38 68 42 70 Q 50 72 58 70 Q 62 68 62 62 Q 60 66 56 67 Q 50 68 44 67 Q 40 66 38 62 Z" fill={colors.mouth} stroke={colors.outline} strokeWidth="2.5" />
        <ellipse cx="50" cy="66" rx="10" ry="6" fill={colors.teeth} />
        <ellipse cx="50" cy="68" rx="6" ry="4" fill={colors.tongue} />
      </svg>
    );
  }

  if (variant === 'head') {
    // Head only version with laughing expression
    return (
      <svg
        width={size}
        height={size}
        viewBox="60 20 80 80"
        className={baseClasses}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
      >
        {strawHatPatterns}
        {/* Hat with straw texture */}
        <ellipse cx="100" cy="30" rx="28" ry="10" fill="url(#strawTextureSmall)" stroke={colors.outline} strokeWidth="2" />
        <rect x="75" y="28" width="50" height="7" fill={colors.hatBand} stroke={colors.outline} strokeWidth="1" rx="2" />
        
        {/* Head */}
        <circle cx="100" cy="65" r="28" fill={colors.skin} stroke={colors.outline} strokeWidth="2" />
        
        {/* Face highlights */}
        <ellipse cx="92" cy="58" rx="3" ry="4" fill={colors.skinHighlight} opacity="0.6" />
        <ellipse cx="108" cy="58" rx="3" ry="4" fill={colors.skinHighlight} opacity="0.6" />
        
        {/* Eyes - closed in laughter */}
        <path d="M 86 60 Q 90 58 94 60" stroke={colors.outline} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 106 60 Q 110 58 114 60" stroke={colors.outline} strokeWidth="3" fill="none" strokeLinecap="round" />
        
        {/* Eyebrows */}
        <path d="M 85 54 Q 90 52 95 54" stroke={colors.outline} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 105 54 Q 110 52 115 54" stroke={colors.outline} strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Mouth - Big open laughing smile */}
        <path d="M 78 72 Q 78 78 82 80 Q 90 82 100 82 Q 110 82 118 80 Q 122 78 122 72 Q 120 76 116 77 Q 110 78 100 78 Q 90 78 84 77 Q 80 76 78 72 Z" fill={colors.mouth} stroke={colors.outline} strokeWidth="2.5" />
        <ellipse cx="100" cy="76" rx="16" ry="10" fill={colors.teeth} />
        <ellipse cx="100" cy="78" rx="10" ry="6" fill={colors.tongue} />
      </svg>
    );
  }

  // Full body version - emerging from Africa map
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 200 260"
      className={baseClasses}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Straw hat texture pattern */}
        <pattern id="strawTexture" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill={colors.hat} />
          {/* Horizontal straw weave lines */}
          <line x1="0" y1="2" x2="8" y2="2" stroke={colors.hatStraw} strokeWidth="0.5" opacity="0.6" />
          <line x1="0" y1="4" x2="8" y2="4" stroke={colors.hatStraw} strokeWidth="0.5" opacity="0.5" />
          <line x1="0" y1="6" x2="8" y2="6" stroke={colors.hatStraw} strokeWidth="0.5" opacity="0.4" />
          {/* Vertical straw weave lines */}
          <line x1="2" y1="0" x2="2" y2="8" stroke={colors.hatStraw} strokeWidth="0.5" opacity="0.4" />
          <line x1="4" y1="0" x2="4" y2="8" stroke={colors.hatStraw} strokeWidth="0.5" opacity="0.5" />
          <line x1="6" y1="0" x2="6" y2="8" stroke={colors.hatStraw} strokeWidth="0.5" opacity="0.3" />
        </pattern>
        {/* Straw hat crown texture */}
        <pattern id="strawCrownTexture" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill={colors.hat} />
          <circle cx="3" cy="3" r="1" fill={colors.hatStraw} opacity="0.3" />
          <line x1="0" y1="3" x2="6" y2="3" stroke={colors.hatStraw} strokeWidth="0.3" opacity="0.4" />
        </pattern>
      </defs>
      {/* Africa Map Silhouette (bottom layer) */}
      <path
        d="M 20 200 Q 30 180 50 190 Q 70 180 90 185 Q 110 175 130 180 Q 150 170 170 175 Q 180 180 180 220 Q 170 240 150 250 Q 120 255 100 250 Q 80 255 60 250 Q 40 245 30 230 Q 20 220 20 200 Z"
        fill={colors.africaMap}
        opacity="0.3"
        stroke={colors.africaMap}
        strokeWidth="2"
      />

      {/* Body - Full body emerging from map */}
      {/* Full legs - showing mid-thigh to feet */}
      {/* Left leg - forward (running pose) */}
      <path
        d="M 85 175 L 82 235 L 88 240 L 92 235 L 89 175 Z"
        fill={colors.skin}
        stroke={colors.outline}
        strokeWidth="2"
      />
      {/* Right leg - extended back */}
      <path
        d="M 115 175 L 118 240 L 112 245 L 108 240 L 111 175 Z"
        fill={colors.skin}
        stroke={colors.outline}
        strokeWidth="2"
      />
      
      {/* Knees visible */}
      <circle cx="87" cy="210" r="5" fill={colors.skin} stroke={colors.outline} strokeWidth="1.5" />
      <circle cx="113" cy="215" r="5" fill={colors.skin} stroke={colors.outline} strokeWidth="1.5" />

      {/* Feet/Toes visible */}
      <ellipse cx="90" cy="238" rx="6" ry="4" fill={colors.skin} stroke={colors.outline} strokeWidth="1.5" />
      <ellipse cx="110" cy="243" rx="6" ry="4" fill={colors.skin} stroke={colors.outline} strokeWidth="1.5" />
      
      {/* Simple sandals */}
      <path d="M 84 238 L 96 238" stroke={colors.sandals} strokeWidth="2" strokeLinecap="round" />
      <path d="M 104 243 L 116 243" stroke={colors.sandals} strokeWidth="2" strokeLinecap="round" />

      {/* Shorts (Blue Denim) - Rolled up cuffs visible */}
      <path
        d="M 70 155 L 82 185 L 88 185 L 100 160 L 100 152 L 88 152 L 85 155 L 75 155 L 70 150 Z"
        fill={colors.shorts}
        stroke={colors.outline}
        strokeWidth="2"
      />
      <path
        d="M 100 160 L 112 185 L 118 185 L 130 160 L 130 152 L 118 152 L 115 155 L 105 155 L 100 150 Z"
        fill={colors.shorts}
        stroke={colors.outline}
        strokeWidth="2"
      />
      {/* Shorts rolled cuffs */}
      <ellipse cx="85" cy="185" rx="4" ry="2" fill="#2A4660" opacity="0.6" />
      <ellipse cx="115" cy="185" rx="4" ry="2" fill="#2A4660" opacity="0.6" />
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

      {/* Shirt (Red, open/unbuttoned) */}
      <path
        d="M 75 105 L 82 120 L 88 120 L 95 115 L 100 105 L 105 115 L 112 120 L 118 120 L 125 105 L 118 98 L 105 98 L 100 92 L 95 98 L 82 98 Z"
        fill={colors.shirt}
        stroke={colors.outline}
        strokeWidth="2"
      />
      {/* Shirt collar/open detail showing chest */}
      <path
        d="M 88 98 L 100 92 L 112 98"
        stroke={colors.outline}
        strokeWidth="2"
        fill="none"
      />
      {/* Chest visible through open shirt */}
      <ellipse cx="100" cy="110" rx="8" ry="12" fill={colors.skin} stroke={colors.outline} strokeWidth="1" />
      {/* S-shaped marking/scar on chest */}
      <path
        d="M 98 105 Q 96 108 94 110 Q 96 113 98 116"
        stroke={colors.outline}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
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

      {/* Arms - Energetic running pose */}
      {/* Left arm (bent forward, running motion) */}
      <path
        d="M 75 120 Q 68 115 60 128 Q 52 142 58 150 Q 62 148 60 143 Q 58 135 65 132 Q 70 125 75 122 Z"
        fill={colors.skin}
        stroke={colors.outline}
        strokeWidth="2"
      />
      {/* Right arm (bent back, running motion) */}
      <path
        d="M 125 120 Q 132 115 140 128 Q 148 142 142 150 Q 138 148 140 143 Q 142 135 135 132 Q 130 125 125 122 Z"
        fill={colors.skin}
        stroke={colors.outline}
        strokeWidth="2"
      />
      {/* Hands - Clenched fists in running pose */}
      <circle cx="62" cy="148" r="5" fill={colors.skin} stroke={colors.outline} strokeWidth="1.5" />
      <circle cx="138" cy="148" r="5" fill={colors.skin} stroke={colors.outline} strokeWidth="1.5" />

      {/* Head */}
      <circle cx="100" cy="80" r="30" fill={colors.skin} stroke={colors.outline} strokeWidth="2" />
      
      {/* Face highlights */}
      <ellipse cx="90" cy="75" rx="3" ry="4" fill={colors.skinHighlight} opacity="0.6" />
      <ellipse cx="110" cy="75" rx="3" ry="4" fill={colors.skinHighlight} opacity="0.6" />

      {/* Eyes - Closed in laughter (joyful expression) */}
      {/* Closed eyes as curved lines */}
      <path
        d="M 84 78 Q 88 76 92 78"
        stroke={colors.outline}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 108 78 Q 112 76 116 78"
        stroke={colors.outline}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Laughter lines around eyes */}
      <path
        d="M 80 75 L 82 73 L 84 75"
        stroke={colors.outline}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 116 75 L 118 73 L 120 75"
        stroke={colors.outline}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Eyebrows - Curved and expressive */}
      <path d="M 82 74 Q 88 72 94 74" stroke={colors.outline} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 106 74 Q 112 72 118 74" stroke={colors.outline} strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Mouth - Wide open laughing mouth with teeth and tongue */}
      <path
        d="M 76 88 Q 76 95 78 98 Q 88 102 100 102 Q 112 102 122 98 Q 124 95 124 88 Q 122 92 118 94 Q 110 96 100 96 Q 90 96 82 94 Q 78 92 76 88 Z"
        fill={colors.mouth}
        stroke={colors.outline}
        strokeWidth="2.5"
      />
      {/* White teeth visible */}
      <ellipse cx="100" cy="93" rx="16" ry="10" fill={colors.teeth} />
      {/* Teeth separations */}
      <path d="M 90 93 L 90 98" stroke={colors.outline} strokeWidth="1" opacity="0.2" />
      <path d="M 96 93 L 96 98" stroke={colors.outline} strokeWidth="1" opacity="0.2" />
      <path d="M 104 93 L 104 98" stroke={colors.outline} strokeWidth="1" opacity="0.2" />
      <path d="M 110 93 L 110 98" stroke={colors.outline} strokeWidth="1" opacity="0.2" />
      {/* Red tongue */}
      <ellipse cx="100" cy="97" rx="8" ry="5" fill={colors.tongue} />
      <path
        d="M 92 97 Q 96 100 100 97 Q 104 100 108 97"
        stroke={colors.outline}
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />

      {/* Hat - Proper straw hat with texture */}
      {/* Hat brim with straw texture */}
      <ellipse cx="100" cy="58" rx="38" ry="14" fill="url(#strawTexture)" stroke={colors.outline} strokeWidth="2" />
      {/* Hat brim underside (darker) */}
      <ellipse cx="100" cy="60" rx="36" ry="10" fill="#D4B575" opacity="0.4" />
      
      {/* Hat band (darker brown) */}
      <rect x="68" y="45" width="64" height="8" fill={colors.hatBand} stroke={colors.outline} strokeWidth="1.5" rx="2" />
      
      {/* Hat crown with straw texture */}
      <ellipse cx="100" cy="42" rx="28" ry="10" fill="url(#strawCrownTexture)" stroke={colors.outline} strokeWidth="2" />
      {/* Hat crown top (lighter highlight) */}
      <ellipse cx="100" cy="38" rx="24" ry="8" fill="#F5E6B3" opacity="0.5" />
      
      {/* Short hair visible under hat */}
      <path
        d="M 82 65 Q 88 62 95 65 Q 102 62 108 65 Q 112 62 118 65"
        stroke={colors.outline}
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
