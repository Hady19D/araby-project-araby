<template>
  <BasicSearchSection />
</template>

<script lang="ts" setup>
const pageTitle = 'Basic Search';
const pageDescription = 'Basic search description';

const seoComposable = useSEOComposable();

useHead(
  seoComposable.headerSEO({
    title: pageTitle,
    description: pageDescription,
    script: seoComposable.searchActionLDJson(pageTitle, pageDescription),
  }),
);
</script>
