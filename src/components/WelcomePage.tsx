import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="min-h-screen bg-[#F5F5F7]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-16"
      >
        <Card className="p-8 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-4xl font-semibold mb-4">
              Welcome to Alfie
            </CardTitle>
            <CardDescription className="text-lg">
              Create moments for what matters with smart leave management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="p-6 rounded-lg bg-[#5E5CE6]/10"
              >
                <h2 className="text-xl font-medium text-[#5E5CE6] mb-3">
                  Smart Calendar
                </h2>
                <p className="text-[#5E5CE6]/80">
                  Plan your time off with intelligent suggestions and team awareness
                </p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="p-6 rounded-lg bg-[#5E5CE6]/10"
              >
                <h2 className="text-xl font-medium text-[#5E5CE6] mb-3">
                  Team Sync
                </h2>
                <p className="text-[#5E5CE6]/80">
                  Stay coordinated with automatic team availability updates
                </p>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
