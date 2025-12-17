// Uses Nuxt `useState` so it works without additional dependencies.
export const useWalletStore = () => {
  const state = useState('walletAddress', () => null as string | null);

  return {
    get address() {
      return state.value;
    },
    setAddress(addr: string | null) {
      state.value = addr;
    },
    clear() {
      state.value = null;
    },
  };
};
