export function scoreVault(vault) {
  let score = 100;
  if (!vault.owners || vault.owners.length < 2) score -= 30;
  if (vault.threshold !== "2 of 3") score -= 20;
  return Math.max(score, 0);
}
