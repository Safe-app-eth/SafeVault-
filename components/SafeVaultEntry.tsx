'use client';
import { useEffect, useState } from 'react';
import { useSafePlatform } from '../hooks/useSafePlatform';

export default function SafeVaultEntry() {
  const { connect } = useSafePlatform();
  const [context, setContext] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      const result = await connect();
      setContext(result.context);

      if (result.context === 'safe-apps-sdk') {
        setAddress(result.safeInfo.safeAddress);
      } else if (result.context === 'reown-appkit') {
        const session = result.session;
        const address = session?.namespaces?.eip155?.accounts?.[0]?.split(':')?.[2];
        setAddress(address);
      }
    };

    init();
  }, []);

  return (
    <div>
      <h2>🛡️ SafeVault Cross-Platform</h2>
      <p>🔌 Connected via: <strong>{context}</strong></p>
      <p>📬 Safe/Signer Address: <strong>{address || 'Loading...'}</strong></p>
    </div>
  );
}
