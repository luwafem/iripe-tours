import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, Calendar, MapPin, DollarSign, X } from 'lucide-react';
import { websiteConfig, toursData } from '../config/websiteConfig';
import TourCard from '../components/TourCard';

const Tours = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]); // Increased for luxury tier
  const [durationFilter, setDurationFilter] = useState('');
  const [filteredTours, setFilteredTours] = useState(toursData);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const destination = params.get('destination');
    if (destination) {
      setSelectedDestination(destination.charAt(0).toUpperCase() + destination.slice(1));
    }
  }, [location.search]);

  useEffect(() => {
    let filtered = toursData.filter(tour => {
      const matchesSearch = !searchTerm || 
        tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.destination.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDest = !selectedDestination || 
        tour.destination.toLowerCase() === selectedDestination.toLowerCase();
      
      const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
      
      let matchesDuration = true;
      const days = parseInt(tour.duration);
      if (durationFilter === 'short') matchesDuration = days <= 5;
      else if (durationFilter === 'medium') matchesDuration = days > 5 && days <= 10;
      else if (durationFilter === 'long') matchesDuration = days > 10;

      return matchesSearch && matchesDest && matchesPrice && matchesDuration;
    });

    setFilteredTours(filtered);
  }, [searchTerm, selectedDestination, priceRange, durationFilter]);

  const destinations = [...new Set(toursData.map(tour => tour.destination))];

  return (
    <div className="bg-white min-h-screen font-serif">
      <Helmet>
        <title>The Collection | {websiteConfig.company.name}</title>
      </Helmet>

      {/* Elegant Minimal Hero */}
      <div className="pt-32 pb-16 border-b border-stone-100">
        <div className="container mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-4">
            Curated Experiences
          </span>
          <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-6">
            The Tour Collection
          </h1>
          <p className="text-stone-500 max-w-xl font-sans font-light leading-relaxed">
            From the gold-dusted coasts of Ghana to the hidden sanctuaries of Benin, 
            explore our portfolio of bespoke West African journeys.
          </p>
        </div>
      </div>

      {/* Refined Filter Bar */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[250px]">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <input
                type="text"
                placeholder="Find a destination..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-none pl-8 py-2 focus:ring-0 font-sans text-sm placeholder:text-stone-300"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <select 
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="bg-stone-50 border-none text-xs uppercase tracking-widest py-2 pl-4 pr-10 rounded-none focus:ring-1 focus:ring-stone-200"
              >
                <option value="">All Regions</option>
                {destinations.map(d => <option key={d} value={d}>{d}</option>)}
              </select>

              <select 
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="bg-stone-50 border-none text-xs uppercase tracking-widest py-2 pl-4 pr-10 rounded-none focus:ring-1 focus:ring-stone-200"
              >
                <option value="">Duration</option>
                <option value="short">1-5 Days</option>
                <option value="medium">6-10 Days</option>
                <option value="long">10+ Days</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar - Desktop Only Filter Details */}
          <aside className="hidden lg:block w-64 space-y-10">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-6">Investment</h3>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full accent-stone-800"
              />
              <div className="flex justify-between mt-2 font-sans text-[11px] text-stone-500">
                <span>$0</span>
                <span>Up to ${priceRange[1]}</span>
              </div>
            </div>

            <div className="pt-10 border-t border-stone-100">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-4">Inspiration</h3>
              <div className="flex flex-col space-y-3">
                {['Culture', 'Nature', 'Coastal', 'Bespoke'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="text-left text-sm font-sans text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-end mb-10">
              <p className="font-sans text-xs text-stone-400 uppercase tracking-widest">
                {filteredTours.length} Experiences Found
              </p>
            </div>

            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {filteredTours.map(tour => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-dashed border-stone-200">
                <p className="text-stone-400 font-serif italic">No journeys match your criteria.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setPriceRange([0,5000]); setSelectedDestination('');}}
                  className="mt-4 text-[10px] uppercase tracking-widest underline underline-offset-4"
                >
                  Clear Selection
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Boutique CTA */}
      <section className="bg-stone-50 py-24 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-stone-900 mb-4">Tailor-Made Excellence</h2>
          <p className="text-stone-500 max-w-lg mx-auto mb-10 font-sans font-light">
            If our curated collection doesn't perfectly match your vision, 
            our travel designers will craft a private itinerary exclusively for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-stone-900 text-white text-[10px] uppercase tracking-[0.2em] hover:bg-stone-800 transition-all"
            >
              Inquire Privately
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;