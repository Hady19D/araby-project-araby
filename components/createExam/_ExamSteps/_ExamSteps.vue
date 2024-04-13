<template>
  <div class="flex items-center gap-3 my-5">
    <div v-for="(_, index) in steps" :key="`exam_step_${index}`" class="flex flex-col items-start">
      <p class="text-neutral-300 transition-all ease-in-out" :class="{ ['text-secondary']: currectStepIndex >= index }">
        {{ index + 1 }}
      </p>
      <div
        class="bg-neutral-300 rounded-xl w-[40px] md:w-[91px] h-1.5 transition-all ease-in-out"
        :class="{ ['bg-secondary']: currectStepIndex >= index }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ steps: Array<{ title: string }>; currectStepIndex: number }>();

const { steps, currectStepIndex } = toRefs(props);
</script>
