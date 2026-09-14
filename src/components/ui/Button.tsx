import React from 'react';
import { Link } from '@tanstack/react-router';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', to, className = '', children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm md:text-base font-bold uppercase premium-btn focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] focus:outline-none disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none" + " " + "font-['Barlow_Condensed'] tracking-[0.12em]";
  
  const variants = {
    primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)]',
    secondary: 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)]',
    outline: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to as any} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
