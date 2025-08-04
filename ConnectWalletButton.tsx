import React from 'react';
import ConnectWalletButton from './components/ConnectWalletButton';

const Dashboard = () => {
  return (
    <div>
      <h1>🛡️ SafeVault Dashboard</h1>
      <ConnectWalletButton />
      {/* ...other dashboard content... */}
    </div>
  );
};

export default Dashboard;
