module.exports = {
  darkmode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: { // Notez le correctif "extend" au lieu de "extends"
      colors: {
        primary: {
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569', // Exemple d'une teinte claire
          600: '#334155', // Couleur principale
          700: '#1e293b', // Couleur foncée
          800: '#0f172a',
          900: '#0a0e15', // Une teinte très foncée
        },
        secondary: {
          DEFAULT: '#ffed4a',
          dark: '#facc15',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}