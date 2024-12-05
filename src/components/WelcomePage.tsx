import React from 'react';

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold">Alfie</h1>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
            Sign In with SSO
          </button>
        </div>
      </header>
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Create moments for what matters...
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Life's best stories happen off the clock.
          </p>
          <p className="text-xl text-gray-600">
            Plan smarter. Live fuller.
          </p>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
