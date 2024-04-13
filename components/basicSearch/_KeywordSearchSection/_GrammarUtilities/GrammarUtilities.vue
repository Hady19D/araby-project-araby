<template>
  <div class="my-3 mb-10">
    <p class="text-2xl font-medium capitalize text-primary">
      {{ sectionTitle }}
    </p>
    <div
      class="flex flex-col md:flex-row gap-3 items-center mt-4 justify-between border-b-2 border-dashed border-secondary py-3 pb-9"
      :class="{ ['!border-b-0']: lastItem }"
    >
      <div class="flex flex-wrap items-center gap-4 w-[70%]">
        <NuxtLink
          v-for="(resultItem, index) in keywordSearchData.results"
          :key="`resultItem${index}`"
          :to="{
            path: localePath(`/conjugations/${keywordSearchData.group.toLowerCase()}/${resultItem.value}`),
            query: { url: encodeToBase64(resultItem.url) },
          }"
        >
          <BaseTag>
            {{ resultItem.value }}
          </BaseTag>
        </NuxtLink>
      </div>

      <div class="text-xs font-medium uppercase text-secondary flex items-center gap-3 self-end">
        <p>
          <span> {{ $t('keywordSearch.total') }} </span>
          <span class="text-indigo-900"> 33 </span>
          <span> {{ $t('keywordSearch.word') }} </span>
        </p>
        <NuxtLink
          v-if="keywordSearchData.hasMore"
          :to="{
            path: localePath(`/keyword-search/${keywordSearchData.group.toLowerCase()}-${searchTextQuery}`),
            query: { searchKeyword: searchTextQuery, url: viewMorePath },
          }"
          class="flex items-center gap-2 text-indigo-900"
        >
          <span> {{ $t('keywordSearch.viewMore') }} </span>
          <BasePointingArrow />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { encodeToBase64 } from '~/helpers/base64Helpers';
import type { KeywordSearhSectionType } from '~/types/basic-search/basic-search.type';
import { ConjugationsLinguisticGroupTypeEnum } from '~/types/conjugations/conjugations.enum';

const localePath = useLocalePath();

const { t } = useI18n();

const searchTextQuery = useRoute().query.searchKeyword || '';

const props = defineProps<{ lastItem?: boolean; keywordSearchData: KeywordSearhSectionType }>();

const { lastItem, keywordSearchData } = toRefs(props);

const viewMorePath = computed(() => encodeToBase64(keywordSearchData.value.moreUrl));

const sectionTitle = computed(() => {
  switch (keywordSearchData.value.group) {
    case ConjugationsLinguisticGroupTypeEnum.activeVerb:
      return t('keywordSearch.active');
    case ConjugationsLinguisticGroupTypeEnum.passiveVerb:
      return t('keywordSearch.passive');
    case ConjugationsLinguisticGroupTypeEnum.noun:
      return t('keywordSearch.nouns');
    case ConjugationsLinguisticGroupTypeEnum.gerund:
      return t('keywordSearch.gerunds');
  }
});
</script>
