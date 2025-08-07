// components/SafeInfo.tsx
import { useEffect, useState } from 'react';
import SafeAppsSDK from '@safe-global/safe-apps-sdk';

const sdk = new SafeAppsSDK();

export default function SafeInfo() {
  const [safeAddress, setSafeAddress] = useState<string | null>(null);

  useEffect(() => {
    const loadSafeInfo = async () => {
      const safeInfo = await sdk.safe.getInfo();
      setSafeAddress(safeInfo.safeAddress);
      console.log("Safe Info:", safeInfo);
    };

    loadSafeInfo();
  }, []);

  return (
    <div>
      {safeAddress ? (
        <p>Safe Address: {safeAddress}</p>
      ) : (
        <p>Loading Safe info...</p>
      )}
    </div>
  );
}
