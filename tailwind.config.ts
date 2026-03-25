import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F5F0E8',
        'warm-wood': '#8B6F47',
        jade: '#4A7C59',
        'soft-gold': '#C9A84C',
        charcoal: '#2C2C2C',
        cream: '#FDFAF5',
        amber: '#D4863C',
        muted: '#9B9186',
        teak: {
          DEFAULT: '#A0714F',
          dark: '#6B4226',
          light: '#C4956A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.25, 0.4, 0.25, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.25, 0.4, 0.25, 1) both',
        'fade-up-delay': 'fade-up 0.8s 0.2s cubic-bezier(0.25, 0.4, 0.25, 1) both',
        'fade-up-delay-2': 'fade-up 0.8s 0.4s cubic-bezier(0.25, 0.4, 0.25, 1) both',
        'fade-in': 'fade-in 1.2s ease both',
      },
    },
  },
  plugins: [],
}

export default config
