import type { DataResponseType } from './../types/common/common.type';
import type { KeywordResultItemType } from '~/types/keyword-result/keyword-result.type';

import { decodeFromBase64 } from '~/helpers/base64Helpers';

export const useKeywordViewMoreStore = defineStore('useKeywordViewMoreStore', () => {
  const apiUrl = ref();

  // TODO: Add the pagination for the keyword result payload
  const { data: keywordResultDataList, execute: excuteViewMoreKeywordSearchData } =
    useDataFetcher<DataResponseType<Array<KeywordResultItemType>>>(apiUrl);

  const updateApiUrl = () => {
    apiUrl.value = decodeFromBase64(useRoute().query.url?.toString() || '');
  };

  const fetchViewMoreKeywordSearchData = async () => {
    updateApiUrl();
    await excuteViewMoreKeywordSearchData();
  };

  return { keywordResultDataList, updateApiUrl, fetchViewMoreKeywordSearchData };
});
