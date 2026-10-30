import React from 'react';
import { ArrowUpRight, MapPin, Share2, Globe, Heart } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BotanicalBranch, DelicateConstellation } from './BotanicalAccents';
import { getWhatsAppUrl, AGENCY_INFO } from '../data/agencyData';

interface HeroProps {
  onOpenContact: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F2F0EB]">
      {/* Delicate decorative botanical & constellation accents */}
      <div className="absolute top-24 right-6 lg:right-16 pointer-events-none opacity-40">
        <DelicateConstellation className="w-16 h-16 text-[#D9B97E]" />
      </div>
      <div className="absolute bottom-6 left-4 pointer-events-none opacity-20">
        <BotanicalBranch className="w-24 h-24 text-[#073040]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Text Column: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Position Statement Kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#073040]/75 mb-4">
              <span className="w-5 h-[1.5px] bg-[#D9B97E]" />
              <span>Somos LJ Mídia · Presença Digital</span>
            </div>

            {/* Impactful Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#073040] leading-[1.15] tracking-tight mb-5"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", textWrap: 'balance' }}
            >
              Seu negócio merece uma presença digital{' '}
              <span className="italic font-normal text-[#073040] relative inline-block">
                bem estruturada.
                <span className="absolute bottom-1.5 left-0 right-0 h-[2px] bg-[#D9B97E]/70" />
              </span>
            </h1>

            {/* Central Message */}
            <p className="text-base sm:text-lg text-[#073040]/85 leading-relaxed max-w-2xl mb-4 font-normal">
              Organizamos sua presença digital para que seu negócio seja{' '}
              <strong className="font-semibold text-[#073040]">encontrado</strong>,{' '}
              <strong className="font-semibold text-[#073040]">apresentado</strong> e{' '}
              <strong className="font-semibold text-[#073040]">contatado</strong> com mais facilidade.
            </p>

            {/* Motto */}
            <div className="p-3.5 rounded-lg bg-[#EBE6DF]/70 border border-[#D9D1C7] text-xs sm:text-sm text-[#073040]/80 mb-7 max-w-xl">
              <span className="font-serif italic font-semibold text-[#073040] block mb-0.5">
                "Presença digital com estratégia, organização e transparência. Sem promessas vazias, com trabalho de verdade."
              </span>
              <span className="text-[11px] text-[#A69586]">
                Não vendemos fórmula mágica ou viralização. Construímos com método, constância e cuidado.
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#073040] bg-[#D9B97E] hover:bg-[#c9a96e] active:scale-[0.98] transition-all rounded-md shadow-sm whitespace-nowrap group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" color="#25D366" />
                <span>Iniciar Conversa no WhatsApp</span>
              </a>

              <a
                href="#o-que-fazemos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#073040] bg-[#D9D1C7]/40 hover:bg-[#D9D1C7]/70 border border-[#D9D1C7] transition-all rounded-md whitespace-nowrap"
              >
                <span>Conhecer Nossas Frentes</span>
                <ArrowUpRight className="w-4 h-4 text-[#A69586]" />
              </a>
            </div>

            {/* WhatsApp Contact Direct Info */}
            <div className="flex items-center gap-2 text-xs text-[#073040]/80">
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

            {/* The 3 pillars quick preview pill-free */}
            <div className="mt-8 pt-6 border-t border-[#D9D1C7] grid grid-cols-3 gap-3 text-xs text-[#073040]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D9B97E] shrink-0" />
                <span className="font-medium text-[11px] sm:text-xs">Google Maps</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#D9B97E] shrink-0" />
                <span className="font-medium text-[11px] sm:text-xs">Redes Sociais</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D9B97E] shrink-0" />
                <span className="font-medium text-[11px] sm:text-xs">Sites e Páginas</span>
              </div>
            </div>

          </div>

          {/* Right Visual Column: 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle gold framing */}
              <div className="absolute -inset-2.5 rounded-xl border border-[#D9B97E]/30 -z-10 translate-x-2 translate-y-2" />
              
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-[#073040]">
                <img
                  src="/src/assets/images/about_agency_editorial_1793380982520.jpg"
                  alt="Espaço de planejamento e acolhimento da Somos LJ Mídia"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[460px] object-cover"
                />

                {/* Subtle scrim overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#073040]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-[#F2F0EB]">
                  <span className="text-[11px] uppercase tracking-widest text-[#D9B97E] font-semibold mb-1">
                    Somos LJ Mídia
                  </span>
                  <p className="text-sm font-serif italic text-[#F2F0EB]/95 leading-snug">
                    "Não queremos apenas conhecer o seu negócio. Queremos entender a história que fez ele existir."
                  </p>
                </div>
              </div>

              {/* Clean Editorial Caption Below Image (Zero Overlap) */}
              <div className="mt-3.5 flex items-center justify-between text-xs text-[#A69586] px-1">
                <span className="flex items-center gap-2">
                  <span className="font-serif font-bold text-sm text-[#073040]">Trabalho de Verdade</span>
                  <span aria-hidden="true">·</span>
                  <span>Sem Promessas Vazias</span>
                </span>
                <span className="italic font-serif text-[#073040]">@somosljmidia</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
