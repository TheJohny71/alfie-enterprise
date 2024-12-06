// src/components/layout/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Alfie Enterprise</h3>
            <p className="text-gray-600">A sophisticated leave management system</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => console.log('Features clicked')}
                  className="text-gray-600 hover:text-primary"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('About clicked')}
                  className="text-gray-600 hover:text-primary"
                >
                  About
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => console.log('Support clicked')}
                  className="text-gray-600 hover:text-primary"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Alfie Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
