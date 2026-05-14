import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface Md3ListItemProps extends HTMLAttributes<HTMLDivElement> {
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    overline?: string;
    headline: string;
    supporting?: string;
}

const Md3ListItem = forwardRef<HTMLDivElement, Md3ListItemProps>(
    ({ className, leading, trailing, overline, headline, supporting, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'flex items-center gap-4 px-4 py-3 min-h-[56px] rounded-none',
                    'text-(--md3-onSurface) hover:bg-(--md3-onSurface)/[0.04] transition-colors cursor-pointer',
                    className
                )}
                {...props}
            >
                {leading && (
                    <span className='flex items-center justify-center w-10 h-10 text-(--md3-onSurfaceVariant)'>
                        {leading}
                    </span>
                )}
                <div className='flex-1 min-w-0 flex flex-col justify-center'>
                    {overline && (
                        <span className='text-xs font-medium tracking-[0.5px] leading-4 text-(--md3-onSurfaceVariant)'>
                            {overline}
                        </span>
                    )}
                    <span className='text-base font-normal leading-6 tracking-[0.5px] truncate'>
                        {headline}
                    </span>
                    {supporting && (
                        <span className='text-sm leading-5 tracking-[0.25px] text-(--md3-onSurfaceVariant) truncate'>
                            {supporting}
                        </span>
                    )}
                </div>
                {trailing && (
                    <span className='flex items-center justify-center text-(--md3-onSurfaceVariant)'>
                        {trailing}
                    </span>
                )}
            </div>
        );
    }
);
Md3ListItem.displayName = 'Md3ListItem';

export { Md3ListItem };
