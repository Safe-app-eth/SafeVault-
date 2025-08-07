# 🔐 SafeVault GitHub Dashboard

A lightweight, static dashboard to visualize **Safe proposal activity**—deployed directly from GitHub Pages, with no external dependencies or frameworks.

---

## ✅ Overview

The **SafeVault GitHub Dashboard** provides a clean interface for tracking activity on your Safe (Gnosis Safe) wallet, including:

- 📅 **Date** of proposal creation  
- 📝 **Description** of each proposal  
- 🚦 **Status** (pending, executed, rejected, etc.)  
- ✍️ **Signers** who have interacted with the proposal  

All proposal data is sourced from a static JSON file (`docs/proposals.json`) and automatically updated every **15 minutes**.

> 💡 Built for reliability. No frameworks, no frontend builds, just GitHub + HTML.

---

## 🚀 Quick Setup

Follow these steps to get your dashboard live in minutes:

1. ✅ **Ensure GitHub Actions Workflow Exists**  
   Make sure `.github/workflows/update-proposals.yml` is present in your repo. This handles periodic data updates.

2. 📁 **Organize Your Files**  
   Place the following files in the `docs/` directory:
   ```
   docs/
   ├── index.html
   ├── proposals.json
   └── .nojekyll
   ```

3. 🌐 **Configure GitHub Pages**
   - Go to your repo's **Settings → Pages**
   - Set **Branch** to `main`
   - Set **Folder** to `/docs`
   - Click **Save**

4. 🎉 **You're Live!**  
   Your dashboard will be available at:  
   [`https://safe-app-eth.github.io/safevault-/`](https://safe-app-eth.github.io/safevault-/)

---

## 🔁 Automation

The update process is handled via GitHub Actions. Every 15 minutes, the action fetches the latest proposals from your backend API and overwrites `docs/proposals.json`.

> ✅ Just update the fetch URL inside the GitHub Action to point to your API endpoint.

---

## 🛠️ Customization Ideas

- Add filters by status or signer
- Add Safe address to header
- Include transaction hashes or links
- Make mobile responsive (e.g., with lightweight CSS)

---

## 👥 Maintainers

Built and maintained by the **SafeVault Multisig Automation** team.

&copy; 2025 SafeVault. All rights reserved.

---

## 🧠 Safe SDK Integration

This dashboard can be extended to fetch and interact with live data from your Safe wallet using the [Safe{Core} SDK](https://github.com/safe-global/safe-core-sdk). Here are some ideas:

- 🔎 Fetch live Safe proposals from the Safe transaction service
- 🔐 Use Safe SDK to verify signature thresholds and transaction statuses
- 📡 Enable on-chain interaction previews (e.g., simulate execution)
- 📤 Submit new transactions or batched Safe operations via backend
- 🛡️ Integrate AppKit for programmatic signing and transaction management

> For example, you can connect this dashboard with a lightweight Node.js backend or GitHub Action using the Safe SDK to keep `proposals.json` synced with your Safe's activity across Ethereum, Polygon, or any supported EVM chain.

---

## 🧩 Extensible Features

Future enhancements and community contributions could include:

- 🔍 **Search & Filter**: by status, Safe address, or transaction type
- 🧾 **Transaction Explorer**: links to Etherscan or Safe Explorer
- 🛠️ **SafeList Integration**: show connected Safes and their owners
- 🪪 **Signer Insights**: track which owners signed what, and when
- ⛓️ **Cross-chain Support**: fetch proposals from multiple networks
- 💬 **Telegram/Webhook Alerts**: for new proposals or executed actions

---

## 🔒 Secure by Design

All interactions are either static or read-only, unless you configure backend signing using Safe SDK + AppKit. This ensures:

- No keys or secrets exposed in the frontend
- All logic is verifiable and auditable via GitHub
- Optional multisig enforcement through off-chain logic


---

## ⚙️ Deployment on Vercel (Optional)

Although the dashboard is GitHub Pages-ready, you can also deploy it to [Vercel](https://vercel.com) for more advanced use cases:

- 🔄 Real-time proposal previews via serverless functions
- 🧪 Preview environments for each GitHub Pull Request
- 🔒 Environment variables to securely fetch Safe data from private APIs

> Vercel setup can live alongside GitHub Pages. You may use it for development previews and GitHub Pages for production.

---

## 🔗 WalletConnect Integration (Optional)

Want to enable users to interact directly with your Safe via browser or mobile wallets? You can embed [WalletConnect](https://walletconnect.com/) support to:

- 🔐 Connect any EVM-compatible wallet (MetaMask, Trust, etc.)
- 📜 Allow signing of messages or proposals
- 💡 Use with Safe AppKit for signer-aware interfaces

Use WalletConnect with [Reown.AppKit](https://github.com/reown-com/reown-dotnet) or the official Safe AppKit to keep things minimal, secure, and flexible.

---

## ⛓️ Ethereum & Multi-chain Support

SafeVault is built with cross-chain compatibility in mind. Extend the dashboard or backend to support:

- 🌉 Ethereum Mainnet
- 🌀 Arbitrum, Optimism
- 💎 Polygon, Base, Gnosis Chain, and more

> Use Safe{Core} SDK with chain-specific RPCs or Alchemy/Infura to stay synced across networks. Include chain ID and Safe address in your proposals.json schema for multi-chain dashboards.

---

## 🧪 Example: GitHub Action with Safe SDK

You can use the Safe SDK inside a GitHub Action to fetch proposals:

```ts
import { getProposalsForSafe } from './safe-utils'

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

