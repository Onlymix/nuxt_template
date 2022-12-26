<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
</script>
<template>
  <div>
    <TheHeader />
    <TheMain />
    <TheFooter />
    <h1>{{ $t("hello", { name: "vue-i18n" }) }}</h1>
    <h2 class="text-3xl">
      {{ t("test") }}
    </h2>
  </div>
</template>

<style>
html {
  @apply bg-slate-800;
}
</style>

<i18n lang="yaml">
ru:
  test: "hello world!"
uk:
  test: "こんにちは、世界!"
</i18n>
