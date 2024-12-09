import { FC } from 'react'
import { cn } from '@/lib/utils'
import { LoadingStateProps } from '@/types'

export const LoadingState: FC<LoadingStateProps> = ({
  size = 'md',
  color = 'primary',
  className
}) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-t-2 border-primary',
          {
            'h-4 w-4': size === 'sm',
            'h-6 w-6': size === 'md',
            'h-8 w-8': size === 'lg'
          }
        )}
      />
    </div>
  )
}
