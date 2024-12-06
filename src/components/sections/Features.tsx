// src/components/sections/Features.tsx
import React from 'react';
import Button from '@/components/ui/Button';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Smart Calendar',
      description: 'AI-powered scheduling and conflict prevention'
    },
    {
      title: 'Team Sync',
      description: 'Real-time availability and coordination'
    },
    {
      title: 'Global Ready',
      description: 'Built for international teams'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <Button onClick={() => console.log(`Learn more about ${feature.title}`)}>
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
