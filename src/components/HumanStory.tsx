import React from 'react';
import { Heart, Clock, Compass, ShieldCheck } from 'lucide-react';
import { BotanicalBranch, DelicateConstellation } from './BotanicalAccents';
import { AGENCY_INFO } from '../data/agencyData';

export const HumanStory: React.FC = () => {
  const commitments = [
    {
      title: 'Conhecer quem está por trás',
      desc: 'Ouvimos sua trajetória, as dificuldades e as vitórias que trouxeram sua empresa até aqui.',
    },
    {
      title: 'Entender o momento real',
      desc: 'Respeitamos suas prioridades imediatas, sem empurrar demandas que não cabem no seu dia.',
    },
    {
      title: 'Soluções possíveis e coerentes',
      desc: 'Consideramos tempo, rotina e orçamento para desenhar apenas o que faz sentido para você.',
    },
    {
      title: 'Sem expectativas irreais',
      desc: 'Falamos com clareza sobre o que o digital pode e não pode fazer, trabalhando com responsabilidade.',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#EBE6DF]/60 border-y border-[#D9D1C7] relative overflow-hidden">
      {/* Delicate botanical accent */}
      <div className="absolute top-4 right-8 pointer-events-none opacity-25">
        <BotanicalBranch className="w-28 h-28 text-[#073040]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#A69586] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D9B97E]" />
            <span>O Diferencial Humano</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#073040] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Antes do negócio, existe uma história.
          </h2>
          <p className="text-base sm:text-lg text-[#073040]/85 leading-relaxed font-light">
            Não olhamos apenas para o CNPJ, o Instagram ou o produto. Por trás de cada negócio existe uma pessoa e um motivo para empreender.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-8 bg-[#F2F0EB] p-8 sm:p-10 rounded-xl border border-[#D9D1C7] shadow-xs relative">
            <p className="text-base sm:text-lg text-[#073040]/90 leading-relaxed mb-5 font-normal">
              Sabemos que nenhum negócio nasce igual. Alguns estão dando os primeiros passos. Outros estão recomeçando.
              Há quem já tenha uma trajetória sólida no mundo físico, mas ainda precise organizar sua presença no digital.
            </p>
            <p className="text-base sm:text-lg text-[#073040]/90 leading-relaxed mb-5 font-normal">
              Por isso, antes de propor ferramentas ou planos, queremos conhecer você, sua história e o momento atual da sua empresa.
              Acreditamos que uma boa estratégia só funciona de verdade quando cabe na realidade de quem vai colocá-la em prática.
            </p>
            <p className="text-base sm:text-lg text-[#073040]/90 leading-relaxed font-medium">
              Porque não se trata apenas de estar na internet. Trata-se de encontrar uma maneira possível, honesta e coerente de apresentar o que você construiu com tanto esforço.
            </p>

            <div className="mt-6 pt-5 border-t border-[#D9D1C7] flex items-center justify-between text-xs text-[#A69586]">
              <span className="italic font-serif text-sm text-[#073040]">
                "Seu negócio tem uma história. Queremos conhecer o próximo capítulo."
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="bg-[#073040] text-[#F2F0EB] p-7 rounded-xl border border-[#D9B97E]/30 relative shadow-sm">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D9B97E] block mb-2">
                Nossa Frase-Guia
              </span>
              <p className="font-serif italic text-lg sm:text-xl text-[#F2F0EB] leading-snug mb-4">
                "{AGENCY_INFO.humanQuote}"
              </p>
              <div className="pt-3 border-t border-[#D9B97E]/20 text-xs text-[#D9D1C7]">
                {AGENCY_INFO.pacingQuote}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of respect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {commitments.map((c, i) => (
            <div
              key={i}
              className="bg-[#F2F0EB] p-5 rounded-lg border border-[#D9D1C7] text-left"
            >
              <span className="text-xs font-serif italic text-[#D9B97E] block mb-1">
                0{i + 1}. Princípio
              </span>
              <h3 className="text-sm font-bold text-[#073040] mb-1.5">
                {c.title}
              </h3>
              <p className="text-xs text-[#073040]/75 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
