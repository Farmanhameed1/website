import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { PROCESS_STEPS, PERSONAL_INFO } from '../data/portfolioData';

// Image generated via generate_image tool
const PROCESS_IMAGE_URL = '/src/assets/images/process_3d_chair_1791961359527.jpg';

export const Process: React.FC = () => {
  const handleScrollToExperience = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-14 bg-[#FFF0E9] relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: 3D Illustration on Orange Chair */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Subtle background card framing */}
              <div className="overflow-hidden rounded-3xl shadow-md border border-[#F15A24]/10 bg-white">
                <img
                  src={PROCESS_IMAGE_URL}
                  alt="Muhammad Farman - Strategic Process and Planning 3D Illustration"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Pill Tag */}
              <div className="absolute -bottom-3 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#F15A24]/20 text-xs font-semibold text-[#202020] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F15A24]"></span>
                <span>Structured Delivery Framework</span>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Copy & 4 Steps */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F15A24]"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#F15A24]">
                How I Work
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#202020] tracking-tight mb-4">
              Simple Solutions!
            </h2>

            <p className="text-base text-[#777777] leading-relaxed mb-8 max-w-xl">
              Every business has different goals. My approach combines clear planning, effective execution, and performance measurement to deliver practical digital solutions.
            </p>

            {/* 4 Numbered Steps */}
            <div className="space-y-5 mb-10">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white shadow-sm hover:shadow-md hover:bg-white transition-all flex items-start gap-4"
                >
                  {/* Orange circular number marker */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F15A24] text-white font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#202020] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F15A24] hover:bg-[#E95B1B] text-white text-sm sm:text-base font-semibold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss Your Project</span>
              </a>

              <a
                href="#experience"
                onClick={handleScrollToExperience}
                className="inline-flex items-center justify-center gap-2 text-[#202020] hover:text-[#F15A24] border border-[#E8E8E8] hover:border-[#F15A24] bg-white text-sm sm:text-base font-semibold px-6 py-3.5 rounded-full transition-all"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4 text-[#F15A24]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
