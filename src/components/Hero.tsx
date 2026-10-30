import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl, AGENCY_INFO } from '../data/agencyData';

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background ambient subtle warmth */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#D9B97E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#073040]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial kicker without pill box */}
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#A69586] mb-5">
              <span className="w-6 h-[1.5px] bg-[#D9B97E]" />
              <span>Agência de Presença Digital & Estratégia</span>
            </div>

            {/* Impactful headline with balanced wrap */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#073040] leading-[1.12] tracking-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", textWrap: 'balance' }}
            >
              Elevamos a percepção da sua marca com{' '}
              <span className="italic font-normal text-[#073040] relative inline-block">
                estética editorial
                <span className="absolute bottom-1.5 left-0 right-0 h-[2px] bg-[#D9B97E]/60" />
              </span>{' '}
              e conversão real.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#073040]/80 leading-relaxed max-w-2xl mb-8 font-light">
              Especialistas em criação de conteúdo autêntico, gestão estratégica de redes sociais
              e desenvolvimento de landing pages sob medida. Criamos a autoridade digital que
              conquista a atenção do seu público e gera oportunidades contínuas no seu WhatsApp.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#073040] bg-[#D9B97E] hover:bg-[#c9a96e] active:scale-[0.98] transition-all rounded-md shadow-sm whitespace-nowrap group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" color="#25D366" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#073040] hover:text-[#073040] bg-[#D9D1C7]/30 hover:bg-[#D9D1C7]/60 border border-[#D9D1C7] transition-all rounded-md whitespace-nowrap"
              >
                <span>Ver Projetos Reais</span>
                <ArrowUpRight className="w-4 h-4 text-[#A69586]" />
              </a>
            </div>

            {/* Direct contact number callout */}
            <div className="mb-8 flex items-center gap-2 text-xs text-[#073040]/75">
              <span>Atendimento direto pelo WhatsApp:</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#073040] hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" color="#25D366" />
                <span>{AGENCY_INFO.whatsappDisplay}</span>
              </a>
            </div>

            {/* Unboxed Metadata Strip */}
            <div className="pt-6 border-t border-[#D9D1C7]/70 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#A69586]">
              <span className="font-medium text-[#073040]">Projetos 100% Personalizados</span>
              <span aria-hidden="true">·</span>
              <span>Design Editorial & Performance</span>
              <span aria-hidden="true">·</span>
              <span>Contato Direto com Estrategistas</span>
            </div>
          </div>

          {/* Right Visual Column: 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative subtle border frame */}
              <div className="absolute -inset-2.5 rounded-xl border border-[#D9B97E]/30 -z-10 translate-x-2 translate-y-2" />
              
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-[#073040]">
                <img
                  src="/src/assets/images/hero_creative_agency_1793380981823.jpg"
                  alt="Estúdio de criação e estratégia da LJ Mídias"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Subtle scrim overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#073040]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-[#F2F0EB]">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#D9B97E] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-widest text-[11px]">LJ Mídias · Studio</span>
                  </div>
                  <p className="text-sm font-serif italic text-[#F2F0EB]/90">
                    "Onde o design refinado encontra a estratégia de vendas."
                  </p>
                </div>
              </div>

              {/* Clean Editorial Caption Below Image (Zero Overlap) */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#A69586] px-1">
                <span className="flex items-center gap-2">
                  <span className="font-serif font-bold text-sm text-[#073040]">100% Sob Medida</span>
                  <span aria-hidden="true">·</span>
                  <span>Estratégia exclusiva para cada cliente</span>
                </span>
                <span className="italic font-serif text-[#073040]">Studio LJ Mídias</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
