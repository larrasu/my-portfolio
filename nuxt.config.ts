// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Larra Su",
      meta: [
        { charset: "utf-8" },
        { content: "width=device-width, initial-scale=1", name: "viewport" },
        {
          hid: "description",
          name: "description",
          content: "A front-end web developer coding things for the web.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/image-edge",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  googleFonts: {
    families: {
      Karla: [400, 700, 800, 900],
    },
  },
  ssr: false,
});
