import React from 'react';
import { Calendar, Globe, Users, Clock } from 'lucide-react';

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Touch-optimized Header */}
      <header className="h-16 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo - Touch friendly */}
          <div className="flex items-center py-2">
            <span className="text-2xl font-semibold text-purple-600 min-h-[44px] flex items-center">
              alfie
            </span>
          </div>

          {/* Controls - Touch optimized */}
          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="hidden sm:flex items-center gap-2 min-h-[44px]">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">3:42 PM</span>
            </div>
            <select className="h-11 bg-transparent border-0 text-gray-600 focus:ring-0 cursor-pointer px-3 touch-manipulation">
              <option>Atlanta</option>
              <option>New York</option>
              <option>San Francisco</option>
            </select>
            <select className="h-11 bg-transparent border-0 text-gray-600 focus:ring-0 cursor-pointer px-3 touch-manipulation">
              <option>United States</option>
              <option>United Kingdom</option>
            </select>
          </div>
        </div>
      </header>

      {/* Responsive Hero Section */}
      <div className="bg-purple-600 pt-12 pb-32 sm:pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4 sm:mb-6">
            Create moments for what matters
          </h1>
          <h2 className="text-xl sm:text-2xl text-white/90 mb-3 sm:mb-4">
            Life's best stories happen off the clock
          </h2>
          <p className="text-base sm:text-lg text-white/80">
            Plan smarter. Live fuller.
          </p>
        </div>
      </div>

      {/* Touch-optimized Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
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
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 min-h-[160px] touch-manipulation"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
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
