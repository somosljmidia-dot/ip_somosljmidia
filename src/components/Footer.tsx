import React from 'react';
import { Logo } from './Logo';
import { AGENCY_INFO, getWhatsAppUrl } from '../data/agencyData';
import { Mail, Instagram, ArrowUp, Heart } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre a Agência', href: '#sobre' },
    { label: 'Nossos Serviços', href: '#servicos' },
    { label: 'Portfólio Real', href: '#portfolio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <footer className="bg-[#041d27] text-[#F2F0EB] border-t border-[#D9B97E]/25 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#D9D1C7]/15">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <a href="#inicio" className="inline-block mb-4">
              <Logo size="lg" variant="gold" />
            </a>
            <p className="text-sm text-[#D9D1C7] leading-relaxed max-w-sm mb-6">
              Agência de presença digital focada em criar narrativas visuais autênticas, autoridade
              estratégica e páginas de alta conversão para marcas que buscam destaque.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#073040] hover:bg-[#052430] border border-[#25D366]/40 flex items-center justify-center transition-all group"
                aria-label={`WhatsApp da LJ Mídias ${AGENCY_INFO.whatsappDisplay}`}
                title={`WhatsApp: ${AGENCY_INFO.whatsappDisplay}`}
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" color="#25D366" />
              </a>
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="w-9 h-9 rounded-full bg-[#073040] hover:bg-[#D9B97E] text-[#D9B97E] hover:text-[#073040] border border-[#D9B97E]/30 flex items-center justify-center transition-all"
                aria-label="Email da LJ Mídias"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#073040] hover:bg-[#D9B97E] text-[#D9B97E] hover:text-[#073040] border border-[#D9B97E]/30 flex items-center justify-center transition-all"
                aria-label="Instagram da LJ Mídias @somosljmidia"
                title="Instagram @somosljmidia"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4
              className="text-sm font-semibold uppercase tracking-wider text-[#D9B97E] mb-4"
            >
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D9D1C7]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#F2F0EB] hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct (4 cols) */}
          <div className="lg:col-span-4">
            <h4
              className="text-sm font-semibold uppercase tracking-wider text-[#D9B97E] mb-4"
            >
              Contatos Oficiais
            </h4>
            <div className="space-y-3 text-sm text-[#D9D1C7]">
              <div>
                <span className="block text-xs text-[#A69586] uppercase tracking-wider mb-0.5">
                  WhatsApp Oficial
                </span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#25D366] hover:underline inline-flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" color="#25D366" />
                  <span>{AGENCY_INFO.whatsappDisplay}</span>
                </a>
              </div>

              <div>
                <span className="block text-xs text-[#A69586] uppercase tracking-wider mb-0.5">
                  Instagram Oficial
                </span>
                <a
                  href={AGENCY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#D9B97E] hover:underline inline-flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@somosljmidia</span>
                </a>
              </div>

              <div>
                <span className="block text-xs text-[#A69586] uppercase tracking-wider mb-0.5">
                  E-mail Oficial
                </span>
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="font-medium text-[#F2F0EB] hover:text-[#D9B97E] transition-colors"
                >
                  {AGENCY_INFO.email}
                </a>
              </div>

              <div className="pt-2 text-xs text-[#A69586]">
                {AGENCY_INFO.location}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A69586]">
          <p>
            © {new Date().getFullYear()} LJ Mídias. Todos os direitos reservados. Presença digital & estratégia.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#D9B97E] hover:text-[#F2F0EB] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
