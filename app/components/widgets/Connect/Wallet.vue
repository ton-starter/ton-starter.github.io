<script setup lang="ts">
const address = ref<string | null>(null);
let tonConnect: any = null;

const shortAddress = computed(() => {
  if (!address.value) return '👛 Подключить';
  return `${address.value.slice(0, 6)}...${address.value.slice(-4)}`;
});

async function initTonConnect() {
  if (typeof window === 'undefined') return;
  try {
    // use existing helper to create TonConnectUI instance
    // use Nuxt useState to store connected address (no Pinia required)
    const walletState = useState('walletAddress', () => null as string | null);
    tonConnect = getConnector(null) || getConnector(undefined);

    // attach event listeners if available
    try {
      if (typeof tonConnect.on === 'function') {
        tonConnect.on('connect', (payload: any) => {
          const addr =
            payload?.account?.address ||
            tonConnect.account?.address ||
            tonConnect.wallet?.account?.address;
          if (addr) address.value = addr;
        });
        tonConnect.on('disconnect', () => {
          address.value = null;
        });
      }
    } catch (_e) {
      // ignore
    }

    const acc =
      tonConnect?.account ||
      tonConnect?.wallet?.account ||
      tonConnect?.state?.account;
    if (acc && acc.address) {
      address.value = acc.address;
      walletState.value = acc.address;
    }
  } catch (_e) {
    console.warn('TonConnect init failed', e);
  }
}

async function connect() {
  if (!tonConnect) {
    await initTonConnect();
    if (!tonConnect) {
      alert(
        'TonConnect UI not available. Please ensure @tonconnect/ui is installed',
      );
      return;
    }
  }
  try {
    // Try direct connect API if available
    if (typeof tonConnect.connect === 'function') {
      const res = await tonConnect.connect();
      const addr =
        res?.account?.address ||
        tonConnect?.account?.address ||
        tonConnect?.wallet?.account?.address ||
        tonConnect?.state?.account?.address ||
        null;
      if (addr) {
        address.value = addr;
        const walletState = useState(
          'walletAddress',
          () => null as string | null,
        );
        walletState.value = addr;
        return;
      }
    }

    // Try various UI entry points used by different versions
    if (typeof tonConnect.openUI === 'function') await tonConnect.openUI();
    else if (typeof tonConnect.show === 'function') await tonConnect.show();
    else if (tonConnect?.modal && typeof tonConnect.modal.open === 'function')
      await tonConnect.modal.open();
    else if (
      tonConnect?.singleWalletModal &&
      typeof tonConnect.singleWalletModal.open === 'function'
    )
      await tonConnect.singleWalletModal.open();
    else if (typeof tonConnect.open === 'function') await tonConnect.open();

    // If we reached here, UI was attempted to open — poll for address (fallback)
    const waitForAddress = async (timeout = 15000) => {
      const start = Date.now();
      while (Date.now() - start < timeout) {
        const candidate =
          // possible locations where address may appear
          tonConnect?.walletInfo?.address ||
          tonConnect?.walletInfo?.wallet?.address ||
          tonConnect?.connector?._wallet?.address ||
          tonConnect?.connector?._wallet?.account?.address ||
          tonConnect?.modal?.connector?._wallet?.address ||
          tonConnect?.modal?.connector?._wallet?.account?.address ||
          tonConnect?.account?.address ||
          tonConnect?.wallet?.account?.address ||
          tonConnect?.state?.account?.address ||
          null;
        if (candidate) return candidate;
        await new Promise((r) => setTimeout(r, 500));
      }
      return null;
    };

    const found = await waitForAddress(15000);
    if (found) {
      address.value = found;
      const walletState = useState(
        'walletAddress',
        () => null as string | null,
      );
      walletState.value = found;
    }
  } catch (e) {
    console.warn('connect error', e);
  }
}

function disconnect() {
  try {
    if (typeof tonConnect?.disconnect === 'function') tonConnect.disconnect();
    else if (typeof tonConnect?.clear === 'function') tonConnect.clear();
  } catch (e) {
    console.warn('disconnect failed', e);
  }
  address.value = null;
  const walletState = useState('walletAddress', () => null as string | null);
  walletState.value = null;
}

function onClick() {
  if (address.value) disconnect();
  else connect();
}

onMounted(() => {
  initTonConnect();
});
</script>

<template>
  <button class="wallet-button" @click="onClick">
    <span v-if="address">{{ shortAddress }}</span>
    <span v-else>{{ shortAddress }}</span>
  </button>
</template>

<style scoped>
.wallet-button {
  padding: 8px 12px;
  margin: 30px;
  border-radius: 8px;
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);

  color: white;
  border: none;
  text-decoration: none;
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 500;
  cursor: pointer;
  width: min-content;
  font-size: 1.1em;
}
</style>
