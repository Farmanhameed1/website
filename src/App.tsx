/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { ImpactProjects } from './components/ImpactProjects';
import { CtaBar } from './components/CtaBar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickInquiryModal } from './components/QuickInquiryModal';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#B8DEDC] py-0 sm:py-6 md:py-10 px-0 sm:px-4 md:px-6 flex flex-col justify-between selection:bg-[#F15A24] selection:text-white">
      {/* Centered Website Container matching the reference design */}
      <main className="w-full max-w-[1140px] mx-auto bg-white shadow-2xl rounded-none sm:rounded-3xl md:rounded-[36px] overflow-hidden border border-black/5 transition-all">
        {/* Navigation Header */}
        <Header onContactClick={() => setInquiryModalOpen(true)} />

        {/* Hero Section */}
        <Hero />

        {/* Services Section ("What I Do Best") */}
        <Services />

        {/* Process Section ("Simple Solutions!" - Light Peach Background) */}
        <Process />

        {/* About Me / Professional Profile Section */}
        <AboutMe />

        {/* Achievements and Key Metrics Section */}
        <Achievements />

        {/* Professional Experience Section */}
        <Experience />

        {/* Selected Projects & Business Impact (Replacing Testimonials) */}
        <ImpactProjects />

        {/* Call to Action Bar (Wide Orange Container) */}
        <CtaBar />

        {/* Footer (Light Peach with Curved Orange Bottom Edge) */}
        <Footer />
      </main>

      {/* Fixed Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />

      {/* Interactive Quick Inquiry Modal */}
      <QuickInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </div>
  );
}
