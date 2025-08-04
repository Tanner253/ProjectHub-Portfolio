/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Anodized knife gradient colors
        primary: {
          50: '#fdf2f8',   // lightest pink
          100: '#fce7f3',  // light pink
          200: '#fbcfe8',  // soft pink
          300: '#f9a8d4',  // medium pink
          400: '#f472b6',  // bright pink
          500: '#ec4899',  // hot pink
          600: '#db2777',  // deep pink
          700: '#be185d',  // dark pink
          800: '#9d174d',  // darker pink
          900: '#831843',  // darkest pink
        },
        secondary: {
          50: '#fdf4ff',   // lightest purple
          100: '#fae8ff',  // light purple
          200: '#f3e8ff',  // soft purple
          300: '#e9d5ff',  // medium purple
          400: '#d8b4fe',  // bright purple
          500: '#c084fc',  // medium purple
          600: '#a855f7',  // deep purple
          700: '#9333ea',  // dark purple
          800: '#7e22ce',  // darker purple (fixed from brown)
          900: '#581c87',  // darkest purple
        },
        accent: {
          50: '#f0f9ff',   // lightest cyan
          100: '#e0f2fe',  // light cyan
          200: '#bae6fd',  // soft cyan
          300: '#7dd3fc',  // medium cyan
          400: '#38bdf8',  // bright cyan
          500: '#0ea5e9',  // cyan
          600: '#0284c7',  // deep cyan
          700: '#0369a1',  // dark cyan
          800: '#075985',  // darker cyan
          900: '#0c4a6e',  // darkest cyan
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'anodized': 'linear-gradient(135deg, #fdf2f8 0%, #f9a8d4 25%, #ec4899 50%, #9333ea 75%, #581c87 100%)',
        'anodized-reverse': 'linear-gradient(315deg, #fdf2f8 0%, #f9a8d4 25%, #ec4899 50%, #9333ea 75%, #581c87 100%)',
        'knife-edge': 'linear-gradient(90deg, #fce7f3 0%, #f472b6 30%, #a855f7 60%, #7e22ce 100%)',
        'aurora': 'linear-gradient(45deg, #fdf2f8, #f9a8d4, #ec4899, #c084fc, #9333ea, #581c87)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' },
          'to': { boxShadow: '0 0 30px rgba(147, 51, 234, 0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      backgroundSize: {
        '300%': '300%',
      }
    },
  },
  plugins: [],
} 