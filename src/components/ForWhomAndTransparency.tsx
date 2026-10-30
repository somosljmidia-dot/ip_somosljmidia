import React from 'react';
import { FOR_WHOM, TRANSPARENCY_LIMITS } from '../data/agencyData';
import { CheckCircle2, ShieldAlert, Sparkles, HeartHandshake } from 'lucide-react';
import { BotanicalBranch, DelicateConstellation } from './BotanicalAccents';

export const ForWhomAndTransparency: React.FC = () => {
  return (
    <section id="para-quem" className="py-24 bg-[#F2F0EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#A69586] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D9B97E]" />
            <span>Para Quem Trabalhamos</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#073040] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Apoiamos quem constrói o próprio negócio todos os dias.
          </h2>
          <p className="text-base text-[#073040]/75 leading-relaxed font-light">
            Não importa se você está dando o primeiro passo ou se já tem anos de história: nosso trabalho é encontrar o caminho possível para o momento atual da sua empresa.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {FOR_WHOM.map((audience, idx) => (
            <div
              key={idx}
              className="bg-[#EBE6DF]/70 border border-[#D9D1C7] rounded-xl p-6 flex flex-col justify-between hover:border-[#D9B97E] transition-all"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#A69586] mb-3 block">
                  {audience.tag}
                </span>
                <h3
                  className="text-lg font-serif font-bold text-[#073040] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {audience.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#073040]/80 leading-relaxed font-light">
                  {audience.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#D9D1C7]/70 flex items-center gap-1.5 text-xs text-[#073040] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9B97E]" />
                <span>Soluções sob medida</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency & Boundaries Callout */}
        <div className="bg-[#073040] text-[#F2F0EB] rounded-2xl p-8 sm:p-12 border border-[#D9B97E]/30 relative overflow-hidden">
          <div className="absolute top-4 right-4 pointer-events-none opacity-30">
            <DelicateConstellation className="w-20 h-20 text-[#D9B97E]" />
          </div>

          <div className="max-w-3xl mb-8 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#D9B97E] font-semibold mb-2 block">
              Limites de Atuação e Transparência
            </span>
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-3 text-[#F2F0EB]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              O que fazemos e, principalmente, o que não prometemos.
            </h3>
            <p className="text-sm sm:text-base text-[#D9D1C7] leading-relaxed font-light">
              A Somos LJ Mídia não precisa parecer maior do que é. Acreditamos que a confiança vem da honestidade sobre o que é possível entregar hoje com qualidade e rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {TRANSPARENCY_LIMITS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#052430]/90 border border-[#D9B97E]/20"
              >
                <div className="flex items-center gap-2 mb-2 text-sm font-bold text-[#D9B97E]">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D9D1C7] leading-relaxed font-light">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#D9B97E]/20 flex items-center justify-between text-xs text-[#D9D1C7] relative z-10">
            <span className="italic font-serif text-sm text-[#D9B97E]">
              "A confiança vem da clareza entre o que oferecemos, o que entregamos e o que combinamos."
            </span>
            <span className="hidden sm:inline text-[#A69586]">Regra de ouro Somos LJ Mídia</span>
          </div>
        </div>

      </div>
    </section>
  );
};
