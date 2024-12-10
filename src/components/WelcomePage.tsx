import React from 'react';
import { Globe2, Calendar, Users } from 'lucide-react';
import { 
  Select, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/Select';

// Following pattern from compliance docs
const WelcomePage: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = React.useState('United States');
  const [selectedCity, setSelectedCity] = React.useState('Atlanta');
  const [currentTime, setCurrentTime] = React.useState('');

  const locationData = {
    'United States': {
      defaultCity: 'Atlanta',
      cities: {
        'Atlanta': { timeZone: 'America/New_York', officeCode: 'ATL' }
      }
    },
    'United Kingdom': {
      defaultCity: 'London',
      cities: {
        'London': { timeZone: 'Europe/London', officeCode: 'LON' }
      }
    }
  } as const;

  const handleCountryChange = React.useCallback((value: string) => {
    setSelectedCountry(value);
    const defaultCity = locationData[value as keyof typeof locationData].defaultCity;
    setSelectedCity(defaultCity);
  }, []);

  const handleCityChange = React.useCallback((value: string) => {
    setSelectedCity(value);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">alfie</h1>
          <div className="flex gap-4">
            <Select value={selectedCountry} onValueChange={handleCountryChange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              {Object.keys(locationData).map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </Select>

            <Select value={selectedCity} onValueChange={handleCityChange}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              {Object.keys(locationData[selectedCountry as keyof typeof locationData].cities).map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </Select>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Create moments for what matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <Calendar className="w-6 h-6 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Calendar</h3>
            <p>Intelligent planning that puts your time first</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Globe2 className="w-6 h-6 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Region Aware</h3>
            <p>Seamlessly adapts to your location and policies</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Users className="w-6 h-6 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Sync</h3>
            <p>Keep your team aligned while you're away</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
