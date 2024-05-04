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
})
