import React, { useState } from 'react';
import { Logo } from './Logo';
import { AGENCY_INFO } from '../data/agencyData';
import { X, Mail, Send, Check, Copy } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Presença Digital Completa',
}) => {
  const [service, setService] = useState(defaultService);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const services = [
    'Gestão de Redes Sociais',
    'Desenvolvimento de Landing Page',
    'Criação de Conteúdo Estratégico',
    'Presença Digital Completa',
    'Outro Projeto Sob Medida',
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá, equipe LJ Mídias!`;
    if (name) text += ` Meu nome é ${name}.`;
    if (brand) text += ` Minha marca/empresa é "${brand}".`;
    text += ` Tenho interesse no serviço: ${service}.`;
    if (notes) text += ` Informações adicionais: ${notes}`;

    const url = `https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(AGENCY_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#073040]/80 backdrop-blur-xs">
      <div
        className="bg-[#F2F0EB] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#D9D1C7] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#073040] p-6 text-[#F2F0EB] flex items-center justify-between border-b border-[#D9B97E]/30">
          <div>
            <Logo size="sm" variant="gold" />
            <p className="text-xs text-[#D9D1C7] mt-1">
              Fale diretamente com nossa equipe de estratégia
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#052430] text-[#D9D1C7] hover:text-[#F2F0EB] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSubmit} className="p-6 sm:p-7 space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#073040] mb-1.5">
              Serviço Desejado
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D9D1C7] text-sm text-[#073040] focus:outline-hidden focus:border-[#D9B97E]"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#073040] mb-1.5">
              Seu Nome
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Carlos Eduardo"
              className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D9D1C7] text-sm text-[#073040] focus:outline-hidden focus:border-[#D9B97E]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#073040] mb-1.5">
              Sua Empresa ou Instagram
            </label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Ex: @minhamarca ou nomedaempresa.com.br"
              className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D9D1C7] text-sm text-[#073040] focus:outline-hidden focus:border-[#D9B97E]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#073040] mb-1.5">
              Breve resumo do que precisa (opcional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Conte rapidamente o objetivo da sua marca..."
              className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#D9D1C7] text-sm text-[#073040] focus:outline-hidden focus:border-[#D9B97E] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#073040] bg-[#D9B97E] hover:bg-[#c9a96e] rounded-lg transition-all shadow-md cursor-pointer mt-2 group"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" color="#25D366" />
            <span>Continuar para o WhatsApp ({AGENCY_INFO.whatsappDisplay})</span>
          </button>

          <div className="pt-3 border-t border-[#D9D1C7] flex items-center justify-between text-xs text-[#A69586]">
            <span>Ou envie um e-mail:</span>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1 font-semibold text-[#073040] hover:text-[#D9B97E] cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{AGENCY_INFO.email}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
