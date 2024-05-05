// @ts-ignore
export default defineNuxtConfig({
  devtools: {enabled: true},

  devServer: {
    port: 5000,
  },

  modules: ["@unlok-co/nuxt-stripe"],

  stripe: {
    // Server
    server: {
      key: '',
      options: {
        // your api options override for stripe server side
        // https://github.com/stripe/stripe-node?tab=readme-ov-file#configuration
      },
      // CLIENT
    },
    client: {
      key: process.env.STRIPE_PK,
      // your api options override for stripe client side https://stripe.com/docs/js/initializing#init_stripe_js-options
      options: {},
    },
  },

  css: [
    '/src/assets/css/main.css',
    'bootstrap/dist/css/bootstrap.min.css',
  ],

  script: [
    {
      src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
    }
  ],

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
