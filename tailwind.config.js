/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        neutral: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          700: '#334155',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 6px rgba(0,0,0,0.05), 0 10px 30px rgba(0,0,0,0.12)',
        'btn':        '0 1px 3px rgba(37,99,235,0.25)',
        'btn-hover':  '0 4px 12px rgba(37,99,235,0.4)',
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(circle at 25% 50%, rgba(219,234,254,0.7) 0%, rgba(248,250,252,0) 55%), radial-gradient(circle at 80% 15%, rgba(191,219,254,0.5) 0%, rgba(248,250,252,0) 50%)",
        'cta-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
