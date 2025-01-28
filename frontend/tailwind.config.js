/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This is correct for class-based dark mode
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Paths for scanning Tailwind classes
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // You can add custom colors here if needed, e.g.:
        // primary: '#ff6347',
      },
    },
  },
  plugins: [require('tailwindcss-animate')], // Animations plugin
};
