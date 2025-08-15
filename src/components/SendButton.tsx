import { useState } from "react";
import { proposeTransaction, executeTransaction } from "../lib/safe";

interface Props {
  safeAddress: string;
  recipient: string;
}

export default function SendButton({ safeAddress, recipient }: Props) {
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);

  const handleSend = async () => {
    try {
      setLoading(true);

      // 1️⃣ Propose the transaction
      const tx = await proposeTransaction(safeAddress, recipient, "0.01", "walletconnect");

      // 2️⃣ Execute the transaction immediately
      const receipt = await executeTransaction(safeAddress, tx, "walletconnect");

      setTxHash(receipt.transactionHash);
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSend}
      disabled={loading}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? "Sending..." : "Send 0.01 ETH"}
    </button>
  );
}
