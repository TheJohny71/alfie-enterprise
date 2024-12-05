import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimationControls } from 'framer-motion';
import { CalendarDays, Users, Building2 } from 'lucide-react';

const Starfield = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-primary/20 rounded-full"
        initial={{ opacity: 0.1 }}
        animate={{
          opacity: [0.1, 0.5, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);

const ParticleSystem = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-primary/10 rounded-full"
        initial={{ y: "100%", opacity: 0 }}
        animate={{
          y: "-100%",
          opacity: [0, 1, 0],
          scale: [1, 1.5, 1],
          x: [0, Math.sin(i) * 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: i * 0.5,
        }}
      />
    ))}
  </div>
);

const FloatingDot = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <motion.span
      animate={controls}
      className="inline-block"
    >
      ...
    </motion.span>
  );
};

const EnhancedButton = ({ children, className }) => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    setPosition({ x: x * 20, y: y * 20 });
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      animate={position}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur-xl"
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 1 : 0.5,
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotate({ x: -rotateX, y: rotateY });
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotate({ x: 0, y: 0 });
      }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl blur-xl"
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <motion.div
        className="relative p-8 backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 transform-gpu transition-all duration-200"
        animate={rotate}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative z-10"
        >
          <Icon className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const WelcomePage = () => {
  const { scrollY } = useScroll();
  const y = useSpring(scrollY, { stiffness: 100, damping: 30 });
  
  const headerBackground = useTransform(
    y,
    [0, 100],
    ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.9)"]
  );

  const headerBorderOpacity = useTransform(
    y,
    [0, 100],
    [0, 1]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
      <Starfield />
      <ParticleSystem />
      
      {/* Header */}
      <motion.header
        className="fixed top-0 w-full backdrop-blur-lg border-b z-50"
        style={{
          backgroundColor: headerBackground,
          borderColor: `rgba(209, 213, 219, ${headerBorderOpacity.get()})`,
        }}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            <h1 className="text-xl font-display font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Alfie
            </h1>
          </motion.div>
          
          <EnhancedButton className="px-6 py-2 bg-primary/90 hover:bg-primary text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-primary/25">
            Sign In with SSO
          </EnhancedButton>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Create moments for what matters<FloatingDot />
              </h2>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4"
                >
                  Life's best stories happen off the clock.
                </motion.p>
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-300"
                >
                  Plan smarter. Live fuller.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
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
            ].map((feature, index) => (
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
};

export default WelcomePage;
