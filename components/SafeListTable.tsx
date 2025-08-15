// components/SafeListTable.tsx
import React from "react";
import { SafeVaultSafes } from "../config/safeVaultSafes";

export const SafeListTable = () => {
  return (
    <div className="safe-table">
      <h2 className="text-xl font-semibold mb-4">Your Safes</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Chain</th>
            <th className="border px-4 py-2">Safe Address</th>
            <th className="border px-4 py-2">Version</th>
            <th className="border px-4 py-2">Copy</th>
          </tr>
        </thead>
        <tbody>
          {SafeVaultSafes.map((safe, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{safe.chainId}</td>
              <td className="border px-4 py-2 font-mono text-sm break-all">
                {safe.address}
              </td>
              <td className="border px-4 py-2">{safe.version ?? "—"}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => navigator.clipboard.writeText(safe.address)}
                >
                  Copy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
