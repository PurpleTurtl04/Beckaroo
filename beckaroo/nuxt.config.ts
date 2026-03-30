// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
    ],
    fonts: {
        families: [
            { name: 'Poppins', weights: [400, 500, 600, 700, 800, 900] },
            { name: 'DynaPuff', weights: [400, 500, 600, 700] },
        ],
    },
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
                'data-theme': 'emerald',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
            title: 'Beckaroo & The Zoo',
        },
    },
});
