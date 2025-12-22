import type { TonConnectUI, Wallet } from '@tonconnect/ui';
import type { Account } from '@tonconnect/sdk';
import { getTonConnectUI } from '@/ton-connect';

// Типизация для безопасности
interface WalletState {
  address: string | null;
  account: Account | null;
  walletInfo: Wallet | null;
  isConnected: boolean;
  isLoading: boolean;
}

export const useWallet = () => {
  // Используем единый реактивный объект состояния
  const state = useState<WalletState>('wallet-state', () => ({
    address: null,
    account: null,
    walletInfo: null,
    isConnected: false,
    isLoading: false,
  }));

  // const tonConnectUI = ref<TonConnectUI | null>(null);
  const tonConnectUI = ref<any>(null);

  // Компьютеды на основе состояния
  const shortAddress = computed(() => {
    if (!state.value.address) return '👛 Подключить';
    return `${state.value.address.slice(0, 6)}...${state.value.address.slice(
      -4,
    )}`;
  });

  const isConnected = computed(() => state.value.isConnected);
  const address = computed(() => state.value.address);
  const account = computed(() => state.value.account);
  const walletInfo = computed(() => state.value.walletInfo);
  const isLoading = computed(() => state.value.isLoading);

  // Безопасное извлечение адреса из аккаунта
  const getAddressFromAccount = (
    account: Account | null | undefined,
  ): string | null => {
    if (!account?.address) return null;

    try {
      const address = account.address;

      return address;
    } catch {
      return null;
    }
  };

  // Обработчики событий TonConnect
  const setupEventListeners = (ui: TonConnectUI) => {
    // Обработка подключения
    ui.onStatusChange((walletInfo) => {
      if (walletInfo) {
        const address = getAddressFromAccount(walletInfo.account);

        state.value = {
          address,
          account: walletInfo.account ?? null,
          walletInfo,
          isConnected: true,
          isLoading: false,
        };

        console.log('Wallet connected:', address);
      } else {
        // Сброс состояния при отключении
        resetState();
        console.log('Wallet disconnected');
      }
    });

    // Обработка ошибок
    ui.onModalStateChange((modalState) => {
      console.log('onModalStateChange', modalState);
      if (modalState?.status === 'closed' && !state.value.isConnected) {
        state.value.isLoading = false;
      }
    });
  };

  // Инициализация TonConnect
  const init = async (): Promise<TonConnectUI | null> => {
    // Только на клиенте
    if (process.server) return null;

    // Если уже инициализирован
    if (tonConnectUI.value) return tonConnectUI.value;

    try {
      state.value.isLoading = true;

      const ui = await getTonConnectUI();
      tonConnectUI.value = ui;
      setupEventListeners(ui);

      // Проверяем, не подключен ли уже кошелек
      const wallet = ui.wallet;
      if (wallet) {
        const address = getAddressFromAccount(wallet.account);

        state.value = {
          address,
          account: wallet.account ?? null,
          walletInfo: wallet,
          isConnected: true,
          isLoading: false,
        };
      } else {
        state.value.isLoading = false;
      }

      return tonConnectUI.value;
    } catch (error) {
      console.error('Failed to initialize TonConnect:', error);
      state.value.isLoading = false;
      return null;
    }
  };

  // Подключение кошелька
  const connect = async (): Promise<boolean> => {
    try {
      state.value.isLoading = true;

      const ui = await init();
      if (!ui) {
        throw new Error('TonConnect не инициализирован');
      }

      // Открываем модальное окно для подключения
      await ui.openModal();

      return true;
    } catch (error) {
      console.error('Connection error:', error);
      state.value.isLoading = false;
      throw error;
    }
  };

  // Отключение кошелька
  const disconnect = async (): Promise<void> => {
    try {
      const ui = tonConnectUI.value;
      if (ui) {
        await ui.disconnect();
      }
    } catch (error) {
      console.warn('Disconnect failed:', error);
    } finally {
      resetState();
    }
  };

  // Переподключение (например, после обновления страницы)
  const reconnect = async (): Promise<boolean> => {
    try {
      const ui = await init();
      if (!ui) return false;

      // TonConnectUI автоматически восстанавливает соединение
      // если кошелек был подключен ранее
      const wallet = ui.wallet;
      if (wallet?.account) {
        const address = getAddressFromAccount(wallet.account);

        state.value = {
          address,
          account: wallet.account,
          walletInfo: wallet,
          isConnected: true,
          isLoading: false,
        };

        return true;
      }

      return false;
    } catch (error) {
      console.error('Reconnect failed:', error);
      return false;
    }
  };

  // Сброс состояния
  const resetState = () => {
    state.value = {
      address: null,
      account: null,
      walletInfo: null,
      isConnected: false,
      isLoading: false,
    };
  };

  // Переключение подключения
  const toggleConnection = async (): Promise<void> => {
    if (state.value.isConnected) {
      await disconnect();
    } else {
      await connect();
    }
  };

  // Отправка транзакции
  const sendTransaction = async (transaction: any): Promise<void> => {
    if (!tonConnectUI.value || !state.value.isConnected) {
      throw new Error('Кошелек не подключен');
    }

    try {
      await tonConnectUI.value.sendTransaction(transaction);
    } catch (error) {
      console.error('Transaction failed:', error);
      throw error;
    }
  };

  // Автоматическое восстановление соединения при монтировании
  onMounted(async () => {
    if (process.client) {
      await reconnect();
    }
  });

  return {
    // State
    address: readonly(address),
    shortAddress,
    isConnected,
    isLoading,
    account: readonly(account),
    walletInfo: readonly(walletInfo),

    // Actions
    init,
    connect,
    disconnect,
    reconnect,
    toggleConnection,
    sendTransaction,

    // Для отладки
    _tonConnectUI: readonly(tonConnectUI),
  };
};
