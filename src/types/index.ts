import { LucideIcon } from 'lucide-react';
import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/Button';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export interface LoadingStateProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  onValueChange: (value: string) => void;
}

export interface SelectTriggerProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SelectValueProps {
  placeholder?: string;
  className?: string;
}

export interface WelcomePageProps {
  className?: string;
}

export interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  ariaLabel: string;
}

export interface RegionOption {
  value: string;
  label: string;
}

export interface LocationOption {
  value: string;
  label: string;
}
