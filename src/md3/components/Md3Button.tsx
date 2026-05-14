import { cva, type VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const md3ButtonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md3-primary)] disabled:pointer-events-none disabled:opacity-40',
    {
        variants: {
            variant: {
                filled: 'bg-[var(--md3-primary)] text-[var(--md3-onPrimary)] hover:shadow-md active:shadow-sm',
                tonal: 'bg-[var(--md3-secondaryContainer)] text-[var(--md3-onSecondaryContainer)] hover:shadow-sm active:shadow-none',
                outlined:
                    'border border-[var(--md3-outline)] text-[var(--md3-primary)] bg-transparent hover:bg-[var(--md3-primary)]/5 active:bg-[var(--md3-primary)]/10',
                text: 'text-[var(--md3-primary)] bg-transparent hover:bg-[var(--md3-primary)]/5 active:bg-[var(--md3-primary)]/10',
                elevated:
                    'bg-[var(--md3-surfaceContainerLow)] text-[var(--md3-primary)] shadow-md hover:shadow-lg active:shadow-sm',
            },
            size: {
                default: 'h-10 px-6 text-sm tracking-wide rounded-full',
                small: 'h-8 px-4 text-xs tracking-wide rounded-full',
                large: 'h-12 px-8 text-sm tracking-wide rounded-full',
            },
            icon: {
                false: '',
                true: 'p-3 rounded-full',
            },
        },
        defaultVariants: {
            variant: 'filled',
            size: 'default',
            icon: false,
        },
    }
);

export interface Md3ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof md3ButtonVariants> {}

const Md3Button = forwardRef<HTMLButtonElement, Md3ButtonProps>(
    ({ className, variant, size, icon, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(md3ButtonVariants({ variant, size, icon }), className)}
                {...props}
            />
        );
    }
);
Md3Button.displayName = 'Md3Button';

export { Md3Button, md3ButtonVariants };
