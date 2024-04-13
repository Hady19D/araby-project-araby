<template>
  <div class="text-lg rounded-lg overflow-hidden w-full relative h-44">
    <div class="bg-secondary/20 p-3 text-center">
      <p>
        {{ verbData.cardTitle }}
      </p>
    </div>
    <div class="bg-white py-8">
      <p class="flex flex-col items-center justify-center gap-1 py-2">
        <NuxtLink :to="localePath('/')" class="text-neutral-700">
          {{ verbData.arabicValue }}
        </NuxtLink>
        <span class="text-primary"> {{ verbData.englishValue }} </span>
      </p>
      <div class="absolute bottom-3 px-3 w-full flex justify-end left-0">
        <div
          v-primetooltip.bottom="{
            value: 'Kataba - Yaktubu',
            pt: {
              text: 'bg-secondary text-sm text-white',
            },
          }"
        >
          <IconInfoCircle />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconInfoCircle from '@/assets/icons/info-circle.svg';
import type { RootSearchItemType } from '~/types/basic-search/basic-search.type';

const localePath = useLocalePath();

const props = defineProps<{ verbData: RootSearchItemType }>();

const { verbData } = toRefs(props);
</script>
