/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                // Creates the class 'font-poppins'
                poppins: ['Poppins', 'sans-serif'],
                // Creates the class 'font-dynapuff'
                dynapuff: ['DynaPuff', 'cursive'],
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['emerald'],
    },
};
