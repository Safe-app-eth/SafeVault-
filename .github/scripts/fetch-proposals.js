// .github/scripts/fetch-proposals.js
import fs from 'fs'
import path from 'path'
import { ethers } from 'ethers'
import { getPendingTransactions } from './utils/safe-api.js' // optional, or use fetch directly

const SAFE_ADDRESS = process.env.SAFE_ADDRESS
const CHAIN_ID = process.env.CHAIN_ID || "1"
const OUTPUT_PATH = path.resolve("docs", "proposals.json")

const SAFE_TX_SERVICE_BASE = {
  "1": "https://safe-transaction-mainnet.safe.global",
  "137": "https://safe-transaction-polygon.safe.global",
  "42161": "https://safe-transaction-arbitrum.safe.global"
}[CHAIN_ID]

const fetchProposals = async () => {
  const url = `${SAFE_TX_SERVICE_BASE}/api/v1/safes/${SAFE_ADDRESS}/multisig-transactions/?executed=false&nonce__gte=0`

  const res = await fetch(url)
  const data = await res.json()

  const proposals = data.results.map(tx => ({
    nonce: tx.nonce,
    description: tx.dataDecoded?.method || 'Unknown',
    status: tx.isExecuted ? 'executed' : 'pending',
    signers: tx.confirmations?.map(c => c.owner) || [],
    timestamp: tx.submissionDate
  }))

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(proposals, null, 2))
  console.log(`✅ proposals.json updated with ${proposals.length} proposals.`)
}

fetchProposals().catch(err => {
  console.error("❌ Failed to fetch proposals:", err)
  process.exit(1)
})
