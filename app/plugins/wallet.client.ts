export default defineNuxtPlugin(async (_nuxtApp) => {
  const { init } = useWallet();
  await init();
});
