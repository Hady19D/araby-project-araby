import { baseSearchQuadRootData, baseSearchTripleRootData } from '~/constants/root-search-constants';
import { useBasicSearchStore } from '~/store/basicSearch';
import { BasicSearchRootKindEnum, BasicSearchTypeEnum } from '~/types/basic-search/basic-search.enum';
import type { RootSearchVerbValueType } from '~/types/basic-search/basic-search.type';
import { DataResponseStatusEnum } from '~/types/common/common.enum';

export const useBasicSearchComposable = () => {
  const basiceSearchStore = useBasicSearchStore();

  const {
    basicSearchType,
    searchText,
    keywordSearchDataList,
    keywordSearchRequestStatus,
    rootSearchRequestStatus,
    rootSearchDataList,
  } = storeToRefs(basiceSearchStore);

  const responseLoadingStatus = computed(() => {
    const responseLoadingStatus =
      rootSearchRequestStatus.value === DataResponseStatusEnum.pending ||
      keywordSearchRequestStatus.value === DataResponseStatusEnum.pending;
    return responseLoadingStatus && Boolean(searchText.value);
  });

  const modifiedRootSearchDataList = computed(() => {
    return rootSearchDataList.value?.data.reduce((acc: Record<string, RootSearchVerbValueType>, item) => {
      const formulaNoGroup = item._id.formulaNoGroup;
      acc[formulaNoGroup] = item.verbs.reduce((verbAcc: any, verb) => {
        const key = verb.conjugation || verb.formula_no;
        verbAcc[key] = verb;
        return verbAcc;
      }, {});
      return acc;
    }, {});
  });

  const updatedBaseSearchTripleRootData = computed(() => {
    if (!rootSearchDataList.value?.data.length) return [];

    const rootDataStaticList =
      rootSearchDataList.value?.meta.root_kind === BasicSearchRootKindEnum.quad
        ? baseSearchQuadRootData
        : baseSearchTripleRootData;

    const modifiedRootSearchDataListValue = modifiedRootSearchDataList.value;
    if (modifiedRootSearchDataListValue) {
      return rootDataStaticList.map((section) => {
        const matchingData: any = modifiedRootSearchDataListValue[section.sectionType];

        if (!matchingData) return section;

        return {
          ...section,
          items: section.items.map((item) => {
            const verb: RootSearchVerbValueType = matchingData[item.indecator.toString()];
            if (!verb) return item;
            return {
              ...item,
              arabicValue: verb.arabic_display || '-',
              englishValue: '-', // TODO: integrate with the english value once the backend return it you.!
            };
          }),
        };
      });
    }
  });

  const emptyStateStatus = computed(() => {
    switch (basicSearchType.value) {
      case BasicSearchTypeEnum.root:
        return rootSearchDataList.value?.data && rootSearchDataList.value?.data.length >= 0;

      case BasicSearchTypeEnum.keyword:
        return keywordSearchDataList.value?.data && keywordSearchDataList.value?.data.length >= 0;

      default:
        return true;
    }
  });

  const getBasicSearchData = async (setQuryValues = true) => {
    if (setQuryValues) basiceSearchStore.setQueryValuesProerties();

    if (searchText.value) {
      switch (basicSearchType.value) {
        case BasicSearchTypeEnum.root:
          await basiceSearchStore.fetchRootSearchData();

          break;
        case BasicSearchTypeEnum.keyword:
          await basiceSearchStore.fetchKeywordSearchData();
          break;

        default:
          break;
      }
    }
  };

  return {
    keywordSearchDataList,
    basicSearchType,
    searchText,
    keywordSearchRequestStatus,
    updatedBaseSearchTripleRootData,
    rootSearchRequestStatus,
    responseLoadingStatus,
    emptyStateStatus,
    getBasicSearchData,
    changeBasicSearchTypeHandler: basiceSearchStore.changeBasicSearchTypeHandler,
  };
};
