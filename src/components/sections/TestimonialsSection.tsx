// src/components/sections/TestimonialsSection.tsx
import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Transformed how we manage leave requests.",
      author: "HR Director"
    },
    {
      quote: "The smart calendar is a game-changer.",
      author: "Team Lead"
    },
    {
      quote: "Seamless experience across all our offices.",
      author: "Operations Manager"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          What Teams Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
