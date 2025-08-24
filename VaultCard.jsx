import { scoreVault } from '../utils/vaultHealth';

const healthScore = scoreVault({ address, balanceUSD, threshold, owners: [] });

<p className="text-xs mt-1 text-green-400">Health Score: {healthScore}/100</p>
