<template>
  <div class="my-8">
    <keywordSearchHeader>
      <p class="flex items-start md:items-center gap-2 text-sm md:text-lg">
        <span> {{ $t('keywordSearch.youAreViewing') }} </span>
        <span> “ 33 ” </span>
        <span> {{ $t('keywordSearch.activeVerbsWord') }} </span>
        <span v-if="searchTextQuery">“ {{ searchTextQuery }} ”</span>
      </p>
    </keywordSearchHeader>
    <div v-if="keywordResultList.length" class="grid grid-cols-2 md:max-lg:grid-cols-4 md:grid-cols-5 gap-4 mt-3">
      <KeywordDetailsCard
        v-for="keywordResultItem in keywordResultList"
        :key="`keywordResultItem_${keywordResultItem._id}`"
        :keyword-result-item="keywordResultItem"
      />
    </div>

    <BasePagination :rows="10" :total-records="120" />
  </div>
</template>

<script setup lang="ts">
import { useKeywordViewMoreStore } from '~/store/keywordViewMore';

const seoComposable = useSEOComposable();

const searchTextQuery = useRoute().query.searchKeyword || '';

const keywordResultStore = useKeywordViewMoreStore();

const keywordResultList = computed(() => keywordResultStore.keywordResultDataList?.data || []);

await keywordResultStore.fetchViewMoreKeywordSearchData();

const pageDescription = `${searchTextQuery} description`;

useHead(
  seoComposable.headerSEO({
    title: searchTextQuery.toString(),
    description: pageDescription,
    script: seoComposable.definedTermLDJson(searchTextQuery.toString(), pageDescription),
  }),
);
</script>
