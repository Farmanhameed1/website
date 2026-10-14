import React from 'react';
import { MessageSquare, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const CtaBar: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 px-6 sm:px-10 lg:px-14 bg-white relative">
      <div className="max-w-[1140px] mx-auto">
        {/* Wide Orange Call-To-Action Box matching the screenshot */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#F15A24] to-[#E95B1B] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl">
          {/* Subtle background decorative shapes */}
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-black/10 blur-xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-block text-xs uppercase tracking-wider font-semibold bg-white/20 px-3.5 py-1 rounded-full mb-4">
                Let's Connect
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
                Let's discuss your marketing, website, analytics, or digital technology goals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href={PERSONAL_INFO.whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-[#F15A24] font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5 text-[#F15A24]" />
                <span>Contact Me on WhatsApp</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20via%20Portfolio`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:border-white text-white hover:bg-white/10 font-semibold text-base px-6 py-4 rounded-full transition-all whitespace-nowrap"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
