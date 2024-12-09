import React from 'react';
import { Calendar, Globe, Users, Clock } from 'lucide-react';

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="h-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <span className="text-2xl font-semibold text-purple-600">
            alfie
          </span>

          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">3:42 PM</span>
            </div>
            <select className="bg-transparent border-0 text-gray-600 focus:ring-0 cursor-pointer">
              <option>Atlanta</option>
              <option>New York</option>
              <option>San Francisco</option>
            </select>
            <select className="bg-transparent border-0 text-gray-600 focus:ring-0 cursor-pointer">
              <option>United States</option>
              <option>United Kingdom</option>
            </select>
          </div>
        </div>
      </header>

      {/* Enhanced Hero with Gradient */}
      <div className="relative bg-purple-600 pt-20 pb-40 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-white mb-6">
            Create moments for what matters
          </h1>
          <h2 className="text-2xl font-normal text-white/90 mb-4">
            Life's best stories happen off the clock
          </h2>
          <p className="text-lg text-white/80">
            Plan smarter. Live fuller.
          </p>
        </div>
      </div>

      {/* Enhanced Feature Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
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
          ].map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
