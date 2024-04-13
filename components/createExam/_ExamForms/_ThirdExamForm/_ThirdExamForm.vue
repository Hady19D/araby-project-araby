<template>
  <div class="relative">
    <p class="absolute -top-2 text-xs text-stone-400 bg-white capitalize">
      {{ $t('exam.selectExamCriteria') }}
    </p>

    <div class="flex items-center justify-center flex-wrap gap-2 md:gap-8">
      <BaseButton
        v-for="tab in tabs"
        :key="`exam-tabs-${tab.key}`"
        class="shadow-none text-sm text-stone-400 font-bold"
        :class="{ ['!text-primary']: tab.active }"
      >
        <span>
          {{ tab.label }}
        </span>

        <span> ( {{ tab.count }} ) </span>
      </BaseButton>
    </div>
    <div class="relative">
      <div class="h-[200px] md:h-[800px] custom-scrollbar overflow-y-scroll p-3 mt-5">
        <ExamCriteriaCard
          v-for="x in 15"
          :key="x"
          :active="activeCriteriaList.includes(x)"
          @click="() => selectCriteriaHandler(x)"
        />
      </div>
      <div
        class="absolute bottom-0 w-full h-1/3 bg-gradient-to-b from-transparent via-transparent to-white via-opacity-0"
      ></div>
    </div>

    <slot name="navigation" />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const activeCriteriaList = ref<number[]>([]);

const tabs = [
  {
    label: t('exam.verbs'),
    count: '03',
    key: 'verbs',
    active: true,
  },
  {
    label: t('exam.roots'),
    count: '09',
    key: 'roots',
    active: false,
  },
  {
    label: t('exam.derivatives'),
    count: '14',
    key: 'derivatives',
    active: false,
  },
];

const selectCriteriaHandler = (indexValue: number) => {
  const list = activeCriteriaList.value;
  list.includes(indexValue) ? list.splice(list.indexOf(indexValue), 1) : list.push(indexValue);
};
</script>
