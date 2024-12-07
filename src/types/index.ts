// src/types/index.ts
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface WelcomePageProps {
  // Currently empty as WelcomePage doesn't accept props
}
