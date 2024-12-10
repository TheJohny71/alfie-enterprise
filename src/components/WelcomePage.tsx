import React from 'react';
import { Globe2, Calendar, Users } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

// Types in a separate section per compliance guide
type CityData = {
  timeZone: string;
  officeCode: string;
};

type CountryData = {
  defaultCity: string;
  cities: Record<string, CityData>;
};

type LocationData = Record<string, CountryData>;

// Required React.FC pattern per compliance
const WelcomePage: React.FC = () => {
  // Location data with proper typing
  const locationData: LocationData = {
    'United States': {
      defaultCity: 'Atlanta',
      cities: {
        'Atlanta': { timeZone: 'America/New_York', officeCode: 'ATL' },
        'Austin': { timeZone: 'America/Chicago', officeCode: 'AUS' },
        'Boston': { timeZone: 'America/New_York', officeCode: 'BOS' }
        // Other cities removed for brevity, add back as needed
      }
    },
    'United Kingdom': {
      defaultCity: 'London City',
      cities: {
        'London City': { timeZone: 'Europe/London', officeCode: 'LON' }
      }
    }
  };

  const [selectedCountry, setSelectedCountry] = React.useState<string>('United States');
  const [selectedCity, setSelectedCity] = React.useState<string>('Atlanta');
  const [currentTime, setCurrentTime] = React.useState<string>('');

  React.useEffect(() => {
    const initializeLocation = (): void => {
      const savedCountry = localStorage.getItem('defaultCountry');
      const savedCity = localStorage.getItem('defaultCity');

      if (savedCountry && locationData[savedCountry]) {
        setSelectedCountry(savedCountry);
        if (savedCity && locationData[savedCountry].cities[savedCity]) {
          setSelectedCity(savedCity);
        } else {
          setSelectedCity(locationData[savedCountry].defaultCity);
        }
      }
    };

    initializeLocation();
  }, []);

  React.useEffect(() => {
    const updateTime = (): void => {
      const cityData = locationData[selectedCountry].cities[selectedCity];
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: cityData.timeZone,
        hour: 'numeric',
        minute: 'numeric'
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [selectedCountry, selectedCity]);

  const handleCountryChange = (country: string): void => {
    setSelectedCountry(country);
    const defaultCity = locationData[country].defaultCity;
    setSelectedCity(defaultCity);
    localStorage.setItem('defaultCountry', country);
    localStorage.setItem('defaultCity', defaultCity);
  };

  const handleCityChange = (city: string): void => {
    setSelectedCity(city);
    localStorage.setItem('defaultCity', city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-800">
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

      <main className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-5xl font-semibold text-white mb-6">
          Create moments for what matters
        </h1>
        <p className="text-2xl text-white/90 mb-4">
          Life's best stories happen off the clock
        </p>
        <p className="text-lg text-white/80 mb-8">
          Plan smarter. Live fuller.
        </p>
        <button 
          className="px-6 py-3 bg-white text-purple-700 rounded-lg font-medium 
                   transform transition-all duration-200 hover:scale-105 
                   hover:shadow-lg active:scale-95"
        >
          Get Started
        </button>
      </main>

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
