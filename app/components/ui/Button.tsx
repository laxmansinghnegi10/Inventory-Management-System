import { ReactNode } from 'react';
import { classNames } from '../../lib/utils';
// import { classNames } from '@/lib/utils';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'outline';
  className?: string;
};

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        variant === 'primary'
          ? 'bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-400'
          : 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:text-gray-400',
        className
      )}
    >
      {children}
    </button>
  );
}