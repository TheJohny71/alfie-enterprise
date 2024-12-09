import { FC } from 'react';
import { ButtonProps } from '@/types';

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded bg-purple-600 text-white ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
