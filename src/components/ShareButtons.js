import React, { useState } from 'react';
import { Facebook, Twitter, Send, Link as LinkIcon } from 'lucide-react';
import { websiteConfig } from '../config/websiteConfig';

const ShareButtons = ({ title, slug }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${websiteConfig.seo.siteUrl}/tour/${slug}`;
  const shareText = encodeURIComponent(`${title} - ${websiteConfig.company.name}`);
  const hashtags = "QuietLuxury,WestAfrica,BespokeTravel";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}&hashtags=${hashtags}`,
    whatsapp: `https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">Share Journey</span>
      
      <div className="flex items-center space-x-6">
        <a
          href={shareLinks.facebook}
          target="_blank"
          转向="noopener noreferrer"
          className="text-stone-400 hover:text-stone-900 transition-colors duration-300"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4 stroke-[1.5px]" />
        </a>

        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-400 hover:text-stone-900 transition-colors duration-300"
        >
          <Twitter className="h-4 w-4 stroke-[1.5px]" />
        </a>

        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-400 hover:text-stone-900 transition-colors duration-300"
        >
          <Send className="h-4 w-4 stroke-[1.5px]" />
        </a>

        <button
          onClick={copyToClipboard}
          className="relative text-stone-400 hover:text-stone-900 transition-colors duration-300 focus:outline-none"
          aria-label="Copy link"
        >
          {copied ? (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-widest text-stone-900 bg-stone-50 px-2 py-1 whitespace-nowrap animate-fade-in">
              Copied
            </span>
          ) : null}
          <LinkIcon className="h-4 w-4 stroke-[1.5px]" />
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;