<template>
  <div>
    <BaseInput class="mb-5" type="text" :label-text="$t('exam.examName')" show-astric />
    <BaseEditor v-model="value" :label-text="$t('exam.defineExamObjectives')" show-astric />
    <div class="flex items-center gap-2 mt-5">
      <IconCheckMarkCircle class="text-gray-300 text-xl" />
      <div class="relative w-full md:w-[40%] top-0 text-xs">
        <BaseInput type="number" input-class="w-[90%]" :label-text="$t('exam.examDuration')" />
        <span class="absolute top-4 rtl:left-0 ltr:right-0 mx-3 text-neutral-300">
          {{ $t('exam.min') }}
        </span>
      </div>
    </div>
    <div class="flex items-center gap-2 mt-5">
      <IconCheckMarkCircle class="text-gray-300 text-xl" />
      <div class="relative w-full md:w-[40%] top-0 text-xs">
        <BaseInput type="number" input-class="w-[90%]" :label-text="$t('exam.passingScore')" />
        <span class="absolute top-4 rtl:left-0 ltr:right-0 mx-3 text-neutral-300"> % </span>
      </div>
    </div>

    <slot name="navigation" />
  </div>
</template>

<script setup lang="ts">
import IconCheckMarkCircle from '@/assets/icons/checkMarkCircle.svg';

const value = ref('');
</script>
