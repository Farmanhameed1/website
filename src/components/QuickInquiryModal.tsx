import React, { useState } from 'react';
import { X, MessageSquare, Mail, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState('Digital Marketing & Paid Media');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `Hello Farman,\n\nMy name is ${name || 'A prospective client'}.\nI am interested in: ${service}.\n\nProject details: ${message || 'I would like to discuss working together.'}`
    );
    window.open(`https://wa.me/923456240550?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${service} - ${name || 'Prospective Client'}`);
    const body = encodeURIComponent(
      `Hi Muhammad Farman,\n\nMy name is ${name}.\nInterest: ${service}\n\nProject notes:\n${message}\n\nBest regards,\n${name}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-neutral-100">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#FFF0E9] text-[#F15A24] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#202020] mb-2">Message Dispatched!</h3>
            <p className="text-sm text-[#777777] mb-6">
              Thank you for reaching out. Farman will respond to your inquiry promptly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#F15A24] text-white font-semibold rounded-full text-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F15A24]"></span>
              <span className="text-xs font-semibold uppercase text-[#F15A24]">Direct Connect</span>
            </div>
            <h3 id="inquiry-modal-title" className="text-2xl font-bold text-[#202020] mb-2">
              Let's Discuss Your Project
            </h3>
            <p className="text-xs sm:text-sm text-[#777777] mb-6">
              Send your project scope directly to Farman via WhatsApp or Email.
            </p>

            <form onSubmit={handleWhatsAppSend} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-[#202020] mb-1">
                  Your Name / Company
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John / Tech Growth Inc."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E8] text-sm focus:outline-none focus:border-[#F15A24] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202020] mb-1">
                  Area of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E8] text-sm focus:outline-none focus:border-[#F15A24] transition-colors bg-white"
                >
                  <option value="Digital Marketing & Paid Media">Paid Media (Google &amp; Meta Ads)</option>
                  <option value="SEO & Search Strategy">SEO &amp; Search Traffic Growth</option>
                  <option value="Analytics & GTM Setup">Analytics &amp; Tag Manager (GA4/GTM)</option>
                  <option value="Website & WordPress Management">Website Redesign &amp; WordPress</option>
                  <option value="IT Operations & Project Delivery">IT Management &amp; Group Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202020] mb-1">
                  Project Notes or Goals
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your current challenge, goals, or timeline..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E8E8] text-sm focus:outline-none focus:border-[#F15A24] transition-colors"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F15A24] hover:bg-[#E95B1B] text-white font-semibold py-3 px-5 rounded-full text-sm shadow-md transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="inline-flex items-center justify-center gap-2 border border-[#E8E8E8] hover:border-[#F15A24] text-[#202020] font-semibold py-3 px-5 rounded-full text-sm hover:bg-[#FFF0E9]/30 transition-all"
                >
                  <Mail className="w-4 h-4 text-[#F15A24]" />
                  <span>Email Instead</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
