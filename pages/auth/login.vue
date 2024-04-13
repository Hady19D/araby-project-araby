<template>
  <div class="text-center">
    <p class="text-primary text-base font-medium">
      {{ $t('auth.signInWithYourSocial') }}
    </p>
    <div class="flex justify-around items-center flex-col md:flex-row gap-7 mt-3">
      <BaseButton class="bg-amber-300/10 flex items-center gap-3 text-xs font-medium shadow-none !p-3 !px-6">
        <GoogleImage class="text-lg" filled />
        <span>
          {{ $t('auth.continueWithGoogle') }}
        </span>
      </BaseButton>
      <BaseButton class="bg-amber-300/10 flex items-center gap-3 text-xs font-medium shadow-none !p-3 !px-6">
        <FacebookImage class="text-lg" filled />

        <span>
          {{ $t('auth.continueWithFacebook') }}
        </span>
      </BaseButton>
    </div>
    <div class="bg-zinc-100 h-0.5 rounded-lg my-9"></div>

    <form class="flex flex-col">
      <BaseInput id="email" v-model="email" class="mb-4" type="email" :label-text="$t('auth.emailAddress')" />
      <div class="relative">
        <BaseInput
          id="password"
          v-model="password"
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

      <NuxtLink
        :to="localePath('/auth/forget-password')"
        class="text-stone-400 flex items-center gap-1 self-end mt-4 text-xs underline"
      >
        <IconDanger class="text-base" />
        <span class="text-xs">
          {{ $t('auth.forgetPassword') }}
        </span>
      </NuxtLink>

      <BaseCheckbox
        id="remember-me"
        v-model="rememberMeValue"
        class="my-3"
        name="remember-me"
        :label-text="$t('auth.rememberMe')"
        :value="true"
      />

      <BaseButton class="bg-primary text-white py-3 mt-5">
        {{ $t('auth.logIn') }}
      </BaseButton>
    </form>

    <NuxtLink :to="localePath('/auth/register')" class="text-sm text-neutral-400 mt-5 block">
      <span>
        {{ $t('auth.dontHaveAccount') }}
      </span>
      <span class="text-secondary font-bold mx-1">
        {{ $t('auth.signUp') }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import IconDanger from '@/assets/icons/danger.svg';
import IconEyeOpen from '@/assets/icons/eyeOpen.svg';
import IconEyeClose from '@/assets/icons/eyeClose.svg';
import GoogleImage from '@/assets/icons/google.svg';
import FacebookImage from '@/assets/icons/facebookBlue.svg';

const localePath = useLocalePath();

const email = ref('');

const password = ref('');

const showPasswordStatus = ref(false);

const rememberMeValue = ref(false);

const togglePasswordShowStatusHandler = () => (showPasswordStatus.value = !showPasswordStatus.value);

definePageMeta({
  layout: 'auth',
});
</script>
