import { resolve } from 'path';
import __BUILD_TIME__ from './app/buildTime.js';
import appSEO from './data/seo.json';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  srcDir: './app',
  alias: {
    '@': resolve(__dirname, './app'),
    '~~': resolve(__dirname, './'),
  },
  rootDir: __dirname,

  app: {
    head: appSEO,
  },

  css: ['~/assets/styles/global.scss'],

  modules: ['@nuxt/test-utils', '@element-plus/nuxt', '@nuxtjs/i18n'],

  elementPlus: {
    importStyle: 'scss',
  },

  components: [
    {
      path: '~/components/shared',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '~/components/entities',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '~/components/features',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '~/components/widgets',
      pattern: '**/*.vue',
      prefix: '',
    },
  ],

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || '',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
    },
  },

  devServer: {
    port: 3030,
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        paths: {
          '@/*': ['./app/*'],
        },
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/global/_variables.scss" as *;
          `,
        },
      },
    },
    define: {
      __BUILD_TIME__,
    },
  },

  i18n: {
    vueI18n: '~/providers/i18n/i18n.config.ts',
    defaultLocale: 'ru',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
});
