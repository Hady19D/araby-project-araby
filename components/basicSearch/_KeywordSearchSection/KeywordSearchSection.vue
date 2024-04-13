<template>
  <div v-if="keywordSearchDataList?.length" class="my-8">
    <keywordSearchHeader>
      <p v-if="querySearchText" class="flex items-center gap-2 text-sm md:text-base">
        <span> {{ $t('keywordSearch.verb') }} </span>
        <span> “ {{ querySearchText }} ” </span>
        <span> {{ $t('keywordSearch.matchesTheseResults') }}: </span>
      </p>
    </keywordSearchHeader>
    <div class="mt-10">
      <GrammarUtilities
        v-for="(keywordSearchData, index) in keywordSearchDataList"
        :key="`keywordSearchData_${keywordSearchData.group}`"
        :keyword-search-data="keywordSearchData"
        :last-item="index === keywordSearchDataList.length - 1"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { KeywordSearhSectionType } from '~/types/basic-search/basic-search.type';

const props = defineProps<{ keywordSearchDataList: Array<KeywordSearhSectionType> }>();

const querySearchText = computed(() => useRoute().query?.searchKeyword);

const { keywordSearchDataList } = toRefs(props);
</script>
