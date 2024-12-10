import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

// Define interfaces directly in the file instead of importing
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  onValueChange: (value: string) => void;
}

interface SelectTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
  className?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ value, onValueChange, children, className, ...props }, ref) => {
    return (
      <select 
        ref={ref}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className={cn('w-full rounded-md', className)}
        {...props}
      >
        {children}
      </select>
    );
  }
);

export const SelectTrigger = forwardRef<HTMLDivElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('relative', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export const SelectValue = forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ placeholder, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('block truncate', className)}
        {...props}
      >
        {placeholder}
      </span>
    );
  }
);

Select.displayName = 'Select';
SelectTrigger.displayName = 'SelectTrigger';
SelectValue.displayName = 'SelectValue';
