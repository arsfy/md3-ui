import { cva, type VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const md3FabVariants = cva(
    'inline-flex items-center justify-center gap-2 rounded-2xl font-medium shadow-lg cursor-pointer transition-all hover:shadow-xl active:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--md3-primary) disabled:pointer-events-none disabled:opacity-40',
    {
        variants: {
            variant: {
                primary: 'bg-(--md3-primaryContainer) text-(--md3-onPrimaryContainer)',
                secondary:
                    'bg-(--md3-secondaryContainer) text-(--md3-onSecondaryContainer)',
                tertiary: 'bg-(--md3-tertiaryContainer) text-(--md3-onTertiaryContainer)',
                surface: 'bg-(--md3-surfaceContainerLowest) text-(--md3-primary)',
            },
            size: {
                default: 'h-14 px-5 text-sm',
                small: 'h-10 px-4 text-xs rounded-xl',
                large: 'h-24 w-24 text-xs flex-col rounded-[28px]',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    }
);

export interface Md3FABProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof md3FabVariants> {}

const Md3FAB = forwardRef<HTMLButtonElement, Md3FABProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(md3FabVariants({ variant, size }), className)}
                {...props}
            />
        );
    }
);
Md3FAB.displayName = 'Md3FAB';

export { Md3FAB, md3FabVariants };
