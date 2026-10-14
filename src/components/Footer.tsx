import React from 'react';
import { Mail, Phone, Linkedin, Globe, MessageSquare, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#FFF0E9] pt-16 pb-12 px-6 sm:px-10 lg:px-14 overflow-hidden border-t border-[#F15A24]/10">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#F15A24]/15">
          {/* Column 1: Brand & Profile (spans 2 cols on lg) */}
          <div className="lg:col-span-2 text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-2xl font-bold tracking-tight text-[#202020] hover:text-[#F15A24] transition-colors mb-3"
            >
              <span>Farman</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F15A24]"></span>
            </a>
            <p className="text-sm font-semibold text-[#F15A24] mb-2">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#777777] mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#F15A24]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#777777] leading-relaxed max-w-sm mb-6">
              Empowering businesses through performance marketing, search strategy, conversion tracking, web development, and digital IT operations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#F15A24] text-[#202020] hover:text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="Farman's LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#F15A24] text-[#202020] hover:text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="Farman's GitHub Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#F15A24] text-[#202020] hover:text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#F15A24] text-[#202020] hover:text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#202020] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#777777]">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-[#F15A24] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-[#F15A24] transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#F15A24] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => handleNavClick(e, '#experience')}
                  className="hover:text-[#F15A24] transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-[#F15A24] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#202020] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#777777]">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#F15A24] transition-colors"
                >
                  SEO &amp; Search Strategy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#F15A24] transition-colors"
                >
                  Paid Media &amp; Ads
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#F15A24] transition-colors"
                >
                  Analytics &amp; Automation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#F15A24] transition-colors"
                >
                  Web &amp; IT Management
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#202020] mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#777777]">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F15A24] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-[#F15A24] transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F15A24] shrink-0" />
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F15A24] transition-colors font-medium text-[#202020]"
                >
                  {PERSONAL_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#F15A24] shrink-0" />
                <a
                  href={PERSONAL_INFO.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F15A24] transition-colors"
                >
                  GitHub Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© 2026 Muhammad Farman. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            Designed with precision matching digital marketing aesthetics
          </p>
        </div>
      </div>

      {/* Curved orange bottom edge decoration matching reference screenshot */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#F15A24] overflow-hidden">
        <svg
          className="absolute -top-3 left-0 w-full h-4 text-[#F15A24]"
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q600,20 1200,0 L1200,20 L0,20 Z" fill="#F15A24" />
        </svg>
      </div>
    </footer>
  );
};
