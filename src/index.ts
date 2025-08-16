import { initializeSafe } from './modules/safe/initSafe';
import { checkSafePermissions } from './modules/safe/safePermissions';
import { executeTransaction } from './modules/safe/safeTransactions';
import { verifySigner } from './utils/signerVerification';

const main = async () => {
  const safe = await initializeSafe();

  // Example: Check permissions
  const hasPermission = await checkSafePermissions(safe, '0xFDf84a0e7D07bC56f7De56696fc409704cC83a24');
  console.log('Has Permission:', hasPermission);

  // Example: Execute transaction
  if (hasPermission) {
    await executeTransaction(safe, '0xRecipientAddress', '0.1', '0x');
  }
};

main().catch(console.error);
