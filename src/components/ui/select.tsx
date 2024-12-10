import React from 'react';
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

// Following required React.FC pattern
const SelectTrigger: React.FC<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>> = React.forwardRef(({ 
  className, 
  children, 
  ...props 
}, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn("flex h-10 w-full items-center justify-between rounded-md px-3 py-2 text-sm", className)}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectContent: React.FC<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>> = React.forwardRef(({ 
  className, 
  children,
  ...props 
}, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn("bg-white dark:bg-gray-800 rounded-md border shadow-lg", className)}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-2">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

const SelectItem: React.FC<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>> = React.forwardRef(({ 
  className, 
  children, 
  ...props 
}, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn("relative flex items-center px-8 py-2 text-sm cursor-default", className)}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
};
