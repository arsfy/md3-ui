import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface Md3AppBarProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'small' | 'medium' | 'large';
}

const Md3AppBar = forwardRef<HTMLDivElement, Md3AppBarProps>(
    ({ className, variant = 'small', children, ...props }, ref) => {
        return (
            <header
                ref={ref}
                className={cn(
                    'sticky top-0 z-50 bg-(--md3-surface) text-(--md3-onSurface)',
                    variant === 'small' && 'h-16 px-4 flex items-center shadow-sm',
                    variant === 'medium' &&
                        'pt-6 pb-4 px-4 flex flex-col justify-end shadow-sm min-h-[112px]',
                    variant === 'large' &&
                        'pt-7 pb-5 px-4 flex flex-col justify-end shadow-sm min-h-[152px]',
                    className
                )}
                {...props}
            >
                {children}
            </header>
        );
    }
);
Md3AppBar.displayName = 'Md3AppBar';

const Md3AppBarTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h1
            ref={ref}
            className={cn('text-(--md3-onSurface) font-normal tracking-[0px]', className)}
            {...props}
        />
    )
);
Md3AppBarTitle.displayName = 'Md3AppBarTitle';

const Md3AppBarLeading = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('flex items-center gap-3', className)} {...props} />
    )
);
Md3AppBarLeading.displayName = 'Md3AppBarLeading';

const Md3AppBarTrailing = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('flex items-center gap-2 ml-auto', className)} {...props} />
    )
);
Md3AppBarTrailing.displayName = 'Md3AppBarTrailing';

export { Md3AppBar, Md3AppBarLeading, Md3AppBarTitle, Md3AppBarTrailing };
