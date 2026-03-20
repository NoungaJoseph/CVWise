import React from 'react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-on-primary hover:opacity-90',
      secondary: 'bg-secondary text-on-secondary hover:opacity-90',
      outline: 'border border-outline-variant/30 bg-transparent text-on-surface hover:bg-surface-container-low',
      ghost: 'bg-transparent text-on-surface hover:bg-surface-container-low',
      gradient: 'signature-gradient text-on-primary shadow-lg hover:scale-[0.98]',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs font-semibold',
      md: 'px-5 py-2 text-sm font-semibold',
      lg: 'px-6 py-3 text-base font-bold',
      xl: 'px-8 py-4 text-lg font-bold',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full bg-surface-container-highest border-none px-4 py-3 rounded-lg text-on-surface placeholder:text-outline focus:ring-0 focus:bg-surface-container-lowest transition-all border-b-2 border-transparent focus:border-secondary',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export const Card = ({ className, children, ...props }: { className?: string; children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10', className)} {...props}>
    {children}
  </div>
);
