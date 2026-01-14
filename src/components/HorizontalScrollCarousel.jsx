// src/components/HorizontalScrollCarousel.jsx
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

// Sub-component for the individual card
const Card = ({ feature, index }) => {
  return (
    <div
      className={`relative h-[400px] w-[320px] md:w-[450px] shrink-0 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl transition-transform duration-300 hover:scale-105 ${feature.color} border border-gray-100`}
    >
      <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center mb-6 shadow-sm backdrop-blur-sm">
        {feature.icon === "ABC" || feature.icon === "LIVE" ? (
          <span className={`text-3xl font-bold ${feature.icon === "LIVE" ? 'text-red-600' : 'text-black'}`}>
            {feature.icon}
          </span>
        ) : (
          <span className="text-5xl">{feature.icon}</span>
        )}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 leading-tight">
        {feature.title}
      </h3>
      <p className="text-gray-800 text-base md:text-lg font-medium opacity-90">
        {feature.desc}
      </p>
      <div className="absolute bottom-4 right-6 text-5xl font-bold text-black/10 select-none">
        0{index + 1}
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = ({ content, t }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-20 flex h-screen items-center overflow-hidden">
        <div className="flex flex-col absolute top-10 left-0 right-0 text-center z-10 pointer-events-none">
           <h2 className="text-4xl md:text-6xl font-extrabold text-black uppercase tracking-tight bg-white/80 backdrop-blur-sm inline-block px-6 py-2 rounded-full">
              {t.whyTitle}
           </h2>
           <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest bg-white/80 inline-block px-2">
              {t.whySub}
           </p>
        </div>
        <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24 lg:px-32 py-20">
          {content.features.map((feature, index) => (
            <Card feature={feature} key={index} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;