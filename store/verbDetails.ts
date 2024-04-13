import { decodeFromBase64 } from '~/helpers/base64Helpers';
import {
  ConjugationGerundAndNounValuesEnum,
  ConjugationGerundsSecondLevelTypeEnum,
  type ConjugationsActivePassiveFixedTypeEnum,
  type ConjugationsGerundsFixedTypeEnum,
} from '~/types/conjugations/conjugations.enum';
import type {
  VerbDetailsActiveTabType,
  VerbDetailsResponseType,
  VerbGerundAndNounValueType,
  VerbTypeDetail,
} from '~/types/conjugations/conjugations.type';

export const useVerbDetailsStore = defineStore('useVerbDetailsStore', () => {
  const apiUrl = ref();

  const activeDisplayStyle = ref();

  const activeTab = ref<VerbDetailsActiveTabType>();

  const bottomTab = ref<ConjugationGerundAndNounValuesEnum>(ConjugationGerundAndNounValuesEnum.definiteNouns);

  const secondLevelTab = ref<ConjugationGerundsSecondLevelTypeEnum>();

  const { data: verbDetailsData, execute: executeVerbDetailsData } = useDataFetcher<VerbDetailsResponseType>(apiUrl);

  const activeVerbAndPassiveActiveTabValueList = computed<Array<VerbTypeDetail>>(() => {
    const activeTabValue = activeTab.value as keyof typeof ConjugationsActivePassiveFixedTypeEnum;
    return (activeTabValue && verbDetailsData.value?.types[activeTabValue]) || [];
  });

  const gerundsAndsNounsTabValue = computed<VerbGerundAndNounValueType | undefined>(() => {
    const activeTabValue = activeTab.value as keyof typeof ConjugationsGerundsFixedTypeEnum;
    return activeTabValue && verbDetailsData.value?.types[activeTabValue];
  });

  const gerundsAndsNounsSecondLevelTabs = computed(() => {
    if (gerundsAndsNounsTabValue.value && !gerundsAndsNounsTabValue.value?.default) {
      return Object.keys(gerundsAndsNounsTabValue.value);
    }
  });

  const updateApiUrl = () => {
    apiUrl.value = decodeFromBase64(useRoute().query.url?.toString() || '');
  };

  const updateActiveDispalyType = (styleType: string) => {
    activeDisplayStyle.value = styleType;
  };

  const changeActiveTabHandler = (activeTabType: VerbDetailsActiveTabType) => {
    activeTab.value = activeTabType;
    if (gerundsAndsNounsSecondLevelTabs.value?.length)
      changeSecondLevelTabHandler(gerundsAndsNounsSecondLevelTabs.value[0] as ConjugationGerundsSecondLevelTypeEnum);
  };

  const changeBottomTabHandler = (activeTabType: ConjugationGerundAndNounValuesEnum) => {
    bottomTab.value = activeTabType;
  };

  const changeSecondLevelTabHandler = (activeTabType: ConjugationGerundsSecondLevelTypeEnum) => {
    secondLevelTab.value = activeTabType;
  };

  return {
    verbDetailsData,
    apiUrl,
    activeDisplayStyle,
    activeTab,
    activeVerbAndPassiveActiveTabValueList,
    gerundsAndsNounsTabValue,
    bottomTab,
    secondLevelTab,
    gerundsAndsNounsSecondLevelTabs,
    executeVerbDetailsData,
    updateApiUrl,
    updateActiveDispalyType,
    changeActiveTabHandler,
    changeBottomTabHandler,
    changeSecondLevelTabHandler,
  };
});
