import React from "react";
import { FaCalendarCheck, FaEnvelopeOpen, FaSmile, FaChevronDown, FaHeart, FaHandSparkles } from "react-icons/fa";

const TherapyPage = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-0 md:px-4 py-0">
        {/* Main Content Area */}
        <div className="bg-green-50 rounded-3xl p-1 md:p-2 lg:p-3 pt-20 md:pt-24 lg:pt-28 border border-green-100">
          {/* Main Title */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 text-left leading-tight ml-4 md:ml-12" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Find your Malayali Psychologist
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm text-gray-600 mb-5 text-left max-w-3xl font-medium ml-4 md:ml-12" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Hey, We're happy that you are taking help. Find your therapist
          </p>

          {/* Three-Step Process */}
          <div className="flex flex-col space-y-3 mb-5 ml-4 md:ml-12">
            {/* Step 1 */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center relative">
                <FaCalendarCheck className="text-green-700 text-base" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
              <p className="text-black font-medium text-sm" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>Choose your therapist</p>
            </div>

            {/* Step 2 */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center relative">
                <FaEnvelopeOpen className="text-green-700 text-base" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <FaHeart className="text-white text-xs" />
                </div>
              </div>
              <p className="text-black font-medium text-sm" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>Book and get the link</p>
            </div>

            {/* Step 3 */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center relative">
                <FaSmile className="text-green-700 text-base" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                  <FaHandSparkles className="text-white text-xs" />
                </div>
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                  <FaHandSparkles className="text-white text-xs" />
                </div>
              </div>
              <p className="text-black font-medium text-sm" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>Start your session, feel better!</p>
            </div>
          </div>

          {/* Filter Section */}
          <div className="ml-4 md:ml-12">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
              <p className="text-gray-700 text-sm font-medium" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>Need a better view?</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
              {/* Speciality Dropdown */}
              <div className="relative w-full sm:w-40">
                <select className="w-full p-2 pr-8 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none cursor-pointer focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-200 transition-all duration-200 shadow-sm hover:shadow-md text-sm" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
                  <option value="">Speciality</option>
                  <option value="depression">Depression</option>
                  <option value="anxiety">Anxiety</option>
                  <option value="relationship">Relationship Issues</option>
                  <option value="trauma">Trauma</option>
                  <option value="addiction">Addiction</option>
                </select>
                <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none text-xs" />
              </div>

              {/* Needs Dropdown */}
              <div className="relative w-full sm:w-40">
                <select className="w-full p-2 pr-8 border border-gray-300 rounded-md bg-white text-gray-700 appearance-none cursor-pointer focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-200 transition-all duration-200 shadow-sm hover:shadow-md text-sm" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
                  <option value="">Needs</option>
                  <option value="individual">Individual Therapy</option>
                  <option value="couples">Couples Counseling</option>
                  <option value="family">Family Therapy</option>
                  <option value="group">Group Therapy</option>
                  <option value="online">Online Sessions</option>
                </select>
                <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none text-xs" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyPage;
