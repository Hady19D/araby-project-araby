import type { DataPaginationResponseType, DataResponseType } from './../types/common/common.type';
import type { KeywordSearhSectionType, RootSearchDataType } from '~/types/basic-search/basic-search.type';

import { BasicSearchTypeEnum } from '~/types/basic-search/basic-search.enum';

export const useBasicSearchStore = defineStore('useBasicSearchStore', () => {
  const basicSearchType = ref<BasicSearchTypeEnum>(BasicSearchTypeEnum.root);

  const searchText = ref('');

  const {
    data: keywordSearchDataList,
    refresh: refreshKeywordSearchData,
    execute: executeKeywordSearchData,
    status: keywordSearchRequestStatus,
  } = useDataFetcher<DataResponseType<Array<KeywordSearhSectionType>>>('/basic-search/auto-complete-v2', {
    query: { keyword: searchText },
  });

  const {
    data: rootSearchDataList,
    refresh: refreshRootSearchData,
    execute: executeRootSearchData,
    status: rootSearchRequestStatus,
  } = useDataFetcher<DataPaginationResponseType<Array<RootSearchDataType>>>('/basic-search/root', {
    query: { root: searchText },
  });

  const changeBasicSearchTypeHandler = (value: BasicSearchTypeEnum) => {
    keywordSearchDataList.value = null;
    basicSearchType.value = value;
  };

  const fetchKeywordSearchData = async () => {
    if (keywordSearchDataList.value) return await refreshKeywordSearchData();
    await executeKeywordSearchData();
  };

  const fetchRootSearchData = async () => {
    if (rootSearchDataList.value) return await refreshRootSearchData();
    await executeRootSearchData();
  };

  const setQueryValuesProerties = () => {
    basicSearchType.value =
      (useRoute().query.searchType?.toString() as BasicSearchTypeEnum) || BasicSearchTypeEnum.root;
    searchText.value = useRoute().query.searchKeyword?.toString() || '';
  };

  return {
    keywordSearchDataList,
    basicSearchType,
    searchText,
    keywordSearchRequestStatus,
    rootSearchDataList,
    rootSearchRequestStatus,
    changeBasicSearchTypeHandler,
    fetchKeywordSearchData,
    setQueryValuesProerties,
    fetchRootSearchData,
  };
});
