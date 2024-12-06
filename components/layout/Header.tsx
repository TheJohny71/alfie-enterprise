import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="relative text-gray-600 hover:text-gray-900 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
    <motion.div
      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  </motion.a>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full backdrop-blur-lg bg-white/70 border-b border-gray-200/50 z-50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
        >
          Alfie
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="primary">
            Sign In with SSO
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
        className="md:hidden border-t border-gray-200/50"
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a href="#features" className="block text-gray-600">Features</a>
          <a href="#about" className="block text-gray-600">About</a>
          <a href="#contact" className="block text-gray-600">Contact</a>
        </div>
      </motion.div>
    </motion.header>
  );
}
