import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { websiteConfig } from '../config/websiteConfig';

const About = () => {
  const stats = [
    { value: '08', label: 'Years of Heritage' },
    { value: '2k+', label: 'Global Travelers' },
    { value: '50+', label: 'Expert Curators' },
    { value: '98%', label: 'Guest Satisfaction' },
  ];

  const team = [
    {
      name: 'Amina Ibrahim',
      role: 'Founder & Creative Director',
      bio: 'Fifteen years dedicated to the preservation and promotion of West African heritage.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Kwame Asante',
      role: 'Lead Cultural Historian',
      bio: 'Specializing in the ancestral narratives and oral histories of the Gold Coast.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Fatou Diop',
      role: 'Director of Logistics',
      bio: 'Ensuring seamless transitions between the modern world and the untouched wild.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Chukwu Emeka',
      role: 'Guest Relations Specialist',
      bio: 'Crafting personal connections and bespoke experiences for the discerning guest.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Our Story | {websiteConfig.company.name}</title>
        <meta name="description" content={`Discover the heritage and vision behind ${websiteConfig.company.name}.`} />
      </Helmet>

      {/* Cinematic Hero - Matching TourDetails style */}
      <div className="relative h-[70vh] w-full overflow-hidden bg-stone-100">
        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1920&q=80"
          alt="The Sahel"
          className="w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] mb-4">Established {websiteConfig.company.founded}</span>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tight max-w-4xl leading-tight italic font-serif">
            A Legacy of Discovery
          </h1>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
             <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mb-8">Our Philosophy</span>
             <h2 className="text-3xl md:text-4xl font-serif italic text-stone-900 leading-tight">
               Travel as an art form, <br />not a commodity.
             </h2>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl text-stone-800 leading-relaxed font-light italic font-serif">
              We believe that true travel is found in the quiet moments—the shared tea in a Saharan tent, the rhythmic pulse of a Lagos market, or the morning mist over the Fouta Djallon.
            </p>
            <p className="text-stone-500 text-sm leading-relaxed font-light">
              Founded in Lagos, {websiteConfig.company.name} was born from a desire to redefine the West African narrative. We don't just provide tours; we curate cultural immersions that are sustainable, deeply respectful, and intellectually stimulating.
            </p>
          </div>
        </div>
      </section>

      {/* Stats - Refined Minimalist Grid */}
      <section className="border-y border-stone-100 py-20 bg-stone-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-light text-stone-900 tracking-tighter mb-2">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Editorial Layout */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-stone-500 mb-4">The Curators</h2>
          <p className="text-2xl font-serif italic text-stone-900">The minds behind the journeys</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
              <h3 className="text-lg font-serif italic text-stone-900">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-3">{member.role}</p>
              <p className="text-stone-500 text-xs font-light leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values - Editorial Boxes */}
      <section className="bg-stone-900 text-stone-100 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] mb-8 text-stone-400">01. Integrity</h3>
              <p className="text-stone-300 font-light leading-relaxed text-sm">
                Our safety protocols and 24/7 concierge support ensure that your focus remains entirely on the experience.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] mb-8 text-stone-400">02. Community</h3>
              <p className="text-stone-300 font-light leading-relaxed text-sm">
                We work exclusively with local artisans and guides, ensuring the economic benefits of tourism stay within the heritage sites.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] mb-8 text-stone-400">03. Stewardship</h3>
              <p className="text-stone-300 font-light leading-relaxed text-sm">
                Sustainable travel isn't a choice for us—it's a responsibility. We preserve the landscapes we love for the generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-serif italic text-stone-900 mb-10">Begin your story with us.</h2>
          <Link
            to="/contact"
            className="inline-block border-b border-stone-900 pb-2 text-[10px] uppercase tracking-[0.3em] text-stone-900 hover:text-stone-400 hover:border-stone-400 transition-all"
          >
            Inquire about bespoke journeys
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;