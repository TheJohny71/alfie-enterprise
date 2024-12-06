import React from 'react';
import Button from '@/components/ui/Button'; // Changed the path to match the existing Button.tsx file
import LoadingState from '@/components/ui/LoadingState'; // Assuming this component is used and exists

// If you had references to Card, they have been removed. If you need a Card component, create card.tsx in ui folder and re-add import.
// import Card from '@/components/ui/card'; // Removed since card does not exist

const WelcomePage: React.FC = () => {
  // Remove or adjust any usage of Card below.
  // If there were lines like <Card /> they should be removed or replaced.

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
