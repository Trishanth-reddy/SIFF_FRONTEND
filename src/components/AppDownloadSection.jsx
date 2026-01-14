// src/components/AppDownloadSection.jsx
import React from 'react';
import mobImage from '../assets/Home/mob.png'; 

const AppDownloadSection = ({ t, isKannada }) => {
  return (
    <section className="w-full bg-[#FFC72C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-3/5 py-12 md:py-24 space-y-8 z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight tracking-tight">
            {isKannada 
              ? "ಪರೀಕ್ಷೆ ಅಪ್ಲಿಕೇಶನ್: ಕರ್ನಾಟಕದ SSLC, PUC ಮತ್ತು KCET ತಯಾರಿಗಾಗಿ ನಿಮ್ಮ ಏಕೈಕ ಪರಿಹಾರ"
              : "Parikshe App Your One-Stop Solution for Karnataka’s SSLC, PUC and KCET Preparation"
            }
          </h2>
          <div className="flex justify-start">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-16 md:h-20"/>
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/5 relative flex justify-center md:justify-end mt-8 md:mt-0">
          <img src={mobImage} alt="App Interface" className="w-[280px] md:w-[350px] object-contain transform translate-y-4 md:translate-y-12"/>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;