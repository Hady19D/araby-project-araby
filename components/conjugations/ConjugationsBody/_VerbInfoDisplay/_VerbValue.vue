<template>
  <div class="relative flex flex-col">
    <p class="mx-5 flex md:flex-row items-center gap-2" :class="wordsClassName">
      <span> {{ verbValue }} </span>
    </p>
    <BaseButton
      class="shadow-none absolute rtl:left-0 ltr:right-0 flex items-center gap-2 top-0 md:top-auto py-1 px-2"
      @click="toggleReportDailog"
    >
      <span class="text-xs text-neutral-400 hidden md:block"> {{ $t('conjugations.reportIssue') }} </span>
      <IconDangerTriangle class="text-transparent text-sm md:text-lg" filled />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import IconDangerTriangle from '@/assets/icons/dangerTriangle.svg';

const emits = defineEmits(['toggleReportDailog']);

const props = defineProps<{
  verbValue: string;
  wordsClassName?: string | Record<string, string>;
}>();

const { verbValue } = toRefs(props);

const toggleReportDailog = () => {
  emits('toggleReportDailog');
};
</script>
