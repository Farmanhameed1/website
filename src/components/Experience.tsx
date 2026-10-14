import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Building, ChevronRight, Check } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'current' | 'leadership'>('all');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === 'current') return exp.isCurrent;
    if (filter === 'leadership') return exp.role.includes('Manager') || exp.role.includes('Senior');
    return true;
  });

  return (
    <section id="experience" className="py-16 md:py-24 px-6 sm:px-10 lg:px-14 bg-white relative">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F15A24]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#F15A24]">
              Career Journey
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202020] tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-base text-[#777777] leading-relaxed">
            Over a decade of leadership in digital marketing strategy, paid media management, web infrastructure, and IT systems.
          </p>

          {/* Interactive filter buttons */}
          <div className="inline-flex items-center p-1 bg-[#FFF0E9] rounded-full mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-[#F15A24] text-white shadow-sm'
                  : 'text-[#202020] hover:text-[#F15A24]'
              }`}
            >
              All Roles ({EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilter('current')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                filter === 'current'
                  ? 'bg-[#F15A24] text-white shadow-sm'
                  : 'text-[#202020] hover:text-[#F15A24]'
              }`}
            >
              Active Engagements
            </button>
            <button
              onClick={() => setFilter('leadership')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                filter === 'leadership'
                  ? 'bg-[#F15A24] text-white shadow-sm'
                  : 'text-[#202020] hover:text-[#F15A24]'
              }`}
            >
              Management Roles
            </button>
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {filteredExperiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className={`bg-white rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-lg ${
                exp.isCurrent
                  ? 'border-[#F15A24]/30 shadow-sm'
                  : 'border-[#E8E8E8] shadow-none'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5 pb-5 border-b border-neutral-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF0E9] text-[#F15A24] flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#202020]">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="text-[11px] font-semibold text-[#F15A24] bg-[#FFF0E9] px-2.5 py-0.5 rounded-full">
                          Current Role
                        </span>
                      )}
                      {exp.remote && (
                        <span className="text-[11px] font-medium text-[#777777] bg-neutral-100 px-2 py-0.5 rounded-md">
                          Remote (USA)
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-[#F15A24]">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#777777]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#F15A24]" />
                    <span className="font-medium text-[#202020]">{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#F15A24]" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Responsibilities bullets */}
              <div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202020]/80">
                      <span className="w-4 h-4 rounded-full bg-[#FFF0E9] text-[#F15A24] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.keyHighlight && (
                <div className="mt-5 pt-4 border-t border-dashed border-neutral-200 flex items-center gap-2 text-xs font-semibold text-[#F15A24]">
                  <span>Key Achievement:</span>
                  <span className="text-[#202020] font-medium">{exp.keyHighlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
