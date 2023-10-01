/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                main: "#131313",
                primary: "#ffffff",
                secondary: "#FC7A1E",
                "secondary-text": "#BBBBBB",
                "border-color": "#565656",
            },
        },
    },
    plugins: [],
};
