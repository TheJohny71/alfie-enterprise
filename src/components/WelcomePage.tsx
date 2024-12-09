import React, { useEffect, useState } from 'react';
import { Calendar, Globe, Users, Clock, Building, Shield } from 'lucide-react';
import { format } from 'date-fns';
import { useAuth, useUserContext } from '@/lib/auth';

interface OfficePreference {
  officeId: string;
  timezone: string;
  region: string;
  complianceSettings: {
    dataResidency: string;
    privacyRegulation: string;
  };
}

const WelcomePage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const { userPreferences, updatePreferences } = useUserContext();
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Time update with timezone consideration
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Enterprise Header */}
      <header className={`h-16 fixed w-full top-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo with Enterprise Indicator */}
          <div className="flex items-center gap-3">
            <span className={`text-2xl font-semibold transition-colors duration-300
              ${scrolled ? 'text-purple-600' : 'text-white'}`}>
              alfie
            </span>
            {isAuthenticated && (
              <span className={`text-sm px-2 py-0.5 rounded-full border 
                ${scrolled ? 'border-purple-200 text-purple-600' : 'border-white/20 text-white/90'}`}>
                Enterprise
              </span>
            )}
          </div>

          {/* Enterprise Controls */}
          <div className="flex items-center space-x-6">
            {/* Time with Multiple Timezone Support */}
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 transition-colors duration-300
                ${scrolled ? 'text-gray-600' : 'text-white'}`}>
                <Clock className="w-4 h-4" />
                <span>{format(currentTime, 'HH:mm')}</span>
              </div>
              {/* Additional timezone indicator */}
              <span className={`text-sm ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
                GMT {format(currentTime, 'xxx')}
              </span>
            </div>

            {/* Office Selector with Compliance Indicator */}
            <div className="relative group">
              <div className="flex items-center gap-2">
                <Building className={`w-4 h-4 ${scrolled ? 'text-gray-600' : 'text-white'}`} />
                <select 
                  className={`bg-transparent border-0 focus:ring-0 cursor-pointer transition-colors duration-300
                    ${scrolled ? 'text-gray-600' : 'text-white'}`}
                  value={userPreferences?.officeId || ""}
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
                {/* Compliance Indicator */}
                <Shield className={`w-4 h-4 ${scrolled ? 'text-green-600' : 'text-white'}`} />
              </div>
            </div>

            {/* Region Selector with Data Residency Info */}
            <div className="relative group">
              <select 
                className={`bg-transparent border-0 focus:ring-0 cursor-pointer transition-colors duration-300
                  ${scrolled ? 'text-gray-600' : 'text-white'}`}
              >
                <option value="us">United States (US-SSAE18)</option>
                <option value="uk">United Kingdom (UK-GDPR)</option>
                <option value="eu">European Union (EU-GDPR)</option>
                <option value="ap">Asia Pacific (APAC-MTCS)</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Rest of the component would follow ... */}
    </div>
  );
};

export default WelcomePage;
