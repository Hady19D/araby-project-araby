<template>
  <NuxtLink
    :to="{
      path: localePath(`/conjugations/${props.keywordResultItem.type.toLowerCase()}/${props.keywordResultItem?.value}`),
      query: { url: base64Url },
    }"
    class="bg-white border border-neutral-100 text-primary flex items-center justify-center gap-2 rounded-lg py-14 hover:bg-primary hover:text-white transition-all ease-in-out"
  >
    <IconInfoCircle class="text-2xl" />
    <p class="text-lg">
      {{ props.keywordResultItem?.value }}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
import IconInfoCircle from '@/assets/icons/info-circle.svg';
import { encodeToBase64 } from '~/helpers/base64Helpers';
import type { KeywordResultItemType } from '~/types/keyword-result/keyword-result.type';

const localePath = useLocalePath();

const props = defineProps<{ keywordResultItem: KeywordResultItemType }>();

const base64Url = computed(() => encodeToBase64(props.keywordResultItem.url));
</script>
