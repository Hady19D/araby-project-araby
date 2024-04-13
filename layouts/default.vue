<template>
  <div class="relative ltr:font-poppinsMedium rtl:font-jazeeraRegular">
    <div class="z-20 relative">
      <Navigation />
      <BaseHeader />
      <div class="container">
        <slot />
      </div>
      <BaseFooter />
    </div>
    <img
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h=[20rem] md:h-[30rem] z-10"
      src="@/assets/images/new-square-arabic-pattern-for-body.webp"
      alt="bg-main-letter-img"
    />
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n();

useHead({
  htmlAttrs: { dir: locale.value === 'ar' ? 'rtl' : 'ltr', lang: locale.value },
});
</script>
