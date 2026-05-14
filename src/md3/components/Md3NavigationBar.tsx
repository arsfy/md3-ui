import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface Md3NavigationBarProps extends HTMLAttributes<HTMLDivElement> {}

const Md3NavigationBar = forwardRef<HTMLDivElement, Md3NavigationBarProps>(
    ({ className, ...props }, ref) => {
        return (
            <nav
                ref={ref}
                className={cn(
                    'fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around',
                    'bg-[var(--md3-surfaceContainer)] border-t border-[var(--md3-outlineVariant)]',
                    'pb-safe',
                    className
                )}
                {...props}
            />
        );
    }
);
Md3NavigationBar.displayName = 'Md3NavigationBar';

export interface Md3NavigationBarItemProps extends HTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    icon: React.ReactNode;
    label: string;
}

const Md3NavigationBarItem = forwardRef<HTMLButtonElement, Md3NavigationBarItemProps>(
    ({ className, active, icon, label, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'flex flex-col items-center justify-center gap-0.5 h-14 min-w-[64px] px-3 rounded-2xl transition-colors',
                    active
                        ? 'text-[var(--md3-onSurface)]'
                        : 'text-[var(--md3-onSurfaceVariant)] hover:text-[var(--md3-onSurface)]',
                    className
                )}
                {...props}
            >
                <span
                    className={cn(
                        'flex items-center justify-center h-8 w-16 rounded-2xl transition-colors',
                        active &&
                            'bg-[var(--md3-secondaryContainer)] text-[var(--md3-onSecondaryContainer)]'
                    )}
                >
                    {icon}
                </span>
                <span className='text-xs font-medium tracking-[0.5px] leading-4'>{label}</span>
            </button>
        );
    }
);
Md3NavigationBarItem.displayName = 'Md3NavigationBarItem';

export { Md3NavigationBar, Md3NavigationBarItem };
