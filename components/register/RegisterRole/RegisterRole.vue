<template>
  <div>
    <p class="text-primary text-base font-medium my-5">
      {{ $t('auth.selectYourRole') }}
    </p>
    <div class="mt-5 flex items-center gap-3">
      <BaseButton
        class="w-full text-center font-medium shadow-none !py-4 border border-neutral-200 text-primary !rounded-2xl ease-in-out transition-all"
        :class="{ ['active-btn']: registerData.role === RegisterRolesEnum.student }"
        @click="registerData.role = RegisterRolesEnum.student"
      >
        {{ $t('auth.student') }}
      </BaseButton>
      <BaseButton
        class="w-full text-center font-medium shadow-none !py-4 border border-neutral-200 text-primary !rounded-2xl ease-in-out transition-all"
        :class="{ ['active-btn']: registerData.role === RegisterRolesEnum.teacher }"
        @click="registerData.role = RegisterRolesEnum.teacher"
      >
        {{ $t('auth.teacher') }}
      </BaseButton>
    </div>

    <BaseButton class="bg-primary text-white py-3 mt-20 w-full block" @click="switchTabHandler">
      {{ $t('common.next') }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { RegisterRolesEnum, RegisterTabsEnum } from '~/types/register/register.enum';
import type { RegisterDataType } from '~/types/register/register.type';

const emit = defineEmits(['switchTab']);

const props = defineProps<{ registerData: RegisterDataType }>();

const { registerData } = toRefs(props);

const switchTabHandler = () => {
  emit('switchTab', RegisterTabsEnum.extraData);
};
</script>

<style lang="scss" scoped>
.active-btn {
  @apply bg-secondary text-white border-0;
}
</style>
