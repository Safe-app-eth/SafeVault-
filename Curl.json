curl -X POST "https://api.thirdweb.com/v1/transactions" \
  -H "Content-Type: application/json" \
  -H "x-secret-key: <your-project-secret-key>" \
  -d '{
    "chainId": "84532",
    "from": "<your-server-wallet-address>",
    "transactions": [
      {
        "type": "contractCall",
        "contractAddress": "0x...",
        "method": "function mintTo(address to, uint256 amount)",
        "params": ["0x...", "100"]
      }
    ]
  }'
