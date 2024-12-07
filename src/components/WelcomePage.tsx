// If you’re using React 17+ and the new JSX transform, you can omit importing React.
// If you prefer to keep the explicit import, that’s fine, but it’s not required unless you reference React directly.
// Remove this line if you get a similar unused warning: import React from 'react';

import Button from '@/components/ui/Button';        // Ensure Button.tsx exists in ui
import LoadingState from '@/components/ui/LoadingState';  // Ensure LoadingState.tsx exists in ui

const WelcomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Alfie Enterprise</h1>
      <p className="mb-8">Your enterprise data at your fingertips.</p>
      <Button onClick={() => console.log('Button clicked!')}>Get Started</Button>
      <LoadingState />
    </div>
  );
};

export default WelcomePage;
