import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-white hover:bg-primary/90': variant === 'primary',
            'bg-gray-100 text-gray-300 hover:bg-gray-200': variant === 'secondary',
            'text-primary underline-offset-4 hover:underline': variant === 'tertiary',
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 text-base': size === 'md',
            'h-12 px-6 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
