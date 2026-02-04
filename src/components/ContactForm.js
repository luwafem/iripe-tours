import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ArrowRight } from 'lucide-react';
import { websiteConfig } from '../config/websiteConfig';

const ContactForm = ({ formId = websiteConfig.formspree.contactFormId }) => {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="py-12 text-center animate-fade-in">
        <h3 className="text-2xl font-serif italic text-stone-900 mb-4">Request Received</h3>
        <p className="text-stone-500 font-light leading-relaxed max-w-xs mx-auto text-sm">
          An experience specialist will review your inquiry and reach out within 24 hours to begin crafting your journey.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Name & Email */}
      <div className="space-y-8">
        <div className="relative">
          <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-200 font-light text-sm"
            placeholder="E.g. Alexander Hamilton"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-400 mt-1" />
        </div>

        <div className="relative">
          <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-200 font-light text-sm"
            placeholder="email@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1" />
        </div>
      </div>

      {/* Interests & Travelers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="tour" className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
            Destination
          </label>
          <select
            id="tour"
            name="tour"
            className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors font-light text-sm appearance-none cursor-pointer"
          >
            <option value="">Select a region</option>
            <option value="ghana">Ghana</option>
            <option value="togo">Togo</option>
            <option value="benin">Benin</option>
            <option value="multi">West Africa Grand Tour</option>
          </select>
        </div>

        <div>
          <label htmlFor="travelers" className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
            Travelers
          </label>
          <input
            id="travelers"
            type="number"
            name="travelers"
            min="1"
            className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors font-light text-sm"
            placeholder="1"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-stone-400 block mb-2">
          Notes on your journey
        </label>
        <textarea
          id="message"
          name="message"
          rows="3"
          required
          className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-200 font-light text-sm resize-none"
          placeholder="Tell us about your preferences..."
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1" />
      </div>

      {/* Minimalist Newsletter Toggle */}
      <div className="flex items-center space-x-3 group cursor-pointer">
        <input
          id="newsletter"
          type="checkbox"
          name="newsletter"
          className="h-3 w-3 border-stone-300 rounded-none text-stone-900 focus:ring-0 accent-stone-900"
        />
        <label htmlFor="newsletter" className="text-[10px] uppercase tracking-widest text-stone-400 cursor-pointer group-hover:text-stone-600 transition-colors">
          Join the journal for travel updates
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="group flex items-center justify-between w-full bg-stone-900 text-white px-8 py-5 text-[11px] uppercase tracking-[0.3em] transition-all hover:bg-stone-800 disabled:bg-stone-200"
      >
        <span>{state.submitting ? 'Sending...' : 'Request Itinerary'}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      {state.errors && state.errors.length > 0 && (
        <p className="text-[10px] uppercase tracking-widest text-red-500 text-center">
          Please review the details above.
        </p>
      )}
    </form>
  );
};

export default ContactForm;