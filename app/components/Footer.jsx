import React from "react";
import { FaLock, FaShieldAlt, FaCreditCard } from "react-icons/fa";

const Footer = () => {
  return (
    <footer 
      className="bg-[#2e1404] text-white py-8 md:py-16 px-4 md:px-10 mt-8"
      style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center lg:text-left">
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <img src="/koot.png" alt="Koott Logo" className="h-12 md:h-16 brightness-0 invert" />
            <p className="text-sm md:text-base uppercase">Your companion in your healing journey</p>
            <div className="space-y-2">
              <div className="bg-[#6a5f5a] text-white px-3 py-2 rounded-lg flex items-center gap-2 text-xs md:text-sm">
                <FaShieldAlt /> CERTIFIED & AVAILABLE
              </div>
              <div className="bg-[#6a5f5a] text-white px-3 py-2 rounded-lg flex items-center gap-2 text-xs md:text-sm">
                <FaLock /> PRIVATE & SECURE
              </div>
              <div className="bg-[#6a5f5a] text-white px-3 py-2 rounded-lg flex items-center gap-2 text-xs md:text-sm">
                <FaCreditCard /> SSL SECURED (UPI & CARD)
              </div>
            </div>
            <div className="flex gap-4">
              <img src="/startupmage.png" alt="Startup India" className="h-8 md:h-10" />
              <img src="/startupmission.png" alt="KSUM" className="h-8 md:h-10" />
            </div>
          </div>

          {/* Column 2: Popular */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <h3 className="text-base md:text-lg font-bold uppercase">POPULAR</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="uppercase">PSYCHOLOGY INTERNSHIP <span className="text-green-400">(NEW)</span></li>
              <li className="uppercase">PRE-MARITAL WORKSHOP</li>
              <li className="uppercase">MARITAL CONFLICT WORKSHOP</li>
              <li className="uppercase">POSITIVE PARENTING WORKSHOP</li>
              <li className="uppercase">FOR BUSINESS</li>
            </ul>
          </div>

          {/* Column 3: Talk to Expert */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <h3 className="text-base md:text-lg font-bold uppercase">TALK TO EXPERT</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="uppercase">RELATIONSHIP COACH</li>
              <li className="uppercase">CAREER COACH</li>
              <li className="uppercase">LIFE COACH</li>
              <li className="uppercase">PSYCHOLOGIST NEAR ME</li>
              <li className="uppercase">MEDICAL TEAM</li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <h3 className="text-base md:text-lg font-bold uppercase">RESOURCES</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="uppercase">ABOUT US</li>
              <li className="uppercase">WOMENS HEALTH</li>
              <li className="uppercase">BLOG</li>
              <li className="uppercase">KOOTT COMMUNITY <span className="text-yellow-400">😃</span></li>
              <li className="uppercase">CAREERS <span className="text-green-400">(WE'RE HIRING)</span></li>
              <li className="uppercase">CONTACT US</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-600">
          <p className="text-xs md:text-sm text-center mb-4 md:mb-6 italic">
            "We are not a suicide prevention helpline. If you are feeling suicidal, we would suggest you immediately call up a suicide prevention helpline"
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-4 text-xs md:text-sm">
            <p>© 2020-24 KOOTT WELLNESS PVT. LTD.</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Therapy Agreement</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
