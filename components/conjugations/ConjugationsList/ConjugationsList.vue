<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-7 my-10 mb-28">
    <div
      v-for="(item, index) in data"
      :key="`item_${index}`"
      class="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col items-center md:max-h-52"
    >
      <p class="bg-primary p-3 text-secondary w-full text-center text-lg">
        {{ item.title }}
      </p>
      <div class="text-center flex flex-col items-center h-full justify-evenly mb-3">
        <p class="w-11/12 my-4 text-sm">
          {{ item.desc }}
        </p>
        <NuxtLink
          :to="localePath(`/conjugations/apiUrl/secondApiUrl?type=${item.type}`)"
          class="flex items-center text-secondary gap-3 my-1"
        >
          <span> {{ $t('conjugations.view') }} </span>
          <BasePointingArrow />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ConjugationsLinguisticGroupTypeEnum } from '~/types/conjugations/conjugations.enum';

const localePath = useLocalePath();

const { t } = useI18n();
const data = [
  {
    title: t('conjugations.alAfaalAlMabniyahLilMaaloom'),
    desc: t('conjugations.passiveVerbConjugations'),
    type: ConjugationsLinguisticGroupTypeEnum.activeVerb,
  },
  {
    title: t('conjugations.passiveVerbs'),
    desc: t('conjugations.conjugationsExplanation'),
    type: ConjugationsLinguisticGroupTypeEnum.passiveVerb,
  },
  {
    title: t('conjugations.derivedNouns'),
    desc: t('conjugations.derivingNames'),
    type: ConjugationsLinguisticGroupTypeEnum.noun,
  },
  {
    title: t('conjugations.sources'),
    desc: t('conjugations.listingSources'),
    type: ConjugationsLinguisticGroupTypeEnum.gerund,
  },
];
</script>
