import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <img 
            src="/api/placeholder/32/32" 
            alt="Alfie Logo" 
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold text-purple-600">
            alfie
          </span>
        </motion.div>
        
        <nav className="flex items-center gap-6">
          <Button variant="ghost">Calendar</Button>
          <Button variant="ghost">Team</Button>
          <Button variant="ghost">Settings</Button>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button variant="default">
              Request Leave
            </Button>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
