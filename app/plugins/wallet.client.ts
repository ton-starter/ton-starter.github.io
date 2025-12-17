export default defineNuxtPlugin(async (_nuxtApp) => {
  const { init } = useWallet();

  if (process.client) {
    await init();
  }
});
