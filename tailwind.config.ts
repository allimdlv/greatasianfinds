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
        parchment: '#FAF7F2',
        cream: '#F5F0E8',
        clay: '#E8DFD5',
        charcoal: '#2C2825',
        'warm-gray': '#7A736D',
        muted: '#9B9186',
        forest: {
          DEFAULT: '#3D5038',
          light: '#4A6345',
          dark: '#2D3B28',
        },
        teak: {
          DEFAULT: '#A0714F',
          dark: '#6B4226',
          light: '#C4956A',
        },
        'aged-gold': '#B8975A',
        celadon: '#7FA08A',
        lacquer: '#8B3A3A',
        'warm-wood': '#8B6F47',
        jade: '#4A7C59',
        'soft-gold': '#C9A84C',
        amber: '#D4863C',
      },
      fontFamily: {
        display: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
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
        'scroll-line': {
          '0%, 100%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.25, 0.4, 0.25, 1) both',
        'fade-up-delay': 'fade-up 0.8s 0.2s cubic-bezier(0.25, 0.4, 0.25, 1) both',
        'fade-up-delay-2': 'fade-up 0.8s 0.4s cubic-bezier(0.25, 0.4, 0.25, 1) both',
        'fade-in': 'fade-in 1.2s ease both',
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
