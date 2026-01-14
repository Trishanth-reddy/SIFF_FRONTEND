// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';

// Import images directly here since only this component uses them
import h1 from '../assets/Home/1.webp';
import h2 from '../assets/Home/2.png';
import h3 from '../assets/Home/3.webp';
import h4 from '../assets/Home/4.webp';
import h5 from '../assets/Home/5.webp';
import h6 from '../assets/Home/6.webp';
import h7 from '../assets/Home/7.webp';

const HeroSection = ({ t, isKannada, toggleLanguage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [h1, h2, h3, h4, h5, h6, h7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="w-full min-h-screen flex flex-col relative bg-white">
      {/* Language Toggle */}

  <div className=" mb-10 flex justify-end  absolute top-24 right-6 z-20 md:top-28 md:right-12   items-end mb-10 gap-4">
             <span className={`text-sm tracking-widest uppercase ${!isKannada ? 'text-black font-bold' : 'text-gray-400'}`}>English</span>
             <button 
               onClick={toggleLanguage} 
               className="w-14 h-7 bg-gray-200 rounded-full p-1 flex items-center transition-colors duration-300 focus:outline-none shadow-inner"
             >
               <div className={`bg-yellow-500 w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${isKannada ? 'translate-x-7' : 'translate-x-0'}`}></div>
             </button>
             <span className={`text-sm tracking-widest uppercase ${isKannada ? 'text-black font-bold' : 'text-gray-400'}`}>ಕನ್ನಡ</span>
          </div>




      <div className="flex-grow flex items-center justify-center pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
              {isKannada ? "ಕರ್ನಾಟಕದ" : "Karnataka’s"} <br />
              {isKannada ? "ಅತಿದೊಡ್ಡ ಕಲಿಕಾ ತಾಣ" : "Largest Learning"} <br />
              {isKannada ? "" : "Destination"} <br />
              {isKannada ? "SSLC, PUC & KCET ಗಾಗಿ" : "For SSLC, PUC & KCET"}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">{t.heroSub}</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors shadow-md">{t.btnSSLC}</button>
              <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors shadow-md text-sm">{t.btnPUC}</button>
              <button className="bg-black text-white font-bold px-6 py-3 rounded-md hover:bg-gray-800 transition-colors shadow-md text-sm">{t.btnCommerce}</button>
            </div>
          </div>
          
          {/* Carousel Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
             <div className="w-full max-w-xl aspect-[16/9] relative rounded-xl shadow-2xl overflow-hidden bg-gray-100">
               {heroImages.map((img, index) => (
                 <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                   <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
                 </div>
               ))}
               <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                 {heroImages.map((_, idx) => (
                   <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-yellow-400 w-6' : 'bg-gray-300'}`} />
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;