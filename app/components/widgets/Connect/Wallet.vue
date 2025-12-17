<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const address = ref<string | null>(null);
let tonConnect: any = null;

const shortAddress = computed(() => {
  if (!address.value) return '👛 Подключить';
  return `${address.value.slice(0, 6)}...${address.value.slice(-4)}`;
});

async function initTonConnect() {
  if (typeof window === 'undefined') return;
  try {
    const mod = await import('@tonconnect/sdk');
    const TonConnect = mod.TonConnect ?? mod.default ?? mod;
    tonConnect = new TonConnect({
      manifestUrl: `${window.location.origin}/tonconnect-manifest.json`,
    });

    // attach event listeners if SDK supports them
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
      } else if (typeof tonConnect.subscribe === 'function') {
        // some versions expose a subscribe/subscribe method
        tonConnect.subscribe((st: any) => {
          const addr =
            st?.account?.address ||
            tonConnect.account?.address ||
            tonConnect.wallet?.account?.address;
          if (st?.status === 'connected' && addr) address.value = addr;
          if (st?.status === 'disconnected') address.value = null;
        });
      }
    } catch (e) {
      console.warn('TonConnect init failed', e);
    }

    const acc = tonConnect.account || tonConnect.wallet?.account;
    if (acc && acc.address) address.value = acc.address;
  } catch (e) {
    console.warn('TonConnect init failed', e);
  }
}

async function connect() {
  if (!tonConnect) {
    await initTonConnect();
    if (!tonConnect) {
      alert('TonConnect SDK not available. Please install @tonconnect/sdk');
      return;
    }
  }
  try {
    // try connect() — different SDK versions may expose different APIs
    if (typeof tonConnect.connect === 'function') {
      const res = await tonConnect.connect();
      address.value =
        res?.account?.address ||
        tonConnect.account?.address ||
        tonConnect.wallet?.account?.address ||
        null;
      return;
    }

    // fallback: try request permission via UI library
    if (typeof tonConnect.request === 'function') {
      const res = await tonConnect.request({ method: 'ton_requestAccounts' });
      address.value = res?.[0] || null;
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
