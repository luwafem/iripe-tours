import React from 'react';
import { Link } from 'react-router-dom';
import { websiteConfig } from '../config/websiteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-stone-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Identity Section */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="inline-block group">
              <h2 className="text-2xl font-serif italic tracking-tight text-stone-900 group-hover:opacity-60 transition-opacity">
                {websiteConfig.company.name}
              </h2>
              <span className="text-[9px] uppercase tracking-[0.4em] text-stone-400 block mt-1">
                West African Curators
              </span>
            </Link>
            <p className="text-sm text-stone-500 font-light leading-relaxed max-w-sm">
              {websiteConfig.company.description}
            </p>
            
            {/* Minimalist Socials */}
            <div className="flex space-x-8 pt-4">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <a 
                  key={social}
                  href={websiteConfig.socialMedia[social.toLowerCase()]} 
                  className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            
            {/* Discover Column */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-900 mb-8 font-semibold">Discover</h3>
              <ul className="space-y-4">
                {websiteConfig.navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-sm font-light text-stone-500 hover:text-stone-900 transition-colors underline-offset-4 hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations Column */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-900 mb-8 font-semibold">Journeys</h3>
              <ul className="space-y-4">
                {['Ghana', 'Togo', 'Benin'].map((loc) => (
                  <li key={loc}>
                    <Link 
                      to={`/tours?destination=${loc.toLowerCase()}`} 
                      className="text-sm font-light text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      {loc} Expedition
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details Column */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone-900 mb-8 font-semibold">Inquiries</h3>
              <div className="space-y-4 text-sm font-light text-stone-500 leading-relaxed">
                <p>{websiteConfig.company.address}</p>
                <p className="text-stone-900 font-serif italic">{websiteConfig.company.email}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-stone-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
            © {currentYear} {websiteConfig.company.name} — All Rights Reserved
          </div>
          <div className="flex gap-8 text-[9px] uppercase tracking-widest text-stone-300">
             <span>Lagos — Accra — Cotonou</span>
             <span className="hidden md:inline">|</span>
             <span>Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;