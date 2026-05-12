import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

interface Md3ThemeContextType {
  mode: ThemeMode
  resolvedMode: 'light' | 'dark'
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

const Md3ThemeContext = createContext<Md3ThemeContextType | undefined>(undefined)

export function useMd3Theme() {
  const ctx = useContext(Md3ThemeContext)
  if (!ctx) throw new Error('useMd3Theme must be used within Md3ThemeProvider')
  return ctx
}

/** Resolve a stored mode string to the actual light/dark value. */
function resolveMode(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return mode
}

/** Remove any stale inline --md3-* custom properties that may have been
 *  set by previous versions of the theme provider or accent-color pickers. */
function cleanupMd3InlineStyles() {
  const root = document.documentElement
  const styles = root.style
  for (let i = styles.length - 1; i >= 0; i--) {
    const prop = styles.item(i)
    if (prop.startsWith('--md3-')) {
      styles.removeProperty(prop)
    }
  }
}

/** Synchronously add or remove the .dark class on <html>. */
function applyDarkClass(isDark: boolean) {
  const root = document.documentElement
  if (isDark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export function Md3ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const stored = (localStorage.getItem('md3-theme') as ThemeMode) || 'system'
    // Synchronise the class immediately so the very first paint is correct.
    const resolved = resolveMode(stored)
    applyDarkClass(resolved === 'dark')
    cleanupMd3InlineStyles()
    return stored
  })

  const resolvedMode = resolveMode(mode)

  // Keep the DOM class in sync with the resolved mode.
  useLayoutEffect(() => {
    localStorage.setItem('md3-theme', mode)
    applyDarkClass(resolvedMode === 'dark')
  }, [mode, resolvedMode])

  // When in "system" mode, listen for OS-level preference changes.
  useLayoutEffect(() => {
    if (mode !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      applyDarkClass(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mode])

  const setMode = (m: ThemeMode) => setModeState(m)

  /** Toggle between the two visible states (light / dark).
   *  If the current mode is "system" we first resolve it so the user
   *  always sees an immediate visual change. */
  const toggleMode = () => {
    const currentlyDark = document.documentElement.classList.contains('dark')
    setModeState(currentlyDark ? 'light' : 'dark')
  }

  return (
    <Md3ThemeContext.Provider value={{ mode, resolvedMode, setMode, toggleMode }}>
      {children}
    </Md3ThemeContext.Provider>
  )
}
