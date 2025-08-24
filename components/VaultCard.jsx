GITHUB_WEBHOOK_SECRET=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


const VaultCard = ({ address, balanceUSD, token, chain, linkedApp, threshold, hidden }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 shadow-lg hover:shadow-green-500/50 transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">{chain}</span>
        <span className="text-xs bg-green-600 px-2 py-1 rounded">{linkedApp}</span>
      </div>

      <h2 className="text-xl font-bold">
        {hidden ? '••••••' : `$${balanceUSD}`} <span className="text-sm text-gray-400">{token}</span>
      </h2>

      <p className="text-xs mt-1">Threshold: {threshold}</p>
      <p className="text-xs text-gray-500">Safe: {address.slice(0, 6)}...{address.slice(-4)}</p>
    </div>
  );
};

export default VaultCard;
