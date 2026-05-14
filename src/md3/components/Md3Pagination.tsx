import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { Md3IconButton } from './Md3IconButton';
import { cn } from '@/lib/utils';

export interface Md3PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    showFirstLast?: boolean;
    className?: string;
}

interface PageItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

function PageItem({ className, active, children, ...props }: PageItemProps) {
    return (
        <button
            className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors select-none',
                active
                    ? 'bg-(--md3-primary) text-(--md3-onPrimary)'
                    : 'text-(--md3-onSurfaceVariant) hover:bg-(--md3-primary)/5',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--md3-primary)',
                'disabled:pointer-events-none disabled:opacity-40',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

function range(start: number, end: number) {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
}

function usePagination({
    totalPages,
    page,
    siblingCount = 1,
}: {
    totalPages: number;
    page: number;
    siblingCount?: number;
}) {
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPages) {
        return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(page - siblingCount, 1);
    const rightSiblingIndex = Math.min(page + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = range(1, leftItemCount);
        return [...leftRange, -1, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = range(totalPages - rightItemCount + 1, totalPages);
        return [1, -1, ...rightRange];
    }

    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [1, -1, ...middleRange, -1, totalPages];
}

const Md3Pagination = forwardRef<HTMLDivElement, Md3PaginationProps>(
    (
        { page, totalPages, onPageChange, siblingCount = 1, showFirstLast = true, className },
        ref
    ) => {
        const items = usePagination({ totalPages, page, siblingCount });

        const canGoBack = page > 1;
        const canGoForward = page < totalPages;

        return (
            <div ref={ref} className={cn('inline-flex items-center gap-1', className)}>
                {showFirstLast && (
                    <Md3IconButton
                        variant='standard'
                        size='small'
                        disabled={!canGoBack}
                        onClick={() => onPageChange(1)}
                        aria-label='First page'
                    >
                        <ChevronsLeft className='w-4 h-4' />
                    </Md3IconButton>
                )}

                <Md3IconButton
                    variant='standard'
                    size='small'
                    disabled={!canGoBack}
                    onClick={() => onPageChange(page - 1)}
                    aria-label='Previous page'
                >
                    <ChevronLeft className='w-4 h-4' />
                </Md3IconButton>

                {items.map((item) => {
                    if (item === -1) {
                        return (
                            <span
                                key={`ellipsis-more`}
                                className='inline-flex h-10 w-10 items-center justify-center text-sm text-(--md3-onSurfaceVariant) select-none'
                            >
                                …
                            </span>
                        );
                    }

                    return (
                        <PageItem
                            key={item}
                            active={item === page}
                            onClick={() => onPageChange(item)}
                            aria-label={`Page ${item}`}
                            aria-current={item === page ? 'page' : undefined}
                        >
                            {item}
                        </PageItem>
                    );
                })}

                <Md3IconButton
                    variant='standard'
                    size='small'
                    disabled={!canGoForward}
                    onClick={() => onPageChange(page + 1)}
                    aria-label='Next page'
                >
                    <ChevronRight className='w-4 h-4' />
                </Md3IconButton>

                {showFirstLast && (
                    <Md3IconButton
                        variant='standard'
                        size='small'
                        disabled={!canGoForward}
                        onClick={() => onPageChange(totalPages)}
                        aria-label='Last page'
                    >
                        <ChevronsRight className='w-4 h-4' />
                    </Md3IconButton>
                )}
            </div>
        );
    }
);

Md3Pagination.displayName = 'Md3Pagination';

export { Md3Pagination };
