import React from 'react';
import { Search, Megaphone, Activity, Globe, Check } from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'seo':
        return <Search className="w-6 h-6" />;
      case 'ads':
        return <Megaphone className="w-6 h-6" />;
      case 'analytics':
        return <Activity className="w-6 h-6" />;
      case 'web':
        return <Globe className="w-6 h-6" />;
      default:
        return <Search className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-20 px-6 sm:px-10 lg:px-14 bg-white relative">
      <div className="max-w-[1140px] mx-auto text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F15A24]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#F15A24]">
              Core Offerings
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202020] tracking-tight mb-4">
            What I Do Best
          </h2>
          <p className="text-base text-[#777777] leading-relaxed">
            Digital marketing, technology, and analytics solutions designed to support measurable business growth.
          </p>
        </div>

        {/* 4 Cards Grid - 4 in a row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E8E8] shadow-sm hover:shadow-xl hover:border-[#F15A24]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Circular Icon with peach background & orange icon */}
                <div className="w-14 h-14 rounded-full bg-[#FFF0E9] group-hover:bg-[#F15A24] text-[#F15A24] group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                  {getIcon(service.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-[#202020] mb-3 group-hover:text-[#F15A24] transition-colors">
                  {service.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-[#777777] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables / Capabilities List */}
              <div className="pt-4 border-t border-neutral-100">
                <ul className="space-y-2">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs text-[#202020]/90">
                      <span className="w-4 h-4 rounded-full bg-[#FFF0E9] text-[#F15A24] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-2">
                  <a
                    href={PERSONAL_INFO.whatsappPrefilledUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F15A24] hover:text-[#E95B1B] transition-colors"
                  >
                    <span>Inquire about this</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
