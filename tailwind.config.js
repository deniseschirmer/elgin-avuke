/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          background: 'var(--background)', // Usa a variável CSS --background
          foreground: 'var(--foreground)', // Usa a variável CSS --foreground
        },
        backgroundImage: {
          'blue-gradient': 'var(--blue-gradient)', // Usa a variável CSS --blue-gradient
        },
      },
    },
    plugins: [],
  };