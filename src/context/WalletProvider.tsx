// src/context/WalletProvider.tsx

import React, { createContext, useContext } from 'react';
import { createAppKit } from '@reown/appkit';

// 🔑 Replace with your actual project ID from Reown dashboard
const appKit = createAppKit({
  projectId: '0e86b980-2298-4978-8dd5-0b9e7af95016',
  chains: ['ethereum', 'polygon', 'arbitrum'],
  walletOptions: {
    embedded: true,
    socialLogin: true,
    theme: 'dark',
  },
});

const WalletContext = createContext(appKit);

// ✅ Custom hook to access Reown appKit from any component
export const useWallet = () => useContext(WalletContext);

// ✅ Provider to wrap your app and make appKit accessible
export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WalletContext.Provider value={appKit}>
      {children}
    </WalletContext.Provider>
  );
};
