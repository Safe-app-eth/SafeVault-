![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.


# 🔐 SafeVault — Secure Dashboard for Safe{Wallet}

**Live App:** [https://safe-app-eth.github.io/SafeVault-](http://reown-appkit-delta.vercel.app)  
✅ Safe App Ready · 🟢 GitHub Actions Enabled · ⚡️ Vercel Deployed

---

## 🚀 Overview

**SafeVault** is a secure, fully integrated dashboard for managing your [Safe{Wallet}](https://safe.global/). It empowers Safe owners to view account info, propose transactions, manage thresholds, and receive real-time updates—all in one interface.

---

## ✨ Features

- 📊 **Live Safe Details** – View Safe address, owners, balances, threshold
- 🧩 **Safe App SDK Integration** – Seamlessly runs inside Safe{Wallet} via iframe
- 🧠 **Automated Proposals** – Triggered by GitHub Actions or external bots
- 🌐 **Multichain Support** – Works on Arbitrum and Ethereum
- 🔗 **Wallet Compatibility** – Supports MetaMask, WalletConnect, OneKey, Ledger, MPC wallets

---

## 📦 Core Dependencies

| Package                             | Purpose                                  |
|-------------------------------------|------------------------------------------|
| `@safe-global/protocol-kit`         | Interact with Safe smart contracts       |
| `@safe-global/api-kit`              | Communicate with the Safe Transaction Service |
| `@safe-global/safe-core-sdk-types`  | Type definitions for Safe SDK            |
| `ethers`                            | Ethereum JavaScript SDK                  |
| `dotenv`                            | Environment variable support             |

**Dev Dependencies:**

- `typescript` – TypeScript compiler  
- `ts-node` – Run TypeScript directly

---

## 🌐 Safe App Integration (Iframe)

To use SafeVault inside [app.safe.global](https://app.safe.global):

1. Open any Safe.
2. Go to **Apps** → **Add Custom App**
3. Paste this URL:

```txt
https://safe-vault-f44t.vercel.app
```

It will load inside the Safe iframe, automatically detecting your Safe address and chain.

---

## 🧪 Local Development

```bash
git clone https://github.com/Safe-app-eth/SafeVault-.git
cd SafeVault-
npm install
npm run dev
```

Then open [`http://localhost:3000`](http://localhost:3000) in your browser.

---

## ⚙️ Production Deployment

This project uses **Vercel** for continuous deployment.

🔗 **Live Site:** [https://safe-app-eth.github.io/SafeVault-](https://safe-app-eth.github.io/SafeVault-)  
🔄 Every push to `main` triggers a redeploy.

---

## 🛠 GitHub Actions

This repository includes a GitHub Action that:

- ⏳ **Auto-updates the README** with recent Safe proposals
- 🔔 **Sends alerts** to Slack/Telegram (configurable)
- 🤖 **Supports auto-PR creation** for Safe proposals

Workflow file: `.github/workflows/sign-safe-proposals.yml`

---

## 📄 `manifest.json` for Safe{App}

Place the following in your `public/manifest.json` for Safe Apps SDK compatibility:

```json
{
  "name": "SafeVault",
  "description": "Dashboard for viewing and managing Safe{Wallet} accounts",
  "iconPath": "logo.svg",
  "network": {
    "chainId": [1, 42161]
  }
}
```

---

## 🔄 Recent Safe Proposals

<!-- SAFE_PROPOSALS_START -->
Loading proposals...
<!-- SAFE_PROPOSALS_END -->

---

## 🔐 Safe Proposal Tools

- ✅ **[Live Dashboard](https://safe-app-eth.github.io/SafeVault-/)**
- 🔄 **Automated Signing:** via `.github/workflows/sign-safe-proposals.yml`
- ✍️ **Manual Signing:** Supported in UI via MetaMask or WalletConnect

---

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-blue)](https://safe-app-eth.github.io/SafeVault-/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/<your-netlify-id>/deploy-status)](https://app.netlify.com/sites/safevault-dashboard/deploys)

## 🧠 Version & Metadata

- **Version:** `v1.0.0`  
- **Release Date:** July 26, 2025  
- **GitHub:** [github.com/Safe-app-eth/SafeVault-](https://github.com/Safe-app-eth/SafeVault-)

---

## 🛡 Legal

© 2025 SafeVault. All rights reserved.
