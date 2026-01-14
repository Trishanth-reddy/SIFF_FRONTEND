import React from 'react';

const Career = () => {
  // Static Content (English Only)
  const content = {
    banner: "JOIN US @ PARIKSHE & MAKE A LASTING IMPACT ON STUDENTS’ SUCCESS!",
    title: "Open Positions",
    jobDesc: "Job Description",
    footerText: "Interested candidates can send their resume (and completed technical assignment, wherever applicable) to",
    enquire: "Enquire Now!",
    jobs: [
      { 
        title: "Growth Associate", 
        type: "On-site", 
        time: "Full-time",
        link: "#" 
      },
      { 
        title: "Digital Marketing Associate", 
        type: "On-site", 
        time: "Full-time",
        link: "#"
      }
    ]
  };

  return (
    // Added 'min-h-screen' to force full height
    // Added 'pb-24' to ensure space at the bottom before the footer
    <div className="w-full min-h-screen pt-16 pb-24 font-sans bg-white">
      
      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col items-center">
        
        {/* --- TOP BANNER --- */}
        <div className="bg-black text-white p-6 rounded-lg w-full md:w-fit text-center mb-12 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-lg md:text-2xl font-bold uppercase tracking-wide leading-relaxed">
              {content.banner}
            </h1>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
          {content.title}
        </h2>

        {/* Job Listings Container - Added w-full */}
        <div className="w-full space-y-6 flex flex-col">
          {content.jobs.map((job, index) => (
            <div 
              key={index} 
              className="bg-gray-100 rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full"
            >
              {/* Left Side: Info */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {/* Tag: On-site */}
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full border-2 border-black text-sm font-bold text-black">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {job.type}
                  </span>

                  {/* Tag: Full-time */}
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full border-2 border-black text-sm font-bold text-black">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {job.time}
                  </span>
                </div>
              </div>

              {/* Right Side: Button */}
              <a 
                href={job.link} 
                className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                {content.jobDesc}
              </a>
            </div>
          ))}
        </div>

        {/* Footer Note (Inside the page, but with spacing) */}
        <div className="mt-16 text-center text-gray-500 font-medium text-lg px-4 leading-relaxed">
          <p>
            {content.footerText}{" "}
            <a 
              href="mailto:careers@parikshe.in" 
              className="text-gray-700 font-bold hover:text-black hover:underline"
            >
              careers@parikshe.in
            </a>
          </p>
        </div>

      </div>

      {/* --- STICKY SIDEBAR --- */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <button className="bg-yellow-400 text-white font-bold py-3 px-6 rounded-t-lg origin-bottom-right rotate-90 shadow-lg hover:bg-yellow-500 transition-colors tracking-wide text-lg whitespace-nowrap">
          {content.enquire}
        </button>
      </div>

    </div>
  );
};

export default Career;