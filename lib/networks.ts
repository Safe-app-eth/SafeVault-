export const NETWORKS = {
  ethereum: {
    chainId: 1,
    rpcUrl: process.env.ETH_MAINNET!,
    name: "Ethereum Mainnet"
  },
  arbitrum: {
    chainId: 42161,
    rpcUrl: process.env.ARBITRUM_MAINNET!,
    name: "Arbitrum One"
  },
  polygon: {
    chainId: 137,
    rpcUrl: process.env.POLYGON_MAINNET!,
    name: "Polygon"
  },
  bnb: {
    chainId: 56,
    rpcUrl: process.env.BNB_MAINNET!,
    name: "BNB Smart Chain"
  },
  optimism: {
    chainId: 10,
    rpcUrl: process.env.OPT_MAINNET!,
    name: "Optimism"
  },
  base: {
    chainId: 8453,
    rpcUrl: process.env.BASE_MAINNET!,
    name: "Base"
  },
  abstract: {
    chainId: 2741,
    rpcUrl: process.env.ABSTRACT_MAINNET!,
    name: "Abstract"
  },
  unichain: {
    chainId: 130,
    rpcUrl: process.env.UNICHAIN_MAINNET!,
    name: "Unichain"
  }
};
