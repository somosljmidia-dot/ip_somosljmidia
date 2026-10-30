import React from 'react';
import { Sparkles, Eye, ShieldCheck, Heart } from 'lucide-react';
import { BotanicalBranch, DelicateConstellation } from './BotanicalAccents';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#EBE6DF]/50 border-y border-[#D9D1C7] relative overflow-hidden">
      {/* Decorative subtle constellation */}
      <div className="absolute top-8 left-8 pointer-events-none opacity-30">
        <DelicateConstellation className="w-16 h-16 text-[#D9B97E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#A69586] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D9B97E]" />
            <span>Sobre a Somos LJ Mídia</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#073040] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Quem trabalha duro pelo próprio negócio merece ser visto por isso.
          </h2>
        </div>

        {/* Story and Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image with caption */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#D9B97E]/50 rounded-lg -z-10" />
              
              <div className="rounded-lg overflow-hidden shadow-lg bg-[#073040]">
                <img
                  src="/src/assets/images/hero_creative_agency_1793380981823.jpg"
                  alt="Espaço e cuidado de trabalho da Somos LJ Mídia"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[460px] object-cover"
                />
              </div>

              <div className="mt-3.5 flex items-center justify-between text-xs text-[#A69586]">
                <span className="italic font-serif text-sm text-[#073040]">
                  Presença digital com cuidado e estratégia
                </span>
                <span>@somosljmidia</span>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            
            <div className="space-y-5 text-base sm:text-lg text-[#073040]/85 font-light leading-relaxed mb-8">
              <p>
                Somos a <strong>Somos LJ Mídia</strong>. Nascemos com uma missão simples e clara: ajudar pequenos negócios a serem encontrados, lembrados e escolhidos — sem prometer viral, sem fórmula mágica.
              </p>
              <p>
                Acreditamos que presença digital de verdade se constrói com método, constância e cuidado. Não acreditamos em soluções padronizadas que ignoram quem está por trás do balcão ou da tela.
              </p>
              <p>
                Nosso trabalho é entender o momento exato do seu negócio e organizar caminhos práticos para que ele se apresente melhor na internet, seja através do Google Maps, das redes sociais ou de uma página web objetiva.
              </p>
            </div>

            {/* 3 Pillars of Identity */}
            <div className="space-y-4 pt-6 border-t border-[#D9D1C7]">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-md bg-[#073040] text-[#D9B97E] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#073040]">
                    Nossa Missão
                  </h3>
                  <p className="text-xs sm:text-sm text-[#073040]/75 leading-relaxed font-light">
                    Ajudar pequenos negócios a serem encontrados, lembrados e escolhidos por meio de uma presença digital organizada, coerente e possível para a realidade de cada empresa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-md bg-[#073040] text-[#D9B97E] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#073040]">
                    Tecnologia e IA com Olhar Humano
                  </h3>
                  <p className="text-xs sm:text-sm text-[#073040]/75 leading-relaxed font-light">
                    Utilizamos tecnologia e ferramentas modernas como apoio para organizar ideias e textos, mas a estratégia, o acolhimento, a revisão e a responsabilidade final são 100% humanas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-md bg-[#073040] text-[#D9B97E] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#073040]">
                    Transparência de Ponta a Ponta
                  </h3>
                  <p className="text-xs sm:text-sm text-[#073040]/75 leading-relaxed font-light">
                    Sem letras miúdas. Você sempre sabe exatamente o que foi contratado, o que será entregue, prazos e investimentos.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
