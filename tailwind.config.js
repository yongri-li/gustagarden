/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './**/*.{html,js,liquid}',
    '!./**/node_modules/**',
    '!./**/.git/**',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontSize: {
        xs: '0.75rem',
        sm: '1rem',
        base: '1.2rem',
        xl: '1.45rem',
        '2xl': '1.763rem',
        '3xl': '2.153rem',
        '4xl': '2.641rem',
        '5xl': '3.252rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '16px',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '12px',
      },
      spacing: {
        32: '8rem',
      },
      colors: {
        primary: {
          50: '#fefbe8',
          100: '#fff8c2',
          200: '#ffed87',
          300: '#ffdc43',
          400: '#ffca22',
          500: '#efad03',
          600: '#ce8400',
          700: '#a45d04',
          800: '#88480b',
          900: '#733b10',
          950: '#431e05',
          DEFAULT: '#efad03',
        },
        secondary: {
          50: '#f6f5fd',
          100: '#efecfb',
          200: '#e0dbf9',
          300: '#cbbff3',
          400: '#af9aeb',
          500: '#9570e2',
          600: '#804cd4',
          700: '#743fc2',
          800: '#6035a2',
          900: '#502d85',
          950: '#321b5a',
          DEFAULT: '#804cd4',
        },
        bg: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
