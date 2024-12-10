import React, { useState, useEffect } from 'react';
import { Globe2, Calendar, Users } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

const WelcomePage = () => {
  // Enhanced location data structure with office information
  const locationData = {
    'United States': {
      defaultCity: 'Atlanta',
      cities: {
        'Atlanta': { timeZone: 'America/New_York', officeCode: 'ATL' },
        'Austin': { timeZone: 'America/Chicago', officeCode: 'AUS' },
        'Boston': { timeZone: 'America/New_York', officeCode: 'BOS' },
        'Chicago': { timeZone: 'America/Chicago', officeCode: 'CHI' },
        'Dallas': { timeZone: 'America/Chicago', officeCode: 'DFW' },
        'Houston': { timeZone: 'America/Chicago', officeCode: 'HOU' },
        'Los Angeles': { timeZone: 'America/Los_Angeles', officeCode: 'LAX' },
        'Miami': { timeZone: 'America/New_York', officeCode: 'MIA' },
        'New York': { timeZone: 'America/New_York', officeCode: 'NYC' },
        'Orange County': { timeZone: 'America/Los_Angeles', officeCode: 'OC' },
        'San Francisco': { timeZone: 'America/Los_Angeles', officeCode: 'SF' },
        'Silicon Valley': { timeZone: 'America/Los_Angeles', officeCode: 'SV' },
        'Washington, DC': { timeZone: 'America/New_York', officeCode: 'DC' },
        'Wilmington': { timeZone: 'America/New_York', officeCode: 'WIL' }
      }
    },
    'United Kingdom': {
      defaultCity: 'London City',
      cities: {
        'London City': { timeZone: 'Europe/London', officeCode: 'LON' }
      }
    }
  };

  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [selectedCity, setSelectedCity] = useState('Atlanta');
  const [currentTime, setCurrentTime] = useState('');

  // Initialize with browser's timezone if no defaults are set
  useEffect(() => {
    const initializeLocation = () => {
      const savedCountry = localStorage.getItem('defaultCountry');
      const savedCity = localStorage.getItem('defaultCity');

      // Check if saved preferences exist and are valid
      if (savedCountry && locationData[savedCountry]) {
        setSelectedCountry(savedCountry);
        if (savedCity && locationData[savedCountry].cities[savedCity]) {
          setSelectedCity(savedCity);
        } else {
          // Use country's default city if saved city is invalid
          setSelectedCity(locationData[savedCountry].defaultCity);
        }
      } else {
        // Attempt to detect user's location based on browser timezone
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        let matched = false;

        // Find matching timezone in our office locations
        Object.entries(locationData).forEach(([country, data]) => {
          Object.entries(data.cities).forEach(([city, cityData]) => {
            if (cityData.timeZone === userTimeZone && !matched) {
              setSelectedCountry(country);
              setSelectedCity(city);
              matched = true;
            }
          });
        });

        // If no match, use system defaults
        if (!matched) {
          setSelectedCountry('United States');
          setSelectedCity('Atlanta');
        }
      }
    };

    initializeLocation();
  }, []);

  // Update local time based on selected location
  useEffect(() => {
    const updateTime = () => {
      const cityData = locationData[selectedCountry].cities[selectedCity];
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: cityData.timeZone,
        hour: 'numeric',
        minute: 'numeric'
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [selectedCountry, selectedCity]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    // Reset city to country's default when country changes
    const defaultCity = locationData[country].defaultCity;
    setSelectedCity(defaultCity);
    
    // Save preferences
    localStorage.setItem('defaultCountry', country);
    localStorage.setItem('defaultCity', defaultCity);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    localStorage.setItem('defaultCity', city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-800">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-2xl font-semibold">alfie</span>
          <span className="text-white/80 ml-2">Enterprise</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-white/80 text-sm mr-2">{currentTime}</div>
          
          <Select value={selectedCountry} onValueChange={handleCountryChange}>
            <SelectTrigger className="w-40 bg-white/10 border-0 text-white">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(locationData).map((country) => (
                <SelectItem key={country} value={country}>{country}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedCity} onValueChange={handleCityChange}>
            <SelectTrigger className="w-32 bg-white/10 border-0 text-white">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(locationData[selectedCountry].cities).map((city) => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-5xl font-semibold text-white mb-6 tracking-tight">
          Create moments for what matters
        </h1>
        <p className="text-2xl text-white/90 mb-4">
          Life's best stories happen off the clock
        </p>
        <p className="text-lg text-white/80 mb-8">
          Plan smarter. Live fuller.
        </p>
        <button className="px-6 py-3 bg-white text-purple-700 rounded-lg font-medium 
                         transform transition-all duration-200 hover:scale-105 
                         hover:shadow-lg active:scale-95">
          Get Started
        </button>
      </main>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-200 hover:scale-105">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Smart Calendar</h3>
          <p className="text-white/80">Intelligent planning that puts your time first</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-200 hover:scale-105">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
            <Globe2 className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Region Aware</h3>
          <p className="text-white/80">Seamlessly adapts to your location and policies</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-200 hover:scale-105">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Team Sync</h3>
          <p className="text-white/80">Keep your team aligned while you're away</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
