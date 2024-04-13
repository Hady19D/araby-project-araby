<template>
  <div class="text-sm md:text-base">
    <div class="flex items-center gap-3 mb-4">
      <div class="block w-[20rem] md:w-[39rem]"></div>
      <p class="w-full h-full rounded-xl bg-secondary/35 p-5 text-center">
        {{ $t('conjugations.masculine') }}
      </p>
      <p class="w-full h-full rounded-xl bg-secondary/35 p-5 text-center">{{ $t('conjugations.feminine') }}</p>
    </div>
    <div
      v-for="(item, index) in gerundsAndNounsList"
      :key="`card_display_${index}`"
      class="flex items-stretch bg-secondary/10 rounded-xl p-1 md:p-3 gap-1 md:gap-3 mb-4"
    >
      <div class="bg-secondary/20 flex flex-col justify-center rounded-xl w-full md:w-28 md:p-3 text-center">
        <p>
          {{ $t(item.mainLabelText) }}
        </p>
      </div>
      <div class="flex flex-col gap-1 md:gap-3 w-full">
        <div
          v-for="(linguisticEntity, linguisticIndex) in item.linguisticEntitiesList"
          :key="`linguisticEntity_${linguisticEntity.key}`"
          class="flex items-stretch gap-1 md:gap-3"
        >
          <div
            class="bg-secondary/35 rounded-xl p-1 text-center flex flex-col justify-center w-full md:p-3 md:px-4 md:w-[10%]"
            :class="{ ['!bg-secondary/15']: linguisticIndex % 2 != 0 }"
          >
            <p class="md:mt-1">
              {{ $t(linguisticEntity.label) }}
            </p>
          </div>
          <div class="flex items-center justify-between w-full gap-2">
            <VerbValue
              class="w-full h-full rounded-xl bg-secondary/35 flex items-center justify-center p-2 md:p-5"
              words-class-name="md:flex-row flex-col gap-0 py-3 md:gap-1 md:py-0"
              :class="{ ['!bg-secondary/15']: linguisticIndex % 2 != 0 }"
              :verb-value="getIndexValue(linguisticEntity.masculineIndex)"
              @toggle-report-dailog="toggleReportDailogHandler"
            />
            <VerbValue
              class="w-full h-full rounded-xl bg-secondary/35 flex items-center justify-center p-2 md:p-5"
              words-class-name="md:flex-row flex-col gap-0 py-3 md:gap-1 md:py-0"
              :class="{ ['!bg-secondary/15']: linguisticIndex % 2 != 0 }"
              :verb-value="getIndexValue(linguisticEntity.feminineIndex)"
              @toggle-report-dailog="toggleReportDailogHandler"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { gerundsAndNounsList, gerundsAndsNounsDisplayedValues } = useVerbDetails();

const emits = defineEmits(['toggleReportDailog']);

const toggleReportDailogHandler = () => {
  emits('toggleReportDailog');
};

const getIndexValue = (index: number) => {
  return (
    (gerundsAndsNounsDisplayedValues.value &&
      gerundsAndsNounsDisplayedValues.value?.find((item) => item.conditionNo === index)?.value) ||
    '-'
  );
};
</script>
