import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

import heroImage from '../assets/images/hero_3d_marketer_1791961359094.jpg';

export const Hero: React.FC = () => {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:py-20 px-6 sm:px-10 lg:px-14">
      {/* Background subtle decorative circle patterns matching reference */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#FFF0E9] -z-10 blur-2xl opacity-60"></div>
      <div className="absolute -bottom-10 left-10 w-60 h-60 rounded-full bg-[#B8DEDC]/30 -z-10 blur-2xl"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Subtle Tagline / Subtitle */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F15A24]"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#F15A24]">
              {PERSONAL_INFO.title}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#202020] leading-[1.2] tracking-tight mb-6">
            Digital Marketing &amp; IT Solutions That{' '}
            <span className="text-[#F15A24] relative inline-block">
              Drive Growth
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-[#F15A24]/40"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path d="M0,8 Q50,0 100,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#777777] leading-relaxed mb-8 max-w-xl">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F15A24] hover:bg-[#E95B1B] text-white text-base font-semibold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Let's Work Together</span>
            </a>

            <a
              href="#services"
              onClick={handleScrollToServices}
              className="inline-flex items-center justify-center gap-2 text-[#202020] hover:text-[#F15A24] border border-[#E8E8E8] hover:border-[#F15A24] bg-white text-base font-semibold px-7 py-3.5 rounded-full transition-all hover:bg-[#FFF0E9]/30"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 text-[#F15A24]" />
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 border-t border-neutral-100 grid grid-cols-3 gap-4">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#202020] tabular-nums">10+</div>
              <div className="text-xs text-[#777777] font-medium">Group Websites</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#F15A24] tabular-nums">$500K+</div>
              <div className="text-xs text-[#777777] font-medium">Revenue Generated</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#202020] tabular-nums">+40%</div>
              <div className="text-xs text-[#777777] font-medium">Organic SEO Surge</div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Illustration */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Subtle Decorative Floating Elements matching screenshot style */}
          <div className="relative w-full max-w-md lg:max-w-none">
            {/* Background pill/blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF0E9] to-white rounded-3xl -rotate-2 transform scale-95 -z-10 shadow-sm border border-neutral-100"></div>

            {/* 3D Illustration */}
            <div className="overflow-hidden rounded-3xl shadow-lg border border-neutral-100 bg-white">
              <img
                src={heroImage}
                alt="Muhammad Farman - Digital Marketing & IT Manager 3D Illustration"
                className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Mini Metric Card */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white py-3 px-4 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF0E9] flex items-center justify-center text-[#F15A24]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#777777] font-medium">Conversion Lift</p>
                <p className="text-sm font-bold text-[#202020] tabular-nums">+30% Growth</p>
              </div>
            </div>

            {/* Floating Mini Tag */}
            <div className="absolute -top-3 -right-3 bg-white py-2 px-3.5 rounded-full shadow-lg border border-neutral-100 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F15A24]" />
              <span className="text-xs font-semibold text-[#202020]">GA4 &amp; GTM Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
