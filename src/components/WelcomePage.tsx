import React, { useState } from 'react';
import { Calendar, Globe, Users, Clock } from 'lucide-react';

const WelcomePage: React.FC = () => {
  // State for location preferences
  const [selectedCity, setSelectedCity] = useState('Atlanta');
  const [selectedCountry, setSelectedCountry] = useState('United States');

  // Save preferences when changed
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    setSelectedCity(city);
    localStorage.setItem('preferredCity', city);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setSelectedCountry(country);
    localStorage.setItem('preferredCountry', country);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header with slightly darker purple for distinction */}
      <header className="h-16 bg-[#5D2D8C] border-b border-purple-400/20">
        <div className="max-w-7xl h-full mx-auto px-6 flex items-center justify-between">
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
            
            {/* City Selector with full options */}
            <select 
              value={selectedCity}
              onChange={handleCityChange}
              className="bg-transparent border-0 text-white focus:ring-0 cursor-pointer appearance-none hover:text-white/80 pr-8"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'white\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                backgroundSize: '16px'
              }}
            >
              <option className="text-gray-900" value="Atlanta">Atlanta</option>
              <option className="text-gray-900" value="Austin">Austin</option>
              <option className="text-gray-900" value="Boston">Boston</option>
              <option className="text-gray-900" value="Chicago">Chicago</option>
              <option className="text-gray-900" value="Dallas">Dallas</option>
              <option className="text-gray-900" value="Houston">Houston</option>
              <option className="text-gray-900" value="Los Angeles">Los Angeles</option>
              <option className="text-gray-900" value="Miami">Miami</option>
              <option className="text-gray-900" value="New York">New York</option>
              <option className="text-gray-900" value="Orange County">Orange County</option>
              <option className="text-gray-900" value="San Francisco">San Francisco</option>
              <option className="text-gray-900" value="Silicon Valley">Silicon Valley</option>
              <option className="text-gray-900" value="Washington, DC">Washington, DC</option>
              <option className="text-gray-900" value="Wilmington">Wilmington</option>
            </select>

            {/* Country Selector */}
            <select 
              value={selectedCountry}
              onChange={handleCountryChange}
              className="bg-transparent border-0 text-white focus:ring-0 cursor-pointer appearance-none hover:text-white/80 pr-8"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'white\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                backgroundSize: '16px'
              }}
            >
              <option className="text-gray-900" value="United States">United States</option>
              <option className="text-gray-900" value="United Kingdom">United Kingdom</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-[#663399] flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-white mb-4">
            Create moments for what matters
          </h1>
          <h2 className="text-2xl text-white/90 mb-4">
            Life's best stories happen off the clock
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Plan smarter. Live fuller.
          </p>
          
          {/* Styled Get Started Button */}
          <button className="px-6 py-2.5 bg-white rounded-md font-medium text-[#663399] 
            hover:bg-white/90 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </main>

      {/* Feature Cards */}
      <div className="w-full bg-gray-50 px-6 py-8">
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
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="w-12 h-12 bg-purple-100/50 rounded-lg flex items-center justify-center mb-4">
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
