import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { destinations, toursData, websiteConfig } from '../config/websiteConfig';

const Destinations = () => {
  const destinationsWithStats = destinations.map(dest => {
    const destinationTours = toursData.filter(tour => 
      tour.destination.toLowerCase() === dest.name.toLowerCase()
    );
    return {
      ...dest,
      toursCount: destinationTours.length,
    };
  });

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Destinations | {websiteConfig.company.name}</title>
        <meta name="description" content="Explore our curated collection of West African destinations." />
      </Helmet>

      {/* Editorial Header */}
      <header className="max-w-7xl mx-auto px-6 pt-32 pb-20 border-b border-stone-100">
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-6">
          The Collection
        </span>
        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-stone-900 italic font-serif leading-tight">
          Curated <br />Destinations
        </h1>
        <p className="mt-12 text-stone-500 max-w-xl font-light leading-relaxed">
          From the storied shores of the Atlantic to the ancestral heartlands of the Sahel, 
          discover a collection of journeys designed for the discerning traveler.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {destinationsWithStats.map((dest, index) => (
            <Link 
              key={dest.id} 
              to={`/tours?destination=${dest.name.toLowerCase()}`}
              className="group block"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-8">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text Meta */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 italic">
                    {dest.toursCount} {dest.toursCount === 1 ? 'Experience' : 'Experiences'}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif italic text-stone-900 tracking-tight group-hover:text-stone-600 transition-colors">
                  {dest.name}
                </h3>
                
                <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-2 pb-4">
                  {dest.description}
                </p>

                <div className="pt-2 border-t border-stone-100 flex items-center group-hover:gap-4 transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-stone-900">
                    Explore Region
                  </span>
                  <div className="h-px w-8 bg-stone-900 group-hover:w-12 transition-all duration-300 ml-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Minimal Footer CTA */}
      <section className="bg-stone-50 py-32 mt-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif italic text-stone-900 mb-8">Not sure where to begin?</h2>
          <p className="text-stone-500 font-light mb-12">
            Our travel specialists are available to craft a bespoke itinerary tailored to your specific interests.
          </p>
          <Link 
            to="/contact" 
            className="inline-block border border-stone-300 px-12 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-500"
          >
            Design a Bespoke Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Destinations;