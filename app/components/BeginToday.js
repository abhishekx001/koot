import React from "react";

const BeginToday = () => {
  return (
    <div className="py-4 px-4" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
      <div className="max-w-2xl mx-auto">
        <div className="rounded-xl p-6 border border-green-100" style={{backgroundColor: '#def3f0'}}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Begin Today
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Reach out to a therapist now and don't let anything hold you back.
              </p>
            </div>
            <button className="text-white px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap text-sm hover:opacity-90" style={{backgroundColor: '#3f7652'}}>
              Free Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginToday;
