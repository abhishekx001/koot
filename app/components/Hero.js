import React from "react";
import "./Hero.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
    return (
        <section
            className="w-full min-h-screen flex items-end md:items-center justify-start text-white relative pt-20 md:pt-0 overflow-hidden"
            style={{
                backgroundImage: "url('/heroimage.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="sub-content text-left px-0 md:px-16 pb-8 md:pb-0 max-w-none md:max-w-2xl">
                <h1 className="hero-text text-3xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Hey, How are you?
                </h1>
                <h2 className="text hero-sub text-base md:text-xl lg:text-2xl mb-6 md:mb-10 leading-relaxed font-light" style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}>
                    We got the <span className="one text-green-400">#1</span> Malayali Psychologists for you!
                </h2>
                <div className="btns flex flex-col sm:flex-row gap-3 md:gap-4 justify-start">
                    <button className="text-btn bg-transparent border-2 border-green-500 hover:bg-green-500 hover:text-white text-white px-4 py-2.5 md:px-8 md:py-4 rounded-full font-medium transition-colors flex items-center gap-2 text-sm md:text-base w-fit">
                        FREE ASSESSMENT SESSION
                        <i className="fa-solid fa-calendar btn-icon text-sm"></i>
                    </button>
                    <button className="text-btn bg-transparent border-2 border-green-500 hover:bg-green-500 hover:text-white text-white px-4 py-2.5 md:px-8 md:py-4 rounded-full font-medium transition-colors flex items-center gap-2 text-sm md:text-base w-fit">
                        BOOK A THERAPIST
                        <i className="fa-solid fa-video btn-icon text-sm"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
