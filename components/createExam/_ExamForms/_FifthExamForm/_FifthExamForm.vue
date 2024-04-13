<template>
  <div>
    <div class="flex flex-col gap-4">
      <ExamInfoCard v-for="(examInfo, index) in examInfoList" :key="`exam_info_card_${index}`" :exam-info="examInfo" />
    </div>

    <ExamQuestionsList />
    <slot name="navigation" />
  </div>
</template>

<script setup lang="ts">
import { ExamsCreateExamInfoCardTypeEnum } from '~/types/exams/exams.enum';
import type { ExamsCreateExamInfoCardObjectType } from '~/types/exams/exams.type';

const { t } = useI18n();

const examInfoList = ref<Array<ExamsCreateExamInfoCardObjectType>>([
  {
    title: t('exam.examTitle'),
    value: t('exam.arabicExamFor3rdClass'),
    icon: 'pen',
  },
  {
    title: t('exam.examObjective'),
    type: ExamsCreateExamInfoCardTypeEnum.description,
    value:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    icon: 'chat',
  },
  {
    title: t('exam.examDuration'),
    value: t('exam.examDurationCounter', { counter: '30' }),
    icon: 'clock',
  },
  {
    title: t('exam.numberOfQuestions'),
    value: '10',
    icon: 'list',
  },
  {
    title: t('exam.examCriteria'),
    value: 'Lazzem & transitive',
    icon: 'bookmark',
  },
  {
    title: t('exam.selectedWords'),
    value: ['Katab', 'Katab', 'Katab', 'Katab'],
    type: ExamsCreateExamInfoCardTypeEnum.tags,
    icon: 'filters',
  },
]);
</script>
