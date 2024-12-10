import { LucideIcon } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export interface LoadingStateProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

// Select related types
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

// WelcomePage related types
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

export interface HeaderProps {
  className?: string;
}
