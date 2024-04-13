<template>
  <div class="container">
    <header class="flex flex-col items-center bg-secondary bg-opacity-10 py-16 rounded-xl mt-5">
      <p v-if="activePageText?.smallTitle" class="text-sm font-semibold text-primary mb-2">
        {{ activePageText.smallTitle }}
      </p>
      <h1 class="flex flex-col items-center md:flex-row gap-2 text-3xl font-semibold text-center">
        <p class="text-primary">{{ $t('common.appName') }},</p>
        <p class="text-secondary">
          {{ activePageText?.subTitle }}
        </p>
      </h1>
      <component :is="activePageText?.component" v-if="activePageText?.component" />
    </header>
  </div>
</template>

<script setup lang="ts">
const BasicSearchForm = defineAsyncComponent(() => import('~/components/layouts/BaseHeader/_BasicSearchForm.vue'));

const AdvLettersFilter = defineAsyncComponent(
  () => import('~/components/layouts/BaseHeader/_AdvSearchFilres/_AdvLettersFilter.vue'),
);
const CreateExamBreadcrumb = defineAsyncComponent(
  () => import('~/components/layouts/BaseHeader/_CreateExamBreadcrumb.vue'),
);

const route = useRoute();

const { t } = useI18n();

const mainTextList = [
  {
    subTitle: t('common.headerDesc'),
    regexRoutes: /(basic-search|conjugations|keyword-search)/,
    component: BasicSearchForm,
  },
  {
    subTitle: t('common.headerDesc'),
    regexRoutes: /(advanced-search)/,
    component: AdvLettersFilter,
  },
  {
    subTitle: t('common.toArabyExamGenerator'),
    smallTitle: t('common.examGenerator'),
    regexRoutes: /(create-exam)/,
    component: CreateExamBreadcrumb,
  },
];

const currentRouteName = computed(() => route.name);

const activePageText = computed(() =>
  mainTextList.find((item) => item.regexRoutes.test(currentRouteName.value?.toString() || '')),
);
</script>
