import React, { useState } from 'react';
import { AGENCY_INFO, getWhatsAppUrl } from '../data/agencyData';
import { Mail, Copy, Check, Send, Sparkles, Clock, ShieldCheck, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FinalCTA: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Gestão de Redes Sociais');
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const serviceOptions = [
    'Gestão de Redes Sociais',
    'Desenvolvimento de Landing Page',
    'Criação de Conteúdo Estratégico',
    'Presença Digital Completa',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(AGENCY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const generateWhatsAppMessage = () => {
    let msg = `Olá, equipe da LJ Mídias!`;
    if (clientName) msg += ` Meu nome é ${clientName}.`;
    if (companyName) msg += ` Tenho um negócio chamado "${companyName}".`;
    msg += ` Gostaria de saber mais sobre o serviço de ${selectedService} e agendar uma conversa sobre a minha presença digital.`;
    return `https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contato" className="py-24 bg-[#073040] text-[#F2F0EB] relative overflow-hidden">
      {/* Decorative luxury background lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9B97E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#041d27] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Value Proposition & Contact Details */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#D9B97E] mb-3">
              <span className="w-5 h-[1.5px] bg-[#D9B97E]" />
              <span>Próximo Passo</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F2F0EB] leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Pronto para transformar a presença digital do seu negócio?
            </h2>

            <p className="text-base sm:text-lg text-[#D9D1C7] leading-relaxed mb-8 font-light">
              Dê adeus a publicações genéricas e páginas que não convertem. Converse diretamente conosco
              pelo WhatsApp e receba uma análise inicial personalizada para a sua marca.
            </p>

            {/* Quick Guarantees */}
            <div className="space-y-4 mb-8 pt-6 border-t border-[#D9B97E]/20">
              <div className="flex items-center gap-3 text-sm text-[#F2F0EB]">
                <Clock className="w-5 h-5 text-[#D9B97E] shrink-0" />
                <span>Atendimento ágil com resposta em poucas horas úteis.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F2F0EB]">
                <ShieldCheck className="w-5 h-5 text-[#D9B97E] shrink-0" />
                <span>Proposta personalizada sem compromisso com plano de ação claro.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F2F0EB]">
                <Sparkles className="w-5 h-5 text-[#D9B97E] shrink-0" />
                <span>Design editorial exclusivo desenhado para a identidade da sua marca.</span>
              </div>
            </div>

            {/* Direct Phone Highlight */}
            <div className="mb-4 p-4 rounded-xl bg-[#041d27] border border-[#25D366]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" color="#25D366" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#A69586]">
                    WhatsApp Oficial LJ Mídias
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#F2F0EB]">
                    {AGENCY_INFO.whatsappDisplay}
                  </span>
                </div>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold transition-all shadow-sm"
              >
                Chamar Agora
              </a>
            </div>

            {/* Direct Contacts Strip */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#D9B97E]/20 text-xs text-[#D9D1C7]">
              <div className="flex items-center gap-2">
                <span>E-mail:</span>
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="font-semibold text-[#D9B97E] hover:underline"
                >
                  {AGENCY_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 text-[#D9D1C7] hover:text-[#F2F0EB] rounded-sm transition-colors cursor-pointer"
                  title="Copiar e-mail"
                  aria-label="Copiar e-mail da agência"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href={AGENCY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#D9B97E] hover:text-[#F2F0EB] transition-colors"
                title="Acessar Instagram @somosljmidia"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{AGENCY_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Dispatcher */}
          <div className="lg:col-span-6">
            <div className="bg-[#052430] border border-[#D9B97E]/30 rounded-2xl p-7 sm:p-9 shadow-2xl relative">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D9B97E]/20">
                <div>
                  <h3
                    className="text-xl font-serif font-bold text-[#F2F0EB]"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Iniciar Conversa no WhatsApp
                  </h3>
                  <p className="text-xs text-[#D9D1C7]">
                    Personalize sua mensagem ou fale com um estrategista agora.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                  <WhatsAppIcon className="w-6 h-6 text-white" color="#ffffff" />
                </div>
              </div>

              {/* Service selector */}
              <div className="mb-5">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#D9D1C7] mb-2">
                  Qual solução melhor atende sua necessidade?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = selectedService === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedService(opt)}
                        className={`text-left text-xs p-3 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#D9B97E] text-[#073040] font-semibold border-[#D9B97E] shadow-sm'
                            : 'bg-[#073040]/60 text-[#D9D1C7] border-[#D9D1C7]/20 hover:border-[#D9B97E]/50'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input: Client Name */}
              <div className="mb-4">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#D9D1C7] mb-1.5">
                  Seu Nome
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ex: Mariana Silveira"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#073040] border border-[#D9D1C7]/30 text-[#F2F0EB] text-sm focus:outline-hidden focus:border-[#D9B97E] transition-colors placeholder:text-[#A69586]"
                />
              </div>

              {/* Input: Company/Brand */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#D9D1C7] mb-1.5">
                  Sua Marca ou Segmento (opcional)
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ex: Boutique de Moda, Clínica, etc."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#073040] border border-[#D9D1C7]/30 text-[#F2F0EB] text-sm focus:outline-hidden focus:border-[#D9B97E] transition-colors placeholder:text-[#A69586]"
                />
              </div>

              {/* Live Message Preview */}
              <div className="mb-6 p-3.5 rounded-lg bg-[#073040]/80 border border-[#D9D1C7]/20 text-xs text-[#D9D1C7]/90 italic">
                <span className="font-semibold text-[#D9B97E] not-italic block mb-1">
                  Mensagem pré-formatada:
                </span>
                "Olá, equipe da LJ Mídias!
                {clientName ? ` Meu nome é ${clientName}.` : ''}
                {companyName ? ` Tenho um negócio chamado "${companyName}".` : ''}
                {` Gostaria de saber mais sobre o serviço de ${selectedService} e agendar uma conversa.`}"
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#073040] bg-[#D9B97E] hover:bg-[#c9a96e] active:scale-[0.99] rounded-lg transition-all shadow-lg cursor-pointer group"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] transition-transform group-hover:scale-110" color="#25D366" />
                <span>Conversar no WhatsApp Agora</span>
              </a>

              <div className="mt-4 text-center text-xs text-[#D9D1C7] flex items-center justify-center gap-2">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" color="#25D366" />
                <span>Atendimento via {AGENCY_INFO.whatsappDisplay}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
