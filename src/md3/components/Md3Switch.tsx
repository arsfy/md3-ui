import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface Md3SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const Md3Switch = forwardRef<HTMLInputElement, Md3SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={cn(
          'relative inline-flex h-8 w-[52px] cursor-pointer items-center rounded-full transition-colors',
          'bg-[var(--md3-surfaceContainerHighest)] has-[:checked]:bg-[var(--md3-primary)]',
          'border-2 border-[var(--md3-outline)] has-[:checked]:border-[var(--md3-primary)]',
          'has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-40',
          className,
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <span
          className={cn(
            'absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-[var(--md3-outline)] shadow-sm transition-all',
            'peer-checked:left-[22px] peer-checked:bg-[var(--md3-onPrimary)]',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--md3-primary)]',
          )}
        />
      </label>
    )
  },
)
Md3Switch.displayName = 'Md3Switch'

export { Md3Switch }
