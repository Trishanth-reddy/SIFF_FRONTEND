// src/components/StickyButton.jsx
import React from 'react';

const StickyButton = ({ isKannada }) => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <button className="bg-yellow-400 text-white font-bold py-3 px-6 rounded-t-lg origin-bottom-right rotate-90 shadow-lg hover:bg-yellow-500 transition-colors tracking-wide text-lg whitespace-nowrap">
        {isKannada ? "ಈಗಲೇ ವಿಚಾರಿಸಿ!" : "Enquire Now!"}
      </button>
    </div>
  );
};

export default StickyButton;