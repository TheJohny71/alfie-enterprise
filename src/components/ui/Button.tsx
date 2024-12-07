// If React is not needed as a named import, omit it. Otherwise:
// import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="p-2 bg-primary text-white rounded" {...props}>
      {children}
    </button>
  );
};

export default Button;
