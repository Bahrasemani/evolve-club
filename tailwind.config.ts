import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0ABAB5", // Tiffany Blue
          50: "#E6FFFE",
          100: "#CCFFFC",
          200: "#99FFF9",
          300: "#66FFF6",
          400: "#33FFF3",
          500: "#0ABAB5",
          600: "#089591",
          700: "#06706D",
          800: "#044A48",
          900: "#022524",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#81D4AF", // Light Tiffany
          50: "#F0FAF5",
          100: "#E1F5EB",
          200: "#C3EBD7",
          300: "#A5E1C3",
          400: "#87D7AF",
          500: "#81D4AF",
          600: "#5BC48C",
          700: "#4A9F73",
          800: "#387A5A",
          900: "#265541",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#4ECDC4", // Medium Tiffany
          50: "#EDFBFA",
          100: "#DBF7F5",
          200: "#B7EFEB",
          300: "#93E7E1",
          400: "#6FDFD7",
          500: "#4ECDC4",
          600: "#2BB5AC",
          700: "#228E87",
          800: "#1A6762",
          900: "#11403D",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-vazirmatn)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
