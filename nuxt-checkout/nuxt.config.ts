// @ts-ignore
export default defineNuxtConfig({
  devtools: {enabled: true},
  devServer: {
    port: 5000,
  },
  modules: ["@unlok-co/nuxt-stripe"],
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
