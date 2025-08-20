export const DASHBOARD_CONFIG = {
  theme: {
    mode: "dark",
    accentColor: "#00FF88",
    background: "#000000",
    font: "Inter, sans-serif"
  },
  chains: {
    supported: [1, 42161, 8453],
    rpc: {
      1: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      42161: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      8453: `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
    }
  },
  github: {
    repo: "SafeVault",
    owner: "James",
    apps: {
      safeWallet: "safe{wallet}",
      safeWalletPro: "safe{wallet} pro",
      gnosisAssistant: "gnosisvault assistant"
    },
    syncInterval: 60000
  },
  ui: {
    showHiddenBalancesToggle: true,
    enableVaultGlow: true,
    enableSwipeCards: true,
    enableTokenConversion: true
  }
};
