import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

// Pages
import Home from './pages/Home';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations'; // If you create this
import FAQ from './pages/FAQ'; // If you create this

// Config
import { websiteConfig } from './config/websiteConfig';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/tour/:slug" element={<TourDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            {/* Add these if you create them */}
              <Route path="/destinations" element={<Destinations />} /> 
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
          {websiteConfig.whatsapp.enabled && <WhatsAppWidget />}
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;