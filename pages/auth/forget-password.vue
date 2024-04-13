<template>
  <div class="text-center">
    <form class="flex flex-col mt-5">
      <BaseInput id="email" v-model="email" class="w-full" type="email" :label-text="$t('auth.emailAddress')" />

      <BaseButton class="bg-primary text-white py-3 mt-4 mb-12">
        {{ $t('auth.resetPassword') }}
      </BaseButton>
    </form>

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
const localePath = useLocalePath();

const email = ref('');

definePageMeta({
  layout: 'auth',
});
</script>
