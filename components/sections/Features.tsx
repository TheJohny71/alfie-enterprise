import { motion } from 'framer-motion';
import { CalendarDays, Users, Building2, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: typeof CalendarDays;
  title: string;
  description: string;
}

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

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative p-8 backdrop-blur-sm bg-white/60 rounded-2xl border border-gray-200/50 transition-all duration-200"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute bottom-4 right-4"
      >
        <ArrowRight className="w-5 h-5 text-primary" />
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 * index }}
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </div>
  );
}
