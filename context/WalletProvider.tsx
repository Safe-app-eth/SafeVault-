import React, { createContext, useContext } from 'react';
import { createAppKit } from '@reown/appkit';

// ✅ Create the Reown AppKit instance (you only do this once)
const appKit = createAppKit({
  projectId: '0e86b980-2298-4978-8dd5-0b9e7af95016',
  chains: ['ethereum', 'polygon', 'arbitrum'],
  walletOptions: {
    embedded: true,
    socialLogin: true,
    theme: 'dark'
  }
});

// ✅ Create a React context to share the appKit
const WalletContext = createContext(appKit);

// ✅ Custom hook to use the wallet anywhere
export const useWallet = () => useContext(WalletContext);

// ✅ Provider component to wrap your app with
export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WalletContext.Provider value={appKit}>
      {children}
    </WalletContext.Provider>
  );
};
