import React from 'react';
import { motion } from 'framer-motion';

const WelcomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-background text-gray-900"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Alfie</h1>
      <p className="text-lg text-gray-700">
        Your companion for a seamless year of leave planning.
      </p>
      <div className="mt-6">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default WelcomePage;
