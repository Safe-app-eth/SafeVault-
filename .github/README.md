# 🔐 SafeVault GitHub Dashboard

**Live Dashboard:**  
🌐 [safe-vault-f44t.vercel.app](https://safe-vault-f44t.vercel.app) — real-time governance updates  
🗂️ [safe-app-eth.github.io/safevault-](https://safe-app-eth.github.io/safevault-/) — static GitHub archive

---

## ✅ Overview

This is the **official SafeVault multisig activity dashboard**, backed by GitHub Actions and updated every 15 minutes.

It provides a tamper-proof, automated snapshot of proposal activity across your Safe(s):

- 📅 **Date** — timestamp of each proposal
- 📝 **Description** — decoded or raw transaction intent
- 🔁 **Status** — pending, executed, or failed
- 🧾 **Signers** — all participant addresses and approval state

The dashboard is powered by:
- [`docs/proposals.json`](./docs/proposals.json) — raw data
- [`index.html`](./docs/index.html) — static frontend
- [`update-proposals.yml`](.github/workflows/update-proposals.yml) — auto-syncing GitHub Action

---

## 🚀 Deployment Architecture

┌────────────────────┐
│  SafeVault Backend │ ◄──── Hosted @ Vercel (dynamic proposals API)
└─────────┬──────────┘
│
Every 15 mins
▼
┌────────────────────────────┐
│  GitHub Action Scheduler   │
│  update-proposals.yml      │
│  Fetches proposals.json    │
└─────────┬──────────────────┘
│
▼
┌──────────────────────────┐
│   /docs/proposals.json   │
│   + /index.html UI       │
│   + .nojekyll            │
└─────────┬────────────────┘
▼
🌍 GitHub Pages — public, verified archive
---

## 🔁 Live Automation

The GitHub Action runs every **15 minutes** and:

1. Pulls proposal data from your Vercel-hosted API:

2. https://safe-vault-f44t.vercel.app/api/proposals

3. 2. Overwrites the existing `docs/proposals.json` with fresh data

3. Commits and pushes updates back to `main`

You can also trigger it manually from GitHub → **Actions → "Update Safe Proposals" → Run Workflow**.

---

## 🧠 How to Set Up (One-Time)

### 1. Dashboard Files

Inside the `docs/` folder:

- `index.html` — simple interactive dashboard
- `proposals.json` — live proposal data (auto-managed)
- `.nojekyll` — disables GitHub Jekyll processing

### 2. Enable GitHub Pages

In your GitHub repo:

- Go to **Settings → Pages**
- Set:
- **Branch**: `main`
- **Folder**: `/docs`
- ✅ Save

Your dashboard will be publicly accessible at:  
📁 `https://safe-app-eth.github.io/safevault-/`

### 3. GitHub Action

Create the following file at `.github/workflows/update-proposals.yml`:

```yaml
name: 🔄 Update Safe Proposals

on:
schedule:
 - cron: '*/15 * * * *'
workflow_dispatch:

jobs:
update:
 runs-on: ubuntu-latest
 steps:
   - name: Checkout code
     uses: actions/checkout@v3

   - name: Fetch latest proposals
     run: |
       curl -s https://safe-vault-f44t.vercel.app/api/proposals -o docs/proposals.json

   - name: Commit and push
     run: |
       git config user.name "github-actions[bot]"
       git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
       git add docs/proposals.json
       git commit -m "🔄 Update proposals.json from live backend" || echo "No changes to commit"
       git push
🛠 Maintained By

SafeVault is a modular, secure automation layer built on Safe{Wallet}.
This dashboard is maintained by the SafeVault Governance Core.
Every proposal signed, skipped, or executed is tracked publicly here.

🔗 Launch SafeVault Dashboard
🔗 View on GitHub Pages

© 2025 SafeVault · All rights reserved.
