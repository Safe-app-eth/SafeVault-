import { ethers } from "ethers";
import Safe, { EthersAdapter } from "@safe-global/protocol-kit";
import { NETWORKS } from "./networks";

export async function initSafe(safeAddress: string, chain: keyof typeof NETWORKS) {
  const provider = new ethers.JsonRpcProvider(NETWORKS[chain].rpcUrl);
  const signer = provider.getSigner(process.env.SAFE_SIGNER); // read-only verified signer
  const ethAdapter = new EthersAdapter({ ethers, signerOrProvider: signer });

  return await Safe.create({ ethAdapter, safeAddress });
}
