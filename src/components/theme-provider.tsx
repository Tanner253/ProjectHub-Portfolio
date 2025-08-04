'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'

interface Props {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
} 