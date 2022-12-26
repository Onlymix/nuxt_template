<template>
  <header>
    <section class="bg-blue-800 justify-items-end">
      contact
      <NuxtLink
        v-for="displayedLocale in availableLocales"
        :key="displayedLocale.code"
        :to="switchLocalePath(displayedLocale.code)"
      >
        {{ displayedLocale.name }}
      </NuxtLink>
    </section>
    <section class="" />
  </header>
</template>

<script setup lang="ts">
import type { LocaleObject } from 'vue-i18n-routing'
const { locale, locales } = useI18n({ useScope: 'local' })
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() =>
  (locales.value as LocaleObject[]).filter(i => i.code !== locale.value)
)
</script>

<style scoped>

</style>
