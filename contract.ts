export const CONTRACTS = {
  1: {
    name: "Ethereum Mainnet",
    safeAddress: "0xFDf84a0e7D07bC56f7De56696fc409704cC83a24",
    rpcUrl: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    contracts: {
      SafeVault: {
        address: "0xYourContractAddressHere",
        abi: [
          {
            "anonymous": false,
            "inputs": [
              { "indexed": false, "internalType": "enum Enum.Operation", "name": "operation", "type": "uint8" },
              { "indexed": false, "internalType": "uint256", "name": "safeTxGas", "type": "uint256" },
              { "indexed": false, "internalType": "uint256", "name": "baseGas", "type": "uint256" },
              { "indexed": false, "internalType": "uint256", "name": "gasPrice", "type": "uint256" },
              { "indexed": false, "internalType": "address", "name": "gasToken", "type": "address" },
              { "indexed": false, "internalType": "address payable", "name": "refundReceiver", "type": "address" },
              { "indexed": false, "internalType": "bytes", "name": "signatures", "type": "bytes" },
              { "indexed": false, "internalType": "bytes", "name": "additionalInfo", "type": "bytes" }
            ],
            "name": "SafeMultiSigTransaction",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
              { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
            ],
            "name": "SafeReceived",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              { "indexed": true, "internalType": "address", "name": "initiator", "type": "address" },
              { "indexed": false, "internalType": "address[]", "name": "owners", "type": "address[]" },
              { "indexed": false, "internalType": "uint256", "name": "threshold", "type": "uint256" },
              { "indexed": false, "internalType": "address", "name": "initializer", "type": "address" },
              { "indexed": false, "internalType": "address", "name": "fallbackHandler", "type": "address" }
            ],
            "name": "SafeSetup",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              { "indexed": true, "internalType": "bytes32", "name": "msgHash", "type": "bytes32" }
            ],
            "name": "SignMsg",
            "type": "event"
          },
          {
            "stateMutability": "nonpayable",
            "type": "fallback"
          },
          {
            "inputs": [],
            "name": "VERSION",
            "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              { "internalType": "address", "name": "owner", "type": "address" },
              { "internalType": "uint256", "name": "_threshold", "type": "uint256" }
            ],
            "name": "addOwnerWithThreshold",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
          // Add more functions/events as needed
        ]
      }
    }
  },

  42161: {
    name: "Arbitrum One",
    safeAddress: "0x9a8FEe232DCF73060Af348a1B62Cdb0a19852d13",
    rpcUrl: `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    contracts: {
      SafeVault: {
        address: "0xYourArbitrumContractAddressHere",
        abi: [/* same ABI or chain-specific version */]
      }
    }
  }
};
