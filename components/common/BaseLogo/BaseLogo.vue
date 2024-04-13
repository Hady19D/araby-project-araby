<template>
  <NuxtLink :to="localePath('/')" class="flex items-center gap-2">
    <div class="h-7 w-7 bg-secondary rounded-lg"></div>
    <h1 class="text-3xl font-bold text-primary" :class="{ ['text-white']: light }">Araby</h1>
  </NuxtLink>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();

const props = defineProps<{ light?: boolean }>();

const { light } = toRefs(props);
</script>
