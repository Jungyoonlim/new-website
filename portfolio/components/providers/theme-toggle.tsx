'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/providers/theme-provider'

export function ThemeToggle() {
    const { theme, toggleTheme, themes } = useTheme()

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            style={{
                backgroundColor: `rgb(var(--primary))`,
                color: `rgb(var(--background))`
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="w-6 h-6 rounded-full bg-muted" />
        </motion.button>
    )
}