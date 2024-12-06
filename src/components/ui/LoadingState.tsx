import { motion } from 'framer-motion';

export default function LoadingState() {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0.5 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={circleVariants}
          className="absolute inset-0 bg-primary/10 rounded-full blur-xl"
        />
        <svg
          width="96"
          height="96"
          viewBox="0 0 50 50"
          className="text-primary"
        >
          <motion.circle
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 whitespace-nowrap"
        >
          <span className="text-gray-600 font-display">Loading Alfie...</span>
        </motion.div>
      </div>
    </div>
  );
}
