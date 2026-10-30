import React from 'react';
import { HOW_WE_WORK } from '../data/agencyData';
import { MessageSquare, FileSearch, Compass, FileText, CheckCircle2, Repeat } from 'lucide-react';
import { BotanicalBranch } from './BotanicalAccents';

export const HowWeWork: React.FC = () => {
  const stepIcons = [
    MessageSquare,
    FileSearch,
    Compass,
    FileText,
    CheckCircle2,
    Repeat,
  ];

  return (
    <section id="como-trabalhamos" className="py-24 bg-[#EBE6DF]/40 border-t border-[#D9D1C7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#A69586] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D9B97E]" />
            <span>Nosso Método</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#073040] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Como trabalhamos com o seu negócio.
          </h2>
          <p className="text-base text-[#073040]/75 leading-relaxed font-light">
            Um processo transparente, organizado e com alinhamentos claros. Sem termos complicados, sem pressão e com foco na realidade de quem empreende.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOW_WE_WORK.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle2;

            return (
              <div
                key={step.number}
                className="bg-[#F2F0EB] border border-[#D9D1C7] hover:border-[#D9B97E]/70 rounded-xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-serif font-bold text-[#D9B97E] group-hover:text-[#073040] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#073040] text-[#D9B97E] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3
                    className="text-lg font-serif font-bold text-[#073040] mb-2 leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#073040]/80 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#D9D1C7]/70 text-[11px] text-[#A69586]">
                  Etapa {step.number} de 06
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary note */}
        <div className="mt-12 p-6 rounded-lg bg-[#073040] text-[#F2F0EB] border border-[#D9B97E]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D9B97E]" />
            <span className="text-[#D9D1C7]">
              Toda proposta descreve com clareza entregas, prazos, responsabilidades, investimento e os limites do serviço contratado.
            </span>
          </div>
          <span className="text-[#D9B97E] uppercase tracking-wider font-semibold whitespace-nowrap">
            Compromisso Somos LJ Mídia
          </span>
        </div>

      </div>
    </section>
  );
};
