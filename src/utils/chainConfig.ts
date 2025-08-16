import { ethers } from 'ethers';

export const getProvider = (): ethers.providers.JsonRpcProvider => {
  const rpcUrl = process.env.RPC_URL as string;
  return new ethers.providers.JsonRpcProvider(rpcUrl);
};
