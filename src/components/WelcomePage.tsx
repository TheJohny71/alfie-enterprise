import React from 'react';
import { motion } from 'framer-motion';

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-semibold text-center mb-8">
            Welcome to Alfie
          </h1>
        </motion.div>
      </main>
    </div>
  );
};

export default WelcomePage;
