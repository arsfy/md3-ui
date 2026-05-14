import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const md3CardVariants = cva(
    'bg-(--md3-surfaceContainerLowest) text-(--md3-onSurface) transition-shadow',
    {
        variants: {
            variant: {
                elevated: 'shadow-md hover:shadow-lg',
                filled: 'bg-(--md3-surfaceContainerHighest)',
                outlined: 'border border-(--md3-outlineVariant)',
            },
        },
        defaultVariants: {
            variant: 'elevated',
        },
    }
);

export interface Md3CardProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof md3CardVariants> {}

const Md3Card = forwardRef<HTMLDivElement, Md3CardProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    md3CardVariants({ variant }),
                    'rounded-xl overflow-hidden',
                    className
                )}
                {...props}
            />
        );
    }
);
Md3Card.displayName = 'Md3Card';

// Card sub-components
const Md3CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => <div ref={ref} className={cn('p-4', className)} {...props} />
);
Md3CardContent.displayName = 'Md3CardContent';

const Md3CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('p-4 pb-0', className)} {...props} />
    )
);
Md3CardHeader.displayName = 'Md3CardHeader';

const Md3CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                'text-base font-medium leading-6 tracking-wide text-(--md3-onSurface)',
                className
            )}
            {...props}
        />
    )
);
Md3CardTitle.displayName = 'Md3CardTitle';

const Md3CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn(
                'text-sm leading-5 tracking-[0.25px] text-(--md3-onSurfaceVariant) mt-1',
                className
            )}
            {...props}
        />
    )
);
Md3CardDescription.displayName = 'Md3CardDescription';

const Md3CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('p-4 pt-0 flex items-center gap-2', className)} {...props} />
    )
);
Md3CardFooter.displayName = 'Md3CardFooter';

export { Md3Card, Md3CardContent, Md3CardDescription, Md3CardFooter, Md3CardHeader, Md3CardTitle };
