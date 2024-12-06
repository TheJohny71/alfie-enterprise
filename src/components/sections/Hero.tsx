import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <motion.div 
      className="text-center mb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative inline-block"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Create moments for what matters
        </h2>
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 mb-4"
      >
        Life's best stories happen off the clock.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="primary" size="lg" className="flex items-center justify-center">
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <Button variant="secondary" size="lg">
          Watch Demo
        </Button>
      </motion.div>
    </motion.div>
  );
}
