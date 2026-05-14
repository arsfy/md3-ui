import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface Md3NavigationRailProps extends HTMLAttributes<HTMLDivElement> {
    header?: React.ReactNode;
}

const Md3NavigationRail = forwardRef<HTMLDivElement, Md3NavigationRailProps>(
    ({ className, header, children, ...props }, ref) => {
        return (
            <nav
                ref={ref}
                className={cn(
                    'fixed left-0 top-0 bottom-0 z-50 flex w-22 flex-col items-center gap-3',
                    'bg-(--md3-surface)',
                    'py-3',
                    className
                )}
                {...props}
            >
                {header && <div className='mb-2'>{header}</div>}
                <div className='flex flex-1 flex-col items-center gap-4 overflow-y-auto w-full px-2'>
                    {children}
                </div>
            </nav>
        );
    }
);
Md3NavigationRail.displayName = 'Md3NavigationRail';

export interface Md3NavigationRailItemProps extends HTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    icon: React.ReactNode;
    label: string;
}

const Md3NavigationRailItem = forwardRef<HTMLButtonElement, Md3NavigationRailItemProps>(
    ({ className, active, icon, label, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'flex flex-col items-center justify-center gap-1 w-14 h-14 rounded-none transition-colors',
                    active
                        ? 'text-(--md3-onSurface)'
                        : 'text-(--md3-onSurfaceVariant) hover:text-(--md3-onSurface)',
                    className
                )}
                {...props}
            >
                <span
                    className={cn(
                        'flex items-center justify-center h-8 w-14 rounded-2xl transition-colors',
                        active && 'bg-(--md3-secondaryContainer) text-(--md3-onSecondaryContainer)'
                    )}
                >
                    {icon}
                </span>
                <span className='text-xs font-medium tracking-[0.5px] leading-4'>{label}</span>
            </button>
        );
    }
);
Md3NavigationRailItem.displayName = 'Md3NavigationRailItem';

export { Md3NavigationRail, Md3NavigationRailItem };
