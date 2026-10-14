import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Briefcase, ExternalLink, ArrowUpRight } from 'lucide-react';
import { IMPACT_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

export const ImpactProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cards to show: 1 on mobile, 2 on tablet, 3 on desktop
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= IMPACT_PROJECTS.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? IMPACT_PROJECTS.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-14 bg-white relative">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F15A24]"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#F15A24]">
                Portfolio Showcases
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202020] tracking-tight mb-3">
              Selected Projects &amp; Business Impact
            </h2>
            <p className="text-base text-[#777777] leading-relaxed">
              Explore concrete project engagements demonstrating strategic growth across search, paid advertising, and technical infrastructure.
            </p>
          </div>

          {/* Previous / Next Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="w-11 h-11 rounded-full border border-[#E8E8E8] hover:border-[#F15A24] bg-white hover:bg-[#FFF0E9] text-[#202020] hover:text-[#F15A24] flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="w-11 h-11 rounded-full border border-[#E8E8E8] hover:border-[#F15A24] bg-white hover:bg-[#FFF0E9] text-[#202020] hover:text-[#F15A24] flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Show 3 items starting from currentIndex, wrapping around */}
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % IMPACT_PROJECTS.length;
            const project = IMPACT_PROJECTS[index];

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E8E8] shadow-sm hover:shadow-xl hover:border-[#F15A24]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category & Company badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F15A24] bg-[#FFF0E9] px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-[#777777]">
                      {project.company}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#202020] mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Outcome Highlight */}
                  <div className="mb-4 p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 text-xs font-semibold text-[#F15A24] flex items-center gap-1.5">
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.outcome}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#777777] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium text-[#202020]/75 bg-neutral-100/80 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={PERSONAL_INFO.whatsappPrefilledUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F15A24] hover:text-[#E95B1B] transition-colors"
                  >
                    <span>Discuss similar solution</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {IMPACT_PROJECTS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Jump to project slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all ${
                currentIndex === dotIdx ? 'w-8 bg-[#F15A24]' : 'w-2 bg-neutral-200 hover:bg-neutral-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
