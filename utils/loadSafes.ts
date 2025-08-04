import metadata from "../data/metadata.json";
import addressBook from "../data/addressBook.json";
import restoreBackup from "../data/restoreBackup.json";

type SafeOwner = {
  value: string;
  name: string | null;
  logoUri: string | null;
};

type SafeConfig = {
  address: string;
  owners: string[];
  threshold: number;
};

type ChainSafeConfig = {
  chainId: string;
  safes: SafeConfig[];
};

export const loadSafeConfigs = (): ChainSafeConfig[] => {
  const sources = [
    metadata.data.addedSafes,
    addressBook.data.addedSafes,
    restoreBackup.data.addedSafes,
  ];

  const merged: Record<string, Record<string, SafeConfig>> = {};

  for (const source of sources) {
    for (const [chainId, safes] of Object.entries(source)) {
      if (!merged[chainId]) merged[chainId] = {};
      for (const [safeAddress, config] of Object.entries(safes)) {
        const owners = (config as any).owners?.map((o: SafeOwner) => o.value) || [];
        const threshold = (config as any).threshold || 1;

        merged[chainId][safeAddress] = {
          address: safeAddress,
          owners,
          threshold,
        };
      }
    }
  }

  return Object.entries(merged).map(([chainId, safes]) => ({
    chainId,
    safes: Object.values(safes),
  }));
};
