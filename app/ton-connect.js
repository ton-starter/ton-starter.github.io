import { TonConnectUI } from '@tonconnect/ui';

class CustomEventDispatcher {
  constructor(store) {
    this.store = store;
  }

  async dispatchEvent(eventName, eventDetails) {
    // Safe dispatcher that tolerates missing store and adapts to Vuex/Pinia
    try {
      if (!this.store) {
        console.warn('TonConnect event (no store):', eventName, eventDetails);
        return;
      }

      // If store has dispatch (Vuex), use it. For Pinia use actions or $patch externally.
      if (typeof this.store.dispatch === 'function') {
        // keep commented mapping for user to enable if needed
        // this.store.dispatch('tk/handleTonConnectEvent', { type: eventName, payload: eventDetails })
        return;
      }

      // If store exposes a method to handle events, try calling it
      if (typeof this.store.handleTonConnectEvent === 'function') {
        this.store.handleTonConnectEvent({
          type: eventName,
          payload: eventDetails,
        });
        return;
      }

      console.warn(`Unhandled TonConnect event: ${eventName}`);
      console.log('TonConnect event details:', eventDetails);
    } catch (err) {
      console.warn('Error dispatching TonConnect event', err);
    }
  }
}

let connectorInstance = null;

export const getConnector = (store = null) => {
  if (typeof window === 'undefined') return null;

  if (!connectorInstance) {
    connectorInstance = new TonConnectUI({
      manifestUrl: `${window.location.origin}/tonconnect-manifest.json`,
      eventDispatcher: new CustomEventDispatcher(store),
    });
    console.log('connectorInstance', connectorInstance);
  }

  return connectorInstance;
};

export const resetConnector = () => {
  connectorInstance = null;
};
