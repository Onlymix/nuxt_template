// https://nuxt.com/docs/api/configuration/nuxt-config
export const locales = [
  { code: 'ru', file: 'ru.json', name: 'Русский' },
  { code: 'uk', file: 'uk.json', name: 'Украинский' }
]
export default defineNuxtConfig({
  // typescript: {
  //     shim: false
  // },
  modules: [
    '@nuxtjs/i18n', '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    exposeConfig: true,
    injectPosition: 'last'
  },
  i18n: {
    defaultLocale: 'uk',
    locales: [
      { code: 'ru', file: 'ru.json', iso: 'ru-RU', name: 'Русский' },
      { code: 'uk', file: 'uk.json', iso: 'uk-UA', name: 'Украинский' }
    ],
    langDir: 'locales'
  }
})
