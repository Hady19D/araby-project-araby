<template>
  <div>
    <div class="border-b border-secondary/37">
      <div class="container">
        <div class="flex flex-col md:flex-row items-center justify-between pt-5 pb-2">
          <!-- <div class="cols-span-2 bg-transparent w-full relative flex items-center gap-2 py-1.5 px-2 rounded-lg">
            <IconSearch class="text-neutral-400" />
            <BaseInput class="w-full" :placeholder="$t('navigation.inputPlaceholder')" />
          </div> -->

          <div class="flex items-center gap-3">
            <NavigationProfile />
            <NavigationNotifications />
          </div>

          <BaseLogo />

          <NavigationLangDropdown />
        </div>
      </div>
    </div>

    <div class="py-4 hidden md:block">
      <ul class="container flex justify-center items-end gap-10 text-slate-700">
        <li v-for="item in navigationList" :key="`navigationList_item_${item.path}`" class="relative">
          <div v-if="item.active" class="absolute w-full h-full bg-transparent"></div>
          <NuxtLink
            :to="localePath(item.path)"
            class="flex flex-col items-center"
            :class="{ ['text-secondary font-bold']: item.active }"
          >
            <component :is="item.icon" v-if="item.icon" filled />
            <span>
              {{ item.label }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// import IconSearch from '@/assets/icons/Union.svg';
import IconQuranIndonesia from '@/assets/icons/al-quran-indonesia.svg';

const { t } = useI18n();

const localePath = useLocalePath();

const route = useRoute();

const navigationList = computed(() => [
  {
    label: t('navigation.home'),
    active: route.name?.toString().includes('index'),
    path: '/',
  },
  {
    label: t('navigation.quran'),
    active: route.name?.toString().includes('quran'),
    icon: IconQuranIndonesia,
    path: '/',
  },
  {
    label: t('navigation.conjugations'),
    active: route.name?.toString().includes('conjugations'),
    path: '/',
  },
  {
    label: t('navigation.regularSearch'),
    active: route.name?.toString().includes('basic-search'),
    path: '/basic-search',
  },
  {
    label: t('navigation.advancedSearch'),
    active: route.name?.toString().includes('advancedSearch'),
    path: '/advanced-search',
  },
  {
    label: t('navigation.createExams'),
    active: route.name?.toString().includes('createExams'),
    path: '/',
  },
  {
    label: t('footer.contactUs'),
    active: route.name?.toString().includes('contactUs'),
    path: '/',
  },
]);
</script>
