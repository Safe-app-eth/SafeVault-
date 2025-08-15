// lib/polling/syncSafeWithAppKit.ts

import { AppKit } from "reown-appkit"; // adjust as needed
import { SafeServiceClient, SafeTransactionData } from "@safe-global/protocol-kit";

export const startSafeSyncLoop = async ({
  safeAddress,
  chainId,
  appKit,
}: {
  safeAddress: string;
  chainId: number;
  appKit: AppKit;
}) => {
  const safeService = new SafeServiceClient({ chainId });

  const poll = async () => {
    const pendingTxs = await safeService.getPendingTransactions(safeAddress);

    for (const tx of pendingTxs.results) {
      const hasSigned = tx.confirmations.some(
        (c) => c.owner.toLowerCase() === appKit.signerAddress?.toLowerCase()
      );

      if (!hasSigned) {
        const txData = await safeService.getTransaction(tx.safeTxHash);
        await appKit.signClient.signTransaction(txData); // Auto-signs
        console.log("✅ Signed TX:", tx.safeTxHash);
      }
    }

    setTimeout(poll, 1000); // poll every second
  };

  poll();
};
