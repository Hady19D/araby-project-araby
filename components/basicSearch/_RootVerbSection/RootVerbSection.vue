<template>
  <section class="my-7 font-jazeeraRegular">
    <p class="text-2xl text-primary">
      {{ $t(sectionData.sectionTitle) }}
    </p>
    <div class="flex flex-wrap md:flex-nowrap items-start gap-4 mt-4">
      <LazyRootVerbCard
        v-for="verbData in sectionData.items"
        :key="`verbCard_${sectionData.sectionTitle}_${verbData.cardTitle}`"
        :verb-data="verbData"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { RootSearchSectionType } from '~/types/basic-search/basic-search.enum';

const props = defineProps<{ sectionData: RootSearchSectionType }>();

const { sectionData } = toRefs(props);
</script>
