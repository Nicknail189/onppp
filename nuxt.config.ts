// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/hhs.jpg' }]
        }
    },
})