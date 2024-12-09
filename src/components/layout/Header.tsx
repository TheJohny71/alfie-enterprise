import React from 'react';
import { Clock } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center group">
          <span className="text-2xl font-semibold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
            alfie
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-gray-500">3:42 PM</span>
          </div>
          <select className="bg-transparent border-0 text-gray-600 focus:ring-0 cursor-pointer">
            <option>Atlanta</option>
            <option>New York</option>
            <option>San Francisco</option>
          </select>
          <select className="bg-transparent border-0 text-gray-600 focus:ring-0 cursor-pointer">
            <option>United States</option>
            <option>United Kingdom</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
