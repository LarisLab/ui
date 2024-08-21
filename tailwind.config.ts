import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {},
    plugins: [require('tailwindcss-animate'), require('./plugin.mjs')],
} satisfies Config
