<template>
  <div class="relative">
    <p class="absolute -top-2 text-xs text-stone-400 bg-white capitalize">
      {{ $t('exam.filters') }}
    </p>
    <div class="flex items-center gap-1">
      <IconInfoCircle class="text-secondary text-lg" />
      <p class="font-semibold text-xs">
        <span class="text-primary/40">{{ $t('exam.forRandomQuestions') }} </span>
        <span class="text-secondary"> {{ $t('exam.leaveInputsEmpty') }} </span>
      </p>
    </div>
    <div class="flex flex-col gap-5 mt-5">
      <BaseInput type="text" :label-text="$t('exam.filterByRoot')" />
      <BaseDropdown
        v-model="selectedSearchType"
        :options="searchTypesList"
        :label-text="$t('exam.filterByRootType')"
        option-label="name"
      />
      <div class="flex items-center gap-1">
        <IconInfoCircle class="text-secondary text-lg" />
        <p class="font-semibold text-xs">
          <span class="text-primary/40"> {{ $t('exam.ifYouSelectValueMinIs') }} </span>
          <span class="text-secondary"> {{ $t('exam.one') }} </span>
        </p>
      </div>

      <div>
        <BaseInput type="text" label-text="Write Verb" />
        <div class="flex items-center gap-2 flex-wrap mt-3">
          <BaseTag v-for="x in 5" :key="x" class="!bg-neutral-400 text-white rounded-md py-3 px-8 text-center !text-sm">
            Katab
          </BaseTag>
        </div>
      </div>
      <div>
        <p class="font-bold text-sm">
          <span class="text-primary"> {{ $t('exam.totalSelectedVerbs') }} </span>
          <span class="text-secondary"> 5 </span>
        </p>
        <div class="flex items-center gap-2 flex-wrap mt-3">
          <BaseTag v-for="x in 5" :key="x" class="!bg-primary text-secondary rounded-md py-3 px-5 text-center">
            <div class="flex items-center gap-3 text-sm">
              <p>Katab</p>
              <BaseButton class="shadow-none"> <IconCloseCircle class="text-lg" filled /> </BaseButton>
            </div>
          </BaseTag>
        </div>
      </div>
    </div>
    <slot name="navigation" />
  </div>
</template>

<script setup lang="ts">
import IconInfoCircle from '@/assets/icons/info-circle.svg';
import IconCloseCircle from '@/assets/icons/closeCircle.svg';
import { BasicSearchTypeEnum } from '~/types/basic-search/basic-search.enum';

const { t } = useI18n();

const selectedSearchType = ref();

const searchTypesList = ref([
  { name: t('baseHeader.root'), code: BasicSearchTypeEnum.root },
  { name: t('baseHeader.keyword'), code: BasicSearchTypeEnum.keyword },
]);
</script>

_
