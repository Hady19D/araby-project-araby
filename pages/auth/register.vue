<template>
  <div class="w-full text-center">
    <RegisterTabsHeader :tabs="tabs" :active-tab="activeTab" @switch-tab="switchActiveTabHandler" />

    <Transition name="fade" mode="out-in">
      <component :is="activeComponent" :register-data="registerData" @switch-tab="switchActiveTabHandler"></component>
    </Transition>

    <NuxtLink :to="localePath('/auth/login')" class="text-sm text-neutral-400 mt-5 block">
      <span>
        {{ $t('auth.alreadyHaveAccount') }}
      </span>
      <span class="text-secondary font-bold mx-1">
        {{ $t('auth.logIn') }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { RegisterRolesEnum, RegisterTabsEnum } from '~/types/register/register.enum';
import type { RegisterDataType } from '~/types/register/register.type';
import RegisterForm from '~/components/register/RegisterForm/RegisterForm.vue';

const RegisterRole = defineAsyncComponent(() => import('~/components/register/RegisterRole/RegisterRole.vue'));

const RegisterExtraData = defineAsyncComponent(
  () => import('~/components/register/RegisterExtraData/RegisterExtraData.vue'),
);

const localePath = useLocalePath();

const activeComponent = shallowRef(RegisterForm);

const activeTab = ref<RegisterTabsEnum>(RegisterTabsEnum.registerForm);

const registerData = ref<RegisterDataType>({
  name: '',
  email: '',
  password: '',
  password_confrimation: '',
  role: RegisterRolesEnum.student,
  country: '',
  city: '',
  area: '',
  phoneNumber: '',
  whatsNumber: '',
});

const tabs = ref<Array<RegisterTabsEnum>>([
  RegisterTabsEnum.registerForm,
  RegisterTabsEnum.selectRole,
  RegisterTabsEnum.extraData,
]);

const switchActiveTabHandler = (tab: RegisterTabsEnum) => {
  activeTab.value = tab;
  switch (tab) {
    case RegisterTabsEnum.registerForm:
      activeComponent.value = RegisterForm;
      break;
    case RegisterTabsEnum.selectRole:
      activeComponent.value = RegisterRole;
      break;
    case RegisterTabsEnum.extraData:
      activeComponent.value = RegisterExtraData;
      break;
    default:
      activeComponent.value = RegisterForm;
      break;
  }
};

switchActiveTabHandler(activeTab.value);

definePageMeta({
  layout: 'auth',
});
</script>
