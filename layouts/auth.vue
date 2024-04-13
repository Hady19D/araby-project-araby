<template>
  <div class="relative ltr:font-poppinsMedium rtl:font-jazeeraRegular my-14">
    <div class="z-20 relative">
      <div class="container flex items-center flex-col justify-center">
        <BaseLogo />
        <h1 class="text-primary text-4xl font-bold my-5">
          {{ activePageText?.title }}
        </h1>
        <p class="text-neutral-400 font-medium mb-5">
          {{ activePageText?.desc }}
        </p>
        <div class="bg-white/75 border border-neutral-100 rounded-lg mt-2 p-6 shadow-lg w-full md:w-[560px]">
          <slot />
        </div>
      </div>
    </div>
    <img
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h=[20rem] md:h-[30rem] z-10"
      src="@/assets/images/new-square-arabic-pattern-for-body.webp"
      alt="bg-main-letter-img"
    />
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n();

const mainTextList = [
  {
    title: t('auth.letsSignIn'),
    desc: t('auth.signInToYourAccount'),
    name: 'auth-login',
  },
  {
    title: t('auth.forgetPassword'),
    desc: t('auth.noWorriesInstructions'),
    name: 'auth-forget-password',
  },
  {
    title: t('auth.letsSignUp'),
    desc: t('auth.fillUpYourData'),
    name: 'auth-register',
  },
  {
    title: t('auth.letsSignUp'),
    desc: t('auth.verifyYourAccount'),
    name: 'auth-otp',
  },
  {
    title: t('auth.enterNewPassword'),
    desc: t('auth.setupNewPasswordReminder'),
    name: 'auth-reset-password',
  },
];

const route = useRoute();

const activePageText = computed(() => mainTextList.find((item) => route.name?.toString().includes(item.name)));

useHead({
  htmlAttrs: { dir: locale.value === 'ar' ? 'rtl' : 'ltr', lang: locale.value },
});
</script>
