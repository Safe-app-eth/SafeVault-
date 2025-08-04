import { loadSafeConfigs } from "./loadSafes";

export const filterByOwner = (owner: string) => {
  const all = loadSafeConfigs();

  return all
    .map(({ chainId, safes }) => ({
      chainId,
      safes: safes.filter((s) =>
        s.owners.some((o) => o.toLowerCase() === owner.toLowerCase())
      ),
    }))
    .filter((chain) => chain.safes.length > 0);
};
