<template>
  <div class="my-10">
    <div class="flex items-end justify-between">
      <p class="flex flex-col items-start">
        <IconChecklistMinimalistic class="text-transparent fill-secondary text-3xl" />
        <span class="text-primary font-semibold"> {{ $t('exam.previewQuestionsList') }} </span>
      </p>
      <BaseButton class="flex items-center gap-1 shadow-none">
        <IconPrinter class="text-xl" filled />
        <span class="text-gray-400 text-xs">
          {{ $t('exam.downloadQuestions') }}
        </span>
      </BaseButton>
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <ExamQuestionsCard v-for="x in 10" :key="x" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconChecklistMinimalistic from '@/assets/icons/ChecklistMinimalistic.svg';
import IconPrinter from '@/assets/icons/printer.svg';
</script>
