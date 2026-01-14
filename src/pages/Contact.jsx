import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Contact = () => {
  const { isKannada, toggleLanguage } = useLanguage();

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "Have questions? We'd love to hear from you.",
      callTitle: "Call Us",
      callText: "+91 6366548224",
      emailTitle: "Email Us",
      emailText: "contactus@parikshe.in",
      addressTitle: "Visit Us",
      addressText: "Ground Floor, Indiqube Alpha, Kadubeesanahalli, Bangalore - 560066",
      collaborationTitle: "For Schools & Institutions",
      collaborationText: "padmashree@parikshe.in",
      form: {
        header: "Send us a Message",
        name: "Full Name",
        email: "Email Address",
        mobile: "Mobile Number",
        district: "Select District",
        medium: "Select Medium",
        grade: "Select Grade",
        schoolType: "School / College Type",
        schoolName: "School / College Name",
        captcha: "Enter Captcha",
        consent: "I agree to receive updates via WhatsApp/Email.",
        submit: "Send Message"
      }
    },
    kn: {
      title: "ಸಂಪರ್ಕಿಸಿ",
      subtitle: "ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಾವು ನಿಮ್ಮಿಂದ ಕೇಳಲು ಇಷ್ಟಪಡುತ್ತೇವೆ.",
      callTitle: "ಕರೆ ಮಾಡಿ",
      callText: "+91 6366548224",
      emailTitle: "ಇಮೇಲ್ ಮಾಡಿ",
      emailText: "contactus@parikshe.in",
      addressTitle: "ವಿಳಾಸ",
      addressText: "ಗ್ರೌಂಡ್ ಫ್ಲೋರ್, ಇಂಡಿಕ್ಯೂಬ್ ಆಲ್ಫಾ, ಕಾಡುಬೀಸನಹಳ್ಳಿ, ಬೆಂಗಳೂರು - 560066",
      collaborationTitle: "ಶಾಲೆಗಳು ಮತ್ತು ಸಂಸ್ಥೆಗಳಿಗೆ",
      collaborationText: "padmashree@parikshe.in",
      form: {
        header: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
        name: "ಪೂರ್ಣ ಹೆಸರು",
        email: "ಇಮೇಲ್ ವಿಳಾಸ",
        mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        district: "ಜಿಲ್ಲೆ ಆಯ್ಕೆಮಾಡಿ",
        medium: "ಮಾಧ್ಯಮ ಆಯ್ಕೆಮಾಡಿ",
        grade: "ತರಗತಿ ಆಯ್ಕೆಮಾಡಿ",
        schoolType: "ಶಾಲೆ / ಕಾಲೇಜು ಪ್ರಕಾರ",
        schoolName: "ಶಾಲೆ / ಕಾಲೇಜು ಹೆಸರು",
        captcha: "ಕ್ಯಾಪ್ಚಾ ನಮೂದಿಸಿ",
        consent: "WhatsApp/ಇಮೇಲ್ ಮೂಲಕ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಲು ನಾನು ಒಪ್ಪುತ್ತೇನೆ.",
        submit: "ಸಂದೇಶ ಕಳುಹಿಸಿ"
      }
    }
  };

  const t = isKannada ? content.kn : content.en;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    // Added pt-24 to accommodate fixed navbar
    <div className="w-full min-h-screen pt-24 pb-12 font-sans bg-gray-50">
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >

          {/* --- LEFT COLUMN: INFO (Sticky) --- */}
          <motion.div variants={itemVariants} className="w-full lg:w-5/12 lg:sticky lg:top-32 h-fit">
            
            {/* Header Text */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
                {t.title}
              </h1>
              <p className="text-xl text-gray-500 font-medium">
                {t.subtitle}
              </p>
              <div className="w-20 h-1.5 bg-yellow-400 mt-6 rounded-full"></div>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid gap-6">
              
              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shrink-0 text-yellow-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{t.callTitle}</h3>
                  <p className="text-lg font-bold text-gray-900">{t.callText}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{t.emailTitle}</h3>
                  <a href={`mailto:${t.emailText}`} className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">{t.emailText}</a>
                   {/* Collaboration Email */}
                   <div className="mt-3 pt-3 border-t border-gray-100">
                     <p className="text-xs text-gray-400 font-semibold uppercase mb-1">{t.collaborationTitle}</p>
                     <a href={`mailto:${t.collaborationText}`} className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors">{t.collaborationText}</a>
                   </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0 text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{t.addressTitle}</h3>
                  <p className="text-base font-medium text-gray-900 leading-relaxed">{t.addressText}</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: FORM --- */}
          <motion.div variants={itemVariants} className="w-full lg:w-7/12">
            
            {/* Language Toggle (Aligned Right) */}
            <div className="flex justify-end     items-center mb-10 gap-4">
             <span className={`text-sm tracking-widest uppercase ${!isKannada ? 'text-black font-bold' : 'text-gray-400'}`}>English</span>
             <button 
               onClick={toggleLanguage} 
               className="w-14 h-7 bg-gray-200 rounded-full p-1 flex items-center transition-colors duration-300 focus:outline-none shadow-inner"
             >
               <div className={`bg-yellow-500 w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${isKannada ? 'translate-x-7' : 'translate-x-0'}`}></div>
             </button>
             <span className={`text-sm tracking-widest uppercase ${isKannada ? 'text-black font-bold' : 'text-gray-400'}`}>ಕನ್ನಡ</span>
          </div>

          

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
               {/* Form Header */}
               <div className="bg-black p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-yellow-400 rounded-full"></span>
                    {t.form.header}
                  </h2>
               </div>

               <form className="p-6 md:p-10 space-y-6">
                 
                 {/* Name & Email Row */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">{t.form.name} <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">{t.form.email} <span className="text-red-500">*</span></label>
                        <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none" placeholder="john@example.com" />
                    </div>
                 </div>

                 {/* Mobile */}
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{t.form.mobile} <span className="text-red-500">*</span></label>
                    <div className="flex">
                        <span className="px-4 py-3 bg-gray-100 border border-gray-200 border-r-0 rounded-l-xl text-gray-500 font-medium">+91</span>
                        <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-r-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none" placeholder="98765 43210" />
                    </div>
                 </div>

                 {/* Dropdowns Row 1 */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700 ml-1">{t.form.district} <span className="text-red-500">*</span></label>
                       <div className="relative">
                          <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none appearance-none cursor-pointer">
                            <option value="">Select...</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700 ml-1">{t.form.medium} <span className="text-red-500">*</span></label>
                       <div className="relative">
                          <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none appearance-none cursor-pointer">
                            <option value="">Select...</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Dropdowns Row 2 */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700 ml-1">{t.form.grade} <span className="text-red-500">*</span></label>
                       <div className="relative">
                          <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none appearance-none cursor-pointer">
                            <option value="">Select...</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700 ml-1">{t.form.schoolType} <span className="text-red-500">*</span></label>
                       <div className="relative">
                          <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none appearance-none cursor-pointer">
                            <option value="">Select...</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* School Name */}
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{t.form.schoolName} <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none" placeholder="e.g. Government High School" />
                 </div>

                 {/* Captcha */}
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">{t.form.captcha} <span className="text-red-500">*</span></label>
                    <div className="flex gap-4">
                        <div className="w-1/3 min-w-[100px] bg-gray-100 flex items-center justify-center border border-gray-300 rounded-xl select-none" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')", opacity: 0.7 }}>
                            <span className="font-mono text-xl tracking-[0.2em] text-gray-600 font-bold line-through decoration-wavy decoration-red-400">710B21</span>
                        </div>
                        <input type="text" className="w-2/3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all outline-none" placeholder="Enter code" />
                    </div>
                 </div>

                 {/* Consent */}
                 <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 cursor-pointer transition-all" />
                    <span className="text-sm text-gray-600 group-hover:text-black transition-colors select-none leading-tight">{t.form.consent}</span>
                 </label>

                 {/* Submit */}
                 <button className="w-full bg-black text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-yellow-400 hover:text-black hover:shadow-yellow-400/30 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2">
                    {t.form.submit}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </button>

               </form>
            </div>

          </motion.div>
        
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;