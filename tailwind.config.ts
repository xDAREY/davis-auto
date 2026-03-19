import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
      colors: {
        background: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)',
        accent: {
          gold: 'var(--accent-gold)',
          'gold-light': 'var(--accent-gold-light)',
        },
        text: {
          primary: 'var(--text-primary)',
          muted: 'var(--text-muted)',
          light: 'var(--text-light)',
        },
      },
      fontSize: {
        'display-xl': 'clamp(2.5rem, 8vw, 4.5rem)',
        'display-lg': 'clamp(2rem, 6vw, 3.5rem)',
        'display-md': 'clamp(1.5rem, 4vw, 2.5rem)',
        'heading-xl': 'clamp(1.875rem, 3vw, 2.25rem)',
        'heading-lg': 'clamp(1.5rem, 2.5vw, 1.875rem)',
        'heading-md': 'clamp(1.25rem, 2vw, 1.5rem)',
        'body-lg': 'clamp(1rem, 1.2vw, 1.125rem)',
        'body-base': '1rem',
        'body-sm': '0.875rem',
        'body-xs': '0.75rem',
      },
      spacing: {
        gutter: 'clamp(1rem, 5vw, 2rem)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
