import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const WelcomePage: React.FC = () => {
  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <Card className="p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold text-gray-900 mb-6">
            Welcome to Alfie
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Create moments for what matters with smart leave management
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 rounded-lg bg-purple-50"
            >
              <h2 className="text-xl font-medium text-purple-900 mb-3">
                Smart Calendar
              </h2>
              <p className="text-purple-700">
                Plan your time off with intelligent suggestions and team awareness
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-6 rounded-lg bg-blue-50"
            >
              <h2 className="text-xl font-medium text-blue-900 mb-3">
                Team Sync
              </h2>
              <p className="text-blue-700">
                Stay coordinated with automatic team availability updates
              </p>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
