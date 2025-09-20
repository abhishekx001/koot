import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaVideo } from "react-icons/fa";

const ConnectSection = () => {
  return (
    <section className="w-full bg-white py-8 md:py-16 px-4 md:px-6 flex justify-center items-center font-poppins" style={{ paddingLeft: '150px' }}>
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        
        {/* LEFT SECTION */}
        <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
          <h2 className="font-medium text-black" style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontSize: '20px', lineHeight: '28px' }}>
            Koott is a passion project of Malayali Psychologists and Malayali Counsellors!
          </h2>

          {/* Paragraph with hover transition */}
          <div className="text-black space-y-3 md:space-y-4" style={{ fontFamily: 'avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif', fontSize: '15px', lineHeight: '21px', fontWeight: '200' }}>
            <p>
              At Koott, we're bringing powerful transformation to individuals in a world where 13% of us need psychological help, and 7/10 individuals' productivity is reduced due to a lack of mental health support. Our mission is to help individuals pursue their lives with greater clarity, purpose, and passion.
            </p>
            <p>
              Don't know where to start, Koott is here to help. Book Kerala's best Malayali Psychologist or Book a free consultation with one of our Koott Listeners. We shall guide you on how to proceed and heal yourself.
            </p>
          </div>

          {/* Avatar + Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Avatars */}
            <div className="flex space-x-[-10px]">
              <img src="/person1.jpg" alt="person1" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />
              <img src="/person2.jpg" alt="person2" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />
              <img src="/person3.jpg" alt="person3" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />
              <img src="/person4.jpg" alt="person4" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />
            </div>

            {/* Text beside avatars */}
            <div className="text-sm leading-tight">
              <div className="font-semibold text-black">Koott Psychologists</div>
              <div className="text-xs text-gray-600">30 Mins, Free Assessment</div>
            </div>
          </div>

          {/* CTA button */}
          <div className="flex flex-wrap items-center gap-4 pt-2 md:pt-4">
            <Link href="https://meet.google.com/" target="_blank">
              <button className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-3 border border-green-600 text-black font-semibold text-xs md:text-sm rounded-full hover:bg-green-50 transition-all w-full sm:w-auto justify-center">
                Book a Google Meet
                <FaVideo className="text-green-600" />
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          {/* Chat Image (GIF) */}
          <img
            src="https://static.wixstatic.com/media/624142_186cb82487bd42c2a48ad90641fabacf~mv2.gif"
            alt="chat mockup"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
