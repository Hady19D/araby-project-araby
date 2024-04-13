<template>
  <div class="grid grid-cols-3 gap-2 md:gap-5 text-xs">
    <BaseButton
      v-for="(tab, index) in tabs"
      :key="`register_tab_${tab}`"
      :class="{ ['!text-primary']: tab === activeTab || activeTabIndex >= index }"
      class="text-stone-300 !shadow-none"
      @click="() => switchTabHandler(tab)"
    >
      <span> {{ index + 1 }} </span>
      <div
        class="w-full rounded-full h-1 bg-stone-300"
        :class="{ ['!bg-primary']: tab === activeTab || activeTabIndex >= index }"
      ></div>
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import type { RegisterTabsEnum } from '~/types/register/register.enum';

const emit = defineEmits(['switchTab']);

const props = defineProps<{ tabs: Array<RegisterTabsEnum>; activeTab: RegisterTabsEnum }>();

const { tabs, activeTab } = toRefs(props);

const activeTabIndex = computed(() => tabs.value.findIndex((tab) => tab === activeTab.value));

const switchTabHandler = (tab: RegisterTabsEnum) => {
  emit('switchTab', tab);
};
</script>
