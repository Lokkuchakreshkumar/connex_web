/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#050505',
                primary: '#ffffff',
                secondary: '#a1a1aa',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'pulse-slow': 'pulse 10s ease-in-out infinite alternate',
                'shine': 'shine 1.5s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulse: {
                    '0%': { opacity: '0.4', transform: 'translate(-50%, -50%) scale(1)' },
                    '100%': { opacity: '0.7', transform: 'translate(-50%, -50%) scale(1.1)' },
                },
                shine: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                }
            }
        },
    },
    plugins: [],
}
