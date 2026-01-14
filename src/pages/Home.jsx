// src/pages/Home.js
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// --- DATA ---
import { homeContent } from '../data/homeData';

// --- COMPONENTS ---
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import HorizontalScrollCarousel from '../components/HorizontalScrollCarousel';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection'; // <--- IMPORT THIS
import AppDownloadSection from '../components/AppDownloadSection';
import StickyButton from '../components/StickyButton';

const Home = () => {
  const { isKannada, toggleLanguage } = useLanguage();
  
  // Get correct language content
  const t = isKannada ? homeContent.kn : homeContent.en;

  return (
    <div className="w-full font-sans bg-white">
      
      <HeroSection 
        t={t} 
        isKannada={isKannada} 
        toggleLanguage={toggleLanguage} 
      />

      <StatsSection t={t} />

      <HorizontalScrollCarousel content={t} t={t} />
      
      <FAQSection t={t} />

      {/* --- ADD NEW SECTION HERE --- */}
      <ContactSection t={t} />

      <AppDownloadSection t={t} isKannada={isKannada} />

      <StickyButton isKannada={isKannada} />

    </div>
  );
};

export default Home;