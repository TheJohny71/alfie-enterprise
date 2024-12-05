import { motion } from 'framer-motion';
import { CalendarDays, Users, Building2 } from 'lucide-react';

interface FeatureCardProps {
  icon: typeof CalendarDays;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="relative p-8 backdrop-blur-sm bg-white/60 rounded-2xl border border-gray-200/50 transition-all duration-200 hover:-translate-y-1">
    <Icon className="w-12 h-12 text-primary mb-4" />
    <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function WelcomePage() {
  const features = [
    {
      icon: CalendarDays,
      title: "Smart Calendar",
      description: "Intelligent leave planning with team awareness and conflict prevention."
    },
    {
      icon: Users,
      title: "Team Sync",
      description: "Seamless coordination with automatic availability updates and coverage insights."
    },
    {
      icon: Building2,
      title: "Enterprise Ready",
      description: "Built for scale with SSO, advanced permissions, and comprehensive audit logs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full backdrop-blur-lg bg-white/70 border-b border-gray-200/50 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
          >
            Alfie
          </motion.h1>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 bg-primary text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-primary/25"
          >
            Sign In with SSO
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Create moments for what matters...
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-4"
            >
              Life's best stories happen off the clock.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600"
            >
              Plan smarter. Live fuller.
            </motion.p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
