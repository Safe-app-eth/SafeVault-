import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { SafeAppsSDK } from '@safe-global/safe-apps-react-sdk';

const sdk = new SafeAppsSDK();

const SafeApp = () => {
  const [user, setUser] = useState<any>(null);
  const [safeInfo, setSafeInfo] = useState<any>(null);

  useEffect(() => {
    // Firebase auth listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Safe SDK info
    sdk.on('safeInfo', (info) => {
      setSafeInfo(info);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">SafeVault Dashboard</h1>
      {user ? (
        <p className="text-lg text-gray-700">Logged in as {user.email}</p>
      ) : (
        <p className="text-lg text-gray-700">Not logged in</p>
      )}
      {safeInfo && (
        <p className="text-lg text-gray-700 mt-2">
          Connected Safe: {safeInfo.safeAddress}
        </p>
      )}
    </div>
  );
}

export default SafeApp;
