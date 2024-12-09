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
