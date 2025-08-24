export function scoreVault(vault) {
  let score = 100;

  // Penalize if threshold is weak
  if (vault.threshold !== "2 of 3") score -= 20;

  // Penalize if few owners
  if (!vault.owners || vault.owners.length < 2) score -= 30;

  // Penalize if balance is low
  const balance = parseFloat(vault.balanceUSD || "0");
  if (balance < 1) score -= 20;

  return Math.max(score, 0);
}
