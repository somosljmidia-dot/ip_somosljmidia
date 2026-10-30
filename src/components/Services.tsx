import React from 'react';
import { SERVICES, getWhatsAppUrl } from '../data/agencyData';
import { MapPin, Share2, Globe, Check, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { DelicateConstellation } from './BotanicalAccents';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const icons = {
    'google-maps': MapPin,
    'redes-sociais': Share2,
    'sites-paginas': Globe,
  };

  return (
    <section id="o-que-fazemos" className="py-24 bg-[#F2F0EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#A69586] mb-3">
              <span className="w-5 h-[1.5px] bg-[#D9B97E]" />
              <span>O Que Fazemos</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#073040] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Três frentes que se complementam para organizar sua presença digital.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#073040]/75 max-w-md font-light leading-relaxed">
            Presença digital não é só postar bonito. É organizar os caminhos para que as pessoas encontrem seu negócio, conheçam o que você oferece e saibam como entrar em contato.
          </p>
        </div>

        {/* 3 Core Services Bento-Style Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.id as keyof typeof icons] || Globe;
            const isHighlighted = service.id === 'google-maps';

            return (
              <div
                key={service.id}
                className={`relative rounded-xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                  isHighlighted
                    ? 'bg-[#073040] text-[#F2F0EB] shadow-xl border border-[#D9B97E]/40'
                    : 'bg-[#EBE6DF]/70 text-[#073040] border border-[#D9D1C7] hover:border-[#D9B97E]/60 shadow-xs'
                }`}
              >
                <div>
                  {/* Top bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`text-xs font-serif italic ${
                        isHighlighted ? 'text-[#D9B97E]' : 'text-[#A69586]'
                      }`}
                    >
                      0{index + 1}. {service.badge}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isHighlighted
                          ? 'bg-[#D9B97E] text-[#073040]'
                          : 'bg-[#073040] text-[#D9B97E]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`text-2xl font-serif font-bold mb-2 leading-snug ${
                      isHighlighted ? 'text-[#F2F0EB]' : 'text-[#073040]'
                    }`}
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-xs uppercase tracking-wider font-semibold mb-4 leading-normal ${
                      isHighlighted ? 'text-[#D9B97E]' : 'text-[#A69586]'
                    }`}
                  >
                    {service.subtitle}
                  </p>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isHighlighted ? 'text-[#D9D1C7]' : 'text-[#073040]/80'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-5 border-t border-current/15 mb-6">
                    <div
                      className={`text-xs uppercase tracking-wider font-bold mb-3 ${
                        isHighlighted ? 'text-[#D9B97E]' : 'text-[#073040]'
                      }`}
                    >
                      O que está incluído nesta frente:
                    </div>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isHighlighted ? 'text-[#D9B97E]' : 'text-[#073040]'
                            }`}
                          />
                          <span
                            className={isHighlighted ? 'text-[#F2F0EB]/90' : 'text-[#073040]/85'}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Transparency Note */}
                  <div
                    className={`p-3 rounded-lg text-xs leading-relaxed mb-6 border ${
                      isHighlighted
                        ? 'bg-[#052430] border-[#D9B97E]/30 text-[#D9D1C7]'
                        : 'bg-[#F2F0EB] border-[#D9D1C7] text-[#073040]/75'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <AlertCircle
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isHighlighted ? 'text-[#D9B97E]' : 'text-[#A69586]'
                        }`}
                      />
                      <span>{service.transparencyNote}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-current/10">
                  <a
                    href={getWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded-md transition-all group/btn ${
                      isHighlighted
                        ? 'bg-[#D9B97E] text-[#073040] hover:bg-[#c9a96e]'
                        : 'bg-[#073040] text-[#F2F0EB] hover:bg-[#052430]'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform group-hover/btn:scale-110" color="#25D366" />
                    <span>Conversar sobre este Serviço</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Proposal Banner */}
        <div className="bg-[#073040] text-[#F2F0EB] rounded-xl p-8 sm:p-10 border border-[#D9B97E]/30 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest text-[#D9B97E] font-semibold mb-2 block">
                Sem Pacotes Engessados
              </span>
              <h3
                className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[#F2F0EB]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Cada negócio tem um momento diferente.
              </h3>
              <p className="text-sm text-[#D9D1C7] leading-relaxed">
                Montamos propostas por necessidade, combinando serviços pontuais e acompanhamento mensal.
                Primeiro queremos entender sua realidade; depois, apresentar um caminho possível, com entregas e investimento claros.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={() => onSelectService('Proposta Personalizada de Presença Digital')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#073040] bg-[#D9B97E] hover:bg-[#c9a96e] rounded-md transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Solicitar Alinhamento sem Compromisso</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
