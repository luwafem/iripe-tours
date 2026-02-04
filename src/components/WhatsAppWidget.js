import React from 'react';
import { MessageCircle } from 'lucide-react';
import { websiteConfig } from '../config/websiteConfig';

const WhatsAppWidget = () => {
  const whatsappNumber = websiteConfig.whatsapp.number.replace(/\D/g, '');
  const message = encodeURIComponent(websiteConfig.whatsapp.message);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center"
      aria-label="Chat with a Curator"
    >
      {/* Label that appears on hover */}
      <span className="mr-4 text-[10px] uppercase tracking-[0.3em] text-stone-900 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0 font-light">
        Inquire Now
      </span>

      <div className="relative">
        {/* Subtle, slow outer ring - much more elegant than a fast ping */}
        <div className="absolute inset-[-4px] border border-stone-200 rounded-full scale-100 group-hover:scale-110 transition-transform duration-700"></div>
        
        {/* Main button - switching from Green to Stone/White */}
        <div className="relative bg-white border border-stone-200 text-stone-900 p-4 rounded-full shadow-sm group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 ease-out">
          <MessageCircle className="h-5 w-5 stroke-[1.5px]" />
        </div>
        
        {/* Detail: A tiny dot instead of a loud '!' badge */}
        <div className="absolute top-0 right-0 h-2 w-2 bg-stone-800 rounded-full border-2 border-white group-hover:bg-white"></div>
      </div>
    </a>
  );
};

export default WhatsAppWidget;