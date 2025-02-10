export type Theme = 'wb' | 'pg'

export const themes = { 
    wb: { 
        '--background': '255 255 255', 
        '--text': '0 0 0',
        '--muted': '209 213 219',
    },
    pg: { 
        '--background': '255 211 206',
        '--text': '59 59 59',
        '--muted': '251 297 232',
    }
} as const 
