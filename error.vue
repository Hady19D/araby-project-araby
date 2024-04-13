<template>
  <div class="relative font-jazeeraRegular">
    <div class="z-20 relative">
      <Navigation />
      <div class="container">
        <div class="mt-28 flex flex-col items-center justify-center">
          <component :is="currentStatus?.icon" class="text-9xl" filled />
          <h1 class="text-9xl font-bold flex items-center gap-10 text-primary">
            <p
              v-for="(errorStatusNum, index) in errorStatusCode"
              :key="`errorStatusNum_${index}`"
              :class="{ ['text-secondary']: index == 1 }"
            >
              {{ errorStatusNum }}
            </p>
          </h1>
          <p class="text-2xl text-secondary">
            {{ currentStatus?.text }}
          </p>
          <NuxtLink
            :to="localePath('/')"
            class="bg-secondary rounded-xl text-center font-semibold text-white !p-4 !px-20 mt-10"
          >
            {{ $t('errors.takeMeToHomePage') }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <img
      class="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h=[20rem] md:h-[30rem] z-10"
      src="@/assets/images/new-square-arabic-pattern-for-body.webp"
      alt="bg-main-letter-img"
    />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';
import IconFileRemove from '@/assets/icons/fileRemove.svg';
import IconStack from '@/assets/icons/stackIcon.svg';
import IconLockPasswordUnlocked from '@/assets/icons/lockPasswordUnlocked.svg';

const localePath = useLocalePath();

const { t } = useI18n();

const props = defineProps<{ error: NuxtError }>();

const { error } = toRefs(props);

const errorStatusCode = computed(() => error.value?.statusCode?.toString().split(''));

const currentStatus = computed(() => {
  switch (error.value?.statusCode) {
    case 404:
      return {
        text: t('errors.pageNotFoundError'),
        icon: IconFileRemove,
      };
    case 403:
      return {
        text: t('errors.permissionDeniedError'),
        icon: IconLockPasswordUnlocked,
      };
    case 500:
      return {
        text: t('errors.permissionDeniedError'),
        icon: IconStack,
      };

    default:
      break;
  }
});
</script>
