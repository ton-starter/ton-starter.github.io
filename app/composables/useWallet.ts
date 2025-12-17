// composables/useWallet.ts
import type { TonConnectInstance } from '@/types-ton-connect';
import { getConnector } from '@/ton-connect';

export const useWallet = () => {
  const address = useState<string | null>('walletAddress', () => null);
  const tonConnect = ref<TonConnectInstance | null>(null);
  const isLoading = ref(false);

  const shortAddress = computed(() => {
    if (!address.value) return '👛 Подключить';
    return `${address.value.slice(0, 6)}...${address.value.slice(-4)}`;
  });

  const isConnected = computed(() => !!address.value);

  const extractAddress = (connector: TonConnectInstance): string | null => {
    const sources = [
      connector.account?.address,
      connector.wallet?.account?.address,
      connector.state?.account?.address,
      connector.walletInfo?.address,
      connector.walletInfo?.wallet?.address,
      connector.connector?._wallet?.address,
      connector.connector?._wallet?.account?.address,
      connector.modal?.connector?._wallet?.address,
      connector.modal?.connector?._wallet?.account?.address,
    ];

    return sources.find(Boolean) || null;
  };

  const setupEventListeners = (connector: TonConnectInstance) => {
    if (typeof connector.on !== 'function') return;

    connector.on('connect', (payload: any) => {
      const newAddress = payload?.account?.address || extractAddress(connector);
      if (newAddress) address.value = newAddress;
    });

    connector.on('disconnect', () => {
      address.value = null;
    });
  };

  const init = async (): Promise<void> => {
    if (process.client) {
      try {
        const connector = getConnector(null);

        if (!connector) {
          console.warn('TonConnect connector not available');
          return;
        }

        console.log('setupEventListeners');
        tonConnect.value = connector;
        setupEventListeners(connector);
        console.log('initialAddress');

        const initialAddress = extractAddress(connector);
        console.log(initialAddress);
        if (initialAddress) address.value = initialAddress;
      } catch (error) {
        console.error('Failed to initialize wallet:', error);
      }
    }
  };

  const connect = async (): Promise<void> => {
    if (isLoading.value) return;

    try {
      isLoading.value = true;

      if (!tonConnect.value) {
        await init();
        if (!tonConnect.value) {
          throw new Error('TonConnect UI не доступен');
        }
      }

      const connector = tonConnect.value;
      await connector.openModal();

      await connector.openUI();

      // Ждем подключения с таймаутом
      const connectedAddress = await waitForConnection();
      if (connectedAddress) address.value = connectedAddress;
    } catch (error) {
      console.error('Connection error:', error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  const waitForConnection = async (timeout = 15000): Promise<string | null> => {
    if (!tonConnect.value) return null;

    const start = Date.now();
    const pollInterval = 500;

    while (Date.now() - start < timeout) {
      const candidate = extractAddress(tonConnect.value);
      if (candidate) return candidate;

      await new Promise((resolve) => setTimeout(resolve, pollInterval));
    }

    return null;
  };

  const disconnect = (): void => {
    try {
      const connector = tonConnect.value;
      if (typeof connector?.disconnect === 'function') {
        connector.disconnect();
      } else if (typeof connector?.clear === 'function') {
        connector.clear();
      }
    } catch (error) {
      console.warn('Disconnect failed:', error);
    } finally {
      address.value = null;
      tonConnect.value = null;
    }
  };

  const toggleConnection = (): void => {
    if (isConnected.value) {
      disconnect();
    } else {
      connect();
    }
  };

  return {
    // State
    address: readonly(address),
    shortAddress,
    isConnected,
    isLoading,

    // Actions
    init,
    connect,
    disconnect,
    toggleConnection,
  };
};
