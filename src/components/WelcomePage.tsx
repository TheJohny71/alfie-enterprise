import React from 'react';
import { Calendar, Globe, Users, Clock } from 'lucide-react';

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Refined Header */}
      <header className="h-16 bg-white border-b border-gray-200/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center relative group">
            <span className="text-2xl font-semibold text-purple-600 tracking-tight">
              alfie
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
          </div>

          {/* Refined Controls */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 font-medium">3:42 PM</span>
            </div>
            <select className="text-sm bg-transparent border-0 text-gray-600 font-medium focus:ring-0 cursor-pointer hover:text-purple-600 transition-colors">
              <option>Atlanta</option>
              <option>New York</option>
              <option>San Francisco</option>
            </select>
            <select className="text-sm bg-transparent border-0 text-gray-600 font-medium focus:ring-0 cursor-pointer hover:text-purple-600 transition-colors">
              <option>United States</option>
              <option>United Kingdom</option>
            </select>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <div className="relative bg-purple-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 transform -skew-y-12 bg-white/20" />
          <div className="absolute inset-0 transform skew-x-12 bg-white/10" />
        </div>
        
        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-semibold text-white mb-6 tracking-tight">
            Create moments for what matters
          </h1>
          <h2 className="text-2xl font-normal text-white/90 mb-6 tracking-wide">
            Life's best stories happen off the clock
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Plan smarter. Live fuller.
          </p>
        </div>
      </div>

      {/* Enhanced Feature Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
