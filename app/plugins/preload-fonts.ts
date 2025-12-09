// app/plugins/preload-fonts.ts
import MontserratBold from '~/assets/fonts/Montserrat/Montserrat-Bold.woff2?url';
import MontserratLight from '~/assets/fonts/Montserrat/Montserrat-Light.woff2?url';
import MontserratRegular from '~/assets/fonts/Montserrat/Montserrat-Regular.woff2?url';
import MontserratSemiBold from '~/assets/fonts/Montserrat/Montserrat-SemiBold.woff2?url';

export default defineNuxtPlugin(() => {
  useHead({
    link: [
      {
        rel: 'preload',
        href: MontserratBold,
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: MontserratLight,
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: MontserratRegular,
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: MontserratSemiBold,
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    ],
  });
});
