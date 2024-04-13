<template>
  <div class="mx-3 flex items-center">
    <IconLanguage class="text-2xl text-white !mb-0" filled />
    <PrimeDropdown
      :model-value="selectedLanguage"
      :options="locales"
      option-label="name"
      option-value="code"
      :pt="{
        root: 'outline-none shadow-none bg-transparent h-full p-0 rounded-xl ',
        input: 'px-1 text-black',
      }"
      @change="changeLanguageHandler"
    >
      <template #value>
        <p class="flex items-center gap-1 font-jazeeraRegular">
          <span>
            {{ selectedLanguageName }}
          </span>
          <img class="w-5 h-5 rounded-full object-cover mx-0.5" :src="selectedLanguageFlag" alt="language-icon" />
        </p>
      </template>
    </PrimeDropdown>
  </div>
</template>
<script lang="ts" setup>
import IconLanguage from '@/assets/icons/newLanguageIcon.svg';
import { LanguagesLocalEnum } from '~/types/languages/languages.enum';
import SaudiArabiaFlag from '@/assets/images/saudiArabiaFlag.webp';
import USFlag from '@/assets/images/USFlag.webp';

const switchLocalePath = useSwitchLocalePath();

const { locales, locale, t } = useI18n();

const selectedLanguage = ref(locale.value);

const selectedLanguageName = computed(() => {
  const languagesNames: Record<string, string> = {
    [LanguagesLocalEnum.arabic]: t('common.arabic'),
    [LanguagesLocalEnum.english]: 'English',
  };

  return languagesNames[selectedLanguage.value];
});

const selectedLanguageFlag = computed(() => {
  switch (selectedLanguage.value) {
    case LanguagesLocalEnum.arabic:
      return SaudiArabiaFlag;
    case LanguagesLocalEnum.english:
      return USFlag;
    default:
      return SaudiArabiaFlag;
  }
});

const changeLanguageHandler = ({ value }: { value: string }) => {
  selectedLanguage.value = value;
  navigateTo(switchLocalePath(value));
  useHead({
    htmlAttrs: { dir: value === LanguagesLocalEnum.arabic ? 'rtl' : 'ltr', lang: value },
  });
};
</script>
