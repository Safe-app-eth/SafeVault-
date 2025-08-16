import Safe from '@safe-global/safe-core-sdk';
import { ethers } from 'ethers';

export const executeTransaction = async (
  safe: Safe,
  to: string,
  value: string,
  data: string
): Promise<void> => {
  const transaction = {
    to,
    value: ethers.utils.parseEther(value).toString(),
    data,
  };

  const safeTx = await safe.createTransaction({ safeTransactionData: transaction });
  await safe.signTransaction(safeTx);

  const response = await safe.executeTransaction(safeTx);
  console.log('Transaction executed:', response);
};
