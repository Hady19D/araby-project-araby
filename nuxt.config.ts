// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: ['primevue/resources/themes/lara-light-green/theme.css', '@/assets/scss/main.scss'],

  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', 'nuxt-svgo', '@pinia/nuxt', '@nuxtjs/i18n'],

  primevue: {
    components: {
      prefix: 'Prime',
      include: [
        'Dropdown',
        'Paginator',
        'Checkbox',
        'Panel',
        'InputSwitch',
        'RadioButton',
      ] /* Used as <PrimeInputText /> */,
    },
    directives: {
      prefix: 'prime',
      include: ['Tooltip'] /* Used as v-primeripple and v-primetooltip */,
    },
  },

  svgo: {
    global: false,
    autoImportPath: false,
  },

  i18n: {
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'ar',
    strategy: 'prefix',
    locales: [
      {
        name: 'Arabic',
        code: 'ar',
        iso: 'ar',
        file: 'ar.json',
        dir: 'rtl',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en',
        file: 'en.json',
        dir: 'ltr',
      },
    ],
    defaultDirection: 'rtl',
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: '',
    },
  },

  vite: {
    plugins: [eslintPlugin()],
  },

  build: {
    transpile: ['primevue', 'tslib', 'ipx'],
  },
});
