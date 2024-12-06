import { useState, useEffect } from 'react';
import WelcomePage from '@/components/WelcomePage';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/layout/Footer';
import LoadingState from '@/components/ui/LoadingState';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <WelcomePage />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
