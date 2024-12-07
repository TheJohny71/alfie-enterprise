import React from 'react';
import Button from '@/components/ui/Button'; // Ensure capital 'B'

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Supercharge Your Enterprise</h2>
      <p className="mb-8">
        Leveraging cutting-edge data analytics to drive actionable insights.
      </p>
      <Button onClick={() => console.log('Hero button clicked!')}>Learn More</Button>
    </section>
  );
};

export default Hero;
