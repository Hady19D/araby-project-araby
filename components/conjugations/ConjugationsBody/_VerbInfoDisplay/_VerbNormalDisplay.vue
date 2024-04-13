<template>
  <div class="mt-9" :class="{ ['grid grid-cols-1 md:grid-cols-2 gap-4']: checkColDisplayStyle }">
    <div v-for="item in activeAndPassiveList" :key="`main_item_${item.mainLabelText}`">
      <div class="bg-primary p-4 text-center rounded-xl text-white mb-4 text-lg">
        {{ $t(item.mainLabelText) }}
      </div>
      <div v-for="(verbInfo, index) in item.items" :key="`verb_info_${index}`" class="flex gap-3 items-stretch mb-4">
        <div
          class="bg-secondary/35 rounded-xl p-3 text-center flex flex-col justify-center px-4 w-2/4 md:w-[10%]"
          :class="{ ['!bg-secondary/15']: index % 2 != 0, ['md:!w-[16%]']: checkColDisplayStyle }"
        >
          <p class="md:mt-1">
            {{ $t(verbInfo.label) }}
          </p>
        </div>
        <VerbValue
          class="bg-secondary/35 col-span-11 rounded-xl flex items-start justify-between w-full p-3"
          :class="{ ['!bg-secondary/15']: index % 2 != 0 }"
          :verb-value="verbInfo.value"
          @toggle-report-dailog="toggleReportDailogHandler"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ConjugationsSortDisplayEnum } from '~/types/conjugations/conjugations.enum';

const emits = defineEmits(['toggleReportDailog']);

const { activeAndPassiveList } = useVerbDetails();

const props = defineProps<{ activeSortType?: ConjugationsSortDisplayEnum }>();

const { activeSortType } = toRefs(props);

const checkColDisplayStyle = computed(() => activeSortType.value === ConjugationsSortDisplayEnum.cols);

const toggleReportDailogHandler = () => {
  emits('toggleReportDailog');
};
</script>
