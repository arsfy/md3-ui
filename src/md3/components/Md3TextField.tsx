import {
    forwardRef,
    type InputHTMLAttributes,
    type ReactNode,
    useEffect,
    useId,
    useState,
} from 'react';

import { cn } from '@/lib/utils';

export interface Md3TextFieldProps
    extends Omit<InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'size' | 'ref'> {
    variant?: 'filled' | 'outlined';
    label?: string;
    helperText?: string;
    error?: boolean;
    errorText?: string;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    multiline?: boolean;
    rows?: number;
}

const Md3TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Md3TextFieldProps>(
    (
        {
            className,
            variant = 'filled',
            label,
            helperText,
            error,
            errorText,
            leadingIcon,
            trailingIcon,
            multiline,
            rows = 3,
            disabled,
            required,
            id,
            type = 'text',
            onFocus,
            onBlur,
            onChange,
            value,
            defaultValue,
            ...props
        },
        ref
    ) => {
        const generatedId = useId();
        const fieldId = id ?? generatedId;
        const helperId = helperText || errorText ? `${fieldId}-supporting-text` : undefined;
        const [focused, setFocused] = useState(false);
        const [hasValue, setHasValue] = useState(() => {
            if (value !== undefined) return String(value).length > 0;
            if (defaultValue !== undefined) return String(defaultValue).length > 0;
            return false;
        });

        useEffect(() => {
            if (value !== undefined) {
                setHasValue(String(value).length > 0);
            }
        }, [value]);

        const isFloating = focused || hasValue;
        const isError = error || !!errorText;
        const helper = errorText || helperText;

        const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFocused(true);
            onFocus?.(e as React.FocusEvent<HTMLInputElement>);
        };

        const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFocused(false);
            setHasValue(!!e.target.value);
            onBlur?.(e as React.FocusEvent<HTMLInputElement>);
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setHasValue(!!e.target.value);
            onChange?.(e as React.ChangeEvent<HTMLInputElement>);
        };

        const hasLeading = !!leadingIcon;
        const hasTrailing = !!trailingIcon;

        const fieldClass = cn(
            'relative flex w-full items-stretch transition-[background-color,box-shadow] duration-150 ease-out',
            variant === 'filled' && [
                'min-h-14 overflow-hidden rounded-t bg-(--md3-surfaceContainerHighest)',
                !disabled && !isError && 'hover:bg-(--md3-onSurface)/[0.04]',
            ],
            variant === 'outlined' && [
                'min-h-14 rounded bg-(--md3-surfaceContainerLowest) shadow-[inset_0_0_0_1px_var(--md3-outline)]',
                !disabled && !isError && 'hover:shadow-[inset_0_0_0_1px_var(--md3-onSurface)]',
                focused &&
                    !isError &&
                    'shadow-[inset_0_0_0_2px_var(--md3-primary)] hover:shadow-[inset_0_0_0_2px_var(--md3-primary)]',
                isError && 'shadow-[inset_0_0_0_2px_var(--md3-error)]',
            ],
            disabled && 'opacity-40'
        );

        const inputClass = cn(
            'relative z-[1] min-h-14 w-full bg-transparent text-base leading-6 text-(--md3-onSurface) caret-(--md3-primary)',
            'placeholder:text-transparent focus:placeholder:text-(--md3-onSurfaceVariant) focus:outline-none',
            'disabled:cursor-not-allowed disabled:text-(--md3-onSurface)/40',
            variant === 'filled' && label && 'pt-6 pb-2',
            variant === 'filled' && !label && 'py-4',
            variant === 'outlined' && label && !multiline && 'py-4',
            variant === 'outlined' && label && multiline && 'pt-5 pb-3',
            variant === 'outlined' && !label && 'py-4',
            multiline && label && 'pt-5 pb-3',
            multiline && !label && 'pt-4 pb-3',
            multiline && 'leading-6 align-top'
        );

        const inputWrapClass = cn(
            'relative flex min-w-0 flex-1',
            hasLeading ? 'pl-0' : 'pl-4',
            hasTrailing ? 'pr-0' : 'pr-4'
        );

        const labelClass = cn(
            'pointer-events-none absolute z-[2] origin-left whitespace-nowrap leading-5 transition-[color,transform,top] duration-150 ease-out',
            hasLeading ? 'left-12' : 'left-4',
            hasTrailing && 'max-w-[calc(100%-5rem)]',
            !hasTrailing && 'max-w-[calc(100%-2rem)]',
            'truncate',
            variant === 'filled' && [
                isFloating
                    ? 'top-2 translate-y-0 scale-[0.75]'
                    : multiline
                      ? 'top-5 translate-y-0 scale-100'
                      : 'top-1/2 -translate-y-1/2 scale-100',
            ],
            variant === 'outlined' && [
                isFloating
                    ? cn(
                          'top-0 -translate-y-1/2 scale-[0.75] bg-(--md3-surfaceContainerLowest) px-1',
                          hasLeading ? 'left-11' : 'left-3'
                      )
                    : multiline
                      ? 'top-5 translate-y-0 scale-100'
                      : 'top-1/2 -translate-y-1/2 scale-100',
            ],
            !isFloating && 'text-(--md3-onSurfaceVariant)',
            isFloating && !isError && focused && 'text-(--md3-primary)',
            isFloating && !focused && 'text-(--md3-onSurfaceVariant)',
            isError && 'text-(--md3-error)',
            disabled && 'text-(--md3-onSurface)/40'
        );

        return (
            <div className={cn('w-full', className)}>
                <div className={fieldClass}>
                    {/* Filled bottom line indicator */}
                    {variant === 'filled' && (
                        <div
                            className={cn(
                                'absolute bottom-0 left-0 right-0 h-0.5 origin-bottom scale-y-50 transition-[background-color,transform] duration-150',
                                !disabled && !isError && 'bg-(--md3-onSurfaceVariant)/40',
                                !disabled &&
                                    !isError &&
                                    focused &&
                                    'scale-y-100 bg-(--md3-primary)',
                                isError && 'scale-y-100 bg-(--md3-error)'
                            )}
                        />
                    )}

                    {/* Floating label */}
                    {label && (
                        <label htmlFor={fieldId} className={labelClass}>
                            {label}
                            {required && <span className='ml-0.5 text-(--md3-error)'>*</span>}
                        </label>
                    )}

                    {/* Leading icon */}
                    {leadingIcon && (
                        <div className='relative z-1 flex w-12 shrink-0 items-center justify-center text-(--md3-onSurfaceVariant)'>
                            {leadingIcon}
                        </div>
                    )}

                    {/* Input / Textarea */}
                    <div className={inputWrapClass}>
                        {multiline ? (
                            <textarea
                                {...props}
                                id={fieldId}
                                ref={ref as React.Ref<HTMLTextAreaElement>}
                                disabled={disabled}
                                required={required}
                                aria-describedby={helperId}
                                aria-invalid={isError}
                                value={value}
                                defaultValue={defaultValue}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                rows={rows}
                                className={cn(inputClass, 'min-h-24 resize-y')}
                            />
                        ) : (
                            <input
                                {...props}
                                id={fieldId}
                                ref={ref as React.Ref<HTMLInputElement>}
                                type={type}
                                disabled={disabled}
                                required={required}
                                aria-describedby={helperId}
                                aria-invalid={isError}
                                value={value}
                                defaultValue={defaultValue}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className={inputClass}
                            />
                        )}
                    </div>

                    {/* Trailing icon */}
                    {trailingIcon && (
                        <div className='relative z-1 flex w-12 shrink-0 items-center justify-center text-(--md3-onSurfaceVariant)'>
                            {trailingIcon}
                        </div>
                    )}
                </div>

                {/* Helper / Error text */}
                {helper && (
                    <p
                        id={helperId}
                        className={cn(
                            'mt-1 px-4 text-xs tracking-[0.4px]',
                            isError
                                ? 'text-(--md3-error)'
                                : 'text-(--md3-onSurfaceVariant)'
                        )}
                    >
                        {helper}
                    </p>
                )}
            </div>
        );
    }
);

Md3TextField.displayName = 'Md3TextField';

export { Md3TextField };
