import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
const LanguageContext = createContext();

// 2. Create a Custom Hook (shortcut to use the context easily)
export const useLanguage = () => useContext(LanguageContext);

// 3. Create the Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English ('en')

  // Function to toggle between 'en' and 'kn'
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'kn' : 'en'));
  };

  // The values we want to share with the whole app
  const value = {
    language,
    isKannada: language === 'kn',
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};