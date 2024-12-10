import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  onValueChange: (value: string) => void;
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
)

export const SelectTrigger = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('relative', className)}
      {...props}
    >
      {children}
    </div>
  );
})

export const SelectContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('absolute w-full mt-1', className)}
      {...props}
    >
      {children}
    </div>
  );
})

export const SelectItem = forwardRef<
  HTMLOptionElement,
  React.OptionHTMLAttributes<HTMLOptionElement>
>(({ className, children, ...props }, ref) => {
  return (
    <option
      ref={ref}
      className={cn('cursor-default', className)}
      {...props}
    >
      {children}
    </option>
  );
})

export const SelectValue = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { placeholder?: string }
>(({ placeholder, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('block truncate', className)}
      {...props}
    >
      {placeholder}
    </span>
  );
})

Select.displayName = 'Select'
SelectTrigger.displayName = 'SelectTrigger'
SelectContent.displayName = 'SelectContent'
SelectItem.displayName = 'SelectItem'
SelectValue.displayName = 'SelectValue'
