// Omit `import React from 'react';` if unused
import Button from '@/components/ui/Button';
import LoadingState from '@/components/ui/LoadingState';

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
