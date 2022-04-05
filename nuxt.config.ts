import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  components: ["~/components", "~/components/ui"],
  modules: [
    ["@storyblok/nuxt", { accessToken: "eTcmutwullI47OfOLZbUbgtt" }],
  ],
});
