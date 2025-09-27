import React from "react";

const EatingDisorderJourneySection = () => {
  return (
    <section 
      className="w-full py-16 px-4 flex justify-center mt-8"
      style={{ 
        fontFamily: 'var(--font-quicksand), sans-serif'
      }}
    >
      <div className="max-w-6xl w-full">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 
            className="text-lg md:text-xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '700' }}
          >
            Your recovery journey is simple with Koott
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p 
              className="text-xs md:text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '400' }}
            >
              Our psychologists provide confidential, evidence-based care to help you build a healthier relationship with food, body image, and self-worth—at your pace and from the comfort of your home.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-20 z-0" style={{ left: '3rem', width: 'calc(100% - 6rem)' }}>
            <div className="absolute h-1 bg-gray-300" style={{ width: '50%', left: '0' }}></div>
            <div className="absolute h-1 bg-green-500" style={{ width: '50%', left: '50%' }}></div>
          </div>

          {/* Timeline Points */}
          <div className="flex justify-between items-start relative z-10">
            {/* Point 1: Today */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <h3 
                className="text-xs md:text-sm font-bold text-gray-800 mb-3"
                style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '700' }}
              >
                Today
              </h3>
              
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
                <span className="text-lg">😔</span>
              </div>
              
              <p 
                className="text-xs md:text-sm text-gray-700 leading-relaxed"
                style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '400' }}
              >
                Feeling overwhelmed by food rules, body image worries, or irregular eating habits.
              </p>
            </div>

            {/* Point 2: In few days */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <h3 
                className="text-xs md:text-sm font-bold text-gray-800 mb-3"
                style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '700' }}
              >
                In few days
              </h3>
              
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              
              <p 
                className="text-xs md:text-sm text-gray-700 leading-relaxed"
                style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '400' }}
              >
                Begin structured sessions focused on nutrition balance, coping skills, and body neutrality.
              </p>
            </div>

            {/* Point 3: After few sessions */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <h3 
                className="text-xs md:text-sm font-bold text-gray-800 mb-3"
                style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '700' }}
              >
                After few sessions
              </h3>
              
              <div className="relative">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-lg">😊</span>
                </div>
                <div className="absolute -top-2 -right-2">
                  <span className="text-yellow-400 text-sm">✨</span>
                </div>
                <div className="absolute top-2 -right-4">
                  <span className="text-yellow-400 text-xs">✨</span>
                </div>
              </div>
              
              <p 
                className="text-xs md:text-sm text-gray-700 leading-relaxed"
                style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '400' }}
              >
                Notice healthier routines, reduced anxiety around food, and more confidence in your body.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EatingDisorderJourneySection;
