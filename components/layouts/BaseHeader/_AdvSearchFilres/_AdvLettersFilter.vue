<template>
  <div>
    <div class="flex items-center flex-col gap-5 mt-9">
      <label class="inline-flex items-center cursor-pointer">
        <span class="pr-4 text-sm font-medium text-secondary">Filter in Verb</span>
        <input type="checkbox" value="" class="sr-only peer" />
        <div
          class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-900"
        ></div>
        <span class="ms-3 text-sm font-medium text-primary">Root</span>
      </label>
    </div>
    <div class="mt-5 my-8 mx-36">
      <div class="flex text-center flex-wrap text-white font-bold gap-2 w-full">
        <BaseButton
          v-for="(arabicChar, index) in arabicCharactersList"
          :key="`arabic-char-${index}`"
          class="bg-secondary hover:bg-primary w-8 h-8 border rounded-xl !shadow-none !py-0 !px-0"
          type="button"
        >
          {{ arabicChar }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const arabicCharactersList = [
  'أ',
  'ب',
  'ت',
  'ث',
  'ج',
  'ح',
  'خ',
  'د',
  'ذ',
  'ر',
  'ز',
  'س',
  'ش',
  'ص',
  'ض',
  'ط',
  'ظ',
  'ع',
  'غ',
  'ف',
  'ق',
  'ك',
  'ل',
  'م',
  'ن',
  'ه',
  'و',
  'ي',
];
</script>
