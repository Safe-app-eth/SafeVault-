# 🛡️ SafeVault

Secure multisig governance & automation with Safe App integrations

Built on Safe{Wallet}, powered by Reown, and designed for Web3 teams and DAOs.

⸻

🔗 Live Safe App (Hosted via GitHub Pages or Vercel)

https://thegoodeth.github.io/safevault


🚀 Features
	•	🔐 Governance automation with Safe multisigs
	•	🧩 Safe App integration using @safe-global/safe-apps-react-sdk
	•	⚙️ Proposal execution engine with Reown + GitHub automation
	•	📦 One-click deployment via Vercel or next export
	•	💬 Telegram proposal previews
	•	🧠 On-chain signer intelligence

⸻

🧰 Tech Stack
	•	React + Next.js 13
	•	Safe SDKs (Safe Core, Protocol Kit)
	•	Tailwind CSS
	•	TypeScript
	•	Ethers v6
	•	Reown AppKit
	•	GitHub Actions + Vercel

🧑‍💻 Getting Started
git clone https://github.com/thegoodeth/safevault
cd safevault
npm install
npm run dev


📁 Folder Structure

.
├── components/            # Reusable UI components
├── pages/                 # Next.js page routes
├── public/                # Static assets (icon, manifest, etc.)
├── styles/                # Tailwind CSS
├── utils/                 # SDK integrations
├── .github/               # Actions & workflows
├── package.json
└── README.md

⚙️ Environment Setup

Create a .env.local file for local testing:
NEXT_PUBLIC_SAFE_APP_NAME=SafeVault
NEXT_PUBLIC_SAFE_APP_URL=https://thegoodeth.github.io/safevault
NEXT_PUBLIC_CHAIN_ID=1

🔐 Safe App Configuration

Add this to your /public/manifest.json

{
  "name": "SafeVault",
  "description": "Governance, automation, and Safe{Wallet} tooling for multisig power users.",
  "icons": ["https://thegoodeth.github.io/safevault/icon.png"],
  "safeAppsSDKVersion": "1.4.1",
  "provider": {
    "url": "https://thegoodeth.github.io/safevault"
  }
}

🔧 Build & Export (for GitHub Pages)
npm run build
npm run export
Make sure your next.config.js has this if you’re using next export:

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/safevault/' : '',
  basePath: isProd ? '/safevault' : '',
};

📦 Deployment (Vercel)
	•	Use Vercel for 1-click deployment
	•	Make sure the repo is public or you’re on a Pro plan to deploy private org projects
	•	Configure your GitHub workflow (.github/workflows/deploy.yml) for CI/CD

🔄 Reown Integration

import { appKit } from 'reown';

const user = appKit.getUser();
console.log("Reown User Address:", user?.address);

<button onClick={() => appKit.login()}>Login</button>
<button onClick={() => appKit.logout()}>Logout</button>

🧪 Test with Safe{Wallet}
	1.	Open: https://app.safe.global
	2.	Click: Apps > Load Custom App
	3.	Paste your hosted SafeVault URL
	4.	Approve permissions and test proposals

 📘 License

MIT © thegoodeth
