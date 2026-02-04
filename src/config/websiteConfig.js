// ============================================
// WEBSITE CONFIGURATION - EDIT THIS FILE ONLY
// ============================================

export const websiteConfig = {
  // Company Information
  company: {
    name: "Iripe Tours",
    slogan: "Explore West Africa in Style",
    description: "Premier Nigerian travel agency offering luxury tours to Ghana, Togo, Benin and beyond. Experience authentic West African culture with expert guides.",
    email: "contact@iripe-tours.com",
    phone: "+2348012345678",
    address: "123 Victoria Island, Lagos, Nigeria",
    founded: "2015"
  },

  // Social Media Links
  socialMedia: {
    facebook: "https://facebook.com/iripe-tours",
    instagram: "https://instagram.com/iripe-tours",
    twitter: "https://twitter.com/iripe-tours",
    linkedin: "https://linkedin.com/company/iripe-tours"
  },

  // WhatsApp Configuration
  whatsapp: {
    number: "2348012345678",
    message: "Hello Iripe Tours, I'd like to book a tour!",
    enabled: true
  },

  // Formspree Configuration
  formspree: {
    contactFormId: "YOUR_FORMSPREE_FORM_ID", // Replace with your Formspree form ID
    newsletterFormId: "YOUR_FORMSPREE_NEWSLETTER_ID"
  },

  // SEO Configuration
  seo: {
    siteUrl: "https://www.iripe-tours.com",
    siteName: "Iripe Tours | West Africa Travel Experts",
    defaultImage: "/og-image.jpg",
    twitterHandle: "@iripe-tours",
    keywords: "Nigeria travel, Ghana tours, Togo tourism, Benin trips, West Africa tours, African travel agency"
  },

  // Navigation Menu
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Tours', href: '/tours' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'About', href: '/about' },
  ],

  // Contact Information
  contact: {
    officeHours: "Mon - Fri: 9AM - 6PM, Sat: 10AM - 4PM",
    emergencyContact: "+2347087654321",
    supportEmail: "support@iripe-tours.com"
  }
};

// ============================================
// TOURS DATA - EDIT THIS SECTION
// ============================================

export const toursData = [
  {
    id: 1,
    name: "Ghana Cultural Experience",
    slug: "ghana-cultural-experience",
    destination: "Ghana",
    duration: "7 Days",
    price: 850,
    priceCurrency: "$",
    description: "Immerse yourself in Ghana's rich history and vibrant culture. Visit Cape Coast Castle, explore Accra's markets, and experience traditional Ashanti culture.",
    highlights: [
      "Cape Coast Castle & Elmina Castle",
      "Kakum National Park Canopy Walk",
      "Ashanti Kingdom Cultural Experience",
      "Accra City Tour",
      "Traditional Ghanaian Cooking Class"
    ],
    included: ["Accommodation", "All Meals", "Guided Tours", "Transportation", "Entrance Fees"],
    images: [
      "https://unsplash.com/photos/-CgUhaShACE/download?force=true&w=2400",
      "https://unsplash.com/photos/0qz48eDvNHo/download?force=true&w=2400"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Accra", description: "Airport pickup and hotel check-in" },
      { day: 2, title: "Accra City Tour", description: "Visit Independence Square, Makola Market" },
      // Add more days...
    ],
    faqs: [
      { question: "Best time to visit?", answer: "November to April" },
      { question: "Visa requirements?", answer: "Visa on arrival for Nigerians" }
    ]
  },
  {
    id: 2,
    name: "Togo Adventure Trail",
    slug: "togo-adventure-trail",
    destination: "Togo",
    duration: "5 Days",
    price: 650,
    priceCurrency: "$",
    description: "Discover Togo's diverse landscapes from coastal beaches to mountain villages. Experience voodoo culture and French colonial heritage.",
    highlights: [
      "Lomé Grand Market",
      "Voodoo Cultural Experience",
      "Kpalimé Mountain Villages",
      "Togoville Lake Village",
      "Aneho Historical Town"
    ],
    included: ["Accommodation", "Breakfast", "Guided Tours", "Transport"],
    images: [
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    name: "Benin Kingdom Exploration",
    slug: "benin-kingdom-exploration",
    destination: "Benin",
    duration: "6 Days",
    price: 720,
    priceCurrency: "$",
    description: "Explore the ancient Kingdom of Benin, visit UNESCO sites, and experience unique wildlife in Pendjari National Park.",
    highlights: [
      "Royal Palaces of Abomey",
      "Ganvié Stilt Village",
      "Pendjari National Park Safari",
      "Ouidah Historical Sites",
      "Porto-Novo Museums"
    ],
    included: ["Accommodation", "Most Meals", "Safari Tour", "Museum Entries"],
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    name: "West Africa Grand Tour",
    slug: "west-africa-grand-tour",
    destination: "Multiple",
    duration: "14 Days",
    price: 1850,
    priceCurrency: "$",
    description: "Comprehensive tour covering Ghana, Togo, and Benin. Perfect for experiencing the diversity of West African cultures in one trip.",
    highlights: [
      "Three Countries in One Tour",
      "Cultural Immersion in Each Country",
      "Historical and Natural Sites",
      "Luxury Accommodation",
      "Private Transportation"
    ],
    included: ["All Accommodation", "All Meals", "Private Guide", "VIP Transport", "All Activities"],
    images: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

// ============================================
// DESTINATIONS DATA
// ============================================

export const destinations = [
  {
    id: 1,
    name: "Ghana",
    description: "Experience the warmth of Ghanaian hospitality and rich cultural heritage",
    image: "https://unsplash.com/photos/0qz48eDvNHo/download?force=true&w=2400",
    toursCount: 4
  },
  {
    id: 2,
    name: "Togo",
    description: "Discover French influence mixed with authentic African traditions",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    toursCount: 3
  },
  {
    id: 3,
    name: "Benin",
    description: "Explore ancient kingdoms and unique stilt villages",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    toursCount: 3
  }
];