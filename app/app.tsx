// App.tsx or main layout
import React from 'react';
import { SafeAppProvider } from '@safe-global/safe-apps-react-sdk';
import SafeAppsSDK from '@safe-global/safe-apps-sdk';
import { createAppKit } from '@reown/appkit';

const sdk = new SafeAppsSDK();

// Initialize Reown
const appKit = createAppKit({
  projectId: '0e86b980-2298-4978-8dd5-0b9e7af95016', // Get this from your Reown dashboard
  chains: ['ethereum', 'polygon', 'arbitrum'],
  walletOptions: {
    embedded: true,
    socialLogin: true,
    theme: 'dark', // or 'light'
  },
});

function App() {
  return (
    <SafeAppProvider sdk={sdk}>
      <YourAppRouterOrLayout appKit={appKit} />
    </SafeAppProvider>
  );
}

export default App;
