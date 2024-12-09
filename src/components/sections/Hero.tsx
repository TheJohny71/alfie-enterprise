import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-purple-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-semibold mb-4">
          Create moments for what matters
        </h1>
        <h2 className="text-2xl font-normal mb-4">
          Life's best stories happen off the clock
        </h2>
        <p className="text-xl opacity-90">
          Plan smarter. Live fuller.
        </p>
      </div>
    </div>
  );
};

export default Hero;
