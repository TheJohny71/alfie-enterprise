import React from 'react';
import { Calendar, Globe, Users, Clock } from 'lucide-react';

const WelcomePage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header with original purple */}
      <header className="h-16 bg-[#663399] px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold text-white">
            alfie
          </span>
          <span className="text-sm px-2 py-0.5 rounded border border-white/20 text-white">
            Enterprise
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2 text-white">
            <Clock className="w-4 h-4" />
            <span>04:32 PM</span>
          </div>
          <select className="bg-transparent border-0 text-white focus:ring-0 cursor-pointer">
            <option>Atlanta</option>
            <option>Austin</option>
            <option>Boston</option>
            <option>Chicago</option>
            <option>Dallas</option>
            <option>Houston</option>
            <option>Los Angeles</option>
            <option>Miami</option>
            <option>New York</option>
            <option>Orange County</option>
            <option>San Francisco</option>
            <option>Silicon Valley</option>
            <option>Washington, DC</option>
            <option>Wilmington</option>
          </select>
          <select className="bg-transparent border-0 text-white focus:ring-0 cursor-pointer">
            <option>United States</option>
            <option>United Kingdom</option>
          </select>
        </div>
      </header>

      {/* Main Content - Purple Background */}
      <main className="flex-1 bg-[#663399] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-semibold text-white mb-4">
          Create moments for what matters
        </h1>
        <h2 className="text-2xl text-white/90 mb-4">
          Life's best stories happen off the clock
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Plan smarter. Live fuller.
        </p>
        
        {/* Call to Action Button */}
        <button className="px-8 py-3 bg-white text-[#663399] rounded-lg font-semibold 
          hover:bg-gray-100 transition-colors duration-200">
          Get Started
        </button>
      </main>

      {/* Feature Cards - Overlay on bottom */}
      <div className="w-full px-6 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
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
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#663399]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
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
