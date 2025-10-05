import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
                keyframes: {
                        'accordion-down': {
                                from: {
                                        height: '0'
                                },
                                to: {
                                        height: 'var(--radix-accordion-content-height)'
                                }
                        },
                        'accordion-up': {
                                from: {
                                        height: 'var(--radix-accordion-content-height)'
                                },
                                to: {
                                        height: '0'
                                }
                        },
                        'matrix-fall': {
                                '0%': {
                                        transform: 'translateY(-120%) scaleY(1.1)',
                                        opacity: '0'
                                },
                                '10%': {
                                        opacity: '0.65'
                                },
                                '70%': {
                                        opacity: '0.45'
                                },
                                '100%': {
                                        transform: 'translateY(120%) scaleY(1.1)',
                                        opacity: '0'
                                }
                        },
                        scanline: {
                                '0%': {
                                        transform: 'translateY(-100%)'
                                },
                                '100%': {
                                        transform: 'translateY(100%)'
                                }
                        },
                        'pulse-glow': {
                                '0%, 100%': {
                                        boxShadow: '0 0 20px rgba(16,185,129,0.25)'
                                },
                                '50%': {
                                        boxShadow: '0 0 35px rgba(52,211,153,0.45)'
                                }
                        },
                        'terminal-flicker': {
                                '0%, 100%': { opacity: '1' },
                                '80%': { opacity: '0.9' },
                                '85%': { opacity: '0.7' },
                                '90%': { opacity: '1' }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'matrix-fall': 'matrix-fall var(--matrix-speed,6s) linear infinite',
                        scanline: 'scanline 9s linear infinite',
                        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
                        'terminal-flicker': 'terminal-flicker 6s steps(2, start) infinite'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
