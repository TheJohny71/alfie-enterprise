import React from 'react';
import { Globe2, Calendar, Users } from 'lucide-react';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import Button from '@/components/ui/Button';

// Define type for country data
type CountryData = {
  defaultCity: string;
  cities: Record<string, {
    timeZone: string;
    officeCode: string;
  }>;
};

// Define type for location data
type LocationData = Record<string, CountryData>;

const WelcomePage: React.FC = () => {
  // Location data with proper TypeScript types
  const locationData: LocationData = {
    'United States': {
      defaultCity: 'Atlanta',
      cities: {
        'Atlanta': { timeZone: 'America/New_York', officeCode: 'ATL' },
        'Austin': { timeZone: 'America/Chicago', officeCode: 'AUS' },
        'Boston': { timeZone: 'America/New_York', officeCode: 'BOS' }
      }
    },
    'United Kingdom': {
      defaultCity: 'London',
      cities: {
        'London': { timeZone: 'Europe/London', officeCode: 'LON' }
      }
    }
  };

  const [selectedCountry, setSelectedCountry] = React.useState<keyof LocationData>('United States');
  const [selectedCity, setSelectedCity] = React.useState('Atlanta');
  const [currentTime, setCurrentTime] = React.useState('');

  const handleCountryChange = React.useCallback((country: string) => {
    if (country in locationData) {
      setSelectedCountry(country as keyof LocationData);
      const defaultCity = locationData[country].defaultCity;
      setSelectedCity(defaultCity);
    }
  }, []);

  const handleCityChange = React.useCallback((city: string) => {
    setSelectedCity(city);
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
              {Object.keys(locationData[selectedCountry].cities).map((city) => (
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
