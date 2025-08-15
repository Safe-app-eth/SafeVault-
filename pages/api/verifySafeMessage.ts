import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";

// You could also import this from your `safeMessageUtils.ts` if split up.
const SAFE_MESSAGE_TYPES = {
  SafeMessage: [{ name: "message", type: "bytes" }],
};

function getSafeMessageTypedData({
  message,
  chainId,
  verifyingContract,
}: {
  message: string;
  chainId: number;
  verifyingContract: string;
}) {
  return {
    domain: {
      chainId,
      verifyingContract,
    },
    types: SAFE_MESSAGE_TYPES,
    message: { message },
    primaryType: "SafeMessage" as const,
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, signature, chainId, safeAddress } = req.body;

    if (!message || !signature || !chainId || !safeAddress) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const typedData = getSafeMessageTypedData({
      message,
      chainId,
      verifyingContract: safeAddress,
    });

    // Recover signer address off-chain
    const recoveredSigner = ethers.utils.verifyTypedData(
      typedData.domain,
      typedData.types,
      typedData.message,
      signature
    );

    // Set up a provider (you can customize this to use Alchemy, Infura, etc.)
    const provider = new ethers.providers.JsonRpcProvider(
      "https://arb1.arbitrum.io/rpc" // for Arbitrum; swap if needed
    );

    const safe = new ethers.Contract(
      safeAddress,
      ["function isValidSignature(bytes32,bytes) view returns (bytes4)"],
      provider
    );

    const messageHash = ethers.utils._TypedDataEncoder.hash(
      typedData.domain,
      typedData.types,
      typedData.message
    );

    const onChainResult = await safe.isValidSignature(messageHash, signature);
    const onChainValid = onChainResult === "0x1626ba7e";

    return res.status(200).json({
      recoveredSigner,
      validOnChain: onChainValid,
      chainId,
      safeAddress,
    });
  } catch (err: any) {
    console.error("[/api/verifySafeMessage] Error:", err);
    return res.status(500).json({ error: "Internal server error", detail: err.message });
  }
}
