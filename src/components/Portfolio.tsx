import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/agencyData';
import { ExternalLink, Check, Eye, X, Globe, Instagram, ArrowUpRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-[#EBE6DF]/40 border-t border-[#D9D1C7]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#A69586] mb-3">
            <span className="w-5 h-[1.5px] bg-[#D9B97E]" />
            <span>Portfólio em Destaque</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#073040] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Casos reais construídos pela LJ Mídias.
          </h2>
          <p className="text-base text-[#073040]/75 leading-relaxed">
            Conheça projetos reais onde aplicamos nossa metodologia em desenvolvimento web e gestão
            estratégica de redes sociais. Acesse os canais oficiais e veja na prática o resultado do nosso trabalho.
          </p>
        </div>

        {/* Real Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PORTFOLIO_PROJECTS.map((project) => {
            const isSite = project.type === 'website';

            return (
              <div
                key={project.id}
                className="group bg-[#F2F0EB] rounded-xl overflow-hidden border border-[#D9D1C7] hover:border-[#D9B97E]/70 shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Project Image Frame */}
                  <div className="relative aspect-4/3 overflow-hidden bg-[#073040]">
                    <img
                      src={project.imageUrl}
                      alt={`Projeto ${project.title} desenvolvido pela LJ Mídias`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#073040]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Top Type Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-[#073040]/80 backdrop-blur-md rounded-md text-xs font-medium text-[#F2F0EB] border border-[#D9B97E]/30">
                      {isSite ? <Globe className="w-3.5 h-3.5 text-[#D9B97E]" /> : <Instagram className="w-3.5 h-3.5 text-[#D9B97E]" />}
                      <span>{project.category}</span>
                    </div>

                    {/* Direct Preview Action Button */}
                    <div className="absolute bottom-4 right-4">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#F2F0EB] hover:bg-[#D9B97E] text-[#073040] text-xs font-semibold rounded-md shadow-md transition-all cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ver Detalhes</span>
                      </button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-7">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3
                        className="text-2xl font-serif font-bold text-[#073040]"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                      >
                        {project.title}
                      </h3>
                      <span className="text-xs text-[#A69586] font-medium uppercase tracking-wider shrink-0">
                        {project.client}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-[#073040]/90 mb-3">
                      {project.headline}
                    </p>

                    <p className="text-sm text-[#073040]/75 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Scope Bullets */}
                    <div className="space-y-2 mb-6">
                      {project.scope.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#073040]/80">
                          <Check className="w-3.5 h-3.5 text-[#D9B97E] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom External Link Action */}
                <div className="px-7 py-5 bg-[#EBE6DF]/60 border-t border-[#D9D1C7] flex items-center justify-between">
                  <span className="text-xs text-[#A69586]">
                    {isSite ? 'mk3golfparts.com.br' : '@fluoritaarcoiris'}
                  </span>
                  
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#073040] hover:text-[#D9B97E] transition-colors group/link"
                  >
                    <span>{isSite ? 'Acessar Site Oficial' : 'Acessar Instagram'}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for In-depth Case Study */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#073040]/80 backdrop-blur-xs">
            <div
              className="bg-[#F2F0EB] rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#D9D1C7] relative animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-16/9 bg-[#073040]">
                <img
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#073040]/80 text-[#F2F0EB] hover:bg-[#073040] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#A69586] mb-2">
                  <span>{activeProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeProject.client}</span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-serif font-bold text-[#073040] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {activeProject.title}
                </h3>

                <p className="text-sm text-[#073040]/80 leading-relaxed mb-6">
                  {activeProject.summary}
                </p>

                <div className="p-4 rounded-lg bg-[#EBE6DF] border border-[#D9D1C7] mb-6">
                  <div className="text-xs uppercase tracking-wider font-bold text-[#073040] mb-1">
                    Impacto do Projeto:
                  </div>
                  <p className="text-sm text-[#073040]/85 italic">
                    "{activeProject.impact}"
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#D9D1C7]">
                  <span className="text-xs text-[#A69586]">
                    Trabalho realizado com exclusividade pela LJ Mídias
                  </span>

                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#073040] bg-[#D9B97E] hover:bg-[#c9a96e] rounded-md transition-all shadow-sm"
                  >
                    <span>Visualizar Projeto Ao Vivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
