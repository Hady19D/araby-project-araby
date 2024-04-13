<template>
  <PrimeDialog
    :visible="visibleStatus"
    :pt="{
      root: 'p-0 w-[560px] overflow-hidden rounded-xl',
      header: 'bg-primary p-4 text-secondary justify-center',
    }"
    modal
    :closable="false"
    :dismissable-mask="true"
    @update:visible="toggleDailogHandler"
  >
    <template #header>
      <p class="text-center text-sm flex gap-1 items-center">
        <span>{{ $t('conjugations.wordNote') }}</span>
        <span class="text-white">" Wrote "</span>
        <span>!?</span>
        <span>{{ $t('conjugations.sendNote') }}</span>
      </p>
    </template>
    <div class="mt-12">
      <div class="flex flex-col gap-4">
        <BaseInput id="fullName" v-model="reportDialogData.fullName" type="text" label-text="Full name" float-label />
        <BaseInput
          id="phoneNumber"
          v-model="reportDialogData.phoneNumber"
          type="phone"
          label-text="Phone number"
          float-label
        />
        <BaseInput id="email" v-model="reportDialogData.email" type="email" label-text="Email" float-label />

        <BaseTextArea v-model="reportDialogData.comment" label-text="Your Comment" />
      </div>

      <BaseButton class="bg-primary text-secondary py-4 w-full uppercase font-medium text-sm !rounded-xl mt-5 my-2">
        {{ $t('common.send') }}
      </BaseButton>
    </div>
  </PrimeDialog>
</template>

<script setup lang="ts">
import PrimeDialog from 'primevue/dialog';

const emits = defineEmits(['toggleDialog']);

const props = defineProps<{ visibleStatus: boolean }>();

const { visibleStatus } = toRefs(props);

const reportDialogData = ref({
  fullName: '',
  phoneNumber: '',
  email: '',
  comment: '',
});

const toggleDailogHandler = () => {
  emits('toggleDialog');
};
</script>
