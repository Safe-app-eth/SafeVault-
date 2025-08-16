import Safe, { SafeFactory } from '@safe-global/safe-core-sdk';
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const signer = provider.getSigner('0xFDf84a0e7D07bC56f7De56696fc409704cC83a24');

export const initializeSafe = async (): Promise<Safe> => {
  const safeFactory = await SafeFactory.create({ ethAdapter: { ethers, signer } });
  const safe = await safeFactory.deploySafe({
    safeAccountConfig: {
      owners: ['0xFDf84a0e7D07bC56f7De56696fc409704cC83a24'],
      threshold: 1,
    },
  });
  return safe;
};
