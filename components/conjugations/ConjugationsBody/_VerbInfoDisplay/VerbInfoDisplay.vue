<template>
  <div>
    <VerbNormalDisplay
      v-if="activeDisplayStyle == ConjugationsDisplayStyleEnum.normalStyle"
      :active-sort-type="activeSortType"
      @toggle-report-dailog="toggleReportDailogHandler"
    />

    <div v-if="activeDisplayStyle == ConjugationsDisplayStyleEnum.cardsStyle">
      <VerbCardsDisplay @toggle-report-dailog="toggleReportDailogHandler" />
      <VerbBottomTabs :bottom-tab="bottomTab" @update-bottom-tab="updateBottomTabHandler" />
    </div>

    <VerbReportDialog :visible-status="reportModalStatus" @toggle-dialog="toggleReportDailogHandler" />
  </div>
</template>

<script setup lang="ts">
import {
  ConjugationGerundAndNounValuesEnum,
  ConjugationsDisplayStyleEnum,
  type ConjugationsSortDisplayEnum,
} from '~/types/conjugations/conjugations.enum';

const emits = defineEmits(['updateBottomTab']);

const props = defineProps<{
  activeSortType?: ConjugationsSortDisplayEnum;
  activeDisplayStyle: ConjugationsDisplayStyleEnum;
  bottomTab?: ConjugationGerundAndNounValuesEnum;
}>();

const { activeSortType, activeDisplayStyle } = toRefs(props);

const reportModalStatus = ref(false);

const toggleReportDailogHandler = () => {
  reportModalStatus.value = !reportModalStatus.value;
};

const updateBottomTabHandler = (bottomTab: ConjugationGerundAndNounValuesEnum) => {
  emits('updateBottomTab', bottomTab);
};
</script>
