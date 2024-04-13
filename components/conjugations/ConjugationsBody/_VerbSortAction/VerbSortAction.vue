<template>
  <div class="flex items-center gap-2">
    <p class="text-primary">{{ $t('conjugations.sortBy') }}:</p>
    <BaseButton
      class="shadow-none p-2 !rounded-lg transition-all ease-in-out bg-secondary/20 text-primary w-11 h-11 flex flex-col justify-center items-center"
      :class="{ ['active-sort-btn']: activeSortType === ConjugationsSortDisplayEnum.cols }"
      @click="() => switchSortTypeHandler(ConjugationsSortDisplayEnum.cols)"
    >
      <IconCol class="mt-0.5" />
    </BaseButton>
    <BaseButton
      class="shadow-none p-2 !rounded-lg transition-all ease-in-out bg-secondary/20 text-primary w-11 h-11 flex flex-col justify-center items-center"
      :class="{ ['active-sort-btn']: activeSortType === ConjugationsSortDisplayEnum.row }"
      @click="() => switchSortTypeHandler(ConjugationsSortDisplayEnum.row)"
    >
      <IconRow class="mt-0.5" />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import IconCol from '@/assets/icons/colsIcon.svg';
import IconRow from '@/assets/icons/rowIcon.svg';
import { ConjugationsSortDisplayEnum } from '~/types/conjugations/conjugations.enum';

const emit = defineEmits(['updateSortType']);

const props = defineProps<{ activeSortType: ConjugationsSortDisplayEnum }>();

const { activeSortType } = toRefs(props);

const switchSortTypeHandler = (sortStlye: ConjugationsSortDisplayEnum) => {
  emit('updateSortType', sortStlye);
};
</script>

<style lang="scss" scoped>
.active-sort-btn {
  @apply bg-primary text-white #{!important};
}
</style>
