import type * as React from 'react';

import { X } from 'lucide-react';
import { Dialog as DialogPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

function Md3Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
    return <DialogPrimitive.Root data-slot='md3-dialog' {...props} />;
}

function Md3DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
    return <DialogPrimitive.Trigger data-slot='md3-dialog-trigger' {...props} />;
}

function Md3DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
    return <DialogPrimitive.Portal data-slot='md3-dialog-portal' {...props} />;
}

function Md3DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
    return <DialogPrimitive.Close data-slot='md3-dialog-close' {...props} />;
}

function Md3DialogOverlay({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
    return (
        <DialogPrimitive.Overlay
            data-slot='md3-dialog-overlay'
            className={cn('fixed inset-0 z-50 bg-(--md3-scrim)/40', className)}
            {...props}
        />
    );
}

function Md3DialogContent({
    className,
    children,
    showCloseButton = true,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}) {
    return (
        <Md3DialogPortal>
            <Md3DialogOverlay />
            <DialogPrimitive.Content
                data-slot='md3-dialog-content'
                className={cn(
                    'fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-32px)] max-w-[560px]',
                    'gap-6 rounded-[28px]',
                    'bg-(--md3-surfaceContainerHigh) p-6 text-(--md3-onSurface) shadow-2xl outline-none',
                    className
                )}
                {...props}
            >
                {children}
                {showCloseButton && (
                    <DialogPrimitive.Close
                        data-slot='md3-dialog-close'
                        className={cn(
                            'absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full',
                            'text-(--md3-onSurfaceVariant) transition-colors',
                            'hover:bg-(--md3-onSurface)/[0.08] focus-visible:outline-none',
                            'focus-visible:ring-2 focus-visible:ring-(--md3-primary)'
                        )}
                    >
                        <X className='h-5 w-5' />
                        <span className='sr-only'>Close</span>
                    </DialogPrimitive.Close>
                )}
            </DialogPrimitive.Content>
        </Md3DialogPortal>
    );
}

function Md3DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot='md3-dialog-header'
            className={cn('flex flex-col gap-2 pr-10', className)}
            {...props}
        />
    );
}

function Md3DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot='md3-dialog-footer'
            className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
            {...props}
        />
    );
}

function Md3DialogTitle({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
    return (
        <DialogPrimitive.Title
            data-slot='md3-dialog-title'
            className={cn(
                'text-2xl font-normal leading-8 tracking-[0px] text-(--md3-onSurface)',
                className
            )}
            {...props}
        />
    );
}

function Md3DialogDescription({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
    return (
        <DialogPrimitive.Description
            data-slot='md3-dialog-description'
            className={cn(
                'text-sm leading-5 tracking-[0.25px] text-(--md3-onSurfaceVariant)',
                className
            )}
            {...props}
        />
    );
}

export {
    Md3Dialog,
    Md3DialogClose,
    Md3DialogContent,
    Md3DialogDescription,
    Md3DialogFooter,
    Md3DialogHeader,
    Md3DialogOverlay,
    Md3DialogPortal,
    Md3DialogTitle,
    Md3DialogTrigger,
};
