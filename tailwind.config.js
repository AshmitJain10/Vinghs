/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vinghs: {
          bg: "#0B0B0D",
          bgAlt: "#121214",
          surface: "#1A1A1D",
          surfaceElevated: "#232326",
          red: "#D71E28",
          redBright: "#E12232",
          redDark: "#99141B",
          green: "#5FBF3F",
          greenBright: "#7ED957",
          greenDark: "#3D8228",
          silverLight: "#E2E8F0",
          silver: "#C9CDD3",
          silverDark: "#8A8D93",
          text: "#F5F5F5",
          muted: "#A0A0A5"
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'silver-gradient': 'linear-gradient(135deg, #E2E8F0 0%, #C9CDD3 50%, #8A8D93 100%)',
        'red-gradient': 'linear-gradient(135deg, #E12232 0%, #D71E28 50%, #99141B 100%)',
        'green-gradient': 'linear-gradient(135deg, #7ED957 0%, #5FBF3F 50%, #3D8228 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(11, 11, 13, 0.6) 0%, rgba(11, 11, 13, 0.4) 50%, rgba(11, 11, 13, 0.95) 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
