<template>
  <form class="flex items-center flex-col md:flex-row gap-5 mt-9" @submit.prevent="getBasicSearchDataHandler">
    <input
      v-model="searchText"
      type="text"
      name="searchKeyword"
      class="bg-white rounded-xl py-3 px-3 font-jazeeraRegular w-full md:w-80 outline-none"
      placeholder="كتب"
      @keyup.enter="getBasicSearchDataHandler"
    />
    <PrimeDropdown
      :model-value="selectedSearchType"
      :options="searchTypesList"
      option-label="name"
      option-value="code"
      :pt="{
        root: 'bg-white h-full w-36 p-0 rounded-xl font-bold outline-none shadow-none',
        input: 'py-3 text-black',
      }"
      @change="selectedSearchTypeUpdateHandler"
    />
    <BaseButton class="bg-primary text-white !py-3 !px-10 uppercase" type="submit">
      {{ $t('common.search') }}
    </BaseButton>
  </form>
</template>

<script lang="ts" setup>
import type { DropdownChangeEvent } from 'primevue/dropdown';
import { BasicSearchTypeEnum } from '~/types/basic-search/basic-search.enum';

const { t } = useI18n();

const localePath = useLocalePath();

const { searchText, basicSearchType, changeBasicSearchTypeHandler, getBasicSearchData } = useBasicSearchComposable();

const searchTypesList = ref([
  { name: t('baseHeader.root'), code: BasicSearchTypeEnum.root },
  { name: t('baseHeader.keyword'), code: BasicSearchTypeEnum.keyword },
]);

const selectedSearchType = computed(() => basicSearchType.value);

const selectedSearchTypeUpdateHandler = (dropdownValue: DropdownChangeEvent) => {
  changeBasicSearchTypeHandler(dropdownValue.value);
};

const getBasicSearchDataHandler = async () => {
  useRouter().push({
    path: localePath('/basic-search'),
    query: { searchType: selectedSearchType.value, searchKeyword: searchText.value },
  });

  if (useRoute().name?.toString().includes('basic-search')) await getBasicSearchData(false);
};
</script>
