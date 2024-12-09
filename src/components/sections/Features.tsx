import React from 'react';
import { Calendar, Globe, Users } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Calendar,
    title: "Smart Calendar",
    description: "Intelligent planning that puts your time first"
  },
  {
    icon: Globe,
    title: "Region Aware",
    description: "Seamlessly adapts to your location and policies"
  },
  {
    icon: Users,
    title: "Team Sync",
    description: "Keep your team aligned while you're away"
  }
];

export const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
