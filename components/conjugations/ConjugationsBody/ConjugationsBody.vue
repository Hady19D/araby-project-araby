<template>
  <div>
    <VerbSortAction
      v-if="activeDisplayStyle === ConjugationsDisplayStyleEnum.normalStyle"
      :active-sort-type="activeSortType"
      @update-sort-type="updateSortTypeHandler"
    />
    <VerbTabs
      :intial-tabs="intialTabs"
      :active-tab="activeTab"
      :second-level-tab="secondLevelTab"
      :gerunds-ands-nouns-second-level-tabs="gerundsAndsNounsSecondLevelTabs"
      @update-active-tab="changeActiveTabHandler"
      @update-second-level-tab="changeSecondLevelTab"
    />
    <VerbInfoDisplay
      :active-display-style="activeDisplayStyle"
      :active-sort-type="activeSortType"
      :bottom-tab="bottomTab"
      @update-bottom-tab="changeBottomTabHandler"
    />
  </div>
</template>

<script setup lang="ts">
import { ConjugationsDisplayStyleEnum } from '~/types/conjugations/conjugations.enum';

const {
  activeTab,
  activeDisplayStyle,
  activeSortType,
  intialTabs,
  bottomTab,
  gerundsAndsNounsSecondLevelTabs,
  secondLevelTab,
  updateSortTypeHandler,
  changeActiveTabHandler,
  changeBottomTabHandler,
  changeSecondLevelTab,
} = useVerbDetails();
</script>
