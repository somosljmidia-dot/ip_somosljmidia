import React from 'react';

export const BotanicalBranch: React.FC<{ className?: string }> = ({
  className = 'w-16 h-16 text-[#073040]/25',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Delicate thin-line botanical branch in navy/petroleum */}
      <path
        d="M20 85 C35 65, 45 40, 75 15"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Leaf pairs */}
      <path
        d="M32 68 C28 58, 20 60, 22 72 C27 74, 30 72, 32 68 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M37 62 C45 58, 48 65, 42 71 C38 71, 36 67, 37 62 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M46 50 C40 40, 32 43, 35 54 C40 56, 44 54, 46 50 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M52 44 C60 39, 63 47, 57 53 C53 53, 51 49, 52 44 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M61 31 C56 22, 48 25, 51 35 C55 37, 59 35, 61 31 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M68 24 C76 20, 78 28, 72 33 C68 33, 67 29, 68 24 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Tip bud */}
      <path
        d="M75 15 C78 12, 82 14, 80 18 C77 20, 74 18, 75 15 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.12"
      />
    </svg>
  );
};

export const DelicateConstellation: React.FC<{ className?: string }> = ({
  className = 'w-12 h-12 text-[#D9B97E]/40',
}) => {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Thin constellation connecting lines */}
      <path
        d="M15 45 L35 25 L55 35 L65 18 M35 25 L45 55 L55 35"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        strokeOpacity="0.7"
      />
      {/* Golden stars */}
      <circle cx="15" cy="45" r="2" fill="currentColor" />
      <circle cx="35" cy="25" r="2.5" fill="currentColor" />
      <circle cx="55" cy="35" r="2.2" fill="currentColor" />
      <circle cx="65" cy="18" r="1.8" fill="currentColor" />
      <circle cx="45" cy="55" r="1.8" fill="currentColor" />
      {/* Delicate spark twinkle */}
      <path
        d="M35 19 V31 M29 25 H41"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
};
