import React, { useState } from 'react';
import { useAppKitWallet } from '../hooks/useAppKitWallet';

const VaultDeployForm = () => {
  const { wallet, chainId, changeChain } = useAppKitWallet();
  const [owners, setOwners] = useState('');
  const [threshold, setThreshold] = useState(2);
  const [strategy, setStrategy] = useState('conservative');

  const deployVault = async () => {
    if (!wallet) return alert("Connect wallet first");
    // TODO: Call smart contract deployment logic here
    console.log("Deploying vault with:", { owners, threshold, strategy, chainId });
  };

  return (
    <div className="bg-gray-950 p-6 rounded-xl text-white">
      <h2 className="text-xl font-bold mb-4">Deploy New Vault</h2>
      <input
        type="text"
        placeholder="Owner addresses (comma-separated)"
        value={owners}
        onChange={(e) => setOwners(e.target.value)}
        className="bg-gray-800 p-2 rounded w-full mb-2"
      />
      <input
        type="number"
        placeholder="Threshold"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        className="bg-gray-800 p-2 rounded w-full mb-2"
      />
      <select
        value={strategy}
        onChange={(e) => setStrategy(e.target.value)}
        className="bg-gray-800 p-2 rounded w-full mb-4"
      >
        <option value="conservative">Conservative</option>
        <option value="yield-max">Yield-Max</option>
        <option value="custom">Custom</option>
      </select>
      <button
        onClick={deployVault}
        className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
      >
        Deploy Vault
      </button>
    </div>
  );
};

export default VaultDeployForm;
