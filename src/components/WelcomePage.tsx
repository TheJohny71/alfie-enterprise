import React, { useEffect, useState } from 'react';
import { Calendar, Globe, Users, Clock, Building } from 'lucide-react';

interface OfficePreference {
  officeId: string;
  timezone: string;
  region: string;
}

const WelcomePage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Enterprise Header */}
      <header className={`h-16 fixed w-full top-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <span className={`text-2xl font-semibold transition-colors duration-300
              ${scrolled ? 'text-purple-600' : 'text-white'}`}>
              alfie
            </span>
            <span className={`text-sm px-2 py-0.5 rounded-full border 
              ${scrolled ? 'border-purple-200 text-purple-600' : 'border-white/20 text-white/90'}`}>
              Enterprise
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-6">
            <div className={`flex items-center gap-2 transition-colors duration-300
              ${scrolled ? 'text-gray-600' : 'text-white'}`}>
              <Clock className="w-4 h-4" />
              <span>{currentTime}</span>
            </div>

            {/* Office Selector */}
            <div className="relative group">
              <div className="flex items-center gap-2">
                <Building className={`w-4 h-4 ${scrolled ? 'text-gray-600' : 'text-white'}`} />
                <select 
                  className={`bg-transparent border-0 focus:ring-0 cursor-pointer transition-colors duration-300
                    ${scrolled ? 'text-gray-600' : 'text-white'}`}
                >
                  <optgroup label="Americas">
                    <option value="nyc">New York</option>
                    <option value="sfo">San Francisco</option>
                    <option value="chi">Chicago</option>
                  </optgroup>
                  <optgroup label="Europe">
                    <option value="lon">London</option>
                    <option value="par">Paris</option>
                  </optgroup>
                  <optgroup label="Asia Pacific">
                    <option value="hkg">Hong Kong</option>
                    <option value="syd">Sydney</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Region Selector */}
            <select 
              className={`bg-transparent border-0 focus:ring-0 cursor-pointer transition-colors duration-300
                ${scrolled ? 'text-gray-600' : 'text-white'}`}
            >
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="eu">European Union</option>
              <option value="ap">Asia Pacific</option>
            </select>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-purple-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700" />
          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold text-white mb-6">
            Create moments for what matters
          </h1>
          <h2 className="text-2xl text-white/90 mb-6">
            Life's best stories happen off the clock
          </h2>
          <p className="text-xl text-white/80">
            Plan smarter. Live fuller.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-gray-50 -mt-32 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
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
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-purple-600" />
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
    </div>
  );
};

export default WelcomePage;
