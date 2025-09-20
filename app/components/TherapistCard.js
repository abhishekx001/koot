"use client";

import React from "react";
import { FaMicrophone, FaVideo, FaArrowRight } from "react-icons/fa";

const TherapistCard = ({ therapist }) => {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg" style={{fontFamily: 'var(--font-quicksand), sans-serif', boxShadow: '0 10px 25px rgba(61, 153, 92, 0.1)'}}>
      {/* Top Section - Profile & Basic Info */}
      <div className="p-4 pb-3">
        <div className="flex items-start space-x-4">
          {/* Profile Image with View Profile Button */}
          <div className="relative">
            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-28 h-28 rounded-lg object-cover"
            />
            <button className="absolute -bottom-1 -left-1 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1" style={{backgroundColor: '#3d995c'}}>
              <span>VIEW PROFILE</span>
              <FaArrowRight className="text-xs" />
            </button>
          </div>

                  {/* Therapist Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black mb-1 leading-relaxed">{therapist.name}</h3>
                    <p className="text-sm text-black mb-1 font-semibold leading-relaxed">{therapist.title}</p>
                    <p className="text-sm text-black mb-1 font-semibold leading-relaxed">{therapist.experience}</p>
                    <p className="text-sm text-black mb-1 leading-relaxed">{therapist.languages}</p>
                    <p className="text-sm text-black leading-relaxed">{therapist.startingPrice}</p>
                  </div>

                  {/* Call/Video Icons */}
                  <div className="rounded-lg p-2 flex space-x-2">
                    <div className="rounded-full p-1 border" style={{borderColor: '#3d995c'}}>
                      <FaMicrophone className="text-xs" style={{color: '#3d995c'}} />
                    </div>
                    <div className="rounded-full p-1 border" style={{borderColor: '#3d995c'}}>
                      <FaVideo className="text-xs" style={{color: '#3d995c'}} />
                    </div>
                  </div>
        </div>
      </div>

      {/* Bottom Section - Description & Booking */}
      <div className="px-4 pb-4">
        {/* Combined Description & Availability Section */}
        <div className="p-4 rounded-lg" style={{backgroundColor: '#f0fdf4'}}>
          {/* Description */}
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">
            {therapist.description}
          </p>

          {/* Availability & Book Now */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-black mb-1">Next Availability</p>
              <p className="text-sm font-bold" style={{color: '#3d995c'}}>{therapist.availability}</p>
            </div>
            <button className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" style={{backgroundColor: '#3d995c'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#2d7a47'} onMouseLeave={(e) => e.target.style.backgroundColor = '#3d995c'}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard;
