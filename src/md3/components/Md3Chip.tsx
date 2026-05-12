import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const md3ChipVariants = cva(
  'inline-flex items-center justify-center gap-1.5 h-8 px-3 text-sm font-medium tracking-wide rounded-lg border cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md3-primary)] disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        assist:
          'border border-[var(--md3-outline)] text-[var(--md3-onSurfaceVariant)] bg-transparent hover:bg-[var(--md3-primary)]/5 hover:border-[var(--md3-outline)]',
        filter:
          'border border-[var(--md3-surfaceVariant)] text-[var(--md3-onSurfaceVariant)] bg-[var(--md3-surfaceVariant)] hover:bg-[var(--md3-secondaryContainer)] hover:text-[var(--md3-onSecondaryContainer)]',
        input:
          'border border-[var(--md3-outline)] text-[var(--md3-onSurfaceVariant)] bg-transparent hover:bg-[var(--md3-primary)]/5',
        suggestion:
          'border border-transparent text-[var(--md3-onSurfaceVariant)] bg-transparent hover:bg-[var(--md3-primary)]/5 hover:text-[var(--md3-onSurface)]',
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
        class:
          'bg-[var(--md3-secondaryContainer)] text-[var(--md3-onSecondaryContainer)] border-[var(--md3-secondaryContainer)]',
      },
    ],
    defaultVariants: {
      variant: 'assist',
      active: false,
    },
  },
)

export interface Md3ChipProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof md3ChipVariants> {
  active?: boolean
}

const Md3Chip = forwardRef<HTMLButtonElement, Md3ChipProps>(
  ({ className, variant, active, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(md3ChipVariants({ variant, active }), className)}
        {...props}
      />
    )
  },
)
Md3Chip.displayName = 'Md3Chip'

export { Md3Chip, md3ChipVariants }
