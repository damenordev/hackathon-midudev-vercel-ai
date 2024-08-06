import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors(utils) {
        return {
          background: utils.colors.zinc[950],
          foreground: utils.colors.zinc[50],
          border: utils.colors.zinc[800],
          card: utils.colors.zinc[900],
          ['card-foreground']: utils.colors.zinc[50],
          ['card-border']: utils.colors.zinc[800],
          popover: utils.colors.zinc[800],
          ['popover-foreground']: utils.colors.zinc[50],
          ['popover-border']: utils.colors.zinc[900],
          muted: utils.colors.zinc[400],
          primary: {
            DEFAULT: utils.colors.emerald[400],
            ...utils.colors.emerald,
          },
          secondary: {
            DEFAULT: utils.colors.violet[500],
            ...utils.colors.violet,
          },
          info: {
            DEFAULT: utils.colors.blue[500],
            ...utils.colors.blue,
          },
          danger: {
            DEFAULT: utils.colors.red[500],
            ...utils.colors.red,
          },
          success: {
            DEFAULT: utils.colors.emerald[500],
            ...utils.colors.emerald,
          },
          warning: {
            DEFAULT: utils.colors.orange[500],
            ...utils.colors.orange,
          },
          ...utils.colors,
        }
      },
      screens: { xs: '425px' },
      container: {
        center: true,
        padding: {
          DEFAULT: '0rem',
          sm: '0rem',
          lg: '0rem',
          xl: '0rem',
          '2xl': '0rem',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'slide-up-x-center': {
          '0%': { transform: 'translateY(100%) translateX(-50%)' },
          '100%': { transform: 'translateY(0) translateX(-50%)' },
        },
        'slide-down-x-center': {
          '0%': { transform: 'translateY(0) translateX(-50%)' },
          '100%': { transform: 'translateY(100%) translateX(-50%)' },
        },
      },
      animation: {
        'fade-out': 'fade-out 0.3s ease-in-out',
        'fade-in': 'fade-in 0.3s ease-in-out',
        'slide-up': 'slide-up 0.3s forwards',
        'slide-down': 'slide-down 0.3s forwards',
        'slide-up-x-center': 'slide-up-x-center 0.3s forwards',
        'slide-down-x-center': 'slide-down-x-center 0.3s forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
          '&::-webkit-scrollbar': { display: 'none' } /* Safari and Chrome */,
        },
      })
    }),
  ],
}
export default config
