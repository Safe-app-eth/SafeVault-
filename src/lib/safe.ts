// src/lib/safe.ts
import Safe, { EthersAdapter, SafeTransactionDataPartial, SafeTransaction } from '@safe-global/safe-core-sdk';
import { ethers } from 'ethers';
import WalletConnectProvider from "@walletconnect/web3-provider";

// ---------------------------
// PROVIDER SETUP
// ---------------------------

export async function getSigner(providerType: 'injected' | 'walletconnect') {
  let provider: any;

  if (providerType === 'injected') {
    if (!window.ethereum) throw new Error("No injected wallet found");
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
  } else if (providerType === 'walletconnect') {
    const wcProvider = new WalletConnectProvider({
      rpc: {
        1: "https://mainnet.infura.io/v3/d287bc172bba4c66a78315df41afa70c", // replace with your RPC
      },
    });
    await wcProvider.enable();
    provider = new ethers.providers.Web3Provider(wcProvider as any);
  } else {
    throw new Error("Unknown provider type");
  }

  return provider.getSigner();
}

// ---------------------------
// SAFE SDK INIT
// ---------------------------

export async function getSafeSdk(safeAddress: string, signer: ethers.Signer) {
  const ethAdapter = new EthersAdapter({ ethers, signer });
  const safeSdk = await Safe.create({ ethAdapter, safeAddress });
  return safeSdk;
}

// ---------------------------
// CREATE & PROPOSE TRANSACTION
// ---------------------------

export async function proposeTransaction(
  safeAddress: string,
  to: string,
  valueEth: string,
  providerType: 'injected' | 'walletconnect' = 'injected'
) {
  const signer = await getSigner(providerType);
  const safeSdk = await getSafeSdk(safeAddress, signer);

  const txData: SafeTransactionDataPartial = {
    to,
    value: ethers.utils.parseEther(valueEth).toString(),
    data: '0x',
  };

  const safeTransaction: SafeTransaction = await safeSdk.createTransaction({ safeTransactionData: txData });

  // If you have a Safe Transaction Service endpoint:
  // await safeSdk.proposeTransaction(safeTransaction);

  return safeTransaction;
}

// ---------------------------
// EXECUTE TRANSACTION (immediate)
// ---------------------------

export async function executeTransaction(
  safeAddress: string,
  safeTransaction: SafeTransaction,
  providerType: 'injected' | 'walletconnect' = 'injected'
) {
  const signer = await getSigner(providerType);
  const safeSdk = await getSafeSdk(safeAddress, signer);

  const txResponse = await safeSdk.executeTransaction(safeTransaction);
  const receipt = await txResponse.wait();
  return receipt;
}
