export type Theme = 'wb' | 'pg'

export const themes = { 
    wb: { 
        '--background': '#FFFFFF', 
        '--text': '#000000',
    },
    pg: { 
        '--background': 'FFD3CE',
        '--text': '#3B3B3B',
    }
} as const 