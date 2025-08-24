import React from 'react';

const ChainSelector = () => {
  const chains = ['Ethereum', 'Base', 'Arbitrum'];

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Select Chain</h3>
      <select className="bg-gray-800 text-white p-2 rounded w-full">
        {chains.map((chain, index) => (
          <option key={index} value={chain}>{chain}</option>
        ))}
      </select>
    </div>
  );
};

export default ChainSelector;
