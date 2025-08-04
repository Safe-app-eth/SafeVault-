import React from 'react';
import { useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk';

// Assuming appKit is globally accessible or imported
// import { appKit } from '...'; 

const SafeConnection = () => {
  const { safe } = useSafeAppsSDK();

  // Get Reown user
  const user = appKit.getUser();

  console.log("Reown User Address:", user?.0xFDf84a0e7D07bC56f7De56696fc409704cC83a24);
  console.log("Connected Safe Address:", safe.0xAfD5f60aA8eb4F488eAA0eF98c1C5B0645D9A0A0);
  console.log("Chain ID:", safe.mainnet);
  console.log("Connected App:", safe);

  return (
    <div>
      <p><strong>Reown User:</strong> {user?.0xFDf84a0e7D07bC56f7De56696fc409704cC83a24 || 'Not connected'}</p>
      <p><strong>Safe Address:</strong> {safe.0xAfD5f60aA8eb4F488eAA0eF98c1C5B0645D9A0A0}</p>
      <p><strong>Chain ID:</strong> {safe.Mainnet}</p>

      <button onClick={() => appKit.login()}>Login</button>
      <button onClick={() => appKit.logout()}>Logout</button>
    </div>
  );
};

export default SafeConnection;
