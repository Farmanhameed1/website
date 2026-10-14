import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { PERSONAL_INFO, CORE_CAPABILITIES } from '../data/portfolioData';

// Image generated via generate_image tool
const ABOUT_IMAGE_URL = '/src/assets/images/about_3d_analytics_1791961388682.jpg';

export const AboutMe: React.FC = () => {
  const handleScrollToExperience = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 px-6 sm:px-10 lg:px-14 bg-white relative">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Text & Capabilities */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F15A24]"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#F15A24]">
                Professional Profile
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#202020] tracking-tight mb-6">
              About Me
            </h2>

            <div className="space-y-4 text-base text-[#777777] leading-relaxed mb-8 max-w-xl">
              <p>{PERSONAL_INFO.aboutSummary1}</p>
              <p>{PERSONAL_INFO.aboutSummary2}</p>
            </div>

            {/* Core Capabilities - 2-column clean checklist */}
            <div className="mb-10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#202020] mb-4">
                Core Capabilities &amp; Specialties
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
                {CORE_CAPABILITIES.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FFF0E9]/50 border border-[#FFF0E9] hover:bg-[#FFF0E9] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#F15A24] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#202020]">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action button */}
            <div>
              <a
                href="#experience"
                onClick={handleScrollToExperience}
                className="inline-flex items-center justify-center gap-2 bg-[#F15A24] hover:bg-[#E95B1B] text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <span>View My Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Illustration of analytics dashboard */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl shadow-lg border border-neutral-100 bg-white">
                <img
                  src={ABOUT_IMAGE_URL}
                  alt="Muhammad Farman - Marketing Analytics & Technology Strategy 3D Illustration"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-4 -left-4 bg-white py-3 px-4 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF0E9] flex items-center justify-center text-[#F15A24]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#777777] font-medium">Proven Track Record</p>
                  <p className="text-sm font-bold text-[#202020]">14+ Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
