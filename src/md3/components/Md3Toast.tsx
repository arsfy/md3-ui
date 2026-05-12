import {
  CircleCheck,
  Info,
  Loader2,
  OctagonX,
  TriangleAlert,
} from 'lucide-react'
import type { CSSProperties } from 'react'
import { toast, Toaster as Sonner, type ToasterProps } from 'sonner'
import { useMd3Theme } from '../Md3ThemeProvider'

function Md3Toaster({ position = 'bottom-center', ...props }: ToasterProps) {
  const { resolvedMode } = useMd3Theme()

  return (
    <Sonner
      theme={resolvedMode}
      position={position}
      icons={{
        success: <CircleCheck className="h-5 w-5" />,
        info: <Info className="h-5 w-5" />,
        warning: <TriangleAlert className="h-5 w-5" />,
        error: <OctagonX className="h-5 w-5" />,
        loading: <Loader2 className="h-5 w-5 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            'group bg-[var(--md3-inverseSurface)] text-[var(--md3-inverseOnSurface)]',
          title: 'text-sm font-medium tracking-[0.1px]',
          description: 'text-sm tracking-[0.25px] opacity-80',
          actionButton:
            'rounded-full bg-[var(--md3-inversePrimary)] px-4 py-2 text-sm font-medium text-[var(--md3-onPrimaryContainer)]',
          cancelButton:
            'rounded-full bg-transparent px-4 py-2 text-sm font-medium text-[var(--md3-inversePrimary)]',
          success: 'text-[var(--md3-primary)]',
          info: 'text-[var(--md3-primary)]',
          warning: 'text-[var(--md3-tertiary)]',
          error: 'text-[var(--md3-error)]',
        },
      }}
      style={
        {
          '--border-radius': '4px',
          '--normal-bg': 'var(--md3-inverseSurface)',
          '--normal-text': 'var(--md3-inverseOnSurface)',
          '--normal-border': 'var(--md3-outlineVariant)',
          '--success-bg': 'var(--md3-inverseSurface)',
          '--success-text': 'var(--md3-inverseOnSurface)',
          '--success-border': 'var(--md3-outlineVariant)',
          '--error-bg': 'var(--md3-inverseSurface)',
          '--error-text': 'var(--md3-inverseOnSurface)',
          '--error-border': 'var(--md3-outlineVariant)',
        } as CSSProperties
      }
      {...props}
    />
  )
}

const md3Toast = toast

export { Md3Toaster, md3Toast }
