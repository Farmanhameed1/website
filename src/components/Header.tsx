import React, { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onContactClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E8E8] transition-all">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        {/* Left: Brand Logo / Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-1.5 text-2xl font-bold tracking-tight text-[#202020] hover:text-[#F15A24] transition-colors"
        >
          <span>Farman</span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#F15A24] inline-block animate-pulse"></span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#202020]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#F15A24] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F15A24] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#F15A24] hover:bg-[#E95B1B] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#FFF0E9] text-[#F15A24] rounded-full hover:bg-[#F15A24] hover:text-white transition-colors"
            aria-label="Let's Talk on WhatsApp"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#202020] hover:text-[#F15A24] rounded-lg focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E8E8] bg-white px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#202020]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-1 hover:text-[#F15A24] transition-colors border-b border-neutral-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#F15A24] text-white font-medium py-3 rounded-full text-center shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let's Talk</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
