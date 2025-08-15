# SafeVault – Safe{Wallet} Governance & Automation Dashboard

SafeVault is a secure dashboard for managing Safe{Wallet}, proposals, and signer-aware transactions across multiple EVM chains. It integrates WalletConnect, Reown.AppKit, and Safe SDK for full automation.

---

## 🔐 WalletConnect Integration

Enable users to interact directly with your Safe via browser or mobile wallets:

- 🔐 Connect any EVM-compatible wallet (MetaMask, Trust, etc.)
- 📜 Allow signing of messages or proposals
- 💡 Use with Safe AppKit or Reown.AppKit for signer-aware interfaces

[WalletConnect](https://walletconnect.com/) provides a minimal, secure, and flexible connection.

---

## ⛓️ Ethereum & Multi-chain Support

SafeVault is built with cross-chain compatibility in mind. Extend the dashboard or backend to support:

- 🌉 Ethereum Mainnet
- 🌀 Arbitrum, Optimism
- 💎 Polygon, Base, Gnosis Chain, and more

> Use Safe{Core} SDK with chain-specific RPCs or Alchemy/Infura to stay synced across networks. Include chain ID and Safe address in your `proposals.json` schema for multi-chain dashboards.

---

## 🧪 Example: GitHub Action with Safe SDK

You can use the Safe SDK inside a GitHub Action to fetch proposals:

```ts
import { getProposalsForSafe } from './safe-utils'
import fs from 'fs'

const safeAddress = process.env.SAFE_ADDRESS
const chainId = process.env.CHAIN_ID || 1

const proposals = await getProposalsForSafe(safeAddress, chainId)
fs.writeFileSync('docs/proposals.json', JSON.stringify(proposals, null, 2))
```

With this setup, you have:

- 🧬 Vercel for live + preview deployment
- 🔄 GitHub Actions for automated syncing
- 🔐 WalletConnect for signer awareness
- ⚡ Safe SDK and AppKit for on-chain data

---

## ⚡ Quick Start

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
# or npm install
```

3. Run development server:

```bash
pnpm dev
```

4. Build and export for Vercel deployment:

```bash
pnpm build
pnpm export
```

---

## 🌐 Live Links

- 🖥️ [SafeVault Dashboard](https://safe-vault-f44t.vercel.app)
- 🔑 [Open in Safe App](https://safe.global/app/   appkit-tau.vercel.app)
- 💻 [GitHub Repository](https://github.com/Safe-app-eth/SafeVault-)

---

## 📝 Notes

- Keep your `.env` variables updated for Safe addresses, chain IDs, WalletConnect, and Reown API keys
- `docs/proposals.json` is automatically updated via GitHub Action
- TailwindCSS + Chakra UI are included for flexible styling