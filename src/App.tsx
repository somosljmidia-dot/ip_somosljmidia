import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Differentiators } from './components/Differentiators';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('Presença Digital Completa');

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
      {/* 1. Header with logo, navigation and CTA */}
      <Header onOpenContact={handleOpenContact} />

      <main className="flex-grow">
        {/* 2. Hero Section with high-impact editorial imagery and proposition */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 3. About Section with agency story, creative philosophy & methodology */}
        <About />

        {/* 4. Core Services (Redes Sociais, Landing Pages & Conteúdo Estratégico) */}
        <Services onSelectService={handleOpenContact} />

        {/* 5. Real Portfolio Cases (MK3 Golf Parts and Fluorita Arco-Íris) */}
        <Portfolio />

        {/* 6. Agency Differentiators (Editorial numbered pillars) */}
        <Differentiators />

        {/* 7. Client Testimonials & Verifiable Partner Reviews */}
        <Testimonials />

        {/* 8. Final Conversion CTA with Interactive WhatsApp Builder */}
        <FinalCTA />
      </main>

      {/* 9. Elegant Footer with branding, contacts and navigation */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
        defaultService={selectedServiceForModal}
      />

      {/* Non-intrusive floating WhatsApp action */}
      <FloatingWhatsApp />
    </div>
  );
}
