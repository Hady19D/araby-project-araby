<template>
  <div class="flex flex-col mt-5">
    <BaseDropdown
      v-model="registerData.country"
      :options="searchTypesList"
      option-label="name"
      :label-text="$t('auth.country')"
      show-astric
    />
    <div class="grid grid-cols-2 gap-4 my-5">
      <BaseDropdown
        v-model="registerData.city"
        :options="searchTypesList"
        option-label="name"
        :label-text="$t('auth.city')"
        show-astric
      />
      <BaseDropdown
        v-model="registerData.area"
        :options="searchTypesList"
        option-label="name"
        :label-text="$t('auth.area')"
        show-astric
      />
    </div>

    <div v-if="registerData.role === RegisterRolesEnum.student">
      <BaseInput id="school_institutionName" class="mb-5" type="text" :label-text="$t('auth.schoolInstitutionName')" />
      <BaseInput id="grade_level" class="mb-5" type="text" :label-text="$t('auth.gradeLevel')" />
    </div>
    <div v-else-if="registerData.role === RegisterRolesEnum.teacher">
      <BaseInput id="university" class="mb-5" type="text" :label-text="$t('auth.selectFromOptions')" />

      <BaseDropdown
        class="mb-5"
        :options="searchTypesList"
        option-label="name"
        :label-text="$t('auth.teachingExperience')"
      />
    </div>

    <BaseInput
      id="phone_number"
      v-model="registerData.phoneNumber"
      class="mb-5"
      type="number"
      :label-text="$t('auth.phoneNumber')"
      show-astric
    />

    <BaseInput
      id="whatsApp_number"
      v-model="registerData.whatsNumber"
      class="mb-5"
      type="number"
      :label-text="$t('auth.whatsappNumber')"
      show-astric
    />

    <BaseCheckbox
      id="remember-me"
      v-model="checkboxValue"
      class="my-3"
      name="remember-me"
      :label-text="$t('auth.acceptTermsAndConditions')"
      :value="true"
    />

    <BaseButton class="bg-primary text-white py-3 mt-5"> {{ $t('auth.signUp') }} </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { RegisterRolesEnum } from '~/types/register/register.enum';
import type { RegisterDataType } from '~/types/register/register.type';

const { t } = useI18n();

const props = defineProps<{ registerData: RegisterDataType }>();

const { registerData } = toRefs(props);

const searchTypesList = ref([
  { name: t('baseHeader.root'), code: 'root' },
  { name: t('baseHeader.keyword'), code: 'keyword' },
]);

const checkboxValue = ref('');
</script>
