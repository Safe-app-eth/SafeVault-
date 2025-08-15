import { ethers } from "ethers";

const SAFE_MESSAGE_TYPES = {
  SafeMessage: [{ name: "message", type: "bytes" }],
};

export function getSafeMessageTypedData({
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

export async function signSafeMessage(
  signer: ethers.Signer,
  typedData: ReturnType<typeof getSafeMessageTypedData>
): Promise<string> {
  return signer._signTypedData(typedData.domain, typedData.types, typedData.message);
}

export function recoverSignerAddress(
  typedData: ReturnType<typeof getSafeMessageTypedData>,
  signature: string
): string {
  return ethers.utils.verifyTypedData(typedData.domain, typedData.types, typedData.message, signature);
}

export async function verifySignatureOnChain({
  provider,
  safeAddress,
  typedData,
  signature,
}: {
  provider: ethers.providers.Provider;
  safeAddress: string;
  typedData: ReturnType<typeof getSafeMessageTypedData>;
  signature: string;
}) {
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

  const result = await safe.isValidSignature(messageHash, signature);
  return result === "0x1626ba7e";
}
