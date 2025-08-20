export const DASHBOARD_CONFIG = {
  theme: {
    mode: "dark",
    accentColor: "#00FF88", // neon green
    background: "#000000",
    font: "Inter, sans-serif"
  },
  chains: {
    supported: [1, 42161, 8453], // Ethereum, Arbitrum, Base
    default: 1,
    rpc: {
      1: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      42161: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      8453: `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
    }
  },
  vaults: [
    {
      address: "0xfecBad5D60725EB6fd10f8936e02fa203fd27E4b",
      chainId: 1,
      label: "Main Treasury",
      linkedApp: "safe{wallet} pro",
      threshold: "2 of 3",
      owners: [
        "0xAfD5f60aA8eb4F488eAA0eF98c1C5B0645D9A0A0",
        "0x5f350bF5feE8e254D6077f8661E9C7B83a30364e",
        "0x1bfD64aB61EACf714B2Aa37347057203f3AcA71f"
      ]
    },
    {
      address: "0x7E9A6b14e78BF18bD483D208af423b96AB5075A4",
      chainId: 8453,
      label: "Base Ops Vault",
      linkedApp: "gnosisvault assistant",
      threshold: "1 of 2",
      owners: [
        "0xAfD5f60aA8eb4F488eAA0eF98c1C5B0645D9A0A0",
        "0x5f350bF5feE8e254D6077f8661E9C7B83a30364e"
      ]
    }
  ],
  github: {
    apps: {
      safeWallet: "safe{wallet}",
      safeWalletPro: "safe{wallet} pro",
      gnosisAssistant: "gnosisvault assistant"
    },
    repo: "SafeVault",
    owner: "James",
    syncInterval: 60000 // every 60 seconds
  },
  notifications: {
    compilerWarnings: true,
    vaultHealthAlerts: true,
    githubSyncStatus: true
  },
  ui: {
    showHiddenBalancesToggle: true,
    enableVaultGlow: true,
    enableSwipeCards: true,
    enableTokenConversion: true
  }
};
