import React from 'react';
import { Alert } from '@/components/ui/alert';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  onValueChange: (value: string) => void;
}

export interface SelectTriggerProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SelectContentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SelectItemProps {
  value: string;
  children?: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ value, onValueChange, children, ...props }) => {
  return (
    <select 
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      {...props}
    >
      {children}
    </select>
  );
};

const SelectTrigger: React.FC<SelectTriggerProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const SelectContent: React.FC<SelectContentProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => {
  return (
    <option value={value}>
      {children}
    </option>
  );
};

const SelectValue: React.FC<{placeholder?: string}> = ({ placeholder }) => {
  return <span>{placeholder}</span>;
};

export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
};
