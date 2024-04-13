<template>
  <BaseLoading v-if="responseLoadingStatus" />
  <div v-else-if="basicSearchType === BasicSearchTypeEnum.root && updatedBaseSearchTripleRootData?.length" class="z-10">
    <LazyRootVerbSection
      v-for="(rootData, index) in updatedBaseSearchTripleRootData"
      :key="`rootData_${index}`"
      :section-data="rootData"
    />
  </div>
  <KeywordSearchSection
    v-else-if="basicSearchType === BasicSearchTypeEnum.keyword && keywordSearchDataList?.data.length"
    :keyword-search-data-list="keywordSearchDataList?.data || []"
    :saerch-text="searchText"
  />
  <BaseEmptyState v-else :search-state="emptyStateStatus" />
</template>

<script setup lang="ts">
import { BasicSearchTypeEnum } from '~/types/basic-search/basic-search.enum';

const {
  basicSearchType,
  keywordSearchDataList,
  searchText,
  responseLoadingStatus,
  updatedBaseSearchTripleRootData,
  emptyStateStatus,
  getBasicSearchData,
} = useBasicSearchComposable();

await getBasicSearchData();
</script>
