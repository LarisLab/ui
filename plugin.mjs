import plugin from 'tailwindcss/plugin'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default plugin(
    ({ addBase }) => {
        addBase({
            ':root': {
                '--background': '0 0% 100%',
                '--foreground': '222.2 84% 4.9%',
                '--card': '0 0% 100%',
                '--card-foreground': '222.2 84% 4.9%',
                '--popover': '0 0% 100%',
                '--popover-foreground': '222.2 84% 4.9%',
                '--primary': '221.2 83.2% 53.3%',
                '--primary-foreground': '210 40% 98%',
                '--secondary': '210 40% 96.1%',
                '--secondary-foreground': '222.2 47.4% 11.2%',
                '--muted': '210 40% 96.1%',
                '--muted-foreground': '215.4 16.3% 46.9%',
                '--accent': '210 40% 96.1%',
                '--accent-foreground': '222.2 47.4% 11.2%',
                '--destructive': '0 84.2% 60.2%',
                '--destructive-foreground': '210 40% 98%',
                '--border': '214.3 31.8% 91.4%',
                '--input': '214.3 31.8% 91.4%',
                '--ring': '221.2 83.2% 53.3%',
                '--radius': '0.5rem',
                '--chart-1': '12 76% 61%',
                '--chart-2': '173 58% 39%',
                '--chart-3': '197 37% 24%',
                '--chart-4': '43 74% 66%',
                '--chart-5': '27 87% 67%',
            },
            '.dark': {
                '--background': '240 10% 3.9%',
                '--foreground': '0 0% 98%',
                '--card': '240 10% 3.9%',
                '--card-foreground': '0 0% 98%',
                '--popover': '240 10% 3.9%',
                '--popover-foreground': '0 0% 98%',
                '--primary': '217.2 91.2% 59.8%',
                '--primary-foreground': '222.2 47.4% 11.2%',
                '--secondary': '240 3.7% 15.9%',
                '--secondary-foreground': '0 0% 98%',
                '--muted': '240 3.7% 15.9%',
                '--muted-foreground': '240 5% 64.9%',
                '--accent': '240 3.7% 15.9%',
                '--accent-foreground': '0 0% 98%',
                '--destructive': '0 62.8% 30.6%',
                '--destructive-foreground': '210 40% 98%',
                '--border': '240 3.7% 15.9%',
                '--input': '240 3.7% 15.9%',
                '--ring': '240 4.9% 83.9%',
                '--radius': '0.5rem',
                '--chart-1': '220 70% 50%',
                '--chart-2': '160 60% 45%',
                '--chart-3': '30 80% 55%',
                '--chart-4': '280 65% 60%',
                '--chart-5': '340 75% 55%',
            },
            '*': {
                '@apply border-border': {},
            },
            body: {
                '@apply bg-background text-foreground': {},
                'font-feature-settings': '"rlig" 1, "calt" 1',
            },
        })
    },
    {
        darkMode: ['class'],
        content: ['node_modules/@larislab/ui/dist/**/*.js'],
        theme: {
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1400px',
                },
            },
            extend: {
                colors: {
                    border: 'hsl(var(--border))',
                    input: 'hsl(var(--input))',
                    ring: 'hsl(var(--ring))',
                    background: 'hsl(var(--background))',
                    foreground: 'hsl(var(--foreground))',
                    primary: {
                        DEFAULT: 'hsl(var(--primary))',
                        foreground: 'hsl(var(--primary-foreground))',
                    },
                    secondary: {
                        DEFAULT: 'hsl(var(--secondary))',
                        foreground: 'hsl(var(--secondary-foreground))',
                    },
                    destructive: {
                        DEFAULT: 'hsl(var(--destructive))',
                        foreground: 'hsl(var(--destructive-foreground))',
                    },
                    muted: {
                        DEFAULT: 'hsl(var(--muted))',
                        foreground: 'hsl(var(--muted-foreground))',
                    },
                    accent: {
                        DEFAULT: 'hsl(var(--accent))',
                        foreground: 'hsl(var(--accent-foreground))',
                    },
                    popover: {
                        DEFAULT: 'hsl(var(--popover))',
                        foreground: 'hsl(var(--popover-foreground))',
                    },
                    card: {
                        DEFAULT: 'hsl(var(--card))',
                        foreground: 'hsl(var(--card-foreground))',
                    },
                },
                borderRadius: {
                    lg: 'var(--radius)',
                    md: 'calc(var(--radius) - 2px)',
                    sm: 'calc(var(--radius) - 4px)',
                },
                keyframes: {
                    'accordion-down': {
                        from: { height: '0' },
                        to: { height: 'var(--radix-accordion-content-height)' },
                    },
                    'accordion-up': {
                        from: { height: 'var(--radix-accordion-content-height)' },
                        to: { height: '0' },
                    },
                },
                animation: {
                    'accordion-down': 'accordion-down 0.2s ease-out',
                    'accordion-up': 'accordion-up 0.2s ease-out',
                },
                fontFamily: {
                    sans: ['var(--font-sans, Inter Variable, Inter)', ...fontFamily.sans],
                },
            },
        },
    },
)