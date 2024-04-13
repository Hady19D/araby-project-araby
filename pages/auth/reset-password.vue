<template>
  <div class="w-full text-center">
    <form class="flex flex-col">
      <div class="relative">
        <BaseInput
          id="password"
          v-model="oldPassword"
          :type="showPasswordStatus ? 'text' : 'password'"
          :label-text="$t('auth.password')"
        />

        <div
          class="text-primary absolute top-2 rtl:left-0 ltr:right-0 flex flex-col justify-center cursor-pointer mx-4 text-xl p-1"
          @click="togglePasswordShowStatusHandler"
        >
          <IconEyeClose v-if="showPasswordStatus" />
          <IconEyeOpen v-else />
        </div>
      </div>
      <div class="relative mt-4">
        <BaseInput
          id="passwordConfrimation"
          v-model="oldPasswordConfrimation"
          :type="showPasswordConfirmationStatus ? 'text' : 'password'"
          :label-text="$t('auth.reenterNewPassword')"
        />

        <div
          class="text-primary absolute top-2 rtl:left-0 ltr:right-0 flex flex-col justify-center cursor-pointer mx-4 text-xl p-1"
          @click="togglePasswordConfirmationShowStatusHandler"
        >
          <IconEyeClose v-if="showPasswordConfirmationStatus" />
          <IconEyeOpen v-else />
        </div>
      </div>

      <BaseButton class="bg-primary text-white py-3 mt-5"> {{ $t('auth.save') }} </BaseButton>
    </form>

    <NuxtLink :to="localePath('/auth/login')" class="text-sm text-neutral-400 mt-14 block">
      <span> {{ $t('auth.alreadyHaveAccount') }} </span>
      <span class="text-secondary font-bold"> {{ $t('auth.logIn') }} </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const oldPassword = ref('');

const oldPasswordConfrimation = ref('');

const showPasswordStatus = ref(false);

const showPasswordConfirmationStatus = ref(false);

const togglePasswordShowStatusHandler = () => (showPasswordStatus.value = !showPasswordStatus.value);

const togglePasswordConfirmationShowStatusHandler = () =>
  (showPasswordConfirmationStatus.value = !showPasswordConfirmationStatus.value);

definePageMeta({
  layout: 'auth',
});
</script>
