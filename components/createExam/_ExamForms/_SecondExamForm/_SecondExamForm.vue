<template>
  <div>
    <BaseInput class="mb-5" type="text" :label-text="$t('exam.numberOfQuestions')" show-astric />
    <div class="flex items-center gap-2">
      <span v-if="switchRef" class="text-green-500 uppercase"> {{ $t('exam.toggleOn') }} </span>
      <BaseSwitch v-model="switchRef" />
      <span class="text-slate-900 text-sm"> {{ $t('exam.letArabyEngineSelectNumberOfQuestions') }} </span>
    </div>
    <div class="h-24"></div>
    <slot name="navigation" />
  </div>
</template>

<script setup lang="ts">
const switchRef = ref(false);
</script>
