import { SafeVaultSafes } from "../config/safeVaultSafes";

SafeVaultSafes.forEach((safe) => {
  console.log(`🔐 Loaded Safe: ${safe.name} on chain ${safe.chainId}`);
});
