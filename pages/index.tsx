import SafeAppsSDK from '@safe-global/safe-apps-sdk';
import { useEffect } from 'react';

const sdk = new SafeAppsSDK();

export default function Home() {
  useEffect(() => {
    sdk.safe.getInfo().then((safeInfo) => {
      console.log('Connected Safe:', safeInfo.safeAddress);
    });
  }, []);

  return (
    <div>
      <h1>SafeVault Dashboard</h1>
      <p>Loading Safe context...</p>
    </div>
  );
}
