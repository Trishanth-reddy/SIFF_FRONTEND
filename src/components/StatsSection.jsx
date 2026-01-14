// src/components/StatsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { StudentIcon, MobileIcon, LectureIcon, SchoolIcon } from './Icons'; // Import from Icons file

// Helper for counting up
const AnimatedCounter = ({ target, suffix = "", duration = 2000, start }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      const ease = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(ease * target));
      if (progress < duration) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return <span>{count}{suffix}</span>;
};

const StatsSection = ({ t }) => {
  const [startCounter, setStartCounter] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-gray-50 py-20 relative z-20" ref={statsRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex flex-col items-center p-4">
              <StudentIcon />
              <h3 className="text-3xl md:text-4xl font-bold text-black mt-4 mb-2">
                <AnimatedCounter target={1781} suffix="k+" start={startCounter} />
              </h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{t.statStudents}</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <MobileIcon />
              <h3 className="text-3xl md:text-4xl font-bold text-black mt-4 mb-2">
                <AnimatedCounter target={30} suffix="k+" start={startCounter} />
              </h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{t.statDownloads}</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <LectureIcon />
              <h3 className="text-3xl md:text-4xl font-bold text-black mt-4 mb-2">
                <AnimatedCounter target={2715} suffix="+" start={startCounter} />
              </h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{t.statLectures}</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <SchoolIcon />
              <h3 className="text-3xl md:text-4xl font-bold text-black mt-4 mb-2">
                <AnimatedCounter target={500} suffix="+" start={startCounter} />
              </h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{t.statSchools}</p>
            </div>
          </div>
          <div className="mt-10 text-center border-t border-gray-100 pt-8">
            <p className="text-gray-700 text-base md:text-lg">
              {t.trusted} <span className="font-bold text-black">{t.subscribers}</span> {t.revolutionizing} <br className="hidden md:block" />
              {t.examPrep} <span className="font-bold text-black">{t.everyStudent}</span>
            </p>
            <div className="mt-2 w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;