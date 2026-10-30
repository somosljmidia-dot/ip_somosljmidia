import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl, AGENCY_INFO } from '../data/agencyData';

interface HeaderProps {
  onOpenContact: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#073040] border-b border-[#D9B97E]/30 shadow-lg ${
          isScrolled ? 'py-3 bg-[#073040]/95 backdrop-blur-md' : 'py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark / Official Logo */}
            <a
              href="#inicio"
              className="group whitespace-nowrap shrink-0 transition-opacity hover:opacity-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D9B97E]"
              aria-label="LJ Mídias - Início"
            >
              <Logo size="md" variant="gold" />
            </a>

            {/* Zone 2: Navigation Links (Azul Petróleo background with Dourado #D9B97E text) */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap shrink-0 text-[#D9B97E] hover:text-[#F2F0EB] relative py-1 transition-colors duration-200 tracking-wide after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D9B97E] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions (WhatsApp with Green Logo + Phone + Instagram + Fale Conosco) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {/* WhatsApp direct with official green icon and phone number */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#052430] hover:bg-[#041d27] border border-[#D9B97E]/30 text-xs text-[#F2F0EB] transition-all group/wa"
                title={`WhatsApp: ${AGENCY_INFO.whatsappDisplay}`}
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" color="#25D366" />
                <span className="hidden xl:inline text-[#D9D1C7] group-hover/wa:text-[#F2F0EB]">
                  {AGENCY_INFO.whatsappDisplay}
                </span>
              </a>

              <a
                href={AGENCY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#052430] hover:bg-[#D9B97E] text-[#D9B97E] hover:text-[#073040] border border-[#D9B97E]/30 flex items-center justify-center transition-all"
                aria-label="Instagram @somosljmidia"
                title="Siga @somosljmidia no Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenContact()}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#073040] bg-[#D9B97E] hover:bg-[#c9a96e] active:scale-[0.98] transition-all rounded-md shadow-md whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D9B97E]"
              >
                <span>Fale Conosco</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button in Dourado */}
            <div className="flex sm:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#D9B97E] hover:text-[#F2F0EB] hover:bg-[#052430] rounded-md transition-colors"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Azul Petróleo with Dourado text) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#041d27]/75 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-[#073040] shadow-2xl p-6 flex flex-col justify-between border-l border-[#D9B97E]/40">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#D9B97E]/30">
                <Logo size="sm" variant="gold" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#D9B97E] hover:text-[#F2F0EB] hover:bg-[#052430] rounded-md"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 text-base font-medium text-[#D9B97E] hover:text-[#F2F0EB] hover:bg-[#052430] rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#D9B97E]/30 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#073040] bg-[#D9B97E] hover:bg-[#c9a96e] rounded-md transition-all shadow-md"
              >
                <span>Fale Conosco</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-md bg-[#052430] border border-[#25D366]/40 text-xs font-semibold text-[#F2F0EB] hover:bg-[#041d27] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" color="#25D366" />
                <span>WhatsApp: {AGENCY_INFO.whatsappDisplay}</span>
              </a>

              <a
                href={AGENCY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[#D9B97E]/30 text-xs font-semibold text-[#D9B97E] hover:text-[#F2F0EB] hover:bg-[#052430] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram @somosljmidia</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
