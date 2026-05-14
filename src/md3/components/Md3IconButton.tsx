import { cva, type VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const md3IconButtonVariants = cva(
    'inline-flex items-center justify-center rounded-full cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--md3-primary) disabled:pointer-events-none disabled:opacity-40',
    {
        variants: {
            variant: {
                standard:
                    'h-10 w-10 text-(--md3-onSurfaceVariant) hover:bg-(--md3-onSurfaceVariant)/10',
                filled: 'h-10 w-10 bg-(--md3-primary) text-(--md3-onPrimary) hover:shadow-md',
                tonal: 'h-10 w-10 bg-(--md3-secondaryContainer) text-(--md3-onSecondaryContainer) hover:shadow-sm',
                outlined:
                    'h-10 w-10 border border-(--md3-outline) text-(--md3-onSurfaceVariant) hover:bg-(--md3-onSurfaceVariant)/5',
            },
            size: {
                default: '',
                small: 'h-8 w-8',
                large: 'h-12 w-12',
            },
        },
        defaultVariants: {
            variant: 'standard',
            size: 'default',
        },
    }
);

export interface Md3IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof md3IconButtonVariants> {}

const Md3IconButton = forwardRef<HTMLButtonElement, Md3IconButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(md3IconButtonVariants({ variant, size }), className)}
                {...props}
            />
        );
    }
);
Md3IconButton.displayName = 'Md3IconButton';

export { Md3IconButton, md3IconButtonVariants };
