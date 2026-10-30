import React from 'react';
import { CheckCircle2, Compass, PenTool, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Diagnóstico & Direção Criativa',
      description:
        'Mapeamos o DNA da sua marca, o comportamento do seu público-alvo e definimos uma linha estética coesa que inspira confiança imediata.',
    },
    {
      icon: PenTool,
      title: 'Conteúdo com Narrativa & Propósito',
      description:
        'Criamos publicações, materiais visuais e textos que transmitem autoridade real, sem recorrer a fórmulas prontas ou designs amadores.',
    },
    {
      icon: TrendingUp,
      title: 'Engenharia de Conversão',
      description:
        'Cada página desenvolvida e cada post estratégico são estruturados para reduzir a fricção e levar clientes qualificados até o seu canal de vendas.',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-[#EBE6DF]/50 border-y border-[#D9D1C7]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#A69586] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D9B97E]" />
            <span>Sobre a LJ Mídias</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#073040] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Acreditamos que design refinado e estratégia comercial devem caminhar juntos.
          </h2>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Gold outline accent */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#D9B97E]/50 rounded-lg -z-10" />
              
              <div className="rounded-lg overflow-hidden shadow-lg bg-[#073040]">
                <img
                  src="/src/assets/images/about_agency_editorial_1793380982520.jpg"
                  alt="Curadoria editorial e direção de arte da LJ Mídias"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
              </div>

              {/* Editorial Caption Tag */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#A69586]">
                <span className="italic font-serif text-sm text-[#073040]">
                  Direção criativa & curadoria estratégica
                </span>
                <span>São Paulo / Brasil</span>
              </div>
            </div>
          </div>

          {/* Right: Agency Story & Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="prose text-[#073040]/85 mb-8">
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                A <strong>LJ Mídias</strong> é uma agência de presença digital focada em empresas e
                profissionais que não abrem mão de uma imagem de excelência. Compreendemos que, no mercado
                atual, o primeiro contato do cliente com a sua marca acontece através de uma tela.
              </p>
              <p className="text-base leading-relaxed text-[#073040]/80">
                Por isso, unimos sensibilidade artística e rigor técnico para criar redes sociais que
                encantam e páginas na web que realmente convertem. Do primeiro esboço tipográfico à
                publicação final e otimização de conversão, tudo é feito com atenção cirúrgica aos detalhes.
              </p>
            </div>

            {/* 3 Pillars List */}
            <div className="space-y-6 pt-6 border-t border-[#D9D1C7]">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#073040] text-[#D9B97E] flex items-center justify-center shrink-0 border border-[#D9B97E]/30 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#073040] mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#073040]/75 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct contact note */}
            <div className="mt-8 pt-6 border-t border-[#D9D1C7] flex items-center gap-3 text-xs text-[#A69586]">
              <CheckCircle2 className="w-4 h-4 text-[#D9B97E] shrink-0" />
              <span>
                Atendimento personalizado conduzido diretamente por especialistas dedicados ao seu projeto.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
