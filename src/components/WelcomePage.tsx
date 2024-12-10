import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, Globe, Users, ChevronDown, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LoadingState } from '@/components/ui/LoadingState';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { WelcomePageProps, FeatureCardProps } from '@/types';

// Constants for feature data
const FEATURES = [
  {
    Icon: Calendar,
    title: "Smart Calendar",
    description: "Intelligent planning that puts your time first",
    ariaLabel: "Learn more about Smart Calendar feature"
  },
  {
    Icon: Globe,
    title: "Region Aware",
    description: "Seamlessly adapts to your location and policies",
    ariaLabel: "Learn more about Region Aware feature"
  },
  {
    Icon: Users,
    title: "Team Sync",
    description: "Keep your team aligned while you're away",
    ariaLabel: "Learn more about Team Sync feature"
  }
];

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, description, ariaLabel }) => (
  <motion.div
    className="group relative"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    role="article"
    aria-label={ariaLabel}
  >
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "p-8 rounded-xl border border-gray-200",
        "bg-background",
        "transition-shadow hover:shadow-lg"
      )}
    >
      <div className="mb-4 p-3 rounded-lg bg-primary/10">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary tracking-tight">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  </motion.div>
);

const RegionSelector: React.FC = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button 
        variant="secondary" 
        className="text-gray-600 hover:text-gray-800"
      >
        United States <ChevronDown className="ml-1 w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>United States</DropdownMenuItem>
      <DropdownMenuItem>United Kingdom</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const LocationSelector: React.FC = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button 
        variant="secondary" 
        className="text-gray-600 hover:text-gray-800"
      >
        Atlanta <ChevronDown className="ml-1 w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Atlanta</DropdownMenuItem>
      <DropdownMenuItem>New York</DropdownMenuItem>
      <DropdownMenuItem>Los Angeles</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const WelcomePage: React.FC<WelcomePageProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState('');

  const updateTime = useCallback(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    }));
  }, []);

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 60000);
    setTimeout(() => setIsLoading(false), 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  if (isLoading) {
    return <LoadingState size="lg" className="min-h-screen" />;
  }

  return (
    <div className={cn("min-h-screen flex flex-col bg-background", className)}>
      <header className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <motion.div 
              className="text-2xl font-semibold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              alfie
            </motion.div>

            <div className="flex items-center space-x-6">
              <RegionSelector />
              <LocationSelector />
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-4 h-4" />
                <time>{currentTime}</time>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 text-gray-800">
              Create moments for
              <br />
              what matters
            </h1>

            <p className="text-2xl text-gray-600 mb-12 font-serif italic tracking-wide">
              Where inspiration meets organization
            </p>

            <div className="flex justify-center gap-6">
              <Button 
                size="lg"
                className="px-8"
              >
                SSO Login
              </Button>
              <Button 
                size="lg"
                variant="secondary"
                className="px-8"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
