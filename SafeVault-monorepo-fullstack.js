SafeVault (monorepo / fullstack)
│
├── SafeVault-Frontend
│   ├── 📦 React UI (Safe SDK + Reown via AppKit)
│   ├── 📄 manifest.json & icon.svg
│   └── ⚙️ deploy.yml → GitHub Pages
│
├── SafeVault-Proposal-All-Commands
│   └── 🤖 GitHub Action: Proposals via issue comments
│
├── SafeVault-AutoMerge-SignerStatus
│   └── 🔐 GitHub Action: Signer check + Auto-merge logic
│
├── SafeVault-LabelBasedTrigger
│   └── 🏷️ GitHub Action: Propose when label is added
│
├── SafeVault-Telegram-Preview
│   └── 🤖 Sends proposal previews to Telegram
│
├── SafeVault-Full
│   └── 📦 (Optional orchestrator to glue all backend pieces)
│
├── SafeWalletApp
│   └── 🧱 (Experimental Safe + Reown login flow, possibly standalone)
│
├── ThresholdChecker
│   └── 📊 Utility to check Safe's signer threshold/weight
│
├── log-proposals.yml / logProposalHistory.js
│   └── 📝 History logging of all proposals/actions
