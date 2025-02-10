'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { Theme, themes } from '@/config/theme'

type ThemeContextType = { 
    theme: Theme 
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }){
    const [theme, setTheme] = useState<Theme>(Object.keys(themes)[0] as Theme) 

    useEffect(() => { 
        const savedTheme = localStorage.getItem('theme') as Theme || 'wb'
        setTheme(savedTheme)
        applyTheme(savedTheme)
    }, [])

    const applyTheme = (selectedTheme: Theme) => {
        const themeVariables = themes[selectedTheme]
        Object.entries(themeVariables).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value)
        })
    }

    const toggleTheme = () => { 
        const themeKeys = Object.keys(themes) as Theme[]
        const currentIndex = themeKeys.indexOf(theme)
        const newTheme = themeKeys[(currentIndex + 1) % themeKeys.length]

        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        applyTheme(newTheme)
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useTheme must be used within a ThemeProvider')
    return context
}