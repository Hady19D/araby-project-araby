import {
  activeAndPassiveFixedList,
  activeAndPassiveFixedTypes,
  gerundsAndNounsFixedList,
  gerundsFixedTypes,
  nounsFixedTypes,
} from '~/constants/verb-details-constants';
import { commonSetValuesFromFixedList } from '~/helpers/common.helper';
import { useVerbDetailsStore } from '~/store/verbDetails';
import {
  ConjugationsActivePassiveFixedTypeEnum,
  ConjugationsDisplayStyleEnum,
  ConjugationsGerundsFixedTypeEnum,
  ConjugationsLinguisticGroupTypeEnum,
  ConjugationsSortDisplayEnum,
} from '~/types/conjugations/conjugations.enum';
import type { ConjugationVerbActiveAndPassiveTypes } from '~/types/conjugations/conjugations.type';

export const useVerbDetails = () => {
  const route = useRoute();

  const verbDetailsStore = useVerbDetailsStore();

  const {
    verbDetailsData,
    activeDisplayStyle,
    activeTab,
    bottomTab,
    activeVerbAndPassiveActiveTabValueList,
    gerundsAndsNounsTabValue,
    secondLevelTab,
    gerundsAndsNounsSecondLevelTabs,
  } = storeToRefs(verbDetailsStore);

  const activeAndPassiveTypesList = ref(activeAndPassiveFixedTypes);

  const gerundsTypesList = ref(gerundsFixedTypes);

  const nounsTypesList = ref(nounsFixedTypes);

  const activeSortType = ref(ConjugationsSortDisplayEnum.row);

  const intialTabs = computed(() => {
    let tabsList: { key: string; label: string }[] = [];

    switch (route.params.conjugationType) {
      case ConjugationsLinguisticGroupTypeEnum.activeVerb.toLowerCase():
        tabsList = activeAndPassiveTypesList.value;
        break;
      case ConjugationsLinguisticGroupTypeEnum.passiveVerb.toLowerCase():
        tabsList = activeAndPassiveTypesList.value;
        break;

      case ConjugationsLinguisticGroupTypeEnum.noun.toLowerCase():
        tabsList = nounsTypesList.value;
        break;

      case ConjugationsLinguisticGroupTypeEnum.gerund.toLowerCase():
        tabsList = gerundsTypesList.value;
        break;

      default:
        tabsList = activeAndPassiveTypesList.value;
        break;
    }

    return tabsList.filter(
      (tabItem) => verbDetailsData.value?.types[tabItem.key as keyof ConjugationVerbActiveAndPassiveTypes],
    );
  });

  const activeAndPassiveList = computed(() => {
    return commonSetValuesFromFixedList(activeAndPassiveFixedList, activeVerbAndPassiveActiveTabValueList.value);
  });

  const modifiedGerundsAndsNounsTabValue = computed(() => {
    if (gerundsAndsNounsTabValue.value?.default) return gerundsAndsNounsTabValue.value?.default;
    return (
      gerundsAndsNounsTabValue.value && secondLevelTab?.value && gerundsAndsNounsTabValue.value[secondLevelTab.value]
    );
  });

  const gerundsAndsNounsDisplayedValues = computed(() => {
    if (bottomTab.value && modifiedGerundsAndsNounsTabValue.value)
      return modifiedGerundsAndsNounsTabValue.value[bottomTab.value];
  });

  const gerundsAndNounsList = computed(() => {
    return gerundsAndNounsFixedList;
  });

  const fetchVerbDetailsHandler = async () => {
    verbDetailsStore.updateApiUrl();
    updateActiveTabDepndingOnVerbType();
    await verbDetailsStore.executeVerbDetailsData();
  };

  const updateActiveTabDepndingOnVerbType = () => {
    const verbType = route.params.conjugationType;

    switch (verbType) {
      case ConjugationsLinguisticGroupTypeEnum.activeVerb.toLocaleLowerCase():
        verbDetailsStore.updateActiveDispalyType(ConjugationsDisplayStyleEnum.normalStyle);
        verbDetailsStore.changeActiveTabHandler(ConjugationsActivePassiveFixedTypeEnum.past);
        break;
      case ConjugationsLinguisticGroupTypeEnum.passiveVerb.toLocaleLowerCase():
        verbDetailsStore.updateActiveDispalyType(ConjugationsDisplayStyleEnum.normalStyle);
        verbDetailsStore.changeActiveTabHandler(ConjugationsActivePassiveFixedTypeEnum.past);
        break;
      case ConjugationsLinguisticGroupTypeEnum.gerund.toLocaleLowerCase():
        verbDetailsStore.updateActiveDispalyType(ConjugationsDisplayStyleEnum.cardsStyle);
        verbDetailsStore.changeActiveTabHandler(ConjugationsGerundsFixedTypeEnum.standards);

        break;
      case ConjugationsLinguisticGroupTypeEnum.noun.toLocaleLowerCase():
        verbDetailsStore.updateActiveDispalyType(ConjugationsDisplayStyleEnum.cardsStyle);
        verbDetailsStore.changeActiveTabHandler(ConjugationsGerundsFixedTypeEnum.standards);
        break;

      default:
        break;
    }
  };

  const updateSortTypeHandler = (sortStlye: ConjugationsSortDisplayEnum) => {
    activeSortType.value = sortStlye;
  };

  return {
    activeAndPassiveList,
    gerundsAndNounsList,
    activeAndPassiveTypesList,
    gerundsTypesList,
    nounsTypesList,
    verbDetailsData,
    activeTab,
    activeDisplayStyle,
    activeSortType,
    intialTabs,
    modifiedGerundsAndsNounsTabValue,
    bottomTab,
    secondLevelTab,
    gerundsAndsNounsDisplayedValues,
    gerundsAndsNounsSecondLevelTabs,
    fetchVerbDetailsHandler,
    changeActiveTabHandler: verbDetailsStore.changeActiveTabHandler,
    changeBottomTabHandler: verbDetailsStore.changeBottomTabHandler,
    changeSecondLevelTab: verbDetailsStore.changeSecondLevelTabHandler,
    updateSortTypeHandler,
  };
};
