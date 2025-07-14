/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: 'class', // Activer le mode sombre basé sur la classe
  theme: {
    extend: {
      colors: {
        // Couleurs adaptées au thème clair
        primary: "#fafafa",        // Blanc cassé (au lieu de #050816)
        secondary: "#374151",      // Gris foncé pour textes (au lieu de #6b7280)
        tertiary: "#f8f9fa",       // Gris très clair (au lieu de #151030)
        "black-100": "#1f2937",    // Gris foncé (au lieu de #100d25)
        "black-200": "#111827",    // Gris très foncé (au lieu de #090325)
        "white-100": "#ffffff",    // Blanc pur
        
        // Nouvelles couleurs pour le thème clair
        "gray-50": "#f9fafb",
        "gray-100": "#f3f4f6",
        "gray-200": "#e5e7eb",
        "gray-300": "#d1d5db",
        "gray-400": "#9ca3af",
        "gray-500": "#6b7280",
        "gray-600": "#4b5563",
        "gray-700": "#374151",
        "gray-800": "#1f2937",
        "gray-900": "#111827",
        
        // Couleurs d'accent modernes
        "blue-600": "#2563eb",
        "purple-600": "#9333ea",
        "indigo-600": "#4f46e5",
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'], // Poppins en priorité
      },
      boxShadow: {
        // Ombres adaptées au thème clair
        card: "0px 10px 40px -10px rgba(0, 0, 0, 0.1)", // Ombre douce
        "card-hover": "0px 20px 60px -10px rgba(0, 0, 0, 0.15)", // Ombre au survol
        modern: "0px 4px 20px rgba(0, 0, 0, 0.08)", // Ombre moderne
        subtle: "0px 2px 8px rgba(0, 0, 0, 0.06)", // Ombre subtile
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // Pattern adapté au thème clair ou retiré
        "hero-pattern": "linear-gradient(135deg, #fafafa 0%, #f8f9fa 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-modern": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      animation: {
        // Animations modernes
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};