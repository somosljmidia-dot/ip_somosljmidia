import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AGENCY_INFO, getWhatsAppUrl } from '../data/agencyData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
    >
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-[#073040] text-[#F2F0EB] text-xs font-medium py-1.5 px-3 rounded-md shadow-lg border border-[#D9B97E]/30 whitespace-nowrap">
        <span>Fale conosco no WhatsApp: </span>
        <span className="text-[#25D366] font-semibold">{AGENCY_INFO.whatsappDisplay}</span>
      </div>

      {/* Official WhatsApp Green Button (#25D366) */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/40 shadow-[#25D366]/30"
        aria-label={`Conversar no WhatsApp com a LJ Mídias (${AGENCY_INFO.whatsappDisplay})`}
        title={`WhatsApp LJ Mídias: ${AGENCY_INFO.whatsappDisplay}`}
      >
        <WhatsAppIcon className="w-8 h-8" color="#ffffff" />
      </a>
    </aside>
  );
};
