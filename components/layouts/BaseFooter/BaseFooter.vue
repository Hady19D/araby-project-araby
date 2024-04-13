<template>
  <footer
    class="container bg-primary my-0 md:my-8 rounded-2xl flex flex-col items-center text-center pt-20 gap-5 text-neutral-300 base-footer"
  >
    <img class="absolute h-72" src="~/assets/images/footerSecondBg.webp" alt="footer-second-img" />
    <BaseLogo class="my-4" light />
    <div class="flex flex-col items-center md:flex-row gap-2 text-3xl font-semibold text-center font-jazeeraBold">
      <p class="text-secondary">{{ $t('common.appName') }},</p>
      <p class="text-white">{{ $t('common.headerDesc') }}</p>
    </div>
    <p class="md:w-2/4">
      {{ $t('footer.mainDesc') }}
    </p>
    <ul class="flex items-center flex-col md:flex-row justify-center gap-5 md:gap-10 capitalize z-10">
      <li>
        <NuxtLink :to="localePath('/')"> {{ $t('navigation.home') }} </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/')"> {{ $t('footer.aboutLink') }} </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/')"> {{ $t('footer.ourServices') }} </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/')"> {{ $t('footer.termsAndConditions') }} </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/')"> {{ $t('footer.faq') }} </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/')"> {{ $t('footer.contactUs') }} </NuxtLink>
      </li>
    </ul>
    <ul class="flex items-center justify-center gap-5 capitalize my-3">
      <li>
        <a class="text-2xl text-secondary" href="/" target="_blank"> <IconFacebook /> </a>
      </li>
      <li>
        <a class="text-2xl text-secondary" href="/" target="_blank"> <IconInstagram /> </a>
      </li>
      <li>
        <a class="text-2xl text-secondary" href="/" target="_blank"> <IconX /> </a>
      </li>
      <li>
        <a class="text-2xl text-secondary" href="/" target="_blank"> <IconLinkedin /> </a>
      </li>
    </ul>

    <p class="mt-3 mb-5 text-sm">
      <span> {{ $t('footer.contactUs') }} </span>
      <span> ©{{ currentYear }} </span>
      <span class="mx-1"> {{ $t('footer.by') }} </span>
      <span> {{ $t('common.appName') }}. </span>
    </p>
  </footer>
</template>

<script lang="ts" setup>
import IconFacebook from '@/assets/icons/facebook.svg';
import IconInstagram from '@/assets/icons/instagram.svg';
import IconLinkedin from '@/assets/icons/linkedin.svg';
import IconX from '@/assets/icons/x.svg';

const localePath = useLocalePath();

const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.base-footer {
  background-image: url('/assets/images/footer-arabic-letters.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 125%;
  @apply bg-[length:100%] md:bg-[length:100%_125%];
}
</style>
