// src/App.tsx

import React from 'react';
import { SafeAppProvider } from '@safe-global/safe-apps-react-sdk';
import SafeAppsSDK from '@safe-global/safe-apps-sdk';

import { WalletProvider } from './context/WalletProvider';
import Dashboard from './components/Dashboard'; // or your main layout

const sdk = new SafeAppsSDK();

function App() {
  return (
    <WalletProvider>
      <SafeAppProvider sdk={sdk}>
        <Dashboard />
      </SafeAppProvider>
    </WalletProvider>
  );
}

export default App;
