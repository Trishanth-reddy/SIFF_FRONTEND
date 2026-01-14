import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { fetchTeamData } from '../services/team';
import { motion } from 'framer-motion';

// --- IMPORT IMAGES ---
import PresenceImg from '../assets/presence.png'; 

// --- BENTO GALLERY IMAGES ---
import b1 from '../assets/Bento/1.png';
import b2 from '../assets/Bento/2.png';
import b3 from '../assets/Bento/3.png';
import b4 from '../assets/Bento/4.png';
import b5 from '../assets/Bento/5.png';
import b6 from '../assets/Bento/6.png';
import b7 from '../assets/Bento/7.jpg';
import b8 from '../assets/Bento/8.jpg';
import b9 from '../assets/Bento/9.jpg';

const About = () => {
  const { isKannada, toggleLanguage } = useLanguage();
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Gallery Array
  const galleryImages = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const data = await fetchTeamData();
        setTeamMembers(data);
      } catch (error) {
        console.error("Failed to load team data", error);
      } finally {
        setLoading(false);
      }
    };
    loadTeam();
  }, []);

  const content = {
    en: {
      storyTitle: "Our Story",
      storyText: "Parikshe began as a heartfelt initiative by the dedicated educators at SIFF Scholars. For over seven years, we’ve been coaching students from under-resourced backgrounds for the Karnataka SSLC Exams. Our commitment has led to remarkable outcomes: an average score of 85% and a 100% pass rate each year. Impressively, over half of our students have received distinctions in their board exams. Now, through Parikshe, this expertise is accessible to every student in Karnataka learning SSLC, PUC and KCET.",
      missionTitle: "Our Mission",
      missionText: "To democratize access to quality education for Karnataka SSLC | PUC | KCET students by providing comprehensive resources, expert guidance, and unwavering support.",
      partnersTitle: "Our Partners",
      partnersText: "We have entered into a long-term Memorandum of Understanding (MoU) with Samagra Shikshana Karnataka (SSK) to collaboratively enhance educational opportunities in government and aided schools across the state.",
      enquireBtn: "Enquire Now!",
      teamTitle: "Meet Our Team",
      presenceTitle: "Our Presence",
      galleryTitle: "The Parikshe Gallery"
    },
    kn: {
      storyTitle: "ನಮ್ಮ ಕಥೆ",
      storyText: "ಪರೀಕ್ಷೆಯು SIFF ಸ್ಕಾಲರ್ಸ್‌ನ ಸಮರ್ಪಿತ ಶಿಕ್ಷಣತಜ್ಞರ ಒಂದು ಪ್ರಾಮಾಣಿಕ ಉಪಕ್ರಮವಾಗಿ ಪ್ರಾರಂಭವಾಯಿತು. ಏಳು ವರ್ಷಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ, ನಾವು ಕರ್ನಾಟಕ SSLC ಪರೀಕ್ಷೆಗಳಿಗೆ ಬಡ ಹಿನ್ನೆಲೆಯ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತರಬೇತಿ ನೀಡುತ್ತಿದ್ದೇವೆ. ನಮ್ಮ ಬದ್ಧತೆಯು ಅದ್ಭುತ ಫಲಿತಾಂಶಗಳಿಗೆ ಕಾರಣವಾಗಿದೆ: ಪ್ರತಿ ವರ್ಷ ಸರಾಸರಿ 85% ಅಂಕಗಳು ಮತ್ತು 100% ತೇರ್ಗಡೆ. ವಿಶೇಷವೆಂದರೆ, ನಮ್ಮ ಅರ್ಧಕ್ಕಿಂತ ಹೆಚ್ಚು ವಿದ್ಯಾರ್ಥಿಗಳು ತಮ್ಮ ಬೋರ್ಡ್ ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಡಿಸ್ಟಿಂಕ್ಷನ್ ಪಡೆದಿದ್ದಾರೆ. ಈಗ, ಪರೀಕ್ಷೆಯ ಮೂಲಕ, SSLC, PUC ಮತ್ತು KCET ಕಲಿಯುವ ಕರ್ನಾಟಕದ ಪ್ರತಿಯೊಬ್ಬ ವಿದ್ಯಾರ್ಥಿಗೂ ಈ ಪರಿಣತಿ ಲಭ್ಯವಿದೆ.",
      missionTitle: "ನಮ್ಮ ಧ್ಯೇಯ",
      missionText: "ಕರ್ನಾಟಕ SSLC | PUC | KCET ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಮಗ್ರ ಸಂಪನ್ಮೂಲಗಳು, ತಜ್ಞರ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಅಚಲ ಬೆಂಬಲವನ್ನು ನೀಡುವ ಮೂಲಕ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ಎಲ್ಲರಿಗೂ ತಲುಪಿಸುವುದು.",
      partnersTitle: "ನಮ್ಮ ಪಾಲುದಾರರು",
      partnersText: "ಸರ್ಕಾರಿ ಮತ್ತು ಅನುದಾನಿತ ಶಾಲೆಗಳಲ್ಲಿ ಶೈಕ್ಷಣಿಕ ಅವಕಾಶಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ನಾವು ಸಮಗ್ರ ಶಿಕ್ಷಣ ಕರ್ನಾಟಕ (SSK) ದೊಂದಿಗೆ ದೀರ್ಘಕಾಲೀನ ತಿಳುವಳಿಕೆ ಒಪ್ಪಂದಕ್ಕೆ (MoU) ಸಹಿ ಹಾಕಿದ್ದೇವೆ.",
      enquireBtn: "ಈಗಲೇ ವಿಚಾರಿಸಿ!",
      teamTitle: "ನಮ್ಮ ತಂಡವನ್ನು ಭೇಟಿ ಮಾಡಿ",
      presenceTitle: "ನಮ್ಮ ಉಪಸ್ಥಿತಿ",
      galleryTitle: "ಪರೀಕ್ಷೆ ಗ್ಯಾಲರಿ"
    }
  };

  const t = isKannada ? content.kn : content.en;

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full font-sans bg-white overflow-x-hidden">
      
      {/* --- HERO / STORY SECTION --- */}
      {/* Changed to light theme for better readability and cleaner look */}
      <section className="relative pt-32 pb-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Language Toggle - Positioned neatly */}
          <div className="flex justify-center items-center mb-10 gap-4">
             <span className={`text-sm tracking-widest uppercase ${!isKannada ? 'text-black font-bold' : 'text-gray-400'}`}>English</span>
             <button 
               onClick={toggleLanguage} 
               className="w-14 h-7 bg-gray-200 rounded-full p-1 flex items-center transition-colors duration-300 focus:outline-none shadow-inner"
             >
               <div className={`bg-yellow-500 w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${isKannada ? 'translate-x-7' : 'translate-x-0'}`}></div>
             </button>
             <span className={`text-sm tracking-widest uppercase ${isKannada ? 'text-black font-bold' : 'text-gray-400'}`}>ಕನ್ನಡ</span>
          </div>

          <motion.h1 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-black mb-8 leading-tight"
          >
            {t.storyTitle}
          </motion.h1>
          <motion.p 
             initial="hidden"
             whileInView="visible"
             variants={fadeIn}
             viewport={{ once: true }}
             className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
          >
            {t.storyText}
          </motion.p>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-10"></div>
        </div>
      </section>

      {/* --- MISSION & PARTNERS GRID --- */}
      {/* Combined into a grid for better use of space */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          
          {/* Mission Card */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-2xl">🎯</div>
            <h2 className="text-3xl font-bold text-black mb-4">{t.missionTitle}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{t.missionText}</p>
          </motion.div>

          {/* Partners Card */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="bg-[#2a2a2a] p-10 rounded-3xl shadow-xl text-white relative overflow-hidden group"
          >
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-yellow-500/20 transition-all"></div>
            
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-6 text-2xl">🤝</div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">{t.partnersTitle}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{t.partnersText}</p>
          </motion.div>

        </div>
      </section>

      {/* --- MEET OUR TEAM --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t.teamTitle}</h2>
          </div>
          
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {!loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative h-[420px] w-full rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-100"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    
                    {/* Name & Role (Always Visible) */}
                    <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                       <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                       {/* Optional: Add Role here if available in data, e.g., <p className="text-yellow-400 text-sm font-medium uppercase tracking-wider">Founder</p> */}
                       <div className="w-12 h-1 bg-yellow-400 rounded-full mt-2 mb-4 group-hover:w-20 transition-all duration-300"></div>
                    </div>

                    {/* Bio (Slides up on Hover) */}
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                      <p className="text-gray-200 text-sm leading-relaxed pb-2">
                        {typeof member.bio === 'object' ? (isKannada ? member.bio.kn : member.bio.en) : member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- OUR PRESENCE --- */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
            {t.presenceTitle}
          </h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <img 
              src={PresenceImg} 
              alt="Our Presence Map" 
              className="w-full h-auto max-w-5xl rounded-2xl shadow-2xl border-4 border-white" 
            />
          </motion.div>
        </div>
      </section>

      {/* --- GALLERY SECTION (Refined Bento) --- */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
            <span className="border-b-4 border-yellow-400 pb-2">{t.galleryTitle}</span>
          </h2>
          
          {/* PARENT: Always 4 columns. On small screens, we manually span 4. */}
          <div className="grid grid-cols-4 gap-5 auto-rows-[290px]">
            
            {/* ROW 1: Wide - Small - Small */}
            <div className="col-span-4 md:col-span-2 overflow-hidden rounded-xl shadow-lg">
                <img src={galleryImages[0]} alt="Gallery 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="col-span-4 md:col-span-1 overflow-hidden rounded-2xl shadow-lg">
                <img src={galleryImages[1]} alt="Gallery 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="col-span-4 md:col-span-1 overflow-hidden rounded-2xl shadow-lg">
                <img src={galleryImages[2]} alt="Gallery 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>

            {/* ROW 2: Small - Wide - Small */}
            <div className="col-span-4 md:col-span-1 overflow-hidden rounded-2xl shadow-lg">
                <img src={galleryImages[3]} alt="Gallery 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="col-span-4 md:col-span-2 overflow-hidden rounded-2xl shadow-lg">
                <img src={galleryImages[4]} alt="Gallery 5" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="col-span-4 md:col-span-1 overflow-hidden rounded-2xl shadow-lg">
                <img src={galleryImages[5]} alt="Gallery 6" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>

            {/* ROW 3: Wide - Small - Small */}
            <div className="col-span-4 md:col-span-2 overflow-hidden rounded-2xl shadow-lg">
                <img src={galleryImages[6]} alt="Gallery 7" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="col-span-4 md:col-span-1 overflow-hidden rounded-2xl shadow-lg">
                <img src={galleryImages[7]} alt="Gallery 8" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="col-span-4 md:col-span-1 overflow-hidden rounded-2xl shadow-lg">
                <img src={galleryImages[8]} alt="Gallery 9" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;