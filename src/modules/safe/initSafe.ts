import Safe, { SafeFactory } from '@safe-global/safe-core-sdk';
import { ethers } from 'ethers';
import { getProvider } from '../../utils/chainConfig';

export const initializeSafe = async (): Promise<Safe> => {
  const provider = getProvider();
  const signer = provider.getSigner('0xFDf84a0e7D07bC56f7De56696fc409704cC83a24');

  const safeFactory = await SafeFactory.create({ ethAdapter: { ethers, signer } });
  const safe = await safeFactory.deploySafe({
    safeAccountConfig: {
      owners: ['0xFDf84a0e7D07bC56f7De56696fc409704cC83a24'], // Replace with multisig owners
      threshold: 1,
    },
  });

  return safe;
};
