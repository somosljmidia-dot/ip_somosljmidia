import React from 'react';
import { TESTIMONIALS } from '../data/agencyData';
import { Quote, ExternalLink } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#F2F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#A69586] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D9B97E]" />
            <span>Relatos de Parceria</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#073040] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            A confiança de quem vivenciou a transformação da LJ Mídias.
          </h2>
          <p className="text-base text-[#073040]/75 leading-relaxed">
            Valorizamos relacionamentos de longo prazo pautados em resultados concretos, design impecável e comprometimento diário.
          </p>
        </div>

        {/* Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#EBE6DF]/70 rounded-xl p-8 sm:p-10 border border-[#D9D1C7] hover:border-[#D9B97E]/60 transition-all duration-300 shadow-xs flex flex-col justify-between relative"
            >
              {/* Quote Mark Decorative */}
              <div className="mb-6 flex items-center justify-between">
                <Quote className="w-8 h-8 text-[#D9B97E] rotate-180 opacity-80" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#A69586]">
                  {t.tag}
                </span>
              </div>

              {/* Feedback text */}
              <blockquote className="text-base sm:text-lg font-serif italic text-[#073040] leading-relaxed mb-8">
                "{t.feedback}"
              </blockquote>

              {/* Author & Project info */}
              <div className="pt-6 border-t border-[#D9D1C7] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#073040]">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#A69586] mt-0.5">
                    {t.role} · <strong className="text-[#073040]/90 font-medium">{t.client}</strong>
                  </div>
                </div>

                <div className="text-xs text-[#073040] font-medium text-right max-w-[160px] truncate">
                  {t.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Guarantee & Transparency Note */}
        <div className="border border-[#D9D1C7] rounded-xl p-6 sm:p-8 bg-white/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3
              className="text-xl font-serif font-bold text-[#073040] mb-1"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Transparência e rigor absoluto em cada entrega.
            </h3>
            <p className="text-xs sm:text-sm text-[#073040]/75">
              Não utilizamos números fictícios ou depoimentos fabricados. O sucesso dos nossos parceiros é construído dia a dia através de estratégia séria e estética memorável.
            </p>
          </div>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#073040] hover:text-[#D9B97E] border border-[#073040]/30 hover:border-[#D9B97E] rounded-md transition-all whitespace-nowrap"
          >
            <span>Explorar Projetos no Portfólio</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
