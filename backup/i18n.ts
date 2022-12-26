import { createI18n } from 'vue-i18n'
// import ru from '../locales/ru.json'
// import uk from '../locales/uk.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'uk',
    messages: {
        // ru,
        // uk
    }
  })

  vueApp.use(i18n)
})