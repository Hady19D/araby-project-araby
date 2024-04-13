<template>
  <PrimeDialog
    :visible="visibleStatus"
    :pt="{
      root: 'm-5 md:p-0 w-full md:w-[460px] overflow-hidden rounded-xl ltr:font-poppinsMedium rtl:font-jazeeraRegular',
    }"
    modal
    :closable="false"
    :dismissable-mask="true"
    :show-header="false"
    @update:visible="toggleDailogHandler"
  >
    <div class="mt-12">
      <div class="flex flex-col gap-4 items-center text-center">
        <img
          class="object-contain h-[150px]"
          src="@/assets/images/techny-standardized.webp"
          alt="techny-standardized"
        />
        <p class="text-secondary font-semibold">
          {{ $t('common.savedSuccessfully') }}
        </p>
        <p class="text-primary font-semibold text-2xl">
          {{ $t('exam.examSavedSuccessfully') }}
        </p>
        <p class="text-neutral-400 text-center">
          {{ $t('exam.modifyExamSettingsAnytime') }}
        </p>
        <NuxtLink to="/" class="bg-primary w-3/4 md:w-3/5 !rounded-md text-white py-4" @click="toggleDailogHandler">
          {{ $t('exam.myExamLibrary') }}
        </NuxtLink>
      </div>
    </div>
  </PrimeDialog>
</template>

<script setup lang="ts">
import PrimeDialog from 'primevue/dialog';

const props = defineProps<{ visibleStatus: boolean }>();

const { visibleStatus } = toRefs(props);

const emits = defineEmits(['toggleDialog']);

const toggleDailogHandler = () => {
  emits('toggleDialog');
};
</script>
