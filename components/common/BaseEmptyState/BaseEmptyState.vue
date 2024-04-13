<template>
  <div class="py-20 text-center md:p-32 flex flex-col items-center justify-center">
    <img class="my-3 mb-5" :src="stateImage" alt="didYouKnow" />
    <p v-if="searchState" class="flex items-center gap-1 font-bold text-3xl text-primary mb-4">
      {{ $t('emptyState.noResultTitle') }}
    </p>
    <div v-else class="flex items-center gap-1 font-bold text-xl">
      <p class="text-secondary">{{ $t('emptyState.hulTranslation') }}</p>
      <p class="text-primary">
        {{ $t('emptyState.learnExpression') }}
      </p>
    </div>
    <p v-if="searchState" class="text-sm text-neutral-400">
      {{ $t('emptyState.noResultDesc') }}
    </p>
    <p v-else class="text-lg">
      <span class="text-primary">
        {{ $t('emptyState.searchEngineContent') }}
      </span>
      <span class="text-secondary mx-1 font-bold"> {{ $t('emptyState.2Million') }}</span>
      <span class="text-primary">
        {{ $t('emptyState.word') }}
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import DidYouKnowImage from '@/assets/images/didYouKnow.webp';
import NoSearchResult from '@/assets/images/noSearchResult.webp';

const props = defineProps<{ searchState?: boolean }>();

const stateImage = computed(() => (props.searchState ? NoSearchResult : DidYouKnowImage));
</script>
