import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { websiteConfig, toursData, destinations } from '../config/websiteConfig';
import TourCard from '../components/TourCard';

const Home = () => {
  const featuredTours = toursData.slice(0, 3);

  return (
    <div className="bg-white text-stone-900 font-light tracking-tight">
      <Helmet>
        <title>{websiteConfig.seo.siteName} | {websiteConfig.company.slogan}</title>
      </Helmet>

      {/* Hero Section - True Full Screen */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2000&auto=format&fit=crop"
            alt="West African Landscape"
            className="w-full h-full object-cover opacity-70 scale-100 animate-slow-zoom"
          />
          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.5em] text-[10px] md:text-xs font-medium text-white/80 mb-8 block animate-fade-in">
            A New Standard of Discovery
          </span>
          <h1 className="text-5xl md:text-8xl font-extralight mb-10 leading-[1.05] max-w-6xl mx-auto text-white">
            Experience the soul of <br />
            <span className="italic font-serif">West Africa</span>.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-12 justify-center items-center mt-16">
            <Link
              to="/tours"
              className="group text-white border-b border-white/30 pb-2 hover:border-white transition-all flex items-center text-sm tracking-widest uppercase"
            >
              The Collections 
              <ArrowRight className="ml-3 h-3 w-3 transition-transform group-hover:translate-x-2" />
            </Link>
            <Link
              to="/contact"
              className="text-white/70 border-b border-transparent pb-2 hover:text-white transition-all text-sm tracking-widest uppercase"
            >
              Private Consultation
            </Link>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      {/* Philosophy - Subtle Grid */}
      <section className="py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { title: "Curated Safety", desc: "Comprehensive support and local logistics integrated seamlessly." },
              { title: "Local Insight", desc: "Expert curators who call these vibrant landscapes home." },
              { title: "Intimate Groups", desc: "Personalized itineraries designed for the discerning traveler." }
            ].map((feature, i) => (
              <div key={i} className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-400">0{i + 1} // {feature.title}</h3>
                <p className="text-stone-600 leading-relaxed font-light text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
            <h2 className="text-4xl font-serif italic">The Seasonal Collection</h2>
            <Link to="/tours" className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 border-b border-transparent hover:border-stone-900 transition-all pb-1">
              View All Journeys
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="group cursor-none-hover">
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations - Large Scale Editorial */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-light tracking-tight">Regional Landscapes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Link 
                to={`/tours?destination=${dest.name.toLowerCase()}`} 
                key={dest.id} 
                className="relative h-[600px] overflow-hidden group bg-stone-200"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center border-[0px] group-hover:border-[1px] border-white/20 m-6 transition-all duration-700" />
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full">
                  <h3 className="text-white text-2xl font-serif italic tracking-wide">{dest.name}</h3>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-2 block">Explore Archive</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-48 text-center bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-light mb-8 font-serif italic">Your journey begins <br/> with a conversation.</h2>
          <p className="text-stone-500 mb-16 font-light leading-relaxed">
            Every itinerary is a story waiting to be told. Let our curators help you write your next chapter in West Africa.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-16">
            <Link
              to="/contact"
              className="text-stone-900 border-b border-stone-900 pb-2 text-[11px] uppercase tracking-[0.4em] hover:text-stone-400 hover:border-stone-400 transition-all"
            >
              Start Inquiry
            </Link>
            <a
              href={`https://wa.me/${websiteConfig.whatsapp.number}`}
              className="text-stone-900 border-b border-stone-900 pb-2 text-[11px] uppercase tracking-[0.4em] hover:text-stone-400 hover:border-stone-400 transition-all"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;