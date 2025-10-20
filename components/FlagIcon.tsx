interface FlagIconProps {
  country: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function FlagIcon({ country, size = 'md' }: FlagIconProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const flagDesigns: Record<string, JSX.Element> = {
    // Nigeria - Green, White, Green vertical stripes
    '🇳🇬': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="10" height="20" fill="#008751" />
        <rect x="10" width="10" height="20" fill="#FFFFFF" />
        <rect x="20" width="10" height="20" fill="#008751" />
      </svg>
    ),
    
    // Tanzania - Green, Yellow, Blue, Black diagonal
    '🇹🇿': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="20" fill="#1EB53A" />
        <polygon points="0,0 30,20 30,0" fill="#00A3DD" />
        <polygon points="0,0 30,20 0,20" fill="#1EB53A" />
        <polygon points="0,3 27,20 0,20" fill="#000000" />
        <polygon points="3,0 30,17 30,0" fill="#000000" />
        <polygon points="0,1.5 28.5,20 0,20" fill="#FCD116" />
        <polygon points="1.5,0 30,18.5 30,0" fill="#FCD116" />
      </svg>
    ),
    
    // Kenya - Black, Red, Green with white stripes
    '🇰🇪': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="20" fill="#FFFFFF" />
        <rect width="30" height="5" fill="#000000" />
        <rect y="7.5" width="30" height="5" fill="#BE0027" />
        <rect y="15" width="30" height="5" fill="#006B3F" />
        <rect y="5.5" width="30" height="1" fill="#FFFFFF" />
        <rect y="13.5" width="30" height="1" fill="#FFFFFF" />
      </svg>
    ),
    
    // South Africa - Colorful Y design
    '🇿🇦': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="20" fill="#FFFFFF" />
        <rect width="30" height="10" fill="#DE3831" />
        <rect y="10" width="30" height="10" fill="#002395" />
        <polygon points="0,0 0,20 12,10" fill="#000000" />
        <polygon points="0,2 0,18 10,10" fill="#FFB81C" />
        <polygon points="0,1 0,19 11,10" fill="#007A4D" />
      </svg>
    ),
    
    // Ethiopia - Green, Yellow, Red horizontal
    '🇪🇹': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="6.67" fill="#078930" />
        <rect y="6.67" width="30" height="6.67" fill="#FCDD09" />
        <rect y="13.33" width="30" height="6.67" fill="#DA121A" />
        <circle cx="15" cy="10" r="3.5" fill="#0F47AF" stroke="#FCDD09" strokeWidth="0.5" />
      </svg>
    ),
    
    // Egypt - Red, White, Black horizontal with eagle
    '🇪🇬': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="6.67" fill="#C10000" />
        <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
        <rect y="13.33" width="30" height="6.67" fill="#000000" />
        <circle cx="15" cy="10" r="2.5" fill="#C8A000" />
      </svg>
    ),
    
    // Morocco - Red with green star
    '🇲🇦': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="20" fill="#C1272D" />
        <path d="M15,6 L16,9 L19,9 L17,11 L18,14 L15,12 L12,14 L13,11 L11,9 L14,9 Z" 
              fill="none" stroke="#006233" strokeWidth="0.8" />
      </svg>
    ),
    
    // Algeria - Green and White with red crescent
    '🇩🇿': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="15" height="20" fill="#006233" />
        <rect x="15" width="15" height="20" fill="#FFFFFF" />
        <circle cx="15" cy="10" r="3.5" fill="none" stroke="#D21034" strokeWidth="0.8" />
        <path d="M16,10 m2,0 a2,2 0 1,1 0,0.1" fill="#D21034" />
      </svg>
    ),
    
    // Tunisia - Red with white circle and crescent
    '🇹🇳': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="20" fill="#E70013" />
        <circle cx="15" cy="10" r="5" fill="#FFFFFF" />
        <circle cx="15.5" cy="10" r="3.5" fill="none" stroke="#E70013" strokeWidth="0.7" />
        <path d="M16.5,10 m1.8,0 a1.8,1.8 0 1,1 0,0.1" fill="#E70013" />
      </svg>
    ),
    
    // Somalia - Blue with white star
    '🇸🇴': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="20" fill="#4189DD" />
        <path d="M15,5 L16,8.5 L19.5,8.5 L17,10.5 L18,14 L15,11.5 L12,14 L13,10.5 L10.5,8.5 L14,8.5 Z" 
              fill="#FFFFFF" />
      </svg>
    ),
    
    // Zimbabwe - Stripes with bird
    '🇿🇼': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="4" fill="#007A4D" />
        <rect y="4" width="30" height="4" fill="#FFC72C" />
        <rect y="8" width="30" height="4" fill="#DC241F" />
        <rect y="12" width="30" height="4" fill="#FFC72C" />
        <rect y="16" width="30" height="4" fill="#007A4D" />
        <polygon points="0,0 0,20 8,10" fill="#000000" />
        <polygon points="0,1 0,19 7,10" fill="#FFFFFF" />
        <path d="M3.5,10 L5,10 L4.5,8.5 Z" fill="#DC241F" />
      </svg>
    ),
    
    // Burkina Faso - Red and Green with yellow star
    '🇧🇫': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="10" fill="#EF2B2D" />
        <rect y="10" width="30" height="10" fill="#009E49" />
        <path d="M15,6 L16,9 L19,9 L17,11 L18,14 L15,12 L12,14 L13,11 L11,9 L14,9 Z" 
              fill="#FCD116" />
      </svg>
    ),
    
    // Ghana - Red, Yellow, Green with black star
    '🇬🇭': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="6.67" fill="#CE1126" />
        <rect y="6.67" width="30" height="6.67" fill="#FCD116" />
        <rect y="13.33" width="30" height="6.67" fill="#006B3F" />
        <path d="M15,6 L16,9 L19,9 L17,11 L18,14 L15,12 L12,14 L13,11 L11,9 L14,9 Z" 
              fill="#000000" />
      </svg>
    ),
    
    // Senegal - Green, Yellow, Red with green star
    '🇸🇳': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="10" height="20" fill="#00853F" />
        <rect x="10" width="10" height="20" fill="#FDEF42" />
        <rect x="20" width="10" height="20" fill="#E31B23" />
        <path d="M15,6 L16,9 L19,9 L17,11 L18,14 L15,12 L12,14 L13,11 L11,9 L14,9 Z" 
              fill="#00853F" />
      </svg>
    ),
    
    // Gambia - Red, Blue, Green horizontal stripes
    '🇬🇲': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="6" fill="#CE1126" />
        <rect y="7" width="30" height="6" fill="#0C1C8C" />
        <rect y="14" width="30" height="6" fill="#3A7728" />
        <rect y="6" width="30" height="1" fill="#FFFFFF" />
        <rect y="13" width="30" height="1" fill="#FFFFFF" />
      </svg>
    ),
    
    // Uganda - Black, Yellow, Red stripes with bird
    '🇺🇬': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} y={i * 3.33} width="30" height="3.33" 
                fill={i % 2 === 0 ? '#000000' : (i === 1 || i === 5 ? '#FCDC04' : '#D90000')} />
        ))}
        <circle cx="15" cy="10" r="4" fill="#FFFFFF" />
      </svg>
    ),
    
    // DRC - Blue with yellow star and red stripe
    '🇨🇩': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="20" fill="#007FFF" />
        <rect x="28" width="2" height="20" fill="#F7D618" transform="rotate(15 15 10)" />
        <path d="M8,3 L9,6 L12,6 L10,8 L11,11 L8,9 L5,11 L6,8 L4,6 L7,6 Z" 
              fill="#F7D618" />
        <rect y="17" width="30" height="3" fill="#CE1021" />
      </svg>
    ),
    
    // Republic of Congo - Diagonal green, yellow, red
    '🇨🇬': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="20" fill="#009543" />
        <polygon points="0,20 30,0 30,20" fill="#DC241F" />
        <polygon points="0,16 26,0 30,0 30,4 4,20 0,20" fill="#FBDE4A" />
      </svg>
    ),
    
    // Malawi - Black, Red, Green with rising sun
    '🇲🇼': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="6.67" fill="#000000" />
        <rect y="6.67" width="30" height="6.67" fill="#CE1126" />
        <rect y="13.33" width="30" height="6.67" fill="#339E35" />
        <circle cx="15" cy="3.5" r="2.5" fill="#CE1126" />
      </svg>
    ),
    
    // Zambia - Green with eagle and stripes
    '🇿🇲': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="20" fill="#198A00" />
        <rect x="20" y="12" width="3" height="2.67" fill="#EF7D00" />
        <rect x="23" y="12" width="3" height="2.67" fill="#000000" />
        <rect x="26" y="12" width="4" height="2.67" fill="#DE2010" />
        <rect x="20" y="14.67" width="10" height="2.67" fill="#EF7D00" />
      </svg>
    ),
    
    // Mozambique - Stripes with star and book
    '🇲🇿': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="5" fill="#007168" />
        <rect y="7.5" width="30" height="5" fill="#000000" />
        <rect y="15" width="30" height="5" fill="#FCD116" />
        <rect y="5" width="30" height="2.5" fill="#FFFFFF" />
        <rect y="12.5" width="30" height="2.5" fill="#FFFFFF" />
        <polygon points="0,0 0,20 12,10" fill="#D21034" />
        <path d="M6,9 L7,11 L9,11 L7.5,12 L8,14 L6,12.5 L4,14 L4.5,12 L3,11 L5,11 Z" 
              fill="#FCD116" />
      </svg>
    ),
    
    // Benin - Green and Red with yellow stripe
    '🇧🇯': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="12" height="20" fill="#008751" />
        <rect x="12" width="18" height="10" fill="#FCD116" />
        <rect x="12" y="10" width="18" height="10" fill="#E8112D" />
      </svg>
    ),
    
    // Niger - Orange, White, Green horizontal
    '🇳🇪': (
      <svg viewBox="0 0 30 20" className={sizeClasses[size]}>
        <rect width="30" height="6.67" fill="#E05206" />
        <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
        <rect y="13.33" width="30" height="6.67" fill="#0DB02B" />
        <circle cx="15" cy="10" r="2.5" fill="#E05206" />
      </svg>
    )
  };

  return flagDesigns[country] || (
    <div className={`${sizeClasses[size]} rounded bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-xs`}>
      {country}
    </div>
  );
}
