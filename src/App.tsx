import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HumanStory } from './components/HumanStory';
import { Services } from './components/Services';
import { HowWeWork } from './components/HowWeWork';
import { ForWhomAndTransparency } from './components/ForWhomAndTransparency';
import { About } from './components/About';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>(
    'Organização Completa da Presença Digital'
  );

  const handleOpenContact = (service?: string) => {
    if (service) {
      setSelectedServiceForModal(service);
    }
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F2F0EB] text-[#073040] font-sans flex flex-col selection:bg-[#D9B97E]/30 selection:text-[#073040]">
      {/* 1. Header with logo, navigation, and channels */}
      <Header onOpenContact={handleOpenContact} />

      <main className="flex-grow">
        {/* 2. Hero: Apresentação objetiva, frase principal e resumo */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 3. Diferencial Humano: "Antes do negócio, existe uma história" */}
        <HumanStory />

        {/* 4. O Que Fazemos: Google Maps, Redes Sociais, Sites e Páginas */}
        <Services onSelectService={handleOpenContact} />

        {/* 5. Como Trabalhamos: Os 6 passos do método Somos LJ Mídia */}
        <HowWeWork />

        {/* 6. Para Quem Trabalhamos & Limites de Atuação / Transparência */}
        <ForWhomAndTransparency />

        {/* 7. Sobre a Somos LJ Mídia: Nossa essência e compromisso */}
        <About />

        {/* 8. Contato: Convite sincero para conversar sem compromisso */}
        <FinalCTA />
      </main>

      {/* 9. Rodapé Oficial */}
      <Footer />

      {/* Modal de Conversa e Alinhamento Inicial */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
        defaultService={selectedServiceForModal}
      />

      {/* Botão Flutuante Oficial do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
