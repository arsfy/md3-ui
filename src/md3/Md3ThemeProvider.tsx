import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { md3Colors, md3DarkColors } from './tokens'

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

function applyColors(colors: Record<string, string>) {
  const root = document.documentElement
  for (const [key, value] of Object.entries(colors)) {
    root.style.setProperty(`--md3-${key}`, value)
  }
}

export function Md3ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    return (localStorage.getItem('md3-theme') as ThemeMode) || 'system'
  })

  const resolvedMode: 'light' | 'dark' =
    mode === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : mode

  useEffect(() => {
    localStorage.setItem('md3-theme', mode)
    applyColors(resolvedMode === 'dark' ? md3DarkColors : md3Colors)
    document.documentElement.classList.toggle('dark', resolvedMode === 'dark')
  }, [mode, resolvedMode])

  useEffect(() => {
    if (mode !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      applyColors(mq.matches ? md3DarkColors : md3Colors)
      document.documentElement.classList.toggle('dark', mq.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mode])

  const setMode = (m: ThemeMode) => setModeState(m)
  const toggleMode = () => {
    setModeState(prev => {
      if (prev === 'light') return 'dark'
      if (prev === 'dark') return 'system'
      return 'light'
    })
  }

  return (
    <Md3ThemeContext.Provider value={{ mode, resolvedMode, setMode, toggleMode }}>
      {children}
    </Md3ThemeContext.Provider>
  )
}
