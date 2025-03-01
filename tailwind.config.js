/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#00FFFF", // Neon cyan
        secondary: "#FF00FF", // Neon magenta
        accent: "#FFFF00", // Neon yellow
        dark: "#0A0A0A", // Near black
        light: "#F0F0F0", // Light gray
        "dark-blue": "#000033", // Dark blue for backgrounds
        "neon-glow": "rgba(0, 255, 255, 0.7)", // Cyan glow effect
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF' },
          '100%': { textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
      },
      boxShadow: {
        'neon': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
        'neon-magenta': '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 15px #FF00FF',
        'neon-yellow': '0 0 5px #FFFF00, 0 0 10px #FFFF00, 0 0 15px #FFFF00',
      },
      backdropFilter: {
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(8px)',
        'blur-lg': 'blur(16px)',
      },
    },
  },
  plugins: [],
}; 