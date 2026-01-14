// src/components/ContactSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
// UPDATE PATH: Ensure this points to your new team image
import teamImage from '../assets/Home/team.webp'; 

const ContactSection = ({ t }) => {
  return (
    <section className="w-full bg-[#FFC72C] pt-20 pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-12 max-w-4xl mx-auto leading-tight">
          {t.contactTitle}
        </h2>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          
          {/* Email Button */}
          <a 
            href={`mailto:${t.contactEmail}`}
            className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-transform hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-lg font-bold tracking-wide">{t.contactEmail}</span>
          </a>

          {/* Phone Button */}
          <a 
            href={`tel:${t.contactPhone}`}
            className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-transform hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-lg font-bold tracking-wide">{t.contactPhone}</span>
          </a>

        </div>

        {/* Team Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative -mb-1 mt-8" // Negative margin to sit flush on bottom
        >
          <img 
            src={teamImage} 
            alt="Parikshe Team" 
            className="w-full max-w-6xl mx-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;