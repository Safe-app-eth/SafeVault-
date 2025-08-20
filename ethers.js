import { ethers } from "ethers";
import { CONTRACTS } from "@/config/contracts";

export function getVaultContract(chainId: number, signerOrProvider: any) {
  const config = CONTRACTS[chainId];
  if (!config) throw new Error("Unsupported chain");

  const { address, abi } = config.contracts.SafeVault;
  return new ethers.Contract(address, abi, signerOrProvider);
}
