module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(210, 10%, 90%)",
        input: "hsl(210, 10%, 90%)",
        ring: "hsl(270, 65%, 50%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(210, 15%, 15%)",
        primary: {
          DEFAULT: "hsl(270, 65%, 50%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(270, 55%, 40%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(270, 65%, 50%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 98%)",
          foreground: "hsl(210, 15%, 15%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(210, 15%, 95%)",
          foreground: "hsl(210, 9%, 30%)",
        },
        accent: {
          DEFAULT: "hsl(270, 65%, 50%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 15%, 15%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 15%, 15%)",
        },
        success: "hsl(145, 60%, 40%)",
        warning: "hsl(35, 90%, 50%)",
        gray: {
          50: "hsl(210, 20%, 98%)",
          100: "hsl(210, 15%, 95%)",
          200: "hsl(210, 10%, 90%)",
          300: "hsl(210, 10%, 80%)",
          400: "hsl(210, 9%, 65%)",
          500: "hsl(210, 8%, 50%)",
          600: "hsl(210, 8%, 40%)",
          700: "hsl(210, 9%, 30%)",
          800: "hsl(210, 10%, 20%)",
          900: "hsl(210, 10%, 10%)",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'h1': ['3.236rem', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '500' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '500' }],
        'h3': ['1.618rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '300' }],
        'label': ['0.875rem', { lineHeight: '1.5', fontWeight: '300' }],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(270, 65%, 50%) 0%, hsl(270, 55%, 40%) 100%)',
        'gradient-2': 'linear-gradient(135deg, hsl(270, 55%, 40%) 0%, hsl(270, 65%, 50%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsla(270, 65%, 50%, 0.8), hsla(270, 55%, 40%, 0.8))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
