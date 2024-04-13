<template>
  <ol class="flex items-center gap-2 text-neutral-400 mt-5">
    <li class="" aria-current="page">
      <NuxtLink class="flex items-center gap-2" :to="localePath('/')">
        <HomeExamIcon filled />
        <p>
          {{ $t('navigation.home') }}
        </p>
      </NuxtLink>
    </li>
    <li>/</li>
    <li class="flex items-center gap-2" aria-current="page">
      {{ $t('common.examGenerator') }}
    </li>
  </ol>
</template>

<script setup lang="ts">
import HomeExamIcon from '@/assets/icons/homeExam.svg';

const localePath = useLocalePath();
</script>
