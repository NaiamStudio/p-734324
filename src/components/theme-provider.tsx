"use client"

import * as React from "react"
import { createContext, useContext } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

type ThemeProviderState = {
  theme: string | undefined
  setTheme: (theme: string) => void
}

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: undefined,
  setTheme: () => null,
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}