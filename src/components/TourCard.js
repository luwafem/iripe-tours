import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TourCard = ({ tour }) => {
  return (
    <div className="group bg-white flex flex-col h-full border-b border-stone-100 pb-8 transition-all duration-500">
      {/* Editorial Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-6">
        <img
          src={tour.images[0]}
          alt={tour.name}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        {/* Subtle Destination Label */}
        <div className="absolute top-6 left-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white bg-black/20 backdrop-blur-sm px-3 py-1">
            {tour.destination}
          </span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex flex-col flex-grow px-2">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-light text-stone-900 leading-tight tracking-tight max-w-[70%]">
            {tour.name}
          </h3>
          <span className="text-sm font-normal text-stone-500 italic font-serif">
            from {tour.priceCurrency}{tour.price}
          </span>
        </div>

        <p className="text-stone-500 text-sm leading-relaxed font-normal mb-6 line-clamp-2">
          {tour.description}
        </p>
        
        {/* Technical Details in Minimalist Row */}
        <div className="flex items-center space-x-6 mb-8 text-[10px] uppercase tracking-widest text-stone-400">
          <div className="flex items-center">
            <span>{tour.duration}</span>
          </div>
          <div className="w-1 h-1 bg-stone-300 rounded-full" />
          <div className="flex items-center">
            <span>Small Group</span>
          </div>
        </div>
        
        {/* Ghost Link instead of a solid button */}
        <div className="mt-auto">
          <Link
            to={`/tour/${tour.slug}`}
            className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-stone-900 group/link"
          >
            Explore Itinerary
            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/link:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;