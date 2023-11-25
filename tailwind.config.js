/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
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
          400: '#cddc47',

          DEFAULT: '#cddc47',
        },
      },
    },
  },
  plugins: [],
};
