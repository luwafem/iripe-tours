import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { websiteConfig } from '../config/websiteConfig';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Voice',
      value: websiteConfig.company.phone,
      action: `tel:${websiteConfig.company.phone}`
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: websiteConfig.whatsapp.number,
      action: `https://wa.me/${websiteConfig.whatsapp.number}`
    },
    {
      icon: Mail,
      label: 'Digital',
      value: websiteConfig.company.email,
      action: `mailto:${websiteConfig.company.email}`
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Inquiry | {websiteConfig.company.name}</title>
        <meta name="description" content="Connect with our travel curators to begin your West African journey." />
      </Helmet>

      {/* Minimalist Hero */}
      <div className="relative h-[60vh] w-full bg-stone-100 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1920&q=80"
          alt="Lagos Coastline"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="relative text-center px-4">
          <span className="text-[10px] uppercase tracking-[0.5em] text-stone-600 mb-6 block animate-fade-in">
            Begin the Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tight italic font-serif text-stone-900">
            Let's design your <br /> next narrative.
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Left Column: Essential Contacts */}
          <div className="lg:col-span-5 space-y-20">
            <section>
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-stone-400 mb-12">Connect With Us</h2>
              <div className="space-y-12">
                {contactMethods.map((method, i) => (
                  <div key={i} className="group">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-stone-400 mb-2">{method.label}</p>
                    <a 
                      href={method.action} 
                      className="text-xl font-light text-stone-800 hover:text-stone-400 transition-colors duration-500 block underline-offset-8 decoration-stone-100 underline"
                    >
                      {method.value}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Editorial-style Details */}
            <section className="bg-stone-50 p-10 border border-stone-100">
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-6 flex items-center">
                <Clock className="h-3 w-3 mr-3" /> Availability
              </h2>
              <p className="text-sm font-light text-stone-600 leading-loose">
                Our Lagos office operates <span className="text-stone-900 italic font-serif">{websiteConfig.contact.officeHours}</span> GMT+1. 
                Emergency concierge services are available to traveling guests 24 hours a day.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-stone-400 mb-6">Our Location</h2>
              <div className="space-y-2">
                <p className="text-sm text-stone-800 font-serif italic">{websiteConfig.company.name} HQ</p>
                <p className="text-sm text-stone-500 font-light max-w-xs leading-relaxed">
                  {websiteConfig.company.address}
                </p>
                <div className="pt-4">
                   <a href="https://google.com/maps" className="text-[10px] uppercase tracking-widest text-stone-400 border-b border-stone-200 pb-1 hover:text-stone-900 transition-colors">
                     View on Map
                   </a>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="sticky top-32">
              <div className="border border-stone-100 p-10 bg-white shadow-sm">
                <div className="mb-12">
                  <h3 className="text-2xl font-serif italic text-stone-900 mb-2">General Inquiry</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                    We typically respond within one business day.
                  </p>
                </div>
                
                <ContactForm />

                {/* Aesthetic Checklist */}
                <div className="mt-12 pt-12 border-t border-stone-50 grid grid-cols-2 gap-8">
                   <div>
                      <p className="text-[9px] uppercase tracking-widest text-stone-900 mb-3">Bespoke Design</p>
                      <p className="text-xs text-stone-400 font-light leading-relaxed">Fully customizable itineraries tailored to your preferences.</p>
                   </div>
                   <div>
                      <p className="text-[9px] uppercase tracking-widest text-stone-900 mb-3">Expert Care</p>
                      <p className="text-xs text-stone-400 font-light leading-relaxed">Direct access to local curators throughout your journey.</p>
                   </div>
                </div>
              </div>

              {/* Virtual Consultation Link */}
              <div className="mt-10 text-center">
                <a 
                  href="https://calendly.com/iripe-tours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-light text-stone-500 hover:text-stone-900 transition-colors uppercase tracking-[0.2em]"
                >
                  Schedule a private virtual briefing →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;