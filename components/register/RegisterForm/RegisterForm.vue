<template>
  <div>
    <p class="text-primary text-base font-medium my-5">
      {{ $t('auth.signInWithYourSocial') }}
    </p>

    <div class="flex justify-around items-center flex-col md:flex-row gap-7 my-3 mb-8">
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

    <form class="flex flex-col">
      <BaseInput
        id="name"
        v-model="fullName"
        v-bind="fullNameAttrs"
        class="mb-4"
        type="text"
        :label-text="$t('auth.fullName')"
        :error-text="errors.fullName"
      />
      <BaseInput
        id="email"
        v-model="email"
        v-bind="emailAttrs"
        class="mb-4"
        type="email"
        :label-text="$t('auth.emailAddress')"
        :error-text="errors.email"
      />
      <div class="relative mb-4">
        <BaseInput
          id="password"
          v-model="password"
          input-class="flex w-1/4 md:!w-2/4"
          :label-text="$t('auth.password')"
          :type="showPasswordStatus ? 'text' : 'password'"
          :error-text="errors.password"
        />

        <div class="absolute top-3.5 rtl:left-12 ltr:right-12 flex items-center gap-2">
          <div class="flex items-center gap-1">
            <div
              v-for="barCount in 3"
              :key="`passwordStrength${barCount}`"
              :class="{ ['bg-primary']: passwordStrength.level >= barCount }"
              class="w-6 h-1 bg-neutral-200 rounded-xl"
            ></div>
          </div>
          <p class="font-semibold text-xs uppercase mx-1 text-primary">
            {{ passwordStrength.label }}
          </p>
        </div>

        <div
          class="text-primary absolute top-2 rtl:left-0 ltr:right-0 flex flex-col justify-center cursor-pointer mx-4 text-xl p-1"
          @click="togglePasswordShowStatusHandler"
        >
          <IconEyeClose v-if="showPasswordStatus" />
          <IconEyeOpen v-else />
        </div>
      </div>

      <BaseInput
        id="password"
        v-model="confirmPassword"
        v-bind="confirmPassworddAttrs"
        type="password"
        input-class="flex w-1/4 md:!w-2/4"
        :label-text="$t('auth.passwordConfirmation')"
        :error-text="errors.confirmPassword"
      />

      <div class="mt-4 flex flex-col gap-1.5">
        <p
          v-for="(passwordRule, index) in passwordDisplayedStrengthRules"
          :key="`passwordRule_${index}`"
          class="flex items-center gap-1 text-slate-400"
          :class="{ ['!text-emerald-400 ']: passwordRule.status }"
        >
          <IconCheckMark
            class="stroke-slate-400 text-white"
            :class="{ ['!stroke-emerald-400']: passwordRule.status }"
          />
          <span class="text-xs">
            {{ passwordRule.placeholder }}
          </span>
        </p>
      </div>

      <BaseButton
        class="bg-primary text-white py-3 mt-5 disabled:bg-gray-400"
        :disabled="!submitButtonStatus"
        @click="onSubmitHandler"
      >
        {{ $t('common.next') }}
      </BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import IconEyeOpen from '@/assets/icons/eyeOpen.svg';
import IconEyeClose from '@/assets/icons/eyeClose.svg';
import GoogleImage from '@/assets/icons/google.svg';
import FacebookImage from '@/assets/icons/facebookBlue.svg';
import IconCheckMark from '@/assets/icons/checkCircle.svg';

const lowStrengthPassword = /^.{8,}$/;

const mediumStrengthPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const strongStrengthPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{12,}$/;

const { t } = useI18n();

const showPasswordStatus = ref(false);

const { errors, handleSubmit, defineField, meta } = useForm({
  validationSchema: yup.object({
    fullName: yup.string().required(t('errors.fieldIsRequired')),
    email: yup.string().email(t('errors.emailInvalid')).required(t('errors.fieldIsRequired')),
    password: yup
      .string()
      .min(8, t('errors.passwordMinError'))
      .max(12, t('errors.passwordMaxError'))
      .required(t('errors.fieldIsRequired')),
    confirmPassword: yup
      .string()
      .required(t('errors.fieldIsRequired'))
      .oneOf([yup.ref('password')], t('errors.passwordConfirmationError')),
  }),
});

const [fullName, fullNameAttrs] = defineField('fullName');

const [email, emailAttrs] = defineField('email');

const [password] = defineField('password');

const [confirmPassword, confirmPassworddAttrs] = defineField('confirmPassword');

const passwordStrength = computed(() => {
  const passwordText = password.value;
  if (passwordText) {
    switch (true) {
      case strongStrengthPassword.test(passwordText):
        return {
          label: t('auth.strong'),
          level: 3,
        };
      case mediumStrengthPassword.test(passwordText):
        return {
          label: t('auth.medium'),
          level: 2,
        };
      case lowStrengthPassword.test(passwordText):
        return {
          label: t('auth.low'),
          level: 1,
        };
    }
  }
  return {
    label: t('auth.low'),
    level: 0,
  };
});

const passwordDisplayedStrengthRules = computed(() => {
  return [
    {
      placeholder: t('auth.characterLimit'),
      status: passwordStrength.value.level >= 1,
    },
    {
      placeholder: t('auth.includeUppercase'),
      status: passwordStrength.value.level >= 2,
    },
    {
      placeholder: t('auth.includeLowercase'),
      status: passwordStrength.value.level >= 2,
    },
    {
      placeholder: t('auth.includeSpecialChars'),
      status: passwordStrength.value.level >= 3,
    },
  ];
});

const submitButtonStatus = computed(() => {
  return meta.value.valid && passwordStrength.value.level >= 2;
});

const togglePasswordShowStatusHandler = () => (showPasswordStatus.value = !showPasswordStatus.value);

const onSubmitHandler = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
