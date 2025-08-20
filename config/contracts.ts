export const CONTRACTS = {
  1: {
    name: "Ethereum Mainnet",
    safeAddress: "0xfecBad5D60725EB6fd10f8936e02fa203fd27E4b",
    rpcUrl: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    contracts: {
      SafeVault: {
        address: "0x3E5c63644E683549055b9Be8653de26E0B4CD36E",
        abi: [
          {
            inputs: [{ internalType: "address", name: "_singleton", type: "address" }],
            stateMutability: "nonpayable",
            type: "constructor"
          },
          {
            stateMutability: "payable",
            type: "fallback"
          },
          {
            name: "masterCopy",
            type: "function",
            inputs: [],
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view"
          }
        ]
      }
    }
  },

  42161: {
    name: "Arbitrum One",
    safeAddress: "0xFDf84a0e7D07bC56f7De56696fc409704cC83a24",
    rpcUrl: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    contracts: {
      SafeVault: {
        address: "0x3E5c63644E683549055b9Be8653de26E0B4CD36E",
        abi: [/* same ABI or chain-specific version */]
      }
    }
  }
};
