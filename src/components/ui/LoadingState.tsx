import { FC } from 'react';
import { LoadingStateProps } from '@/types';

const LoadingState: FC<LoadingStateProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center">
      <span>{message}</span>
    </div>
  );
};

export default LoadingState;
