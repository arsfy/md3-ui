import { cva, type VariantProps } from 'class-variance-authority';
import {
    createContext,
    forwardRef,
    type HTMLAttributes,
    type MutableRefObject,
    type ReactNode,
    type Ref,
    useContext,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';

import { cn } from '@/lib/utils';

function composeRefs<T>(...refs: Array<Ref<T> | undefined>) {
    return (node: T | null) => {
        for (const ref of refs) {
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref) {
                (ref as MutableRefObject<T | null>).current = node;
            }
        }
    };
}

// ── Root ──────────────────────────────────────────────────────────

export interface Md3TabsProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    onValueChange: (value: string) => void;
}

const Md3Tabs = forwardRef<HTMLDivElement, Md3TabsProps>(
    ({ className, value, onValueChange, children, ...props }, ref) => {
        return (
            <div ref={ref} data-value={value} className={cn('flex flex-col', className)} {...props}>
                {children}
            </div>
        );
    }
);
Md3Tabs.displayName = 'Md3Tabs';

// ── List ──────────────────────────────────────────────────────────

export interface Md3TabsListProps extends HTMLAttributes<HTMLDivElement> {}

const Md3TabsList = forwardRef<HTMLDivElement, Md3TabsListProps>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            role='tablist'
            className={cn(
                'relative flex items-center border-b border-(--md3-outlineVariant)',
                className
            )}
            {...props}
        />
    );
});
Md3TabsList.displayName = 'Md3TabsList';

// ── Trigger ───────────────────────────────────────────────────────

const md3TabsTriggerVariants = cva(
    'relative inline-flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-medium tracking-[0.1px] whitespace-nowrap select-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--md3-primary) disabled:pointer-events-none disabled:opacity-40 cursor-pointer',
    {
        variants: {
            active: {
                false: 'text-(--md3-onSurfaceVariant) hover:text-(--md3-onSurface)',
                true: 'text-(--md3-primary)',
            },
        },
        defaultVariants: {
            active: false,
        },
    }
);

export interface Md3TabsTriggerProps
    extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'>,
        VariantProps<typeof md3TabsTriggerVariants> {
    value: string;
    icon?: ReactNode;
}

const Md3TabsTrigger = forwardRef<HTMLButtonElement, Md3TabsTriggerProps>(
    ({ className, value, icon, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                role='tab'
                className={cn(md3TabsTriggerVariants({}), className)}
                {...props}
            >
                {icon}
                {children}
            </button>
        );
    }
);
Md3TabsTrigger.displayName = 'Md3TabsTrigger';

// ── Content ───────────────────────────────────────────────────────

export interface Md3TabsContentProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
}

const Md3TabsContent = forwardRef<HTMLDivElement, Md3TabsContentProps>(
    ({ className, value, ...props }, ref) => {
        return (
            <div
                ref={ref}
                role='tabpanel'
                className={cn('flex-1 outline-none', className)}
                {...props}
            />
        );
    }
);
Md3TabsContent.displayName = 'Md3TabsContent';

// ── Compound component with context ───────────────────────────────

interface Md3TabsContextType {
    value: string;
    onValueChange: (value: string) => void;
}

const Md3TabsContext = createContext<Md3TabsContextType | undefined>(undefined);

function useMd3Tabs() {
    const ctx = useContext(Md3TabsContext);
    if (!ctx) throw new Error('Md3Tabs compound components must be used within Md3TabsRoot');
    return ctx;
}

export interface Md3TabsRootProps extends HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}

const Md3TabsRoot = forwardRef<HTMLDivElement, Md3TabsRootProps>(
    (
        { defaultValue, value: controlledValue, onValueChange, className, children, ...props },
        ref
    ) => {
        const [uncontrolled, setUncontrolled] = useState(defaultValue ?? '');
        const isControlled = controlledValue !== undefined;
        const currentValue = isControlled ? controlledValue : uncontrolled;

        const handleChange = (val: string) => {
            if (!isControlled) setUncontrolled(val);
            onValueChange?.(val);
        };

        return (
            <Md3TabsContext.Provider value={{ value: currentValue, onValueChange: handleChange }}>
                <div ref={ref} className={cn('flex flex-col', className)} {...props}>
                    {children}
                </div>
            </Md3TabsContext.Provider>
        );
    }
);
Md3TabsRoot.displayName = 'Md3TabsRoot';

// Smart list with indicator
export interface Md3TabsListSmartProps extends HTMLAttributes<HTMLDivElement> {}

