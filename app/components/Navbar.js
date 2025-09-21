"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hover-based dropdown management - no click handlers needed

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const menuItems = [
    {
      name: "INDIVIDUALS",
      options: [
        "SPECIFIC DISORDERS >",
        "LIFE CRISIS/SPECIFIC EVENTS >",
        "RELATIONSHIP ISSUES >",
        "WORK RELATED ISSUES >"
      ],
    },
    {
      name: "COUPLES & FAMILIES",
      options: [
        "GENERAL ISSUES",
        "COUPLES COUNSELLING",
        "DIVORCE COUNSELLING",
        "FAMILY COUNSELLING",
        "COMMUNICATION",
        "INFERTILITY COUNSELLING",
        "PARENTAL COUNSELLING",
        "POSTPARTUM DEPRESSION",
        "PREMARITAL COUNSELING",
        "SEXUAL INTIMACY ISSUES"
      ],
    },
    {
      name: "TEENS & CHILDRENS",
      options: [
        "GENERAL ISSUES",
        "ADHD",
        "AUTISTIC SPECTRUM",
        "ABUSE",
        "ADDICTIONS",
        "ANXIETY",
        "EATING DISORDERS",
        "EMOTIONAL SELF-REGULATION",
        "LGBTQ+ COUNSELLING",
        "PANIC ATTACKS"
      ],
    },
    {
      name: "THERAPISTS",
      options: [],
    },
  ];

  const subCategories = {
    "SPECIFIC DISORDERS >": [
      "DEPRESSION",
      "EATING DISORDERS",
      "HYPOCHONDRIASIS",
      "MOOD DISORDER",
      "OCD",
      "POSTPARTUM DEPRESSION",
      "PANIC ATTACKS",
      "PERSONALITY DISORDER MANAGEMENT",
      "PHOBIAS",
      "PSYCHOSIS",
      "PTSD",
      "SCHIZOPHRENIA",
      "SLEEP DISORDER"
    ],
    "LIFE CRISIS/SPECIFIC EVENTS >": [
      "ABUSE",
      "CRISIS INTERVENTION",
      "EXISTENTIAL CRISIS",
      "GRIEF",
      "TRAUMA",
      "CHRONIC ILLNESS",
      "SUICIDAL TENDENCIES"
    ],
    "RELATIONSHIP ISSUES >": [
      "BEHAVIORAL HEALTH",
      "IMPROVING COMMUNICATION SKILLS",
      "LGBTQ+ COUNSELLING",
      "SEXUAL INTIMACY ISSUES"
    ],
    "WORK RELATED ISSUES >": [
      "BOOSTING PRODUCTIVITY",
      "BURNOUT RECOVERY",
      "IMPROVING COMMUNICATION",
      "CAREER COACH"
    ]
  };

  return (
    <header
      className={`w-full text-white flex items-center justify-between px-4 md:px-6 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        color: "#fff",
        padding: "12px 0",
        zIndex: 50,
        background: "rgba(95, 55, 27, 0.15)",
        backdropFilter: "blur(10px)",
        fontFamily: 'var(--font-quicksand), sans-serif',
      }}
    >
      {/* Logo - Image for all screen sizes */}
      <div className="text-white" style={{ marginLeft: '80px' }}>
        <Link href="/">
          <img
            src="/koot.png"
            alt="logo"
            className="h-8 md:h-10 lg:h-12 brightness-0 invert cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-6 mr-8">
        {/* Menu List */}
        <ul className="flex items-center space-x-6 text-white text-[0.7rem] font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {item.options.length > 0 ? (
                <div
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => {
                    // Add a small delay to prevent dropdown from closing immediately
                    setTimeout(() => {
                      if (!document.querySelector('.dropdown-hover-area:hover')) {
                        setOpenDropdown(null);
                        setOpenSubDropdown(null);
                      }
                    }, 100);
                  }}
                  className="relative"
                >
                  <button
                    className="hover:text-gray-200 transition-colors flex items-center space-x-1 text-xs font-semibold"
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${openDropdown === index ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === index && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 dropdown-hover-area"
                          onMouseEnter={() => {
                            setOpenDropdown(index);
                          }}
                          onMouseLeave={() => {
                            setTimeout(() => {
                              if (!document.querySelector('.dropdown-hover-area:hover, .sub-dropdown-hover-area:hover')) {
                                setOpenDropdown(null);
                                setOpenSubDropdown(null);
                              }
                            }, 150);
                          }}
                        >
                          {item.options.map((option, optionIndex) => (
                            <div 
                              key={optionIndex} 
                              className="relative"
                              onMouseEnter={() => option.includes('>') ? setOpenSubDropdown(option) : setOpenSubDropdown(null)}
                              onMouseLeave={() => setOpenSubDropdown(null)}
                            >
                              {option.includes('>') ? (
                                <div className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-xs cursor-pointer">
                                  {option}
                                </div>
                              ) : (
                                <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-xs">
                                  {option}
                                </Link>
                              )}
                              
                              {/* Sub-dropdown for all categories with > */}
                              {option.includes('>') && openSubDropdown === option && (
                                <div 
                                  className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg py-2 z-60 sub-dropdown-hover-area"
                                  onMouseEnter={() => setOpenSubDropdown(option)}
                                  onMouseLeave={() => {
                                    setTimeout(() => {
                                      if (!document.querySelector('.sub-dropdown-hover-area:hover')) {
                                        setOpenSubDropdown(null);
                                      }
                                    }, 100);
                                  }}
                                >
                                  {subCategories[option]?.map((subOption, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      href={subOption === "DEPRESSION" ? "/depression" : "/"}
                                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-xs"
                                    >
                                      {subOption}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                ) : (
                  <Link
                    href="/therapists"
                    className="hover:text-gray-200 transition-colors text-xs font-semibold"
                  >
                    {item.name}
                  </Link>
                )}
            </li>
          ))}

          {/* Profile Icon */}
          <li className="ml-8">
            <Link href="/profile">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-transparent text-white"
              >
                <i className="fa-solid fa-user text-sm"></i>
              </span>
            </Link>
          </li>
        </ul>

        {/* Book Now Button */}
        <button className="bg-transparent text-white border border-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-[#5F371B] transition-colors text-xs">
          BOOK NOW
        </button>
      </div>

      {/* Mobile Layout - BOOK NOW Button and Hamburger */}
      <div className="flex lg:hidden items-center">
        {/* Book Now Button */}
        <button className="bg-transparent text-white border border-white px-3 py-1.5 rounded-full font-medium text-xs hover:bg-white hover:text-gray-800 transition-colors mr-3">
          BOOK NOW
        </button>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMobileMenu}
          className="text-green-500 text-xl font-light mr-1"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden z-50">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                {item.options.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full text-left flex items-center justify-between text-gray-800 font-semibold text-sm"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${openDropdown === index ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === index && (
                      <div className="mt-2 pl-4 space-y-2">
                        {item.options.map((option, optionIndex) => (
                          <div key={optionIndex}>
                            {option.includes('>') ? (
                              <div className="text-gray-600 text-sm font-medium mb-2">
                                {option}
                              </div>
                            ) : (
                              <Link
                                href="/"
                                className="block text-gray-600 hover:text-gray-800 transition-colors text-sm py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {option}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href="/therapists"
                    className="block text-gray-800 font-semibold text-sm py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Profile and Button */}
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/profile" 
                className="text-gray-800 font-semibold text-sm uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PROFILE
              </Link>
              <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors text-sm uppercase">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      )}
        </header>
  );
};

export default Navbar;
