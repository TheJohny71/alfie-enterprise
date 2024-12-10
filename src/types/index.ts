import { LucideIcon } from 'lucide-react';
import type { VariantProps } from 'class-variance-authority';
import type { buttonVariants } from '@/components/ui/Button';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  ButtonVariants {
  asChild?: boolean;
}

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
