<template>
  <div class="bg-white shadow-md p-7 px-10 border-primary ltr:border-l-4 rtl:border-r-4 my-3 rounded-xl">
    <div class="border-b border-neutral-200 pb-5">
      <p class="text-primary flex items-center gap-1">
        <IconMedalStar class="text-xl" />
        <span class="text-lg font-bold"> {{ $t('conjugations.wordExplanation', { word: 'كتب' }) }} </span>
      </p>
      <p class="text-neutral-700 mt-1">
        {{ $t('conjugations.dynaimcWordExplanation') }}
      </p>
    </div>

    <div class="flex items-start md:items-center flex-col md:flex-row mt-5 gap-2">
      <p class="text-neutral-700">
        {{ $t('conjugations.mostCommonWords') }}
      </p>
      <div class="flex items-center flex-wrap gap-2">
        <BaseTag v-for="x in 10" :key="x" class="text-sm"> كتب </BaseTag>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconMedalStar from '@/assets/icons/medal-star.svg';
</script>
