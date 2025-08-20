"use client";
import { useEffect, useState } from "react";
import { startMonitoring } from "../lib/contracts";
import { NETWORKS } from "../lib/networks";

export default function Dashboard() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    Object.keys(NETWORKS).forEach(chain => {
      startMonitoring(chain as keyof typeof NETWORKS);
    });
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">SafeVault Dashboard</h1>
      <h2 className="mt-4">Monitored Contracts</h2>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>{JSON.stringify(log)}</li>
        ))}
      </ul>
    </main>
  );
}
