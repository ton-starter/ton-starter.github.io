declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Optionally declare imports used by stories/tests
declare module '@storybook/vue3';
declare module '@vue/test-utils';
