<template>
  <div
    class="rounded-full h-7 w-7 bg-primary text-secondary flex items-center justify-center relative mx-2"
    :class="{ ['bg-neutral-300 text-neutral-300']: disabled }"
  >
    <IconArrowRight class="text-2xl absolute rtl:rotate-180 rtl:left-3.5 ltr:right-3.5 mt-1" />
  </div>
</template>

<script setup lang="ts">
import IconArrowRight from '@/assets/icons/arrow-right.svg';

const props = defineProps<{ disabled?: boolean }>();

const { disabled } = toRefs(props);
</script>
