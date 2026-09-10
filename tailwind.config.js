/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          vermilion: '#E85D42',
          coral: '#F26D50',
          orange: '#FF8A5B',
          amber: '#F4A261',
          gold: '#E9C46A',
          matcha: '#2A9D8F',
          teal: '#264653',
          cream: '#FDFBF7',
          warmgray: '#F5F2EB',
          sand: '#ECE6DA',
          dark: '#1A1D24',
          night: '#12141A',
          // Dark mode surface palette
          'dk-surface': '#1A1D24',
          'dk-surface-2': '#242833',
          'dk-surface-3': '#2E3442',
          'dk-border': '#2E3442',
          'dk-border-2': '#3D4556',
          'dk-text': '#F1EDE4',
          'dk-text-muted': '#A8B0BF',
        },
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'Roboto', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Fredoka', 'Be Vietnam Pro', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'cute': '0 8px 0px 0px rgba(232, 93, 66, 0.15)',
        'cute-dark': '0 8px 0px 0px rgba(0, 0, 0, 0.25)',
        'sticker': '0 6px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'float': '0 20px 40px -15px rgba(232, 93, 66, 0.2)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
