import Safe from '@safe-global/safe-core-sdk';

export const checkSafePermissions = async (safe: Safe, address: string): Promise<boolean> => {
  const owners = await safe.getOwners();
  return owners.includes(address.toLowerCase());
};
