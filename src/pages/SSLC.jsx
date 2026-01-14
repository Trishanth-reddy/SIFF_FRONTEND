import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { fetchYouTubeData } from '../services/youtube';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORT IMAGES ---
import BannerEnglish from '../assets/SLCC/SLLC BANNER.png'; 
import BannerKannada from '../assets/SLCC/SSLC-KANNANDA.webp';

// --- IMPORT CAROUSEL IMAGES ---
import c1 from '../assets/SLCC/carousel/1.png';
import c2 from '../assets/SLCC/carousel/2.png';
import c3 from '../assets/SLCC/carousel/3.png';
import c4 from '../assets/SLCC/carousel/4.png';
import c5 from '../assets/SLCC/carousel/5.png';
import c6 from '../assets/SLCC/carousel/6.png';
import c7 from '../assets/SLCC/carousel/7.png';
import c8 from '../assets/SLCC/carousel/8.png';
import c9 from '../assets/SLCC/carousel/9.png';
import c10 from '../assets/SLCC/carousel/10.png';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// --- VIDEO CARD COMPONENT ---
const VideoCard = ({ video, t }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getThumbnailFromUrl = (url) => {
    try {
      const videoId = url.split('/').pop().split('?')[0];
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; 
    } catch (e) {
      return ''; 
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      <div className="relative aspect-video bg-gray-900 group">
         {!isPlaying ? (
           <div className="w-full h-full cursor-pointer relative overflow-hidden" onClick={() => setIsPlaying(true)}>
             <img 
                src={getThumbnailFromUrl(video.videoUrl)} 
                alt={video.title} 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" 
             />
             <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
               <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                 <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
               </div>
             </div>
           </div>
         ) : (
           <iframe 
             src={`${video.videoUrl}?autoplay=1&rel=0`} 
             title={video.title}
             className="w-full h-full"
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
           ></iframe>
         )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
            <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider bg-yellow-100 px-2 py-1 rounded-sm mb-3 inline-block">
                {video.category || 'Lecture'}
            </span>
            <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                {video.title}
            </h3>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
            <button className="w-full group bg-gray-50 hover:bg-yellow-400 text-gray-800 hover:text-black font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm">
            {t.exploreBtn}
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---
const SSLC = () => {
  const { isKannada, toggleLanguage } = useLanguage();
  const [videos, setVideos] = useState([]);
  const [activeTab, setActiveTab] = useState('Foundation Course Batch (25-26)');

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const teacherImages = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];
  const totalImages = teacherImages.length;

  const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
  const nextIndex = (currentIndex + 1) % totalImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalImages]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalImages);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await fetchYouTubeData();
        setVideos(data);
      } catch (error) {
        console.error("Failed to load YouTube data", error);
      }
    };
    loadVideos();
  }, []);

  const content = {
    en: {
      enquireBtn: "Enquire Now!",
      learningTitle: "Continue Your Learning Journey",
      learningSub: "Access premium content curated for excellence.",
      getStarted: "Get Started",
      studyTitle: "Study Material",
      exploreBtn: "Watch Video",
      teacherTitle: "Meet your SSLC Teachers",
      teacherSub: "Learn from the best educators in Karnataka"
    },
    kn: {
      enquireBtn: "ಈಗಲೇ ವಿಚಾರಿಸಿ!",
      learningTitle: "ನಿಮ್ಮ ಕಲಿಕೆಯ ಪ್ರಯಾಣವನ್ನು ಮುಂದುವರಿಸಿ",
      learningSub: "ಉತ್ಯುತ್ತಮ ಕಲಿಕೆಗಾಗಿ ಪ್ರೀಮಿಯಂ ವಿಷಯವನ್ನು ಪಡೆಯಿರಿ.",
      getStarted: "ಪ್ರಾರಂಭಿಸಿ",
      studyTitle: "ಅಧ್ಯಯನ ಸಾಮಗ್ರಿ",
      exploreBtn: "ವೀಡಿಯೊ ವೀಕ್ಷಿಸಿ",
      teacherTitle: "ನಿಮ್ಮ SSLC ಶಿಕ್ಷಕರನ್ನು ಭೇಟಿ ಮಾಡಿ",
      teacherSub: "ಕರ್ನಾಟಕದ ಅತ್ಯುತ್ತಮ ಶಿಕ್ಷಕರಿಂದ ಕಲಿಯಿರಿ"
    }
  };

  const t = isKannada ? content.kn : content.en;

  const tabs = [
    "Foundation Course Batch (25-26)",
    "Career Guidance Batch (25-26)",
    "Headstart Batch (25-26)"
  ];

  return (
    // UPDATED: Added 'pt-20' and 'md:pt-24' to create space for your fixed navbar
    <div className="w-full font-sans bg-gray-50 min-h-screen overflow-x-hidden pt-20 md:pt-24">
      
      {/* --- HERO BANNER --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full relative"
      >
        {/* LANGUAGE TOGGLE - Positioned relative to THIS container */}
         <div className="flex justify-end absolute top-4 right-4 items-center mb-10 gap-4">
             <span className={`text-sm tracking-widest uppercase ${!isKannada ? 'text-black font-bold' : 'text-gray-400'}`}>English</span>
             <button 
               onClick={toggleLanguage} 
               className="w-14 h-7 bg-gray-200 rounded-full p-1 flex items-center transition-colors duration-300 focus:outline-none shadow-inner"
             >
               <div className={`bg-yellow-500 w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${isKannada ? 'translate-x-7' : 'translate-x-0'}`}></div>
             </button>
             <span className={`text-sm tracking-widest uppercase ${isKannada ? 'text-black font-bold' : 'text-gray-400'}`}>ಕನ್ನಡ</span>
          </div>

        <img src={isKannada ? BannerKannada : BannerEnglish} alt="Karnataka SSLC Banner" className="w-full h-auto object-cover shadow-sm min-h-[200px]" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10 pointer-events-none"></div>
      </motion.div>

      {/* --- LEARNING JOURNEY CTA --- */}
      <section className="w-full py-16 px-4">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
        >
            <div className="bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border-l-8 border-yellow-400">
                <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z"/></svg>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t.learningTitle}</h3>
                        <p className="text-gray-500 text-lg">{t.learningSub}</p>
                    </div>
                </div>
                <button className="bg-black text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 whitespace-nowrap">
                    {t.getStarted}
                </button>
            </div>
        </motion.div>
      </section>

      {/* --- STUDY SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{t.studyTitle}</h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Modern Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button 
                key={tab} 
                onClick={() => setActiveTab(tab)} 
                className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 border ${
                    activeTab === tab 
                    ? 'bg-black text-white border-black shadow-lg transform scale-105' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-yellow-400 hover:text-black'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='wait'>
            {videos.filter(video => video.category === activeTab).map((video) => (
                <VideoCard key={video.id} video={video} t={t} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {videos.filter(video => video.category === activeTab).length === 0 && (
            <div className="text-center py-20 text-gray-400">
                <p>No videos available in this category yet.</p>
            </div>
        )}
      </section>

      {/* --- TEACHER CAROUSEL SECTION --- */}
      <section className="w-full bg-white py-20 px-4 relative overflow-hidden">
        {/* Decorative Background Blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-3">{t.teacherTitle}</h2>
            <p className="text-xl text-gray-500">{t.teacherSub}</p>
          </div>

          <div className="relative flex items-center justify-center h-[450px] md:h-[550px]">
            {/* Navigation Buttons */}
            <button onClick={prevSlide} className="absolute left-4 md:left-0 z-30 bg-white hover:bg-yellow-400 text-black p-4 rounded-full shadow-xl transition-all hover:scale-110 border border-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button onClick={nextSlide} className="absolute right-4 md:right-0 z-30 bg-white hover:bg-yellow-400 text-black p-4 rounded-full shadow-xl transition-all hover:scale-110 border border-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
            </button>

            {/* Desktop View (3D Effect) */}
            <div className="hidden md:flex relative items-center justify-center w-full h-full">
                <div className="absolute w-[400px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-50 scale-90 -translate-x-[350px] z-10 blur-[2px] cursor-pointer" onClick={prevSlide}>
                    <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                        <img src={teacherImages[prevIndex]} alt="Prev" className="w-full h-auto" />
                    </div>
                </div>
                <div className="relative w-[480px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-100 scale-100 z-20 hover:scale-[1.02]">
                     <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-4 ring-white">
                        <img src={teacherImages[currentIndex]} alt="Current" className="w-full h-auto" />
                     </div>
                </div>
                 <div className="absolute w-[400px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-50 scale-90 translate-x-[350px] z-10 blur-[2px] cursor-pointer" onClick={nextSlide}>
                    <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                        <img src={teacherImages[nextIndex]} alt="Next" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* Mobile View (Single Slide) */}
            <div className="md:hidden w-full flex justify-center px-4">
               <motion.div 
                 key={currentIndex}
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5 }}
                 className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
               >
                  <img src={teacherImages[currentIndex]} alt="Teacher" className="w-full h-auto" />
               </motion.div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {teacherImages.map((_, idx) => (
              <div 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${idx === currentIndex ? 'bg-yellow-400 w-10' : 'bg-gray-200 w-2 hover:bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FLOATING ENQUIRE BUTTON --- */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <button className="bg-black text-white font-bold py-4 px-8 rounded-t-xl origin-bottom-right rotate-90 shadow-2xl hover:bg-yellow-400 hover:text-black transition-colors tracking-widest text-lg whitespace-nowrap border-b-4 border-yellow-400">
          {t.enquireBtn}
        </button>
      </div>

    </div>
  );
};

export default SSLC;