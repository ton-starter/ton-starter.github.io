// plugins/wallet.client.ts
export default defineNuxtPlugin(async (_nuxtApp) => {
  const { init } = useWallet();

  // Инициализируем только на клиенте
  if (process.client) {
    await init();
  }
});
