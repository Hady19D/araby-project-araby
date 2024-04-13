<template>
  <div class="my-10 w-full flex flex-col items-center">
    <BaseButton
      v-if="!examStartedStatus"
      class="bg-primary p-4 rounded-md text-white uppercase w-52"
      @click="startExamCreationHandler"
    >
      {{ $t('common.start') }}
    </BaseButton>
    <div v-else-if="currectStepIndex < 4" class="flex items-center justify-between w-full md:px-10 gap-3">
      <BaseButton
        class="border border-primary text-primary p-4 !rounded-md uppercase w-52 transition-all ease-linear disabled:bg-gray-300 disabled:border-gray-300 disabled:text-white"
        :disabled="currectStepIndex <= 0"
        @click="prevStepHandler"
      >
        {{ $t('common.back') }}
      </BaseButton>
      <BaseButton
        class="bg-primary p-4 ! text-white uppercase w-52 transition-all ease-linear disabled:bg-gray-300 disabled:border-gray-300 disabled:text-white"
        :disabled="currectStepIndex >= 4"
        @click="nextStepHandler"
      >
        {{ $t('common.next') }}
      </BaseButton>
    </div>
    <BaseButton
      v-else
      class="bg-primary p-4 !rounded-md w-2/4 text-white uppercase transition-all ease-linear disabled:bg-gray-300 disabled:border-gray-300 disabled:text-white"
      @click="toggleSuccessModalHandler"
    >
      {{ $t('exam.saveToExamLibrary') }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ examStartedStatus: boolean; currectStepIndex: number }>();

const { examStartedStatus, currectStepIndex } = toRefs(props);

const emits = defineEmits(['startCreation', 'nextStep', 'prevStep', 'toggleSuccessModal']);

const startExamCreationHandler = () => emits('startCreation');

const nextStepHandler = () => emits('nextStep');

const prevStepHandler = () => emits('prevStep');

const toggleSuccessModalHandler = () => emits('toggleSuccessModal');
</script>
