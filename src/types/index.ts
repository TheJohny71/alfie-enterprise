import { FC, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface WelcomePageProps {
  children?: ReactNode;
}

export interface LoadingStateProps {
  message?: string;
}

export interface HeaderProps {
  title?: string;
}
