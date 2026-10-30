import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'gold',
  size = 'md',
  showText = true,
}) => {
  const isLight = variant === 'light';
  const isGold = variant === 'gold';

  const textColor = isLight ? 'text-[#F2F0EB]' : isGold ? 'text-[#D9B97E]' : 'text-[#073040]';
  const subColor = isLight ? 'text-[#D9D1C7]' : isGold ? 'text-[#D9D1C7]' : 'text-[#A69586]';

  const imageHeights = {
    sm: 'h-9 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-14 sm:h-16 w-auto',
  };

  const textSizes = {
    sm: 'text-sm font-semibold tracking-wide',
    md: 'text-lg sm:text-xl font-bold tracking-wider',
    lg: 'text-xl sm:text-2xl font-bold tracking-wider',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.3em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Uploaded Logo Image with Luxury Gold Framing */}
      <div className="relative rounded-lg overflow-hidden border border-[#D9B97E]/50 shadow-sm bg-[#F2F0EB] flex items-center justify-center shrink-0 p-0.5 hover:border-[#D9B97E] transition-colors">
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-07-22_at_10.37.18_466adf6e.jpeg"
          alt="Logotipo Oficial Somos LJ Mídia"
          className={`${imageHeights[size]} object-cover rounded-md`}
        />
      </div>

      {/* Typography Wordmark: SOMOS LJ MÍDIA */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-serif leading-none ${textColor} ${textSizes[size]}`}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            SOMOS LJ MÍDIA
          </span>
          <span className={`font-sans font-medium uppercase ${subColor} ${subSizes[size]} mt-0.5`}>
            Presença Digital
          </span>
        </div>
      )}
    </div>
  );
};
