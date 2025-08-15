import { ethers } from 'ethers';

export const verifySigner = async (
  expectedAddress: string,
  signer: ethers.Signer
): Promise<boolean> => {
  const address = await signer.getAddress();
  return address.toLowerCase() === expectedAddress.toLowerCase();
};
