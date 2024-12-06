import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "rounded-lg font-medium transition-colors";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/25",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
