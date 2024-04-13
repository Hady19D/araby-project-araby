<template>
  <div class="flex items-center gap-3 mb-4">
    <div class="block w-auto md:w-[59rem]"></div>
    <div
      v-for="bottomTabItem in bottomTabItemsList"
      :key="`bottomTabItem_${bottomTabItem}`"
      class="w-full h-full rounded-xl bg-secondary/35 p-5 text-center cursor-pointer transition-all ease-in-out"
      :class="{ '!bg-primary text-white': props.bottomTab === bottomTabItem }"
      @click="() => updateBottomTabHandler(bottomTabItem)"
    >
      {{ $t(`conjugations.${bottomTabItem}`) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ConjugationGerundAndNounValuesEnum } from '~/types/conjugations/conjugations.enum';

const emits = defineEmits(['updateBottomTab']);

const props = defineProps<{
  bottomTab?: ConjugationGerundAndNounValuesEnum;
}>();

const bottomTabItemsList = ref([
  ConjugationGerundAndNounValuesEnum.annexedNouns,
  ConjugationGerundAndNounValuesEnum.definiteNouns,
  ConjugationGerundAndNounValuesEnum.indefiniteNouns,
]);

const updateBottomTabHandler = (bottomTab: ConjugationGerundAndNounValuesEnum) => {
  emits('updateBottomTab', bottomTab);
};
</script>
