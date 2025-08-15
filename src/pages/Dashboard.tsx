// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import SendButton from "../components/SendButton";
import { getSigner, getSafeSdk } from "../lib/safe";

// ----------------------------
// TYPES
// ----------------------------
interface Proposal {
  id: string;
  to: string;
  value: string;
  description: string;
  status: "pending" | "executed";
}

// ----------------------------
// DASHBOARD COMPONENT
// ----------------------------
export default function Dashboard() {
  const safeAddress = "0xFDf84a0e7D07bC56f7De56696fc409704cC83a24"; // Your Safe address
  const [providerType, setProviderType] = useState<"injected" | "walletconnect">("injected");
  const [balance, setBalance] = useState<string>("0");
  const [proposals, setProposals] = useState<Proposal[]>([]);

  // ----------------------------
  // FETCH SAFE BALANCE
  // ----------------------------
  const fetchBalance = async () => {
    try {
      const signer = await getSigner(providerType);
      const safeSdk = await getSafeSdk(safeAddress, signer);
      const safeBalance = await signer.getBalance();
      setBalance(ethers.utils.formatEther(safeBalance));
    } catch (err) {
      console.error("Error fetching balance:", err);
    }
  };

  // ----------------------------
  // LOAD DEMO PROPOSALS
  // ----------------------------
  useEffect(() => {
    // For demonstration, pre-filled proposals.json
    const demoProposals: Proposal[] = [
      {
        id: "1",
        to: "0xRecipientAddress1",
        value: "0.01",
        description: "Test transaction 1",
        status: "pending",
      },
      {
        id: "2",
        to: "0xRecipientAddress2",
        value: "0.02",
        description: "Test transaction 2",
        status: "executed",
      },
    ];
    setProposals(demoProposals);
    fetchBalance();
  }, [providerType]);

  // ----------------------------
  // WALLET CONNECT SWITCH
  // ----------------------------
  const handleProviderSwitch = (type: "injected" | "walletconnect") => {
    setProviderType(type);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">SafeVault Dashboard</h1>

      {/* WALLET CONNECT SWITCH */}
      <div className="mb-6 flex gap-4">
        <button
          onClick={() => handleProviderSwitch("injected")}
          className={`px-4 py-2 rounded ${
            providerType === "injected" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          MetaMask
        </button>
        <button
          onClick={() => handleProviderSwitch("walletconnect")}
          className={`px-4 py-2 rounded ${
            providerType === "walletconnect" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          WalletConnect
        </button>
      </div>

      {/* SAFE BALANCE */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Safe Balance</h2>
        <p className="text-gray-700">{balance} ETH</p>
      </div>

      {/* SEND TRANSACTION BUTTON */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Send Transaction</h2>
        <SendButton safeAddress={safeAddress} recipient="0xRecipientAddress1" />
      </div>

      {/* PROPOSALS LIST */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Proposals</h2>
        <table className="w-full text-left border border-gray-300 rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">To</th>
              <th className="px-4 py-2 border-b">Value (ETH)</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{p.id}</td>
                <td className="px-4 py-2 border-b">{p.to}</td>
                <td className="px-4 py-2 border-b">{p.value}</td>
                <td className="px-4 py-2 border-b">{p.description}</td>
                <td className="px-4 py-2 border-b">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      p.status === "executed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
