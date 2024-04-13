<template>
  <div
    class="bg-white shadow-md p-7 border-secondary ltr:border-l-4 rtl:border-r-4 rounded-xl text-2xl grid md:grid-cols-3 grid-cols-1 gap-4 items-center ltr-direction my-9"
  >
    <div class="flex items-center justify-around text-primary">
      <p>{{ props.verbDetailsData?.arabic_display }}</p>
      <BaseButton class="shadow-none">
        <IconVolumeLow class="text-secondary" />
      </BaseButton>
      <IconKeyboardArrowLeft />
    </div>
    <div class="flex items-center md:flex-row flex-col gap-10 col-span-2 w-full">
      <div class="flex flex-col w-full">
        <p class="text-neutral-300 text-xl">
          {{ $t('conjugations.wordType') }}
        </p>
        <p class="text-primary">
          {{
            props.verbDetailsData?.rootKind === 'quad' ? $t('conjugations.quadSource') : $t('conjugations.tripleSource')
          }}
        </p>
      </div>
      <div class="flex flex-col w-full">
        <p class="text-neutral-300 text-xl">
          {{ $t('conjugations.wordRoot') }}
        </p>
        <p class="text-primary">
          {{ props.verbDetailsData?.root_characters }}
        </p>
      </div>
      <div class="flex flex-col w-full">
        <p class="text-neutral-300 text-xl">
          {{ $t('conjugations.wordOrigin') }}
        </p>
        <p class="text-primary">
          {{ props.verbDetailsData?.root }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconKeyboardArrowLeft from '@/assets/icons/keyboard-arrow-left.svg';
import IconVolumeLow from '@/assets/icons/volume-low.svg';
import type { VerbDetailsResponseType } from '~/types/conjugations/conjugations.type';

const props = defineProps<{ verbDetailsData?: VerbDetailsResponseType }>();
</script>
