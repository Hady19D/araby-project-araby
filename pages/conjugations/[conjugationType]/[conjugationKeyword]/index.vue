<template>
  <div v-if="verbDetailsData?.types">
    <BaseWordOverviewCard :verb-details-data="verbDetailsData" />
    <!-- <ConjugationInfoCard /> -->
    <ConjugationsBody />
  </div>
</template>

<script setup lang="ts">
const seoComposable = useSEOComposable();

const route = useRoute();

const { fetchVerbDetailsHandler, verbDetailsData } = useVerbDetails();

await fetchVerbDetailsHandler();

const pageTitle = `${route.params.conjugationKeyword} - ${verbDetailsData.value?.arabic_display}`;

const pageDescription = `${pageTitle} description`;

useHead(
  seoComposable.headerSEO({
    title: pageTitle,
    description: pageDescription,
    script: seoComposable.definedTermLDJson(pageTitle, pageDescription),
  }),
);
</script>
