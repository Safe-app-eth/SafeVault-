export const CONTRACTS = {
  1: {
    safeAddress: process.env.NEXT_PUBLIC_SAFE_ADDRESS_MAINNET,
    rpcUrl: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    contracts: {
      Vault: {
        address: "0x...", // your contract address
        abi: [/* ABI here */]
      }
    }
  },
  42161: {
    safeAddress: process.env.NEXT_PUBLIC_SAFE_ADDRESS_ARBITRUM,
    rpcUrl: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    contracts: {
      Vault: {
        address: "0x...", // your contract address
        abi: [/* ABI here */]
      }
    }
  }
};
