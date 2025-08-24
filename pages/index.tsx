import VaultCard from '../components/VaultCard';
import { DASHBOARD_CONFIG } from '../config/dashboard.config';

export default function Home() {
  const vaults = DASHBOARD_CONFIG.vaults;

  return (
    <main className="bg-black min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold mb-4">SafeVault Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vaults.map((vault, index) => (
          <VaultCard key={index} {...vault} />
        ))}
      </div>
    </main>
  );
}
