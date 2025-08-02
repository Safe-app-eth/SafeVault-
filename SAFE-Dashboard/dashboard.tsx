// pages/dashboard.tsx
import React from "react";
import { SafeListTable } from "../components/SafeListTable";

const Dashboard = () => {
  const signer = "0xFDf84a0e7D07bC56f7De56696fc409704cC83a24";

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">SafeVault Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Signer: <code className="font-mono">{signer}</code></p>
      </header>

      <main>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Safes Overview</h2>
          <SafeListTable />
        </section>

        {/* Future Components */}
        <section className="mt-16">
          <h3 className="text-lg font-medium text-gray-800">Coming Soon</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>📦 Asset Balances per Safe</li>
            <li>📜 Proposal creation & signing</li>
            <li>🚦 Governance status + votes</li>
            <li>🧠 Auto Sync with AppKit</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
