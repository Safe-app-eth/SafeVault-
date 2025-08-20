import React, { useState } from 'react';

const AppKitConfig = () => {
  const [projectId, setProjectId] = useState('');
  const [rpcUrl, setRpcUrl] = useState('');

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">AppKit Wallet Integration</h3>
      <p className="text-sm text-gray-400 mb-2">
        Connected to <a href="https://appkit-lab.reown.com/library/multichain-all/" target="_blank" className="text-blue-400 underline">AppKit Multichain Library</a>
      </p>
      <label className="block mb-2">
        <span className="text-sm">Project ID:</span>
        <input
          type="text"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded w-full"
          placeholder="Enter your AppKit Project ID"
        />
      </label>
      <label className="block">
        <span className="text-sm">Custom RPC:</span>
        <input
          type="text"
          value={rpcUrl}
          onChange={(e) => setRpcUrl(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded w-full"
          placeholder="https://rpc.reown.com"
        />
      </label>
    </div>
  );
};

export default AppKitConfig;
