# Define file contents
custom_wallet_ts = """\
export const safeVaultWallet = {
  id: 'safevault-wallet',
  name: 'SafeVault Wallet',
  iconUrl: 'https://appkit-lab.reown.com/library/multichain-all/logo512.png',
  links: {
    native: 'safevault://app',
    universal: 'https://appkit-lab.reown.com/library/multichain-all/',
  },
  app: {
    ios: 'safevault://app',
    android: 'safevault://app',
    desktop: 'https://appkit-lab.reown.com/library/multichain-all/launch',
    web: 'https://appkit-lab.reown.com/library/multichain-all/',
  },
};
"""

wallet_connect_ts = """\
import { configureChains, createConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';

import { safeVaultWallet } from './wallets/customWallet';
import { arbitrum, mainnet } from 'wagmi/chains';

const { chains, publicClient } = configureChains(
  [mainnet, arbitrum],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: chain.rpcUrls.default.http[0],
      }),
    }),
  ]
);

const { wallets } = getDefaultWallets({
  appName: 'SafeVault',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains,
  customWallets: [
    {
      groupName: 'Other',
      wallets: [safeVaultWallet],
    },
  ],
});

export const connectors = connectorsForWallets(wallets);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { chains };
"""

# File paths
zip_path = "/mnt/data/safevault-custom-wallet-setup.zip"
custom_wallet_path = "/mnt/data/src/wallets/customWallet.ts"
wallet_connect_path = "/mnt/data/src/walletConnect.ts"
logo_src_path = "/mnt/data/logo512.png"

# Create directory structure and write files
os.makedirs("/mnt/data/src/wallets", exist_ok=True)

with open(custom_wallet_path, "w") as f:
    f.write(custom_wallet_ts)

with open(wallet_connect_path, "w") as f:
    f.write(wallet_connect_ts)
