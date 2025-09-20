import React from "react";
import "./contact.css";

const therapyOptions = [
  {
    title: "Individual",
    subtitle: "Therapy for me",
    icon: "/personimg.png",
  },
  {
    title: "Teens",
    subtitle: "For Ages 13-17",
    icon: "/teens.png",
  },
  {
    title: "Couples",
    subtitle: "Therapy for us.",
    icon: "/couples.png",
  },
  {
    title: "Assessment",
    subtitle: "Instant Results.",
    icon: "/access.png",
  },
];

const Contact = () => {
  return (
    <section className="w-full bg-white py-8 md:py-12 flex justify-center">
      <div className="max-w-5xl w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 next-div">
        {therapyOptions.map((option, index) => (
          <div
            key={index}
            className="w-full aspect-square bg-white rounded-[14px] shadow-lg text-center p-3 md:p-4 hover:shadow-2xl transition duration-300 flex flex-col justify-center items-center max-w-[140px] md:max-w-[160px] mx-auto"
          >
            <img
              src={option.icon}
              alt={option.title}
              className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-3"
            />
            <h3 className="text-sm md:text-base font-semibold">{option.title}</h3>
            <p className="text-xs md:text-sm text-gray-500 mt-1 text-center">{option.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
