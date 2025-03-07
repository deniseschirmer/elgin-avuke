/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}', // Ajuste os caminhos conforme necessário
    ],
    theme: {
      extend: {
        colors: {
          background: 'var(--background)', // Usa a variável CSS --background
          foreground: 'var(--foreground)', // Usa a variável CSS --foreground
        },
        backgroundImage: {
          'blue-gradient': 'var(--background-blue)', // Usa a variável CSS --background-blue
        },
      },
    },
    plugins: [],
  };