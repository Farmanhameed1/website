import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-6 sm:px-10 lg:px-14 bg-[#FFF0E9]/60 border-y border-[#FFF0E9]">
      <div className="max-w-[1140px] mx-auto text-center">
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F15A24]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#F15A24]">
              Proven Track Record
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202020] tracking-tight mb-4">
            Key Results &amp; Measurable Impact
          </h2>
          <p className="text-base text-[#777777] leading-relaxed">
            Quantifiable business outcomes delivered across search, paid advertising, conversion optimization, and technology operations.
          </p>
        </div>

        {/* 6 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E8E8] shadow-sm hover:shadow-lg hover:border-[#F15A24]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#F15A24] mb-3 tracking-tight font-mono tabular-nums">
                  {item.metric}
                </div>
                <h3 className="text-base font-bold text-[#202020] mb-2">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-[#202020]/60">
                <span>Verified Resume Metric</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F15A24]"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