const Md3TabsListSmart = forwardRef<HTMLDivElement, Md3TabsListSmartProps>(
    ({ className, children, ...props }, ref) => {
        useMd3Tabs();
        const listRef = useRef<HTMLDivElement>(null);
        const setRefs = composeRefs(listRef, ref);
        const [indicator, setIndicator] = useState({
            left: 0,
            width: 0,
            ready: false,
        });

        useLayoutEffect(() => {
            const list = listRef.current;
            if (!list) return;

            let frame = 0;

            const updateIndicator = () => {
                cancelAnimationFrame(frame);
                frame = requestAnimationFrame(() => {
                    const activeTab =
                        list.querySelector<HTMLButtonElement>('[data-state="active"]');

                    if (!activeTab) {
                        setIndicator((current) => ({ ...current, ready: false }));
                        return;
                    }

                    const listRect = list.getBoundingClientRect();
                    const activeRect = activeTab.getBoundingClientRect();

                    setIndicator((current) => {
                        const next = {
                            left: activeRect.left - listRect.left + list.scrollLeft,
                            width: activeRect.width,
                            ready: true,
                        };

                        if (
                            current.ready === next.ready &&
                            current.left === next.left &&
                            current.width === next.width
                        ) {
                            return current;
                        }

                        return next;
                    });
                });
            };

            updateIndicator();

            const resizeObserver = new ResizeObserver(updateIndicator);
            resizeObserver.observe(list);

            const activeTab = list.querySelector<HTMLButtonElement>('[data-state="active"]');
            if (activeTab) resizeObserver.observe(activeTab);

            return () => {
                cancelAnimationFrame(frame);
                resizeObserver.disconnect();
            };
        });

        return (
            <div
                ref={setRefs}
                role='tablist'
                className={cn(
                    'relative flex items-center overflow-hidden border-b border-(--md3-outlineVariant)',
                    className
                )}
                {...props}
            >
                {children}
                <span
                    aria-hidden='true'
                    className={cn(
                        'pointer-events-none absolute bottom-0 h-0.75 rounded-t-full bg-(--md3-primary) transition-[transform,width,opacity] duration-300 ease-out',
                        indicator.ready ? 'opacity-100' : 'opacity-0'
                    )}
                    style={{
                        width: indicator.width,
                        transform: `translateX(${indicator.left}px)`,
                    }}
                />
            </div>
        );
    }
);
Md3TabsListSmart.displayName = 'Md3TabsListSmart';

export interface Md3TabsTriggerSmartProps
    extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
    value: string;
    icon?: ReactNode;
}

const Md3TabsTriggerSmart = forwardRef<HTMLButtonElement, Md3TabsTriggerSmartProps>(
    ({ className, value, icon, children, ...props }, ref) => {
        const { value: selectedValue, onValueChange } = useMd3Tabs();
        const active = selectedValue === value;

        return (
            <button
                ref={ref}
                role='tab'
                aria-selected={active}
                data-state={active ? 'active' : 'inactive'}
                onClick={() => onValueChange(value)}
                className={cn(
                    'relative inline-flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-medium tracking-[0.1px] whitespace-nowrap select-none transition-[color,background-color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--md3-primary) disabled:pointer-events-none disabled:opacity-40 cursor-pointer active:scale-[0.98]',
                    active
                        ? 'text-(--md3-primary) [&>svg]:scale-110'
                        : 'text-(--md3-onSurfaceVariant) hover:text-(--md3-onSurface)',
                    '[&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:ease-out',
                    className
                )}
                {...props}
            >
                {icon}
                {children}
            </button>
        );
    }
);
Md3TabsTriggerSmart.displayName = 'Md3TabsTriggerSmart';

export interface Md3TabsContentSmartProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
}

const Md3TabsContentSmart = forwardRef<HTMLDivElement, Md3TabsContentSmartProps>(
    ({ className, value, children, ...props }, ref) => {
        const { value: selectedValue } = useMd3Tabs();
        const active = selectedValue === value;

        if (!active) return null;

        return (
            <div
                ref={ref}
                role='tabpanel'
                className={cn(
                    'flex-1 animate-in fade-in-0 slide-in-from-bottom-1 duration-200 outline-none',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Md3TabsContentSmart.displayName = 'Md3TabsContentSmart';

export {
    Md3Tabs,
    Md3TabsContent,
    Md3TabsContentSmart,
    Md3TabsList,
    Md3TabsListSmart,
    Md3TabsRoot,
    Md3TabsTrigger,
    Md3TabsTriggerSmart,
    md3TabsTriggerVariants,
};
