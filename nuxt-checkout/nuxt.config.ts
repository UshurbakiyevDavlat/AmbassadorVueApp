// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    devServer: {
        port: 5000,
    },
    modules: ["@unlok-co/nuxt-stripe"],
    css: ['/src/assets/css/main.css'],
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],

        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css',
                integrity: 'sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6',
                crossOrigin: 'anonymous',
            }
        ]
    },
    stripe: {
        // Server
        server: {
            key: "sk_test_123",
            options: {
                // your api options override for stripe server side
                // https://github.com/stripe/stripe-node?tab=readme-ov-file#configuration
            },
            // CLIENT
        },
        client: {
            key: "pk_test_51PCg44Kjxe7OpAXX9u3V1eqvkR6HQ0FOXttQdV7lZvawohyn8kR5nEJ2SFfgU0evjwiBl3i1xnVCfuZvZU01w2FV00u3BLRgnF",
            // your api options override for stripe client side https://stripe.com/docs/js/initializing#init_stripe_js-options
            options: {},
        }
    },
})