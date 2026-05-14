import { cva, type VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const md3ChipVariants = cva(
    'inline-flex items-center justify-center gap-1.5 h-8 px-3 text-sm font-medium tracking-wide rounded-lg border cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--md3-primary) disabled:pointer-events-none disabled:opacity-40',
    {
        variants: {
            variant: {
                assist: 'border border-(--md3-outline) text-(--md3-onSurfaceVariant) bg-transparent hover:bg-(--md3-primary)/5 hover:border-(--md3-outline)',
                filter: 'border border-(--md3-surfaceVariant) text-(--md3-onSurfaceVariant) bg-(--md3-surfaceVariant) hover:bg-(--md3-secondaryContainer) hover:text-(--md3-onSecondaryContainer)',
                input: 'border border-(--md3-outline) text-(--md3-onSurfaceVariant) bg-transparent hover:bg-(--md3-primary)/5',
                suggestion:
                    'border border-transparent text-(--md3-onSurfaceVariant) bg-transparent hover:bg-(--md3-primary)/5 hover:text-(--md3-onSurface)',
            },
            active: {
                false: '',
                true: '',
            },
        },
        compoundVariants: [
            {
                variant: 'filter',
                active: true,
                class: 'bg-(--md3-secondaryContainer) text-(--md3-onSecondaryContainer) border-(--md3-secondaryContainer)',
            },
        ],
        defaultVariants: {
            variant: 'assist',
            active: false,
        },
    }
);

export interface Md3ChipProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof md3ChipVariants> {
    active?: boolean;
}

const Md3Chip = forwardRef<HTMLButtonElement, Md3ChipProps>(
    ({ className, variant, active, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(md3ChipVariants({ variant, active }), className)}
                {...props}
            />
        );
    }
);
Md3Chip.displayName = 'Md3Chip';

export { Md3Chip, md3ChipVariants };
