import React from "react";

const DepressionBlogs = () => {
  const blogs = [
    {
      id: 1,
      image: "/dep3.png",
      title: "Only 25% of us take help, We Malayalees and our Depression!",
      snippet: "\"Depression is a physiological condition that needs to be managed in a normal way.\" The challenge li...",
      readMoreLink: "#"
    },
    {
      id: 2,
      image: "/depp2.png", 
      title: "Everybody has depression nowadays | Celebrities on Depression",
      snippet: "Do we genuinely grasp the nature of depression, or do we often connect it with mere feelings of sadness? ...",
      readMoreLink: "#"
    },
    {
      id: 3,
      image: "/dipfooterup.png",
      title: "Why do you need a Malayali psychologist to tackle depression better?",
      snippet: "In a world where Malayalis are spread across many countries, the importance of mental health supp...",
      readMoreLink: "#"
    }
  ];

  return (
    <div
      className="py-16 px-4 bg-gray-50"
      style={{
        fontFamily: 'var(--font-quicksand), sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-xl md:text-2xl font-bold text-black text-center mb-12">
          Here are some interesting blogs for Malayalees on Depression
        </h2>
        
        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="rounded-lg p-6 flex flex-col">
              {/* Blog Image */}
              <div className="relative mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-4/5 h-72 object-cover rounded-lg grayscale mx-auto"
                />
                {/* Read Button */}
                <button className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg font-medium text-sm shadow-sm hover:bg-gray-50 transition-colors">
                  Read
                </button>
              </div>
              
              {/* Blog Content */}
              <div className="space-y-3 w-4/5 mx-auto flex-grow">
                {/* Headline */}
                <h3 className="text-lg font-semibold text-black leading-tight">
                  {blog.title}
                </h3>
                
                {/* Snippet */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.snippet}
                </p>
              </div>
              
              {/* Read More Link - Bottom Right */}
              <div className="mt-4 w-4/5 mx-auto flex justify-end">
                <a 
                  href={blog.readMoreLink}
                  className="text-black font-semibold text-sm hover:underline transition-colors"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepressionBlogs;
