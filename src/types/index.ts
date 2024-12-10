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

// Add Select related types
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
