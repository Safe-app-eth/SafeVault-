// components/SafeTable.tsx
import React, { useState } from "react";
import { loadSafeConfigs } from "@/utils/loadSafes";

type Safe = {
  address: string;
  threshold: number;
  owners: string[];
};

type Props = {
  safesByChain: {
    chainId: string;
    safes: Safe[];
  }[];
};

const chainNameMap: Record<string, string> = {
  "1": "Ethereum",
  "10": "Optimism",
  "56": "BSC",
  "100": "Gnosis",
  "137": "Polygon",
  "42161": "Arbitrum",
  "8453": "Base",
  "11155111": "Sepolia",
  "534352": "Scroll",
  "43114": "Avalanche",
};

const SafeTable: React.FC<Props> = ({ safesByChain }) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div className="safe-table">
      {safesByChain.map(({ chainId, safes }) => (
        <div key={chainId} className="safe-section">
          <h2>{chainNameMap[chainId] || `Chain ${chainId}`}</h2>
          <table>
            <thead>
              <tr>
                <th>Safe Address</th>
                <th>Threshold</th>
                <th>Owners</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {safes.map((safe) => (
                <>
                  <tr key={safe.address}>
                    <td>
                      <code
                        style={{ cursor: "pointer" }}
                        onClick={() => navigator.clipboard.writeText(safe.address)}
                        title="Click to copy"
                      >
                        {safe.address.slice(0, 6)}...{safe.address.slice(-4)}
                      </code>
                    </td>
                    <td>{safe.threshold}</td>
                    <td>{safe.owners.length}</td>
                    <td>
                      <button
                        onClick={() =>
                          setExpanded((prev) => ({
                            ...prev,
                            [safe.address]: !prev[safe.address],
                          }))
                        }
                      >
                        {expanded[safe.address] ? "Hide" : "Show"} Owners
                      </button>
                    </td>
                  </tr>
                  {expanded[safe.address] && (
                    <tr>
                      <td colSpan={4}>
                        <ul style={{ paddingLeft: "1rem" }}>
                          {safe.owners.map((owner) => (
                            <li key={owner}>
                              <code>{owner}</code>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <style jsx>{`
        .safe-table {
          padding: 1rem;
          font-family: sans-serif;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 2rem;
        }

        th,
        td {
          border: 1px solid #ddd;
          padding: 0.6rem;
          text-align: left;
        }

        th {
          background: #f0f0f0;
        }

        code {
          background: #f8f8f8;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: monospace;
        }

        button {
          background: #0070f3;
          color: white;
          border: none;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background: #0059c1;
        }

        @media (max-width: 600px) {
          table,
          thead,
          tbody,
          th,
          td,
          tr {
            display: block;
          }

          thead tr {
            display: none;
          }

          td {
            padding: 0.5rem;
            border: none;
            border-bottom: 1px solid #eee;
          }

          td::before {
            content: attr(data-label);
            font-weight: bold;
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default SafeTable;
