import { create } from 'zustand';
import { DASHBOARD_CONFIG } from '../config/dashboard.config';

export const useVaultStore = create((set) => ({
  vaults: DASHBOARD_CONFIG.vaults,
  notifications: [],
  syncVaults: (newVaults) => set({ vaults: newVaults }),
  pushNotification: (note) =>
    set((state) => ({
      notifications: [...state.notifications, note]
    }))
}));
