import React from 'react';
import { DIFFERENTIATORS } from '../data/agencyData';
import { ShieldCheck, HeartHandshake, Eye, Rocket } from 'lucide-react';

export const Differentiators: React.FC = () => {
  const icons = [HeartHandshake, Eye, Rocket, ShieldCheck];

  return (
    <section id="diferenciais" className="py-24 bg-[#073040] text-[#F2F0EB] relative overflow-hidden">
      {/* Subtle gold glow accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#D9B97E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#041d27]/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#D9B97E] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D9B97E]" />
            <span>Por Que a LJ Mídias</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F2F0EB] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Diferenciais que constroem autoridade no mercado.
          </h2>
          <p className="text-base text-[#D9D1C7] leading-relaxed">
            Combinamos refinamento estético, compreensão profunda do negócio do cliente e entrega técnica impecável para assegurar resultados que você percebe no dia a dia.
          </p>
        </div>

        {/* 4 Editorial Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIATORS.map((diff, idx) => {
            const Icon = icons[idx] || ShieldCheck;

            return (
              <div
                key={diff.number}
                className="bg-[#052430]/70 border border-[#D9B97E]/25 rounded-xl p-7 hover:border-[#D9B97E]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Index & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif font-bold text-[#D9B97E] opacity-90 group-hover:opacity-100 transition-opacity">
                      {diff.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#073040] border border-[#D9B97E]/30 text-[#D9B97E] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-serif font-bold text-[#F2F0EB] mb-3 leading-snug group-hover:text-[#D9B97E] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {diff.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#D9D1C7] leading-relaxed mb-6">
                    {diff.description}
                  </p>
                </div>

                {/* Subtag highlight */}
                <div className="pt-4 border-t border-[#D9B97E]/20 text-xs text-[#D9B97E] font-medium tracking-wide">
                  {diff.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality commitment strip */}
        <div className="mt-16 p-6 rounded-lg bg-[#052430]/90 border border-[#D9D1C7]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9D1C7]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D9B97E]" />
            <span>Processo transparente com reuniões de alinhamento e entregas previsíveis.</span>
          </div>
          <span className="text-[#D9B97E] uppercase tracking-wider font-semibold">
            Padrão Editorial LJ Mídias
          </span>
        </div>

      </div>
    </section>
  );
};
