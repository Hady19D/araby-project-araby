<template>
  <div>
    <div class="flex items-start flex-col md:flex-row md:items-center gap-2 my-5 w-full">
      <div class="flex items-center text-neutral-400 gap-2">
        <IconWidget class="text-white" />
        <p>{{ $t('conjugations.type') }}</p>
      </div>
      <div class="flex items-center overflow-y-scroll whitespace-nowrap gap-2 w-full md:overflow-y-visible">
        <BaseButton
          v-for="tab in intialTabs"
          :key="`tab_${tab.key}`"
          :class="{ ['!bg-primary text-white']: activeTab === tab.key }"
          class="bg-secondary/20 text-neutral-700 !p-3 !shadow-none rounded-xl w-full transition-all ease-in-out"
          @click="() => updateActiveTabHandler(tab.key)"
        >
          {{ $t(tab.label) }}
        </BaseButton>
      </div>
    </div>
    <ClientOnly>
      <div v-if="isSecondTabsAvailable" class="flex items-start flex-col md:flex-row md:items-center gap-2 my-5 w-full">
        <div class="flex items-center gap-2 text-neutral-400">
          <IconTextSquare class="text-xl" />
          <p>{{ $t('conjugations.weight') }}</p>
        </div>
        <div class="flex items-center overflow-y-scroll whitespace-nowrap gap-2 w-full no-scrollbar">
          <BaseButton
            v-for="(secondLevelTabItem, index) in gerundsAndsNounsSecondLevelTabs"
            :key="`tab_${index}`"
            class="bg-secondary/20 text-neutral-700 !p-3 !shadow-none rounded-xl transition-all ease-in-out !px-6"
            :class="{ ['!bg-primary text-white']: secondLevelTab === secondLevelTabItem }"
            @click="() => updateSecondLevelTabHandler(secondLevelTabItem)"
          >
            {{ $t(`conjugations.${secondLevelTabItem}`) }}
          </BaseButton>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { VerbDetailsActiveTabType } from '~/types/conjugations/conjugations.type';

import IconWidget from '@/assets/icons/widget.svg';
import { ConjugationsLinguisticGroupTypeEnum } from '~/types/conjugations/conjugations.enum';
import IconTextSquare from '@/assets/icons/textSquare.svg';

const emits = defineEmits(['updateActiveTab', 'updateSecondLevelTab']);

const verbType = computed(() => useRoute().params?.conjugationType);

const props = defineProps<{
  intialTabs: Array<{ key: string; label: string }>;
  activeTab?: VerbDetailsActiveTabType;
  secondLevelTab?: string;
  gerundsAndsNounsSecondLevelTabs?: Array<string>;
}>();

const { intialTabs, activeTab, gerundsAndsNounsSecondLevelTabs, secondLevelTab } = toRefs(props);

const isSecondTabsAvailable = computed(() => {
  if (
    (verbType.value === ConjugationsLinguisticGroupTypeEnum.gerund.toLowerCase() ||
      verbType.value === ConjugationsLinguisticGroupTypeEnum.noun.toLowerCase()) &&
    gerundsAndsNounsSecondLevelTabs.value
  ) {
    return gerundsAndsNounsSecondLevelTabs.value?.length && secondLevelTab.value;
  }
});

const updateActiveTabHandler = (tabKey: string) => {
  emits('updateActiveTab', tabKey);
};

const updateSecondLevelTabHandler = (tabKey: string) => {
  emits('updateSecondLevelTab', tabKey);
};
</script>
