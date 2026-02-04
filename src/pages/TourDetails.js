import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { toursData, websiteConfig } from '../config/websiteConfig';
import ShareButtons from '../components/ShareButtons';
import ContactForm from '../components/ContactForm';

const TourDetails = () => {
  const { slug } = useParams();
  const tour = toursData.find(t => t.slug === slug);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-light tracking-widest text-stone-400">
        <h1 className="text-2xl mb-4">Itinerary not found.</h1>
        <Link to="/tours" className="border-b border-stone-200 pb-1 hover:text-stone-900 transition-colors">
          Return to Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Helmet>
        <title>{tour.name} | {websiteConfig.company.name}</title>
        <meta name="description" content={tour.description} />
      </Helmet>

      {/* Cinematic Hero */}
      <div className="relative h-[70vh] w-full overflow-hidden bg-stone-100">
        <img
          src={tour.images[0]}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] mb-4 animate-fade-in">
            {tour.destination}
          </span>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tight max-w-4xl leading-tight italic font-serif">
            {tour.name}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Main Narrative Content */}
          <div className="lg:col-span-7 space-y-20">
            
            {/* Intro Summary */}
            <section>
              <div className="flex flex-wrap gap-12 text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-12 border-b border-stone-100 pb-8">
                <div>Duration: <span className="text-stone-900 ml-2">{tour.duration}</span></div>
                <div>Group Size: <span className="text-stone-900 ml-2">Max 12</span></div>
                <div>Season: <span className="text-stone-900 ml-2">Year Round</span></div>
              </div>
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-stone-500 mb-8">The Experience</h2>
              <p className="text-xl text-stone-800 leading-relaxed font-light italic font-serif">
                {tour.description}
              </p>
            </section>

            {/* Editorial Highlights */}
            <section className="bg-stone-50 p-12 lg:-ml-12 lg:pr-24">
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-stone-500 mb-8">Selected Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {tour.highlights.map((item, i) => (
                  <div key={i} className="flex items-baseline group">
                    <span className="text-stone-300 text-xs mr-4 group-hover:text-stone-900 transition-colors italic">0{i+1}</span>
                    <span className="text-stone-700 text-sm tracking-wide font-light">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary Timeline */}
            <section>
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-stone-500 mb-12">The Journey</h2>
              <div className="space-y-16">
                {tour.itinerary?.map((day) => (
                  <div key={day.day} className="group relative pl-12">
                    <div className="absolute left-0 top-0 text-[10px] text-stone-300 border-l border-stone-200 h-full pl-4 group-hover:border-stone-900 transition-colors duration-500">
                      Day {day.day}
                    </div>
                    <h3 className="text-lg font-serif italic text-stone-900 mb-3">{day.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed font-light">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Refined Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-12">
              <div className="border border-stone-100 p-10 bg-white">
                <div className="mb-10 text-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-2">Private Journey from</p>
                  <p className="text-3xl font-light text-stone-900 tracking-tighter">
                    {tour.priceCurrency}{tour.price}
                  </p>
                  <p className="text-[10px] text-stone-400 mt-1 uppercase tracking-widest">Per Traveler</p>
                </div>
                
                <ContactForm />
                
                <div className="mt-8 text-center">
                   <ShareButtons slug={tour.slug} />
                </div>
              </div>

              {/* Minimalist Support Link */}
              <div className="text-center px-10">
                 <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-4">Expert Assistance</p>
                 <a href={`mailto:${websiteConfig.company.email}`} className="text-sm font-light text-stone-900 hover:opacity-50 transition-opacity underline underline-offset-8 decoration-stone-200">
                   Inquire via Email
                 </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TourDetails;