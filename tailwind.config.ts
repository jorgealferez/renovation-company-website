import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          50: '#f0f5fb',
          100: '#dce8f5',
          200: '#b4ceea',
          300: '#7fadd8',
          400: '#4a8bc4',
          500: '#2d6eac',
          600: '#1e5490',
          700: '#1e3a5f',
          800: '#1a2f4a',
          900: '#152539',
        },
        accent: {
          DEFAULT: '#f97316',
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea6c0e',
          700: '#c2570c',
          800: '#9a4412',
          900: '#7c3912',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
