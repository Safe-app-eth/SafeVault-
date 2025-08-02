![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.


# 🔐 SafeVault — Secure Dashboard for Safe{Wallet}

**Live App:** [http://reown-appkit-delta.vercel.app]  
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

🔗 **Live Site:** [https://safe-vault-f44t.vercel.app](https://safe-vault-f44t.vercel.app)  
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

- ✅ **[Live Dashboard](https://safe-vault-f44t.vercel.app/)**
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

<!-- > [!IMPORTANT] -->
<!-- > Wagmi is participating in Gitcoin Grants round 21. Consider <a href="https://explorer.gitcoin.co/#/round/42161/389/74">supporting the project</a>. Thank you. 🙏 -->

<br>

<p align="center">
  <a href="https://wagmi.sh">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/wagmi/main/.github/logo-dark.svg">
      <img alt="wagmi logo" src="https://raw.githubusercontent.com/wevm/wagmi/main/.github/logo-light.svg" width="auto" height="60">
    </picture>
  </a>
</p>

<p align="center">
  Reactive primitives for Ethereum apps
<p>

<p align="center">
  <a href="https://www.npmjs.com/package/wagmi">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/v/wagmi?colorA=21262d&colorB=21262d">
      <img src="https://img.shields.io/npm/v/wagmi?colorA=f6f8fa&colorB=f6f8fa" alt="Version">
    </picture>
  </a>
  <a href="https://github.com/wevm/wagmi/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/l/wagmi?colorA=21262d&colorB=21262d">
      <img src="https://img.shields.io/npm/l/wagmi?colorA=f6f8fa&colorB=f6f8fa" alt="MIT License">
    </picture>
  </a>
  <a href="https://www.npmjs.com/package/wagmi">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/npm/dm/@wagmi/core?colorA=21262d&colorB=21262d">
      <img src="https://img.shields.io/npm/dm/@wagmi/core?colorA=f6f8fa&colorB=f6f8fa" alt="Downloads per month">
    </picture>
  </a>
  <a href="https://bestofjs.org/projects/wagmi">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/endpoint?colorA=21262d&colorB=21262d&url=https://bestofjs-serverless.now.sh/api/project-badge?fullName=wevm%2Fviem%26since=daily">
      <img src="https://img.shields.io/endpoint?colorA=f6f8fa&colorB=f6f8fa&url=https://bestofjs-serverless.now.sh/api/project-badge?fullName=wevm%2Fviem%26since=daily" alt="Best of JS">
    </picture>
  </a>
  <a href="https://app.codecov.io/gh/wevm/wagmi">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/codecov/c/github/wevm/wagmi?colorA=21262d&colorB=21262d">
      <img src="https://img.shields.io/codecov/c/github/wevm/wagmi?colorA=f6f8fa&colorB=f6f8fa" alt="Code coverage">
    </picture>
  </a>
</p>

---

## Documentation

For documentation and guides, visit [wagmi.sh](https://wagmi.sh).

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discuss Wagmi on GitHub](https://github.com/wevm/wagmi/discussions)

For casual chit-chat with others using the framework:

[Join the Wagmi Discord](https://discord.gg/SghfWBKexF)

## Contributing

Contributions to Wagmi are greatly appreciated! If you're interested in contributing to Wagmi, please read the [Contributing Guide](https://wagmi.sh/dev/contributing) **before submitting a pull request**.

## Sponsors

If you find Wagmi useful or use it for work, please consider [sponsoring Wagmi](https://github.com/sponsors/wevm?metadata_campaign=gh_readme_support). Thank you 🙏

<p>
  <a href="https://paradigm.xyz">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/paradigm-dark.svg">
      <img alt="paradigm logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/paradigm-light.svg" width="auto" height="70">
    </picture>
  </a>
  <a href="https://ithaca.xyz">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/ithaca-dark.svg">
      <img alt="ithaca logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/ithaca-light.svg" width="auto" height="70">
    </picture>
  </a>
</p>

<p>
  <a href="https://twitter.com/family">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/family-dark.svg">
      <img alt="family logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/family-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://twitter.com/context">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/context-dark.svg">
      <img alt="context logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/context-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://walletconnect.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/walletconnect-dark.svg">
      <img alt="WalletConnect logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/walletconnect-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://twitter.com/prtyDAO">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/partydao-dark.svg">
      <img alt="PartyDAO logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/partydao-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://dynamic.xyz">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/dynamic-dark.svg">
      <img alt="Dynamic logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/dynamic-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://sushi.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/sushi-dark.svg">
      <img alt="Sushi logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/sushi-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://stripe.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/stripe-dark.svg">
      <img alt="Stripe logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/stripe-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://www.privy.io">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/privy-dark.svg">
      <img alt="Privy logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/privy-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://pancakeswap.finance/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/pancake-dark.svg">
      <img alt="pancake logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/pancake-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://celo.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/celo-dark.svg">
      <img alt="celo logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/celo-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://rainbow.me">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/rainbow-dark.svg">
      <img alt="rainbow logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/rainbow-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://pimlico.io">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/pimlico-dark.svg">
      <img alt="pimlico logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/pimlico-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://zora.co">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/zora-dark.svg">
      <img alt="zora logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/zora-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://lattice.xyz">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/lattice-dark.svg">
      <img alt="lattice logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/lattice-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://twitter.com/supafinance">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/supa-dark.svg">
      <img alt="supa logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/supa-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://zksync.io">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/zksync-dark.svg">
      <img alt="zksync logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/zksync-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://syndicate.io">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/syndicate-dark.svg">
      <img alt="syndicate logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/syndicate-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://reservoir.tools">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/reservoir-dark.svg">
      <img alt="reservoir logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/reservoir-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://linea.build">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/linea-dark.svg">
      <img alt="linea logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/linea-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://uniswap.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/uniswap-dark.svg">
      <img alt="uniswap logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/uniswap-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://biconomy.io">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/b0276d897be98a4c94ad1d1c72ce99a1020eeb58/content/sponsors/biconomy-dark.svg">
      <img alt="biconomy logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/biconomy-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://thirdweb.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/thirdweb-dark.svg">
      <img alt="thirdweb logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/thirdweb-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://polymarket.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/polymarket-dark.svg">
      <img alt="polymarket logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/polymarket-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://routescan.io">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/routescan-dark.svg">
      <img alt="routescan logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/routescan-light.svg" width="auto" height="50">
    </picture>
  </a>
  <a href="https://sequence.xyz">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/sequence-dark.svg">
      <img alt="sequence logo" src="https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/sequence-light.svg" width="auto" height="50">
    </picture>
  </a>
</p>

[Sponsor Wagmi](https://github.com/sponsors/wevm?metadata_campaign=gh_readme_support_bottom)

<br />
<br />

<a href="https://vercel.com/?utm_source=wevm&utm_campaign=oss">
  <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Powered by Vercel" height="35">
</a>
<br />
<a href="https://quicknode.com/?utm_source=wevm&utm_campaign=oss">
  <img src="https://raw.githubusercontent.com/wevm/.github/refs/heads/main/content/quicknode-badge.svg" alt="Powered by QuickNode" height="35">
</a>



## 🛡 Legal

© 2025 SafeVault. All rights reserved.
