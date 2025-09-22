import React from "react";

const MalayaliPsychologists = () => {
  return (
    <div
      className="flex justify-center items-center py-16 px-4 bg-gray-50"
      style={{
        fontFamily: 'var(--font-quicksand), sans-serif',
      }}
    >
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xs p-6">
        {/* Main Heading */}
        <h2 className="text-lg md:text-xl font-bold text-black mb-8">
          Here are some top online Malayali psychologists for Abuse Counselling 👇
        </h2>
        
        {/* Psychologist Profile 1 */}
        <div className="flex items-start space-x-6 mb-6">
          <div className="flex-shrink-0">
            <img
              src="/footerup.png"
              alt="Aswathi Usha Raman"
              className="w-16 h-16 rounded-full border border-gray-200 object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-black text-sm mb-1">
              Aswathi Usha Raman, Counseling Psychologist
            </h3>
            <p className="text-black text-xs leading-relaxed">
              Aswathi is a Counseling Psychologist and a Counselor with an M.Phil in Clinical Psychology<br />
              and an ongoing Ph.D. from the prestigious Christ University, Bengaluru,<br />
              and 7+ years of experience in the field of Psychology
            </p>
          </div>
        </div>
        
        {/* Separator Line 1 */}
        <div className="border-t border-yellow-200 mb-6"></div>
        
        {/* Psychologist Profile 2 */}
        <div className="flex items-start space-x-6 mb-6">
          <div className="flex-shrink-0">
            <img
              src="/footerup.png"
              alt="Shuhaima Hanna Katti"
              className="w-16 h-16 rounded-full border border-gray-200 object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-black text-sm mb-1">
              Shuhaima Hanna Katti, Health Psychologist
            </h3>
            <p className="text-black text-xs leading-relaxed line-clamp-3">
              Shuhaima Hanna Katti is a Health Psychologist with a master's degree in Health Psychology with extensive training in Counselling Psychology from the University of Hyderabad. She has been working in different fields of mental health awareness sectors along with her studies for the past 3 years. She has gained field experience through her internships and workshops for therapy techniques. Her research area is the health and well-being of children and adolescents.
            </p>
          </div>
        </div>
        
        {/* Separator Line 2 */}
        <div className="border-t border-yellow-200 mb-6"></div>
        
        {/* View More Link */}
        <div className="text-right">
          <a 
            href="#" 
            className="text-blue-600 underline text-xs hover:text-blue-800 transition-colors"
          >
            View more Malayali Therapist for Abuse Counselling Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default MalayaliPsychologists;
