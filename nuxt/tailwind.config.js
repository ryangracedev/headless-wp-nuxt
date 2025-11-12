/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFF0ED',
          200: '#FFC2B7',
          300: '#FF9482',
          400: '#C73B23',
          500: '#831907',
          600: '#4E0F04'
        },
        secondary: {
          100: '#F0EEFF',
          200: '#ADA5FF',
          300: '#6658F5',
          400: '#4236C2',
          500: '#261C8F',
          600: '#120B5C'
        },
        neutral: {
          0: '#FFFFFF',
          100: '#F5F9FF',
          200: '#CEDBE7',
          300: '#96A9BB',
          400: '#5E7387',
          500: '#42515E',
          600: '#2B353D',
          700: '#000000'
        }
      },
      fontSize: {
        'xx-small': ['clamp(0.625rem, 0.625rem + ((1vw - 0.2rem) * 1.633), 0.75rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'x-small': ['clamp(0.75rem, 0.75rem + ((1vw - 0.2rem) * 1.633), 0.875rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'small': ['clamp(0.875rem, 0.875rem + ((1vw - 0.2rem) * 1.633), 1rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'medium': ['clamp(1rem, 1rem + ((1vw - 0.2rem) * 1.633), 1.25rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'large': ['clamp(1.25rem, 1.25rem + ((1vw - 0.2rem) * 1.633), 1.5rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'x-large': ['clamp(1.5rem, 1.5rem + ((1vw - 0.2rem) * 1.633), 2rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'xx-large': ['clamp(2.75rem, 2.75rem + ((1vw - 0.2rem) * 1.633), 5rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-1': ['clamp(2.5rem, 2.5rem + ((1vw - 0.2rem) * 1.633), 3.5rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-2': ['clamp(2rem, 2rem + ((1vw - 0.2rem) * 1.633), 3rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-3': ['clamp(1.5rem, 1.5rem + ((1vw - 0.2rem) * 1.633), 2.25rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-4': ['clamp(2rem, 2rem + ((1vw - 0.2rem) * 1.633), 2rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-5': ['clamp(1rem, 1rem + ((1vw - 0.2rem) * 1.633), 1.5rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-6': ['clamp(0.675rem, 0.675rem + ((1vw - 0.2rem) * 1.633), 0.75rem)', { lineHeight: '1.4', fontWeight: '600' }]
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.5rem',
        '6': '2rem',
        '7': '2.5rem',
        '8': '4rem',
        '9': '5rem',
        '10': '8.25rem',
        '11': '12.5rem',
        '12': '20rem'
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'system': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'sans-serif'],
        'serif': ['"Times New Roman"', '"New York"', 'Times', '"Noto Serif"', 'serif'],
        'monospace': ['Consolas', 'Menlo', 'Monaco', '"SF Mono"', '"DejaVu Sans Mono"', '"Roboto Mono"', '"Courier New"', 'Courier', 'monospace']
      },
      borderRadius: {
        'small': '0.25rem',
        'medium': '0.5rem',
        'large': '0.75rem'
      },
      maxWidth: {
        'content': '960px',
        'wide': '1300px'
      }
    }
  },
  plugins: []
}