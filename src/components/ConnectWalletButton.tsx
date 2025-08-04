import React from 'react';
import { useWallet } from '../context/WalletProvider';

const ConnectWalletButton = () => {
  const appKit = useWallet();
  const user = appKit.getUser();

  return user?.address ? (
    <div>
      <p>🔓 Connected: {user.0xAfD5f60aA8eb4F488eAA0eF98c1C5B0645D9A0A0}</p>
      <button onClick={() => appKit.logout()}>Logout</button>
    </div>
  ) : (
    <button onClick={() => appKit.login()}>Login with Reown</button>
  );
};

export default ConnectWalletButton;
