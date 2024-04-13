<template>
  <div class="bg-primary rounded-xl p-3 w-full md:h-[670px] md:w-[400px] text-white flex flex-col justify-between">
    <ul class="flex flex-col">
      <li
        v-for="(sidebarItem, index) in sidebarItems"
        :key="`sidebar-item-${index}`"
        class="p-3 px-5 mb-1"
        :class="{ ['bg-white text-primary rounded-lg']: sidebarItem.active }"
      >
        <NuxtLink :to="sidebarItem.to" class="flex items-center justify-between">
          <p class="flex items-center gap-2">
            <component :is="sidebarItem.icon" v-if="sidebarItem.icon" class="text-xl" filled />
            <span>
              {{ sidebarItem.placeholder }}
            </span>
          </p>
          <span>
            <IconArrowRight class="text-secondary rtl:rotate-180" />
          </span>
        </NuxtLink>
      </li>
    </ul>
    <BaseButton
      class="flex items-center justify-center gap-2 !shadow-none text-center text-secondary w-full pb-3 mt-10"
    >
      <span> {{ $t('dashboardLayout.signOut') }} </span>
      <IconLogout filled />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import IconSettings from '@/assets/icons/settings.svg';
import IconDashboardChart from '@/assets/icons/dashboardChart.svg';
import IconArrowRight from '@/assets/icons/arrow-right.svg';
import IconLogout from '@/assets/icons/logout.svg';

const { t } = useI18n();

const localePath = useLocalePath();

const routeName = computed(() => useRoute().name?.toString() || '');

const sidebarItems = [
  {
    placeholder: t('dashboardLayout.dashboard'),
    icon: IconDashboardChart,
    active: routeName.value.includes('dashbaord'),
    to: localePath('/'),
  },
  {
    placeholder: t('dashboardLayout.accountSettings'),
    icon: IconSettings,
    active: routeName.value.includes('account-settings'),
    to: localePath('/'),
  },
  {
    placeholder: t('dashboardLayout.createExam'),
    active: routeName.value.includes('create-exam'),
    to: localePath('/dashboard/create-exam'),
  },
];
</script>
