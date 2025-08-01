# 🔐 SafeVault GitHub Dashboard UI

## ✅ What This Is

A lightweight, GitHub Pages–hosted dashboard that:

- 🔍 Shows recent Safe proposals
- 📊 Displays status, signers, and descriptions
- 🔄 Updates via a static `proposals.json` file

## 🔗 Example Output

| Date       | Description   | Status  | Signers                     |
|------------|----------------|---------|-----------------------------|
| 2025-07-24 | Send 0.1 ETH   | Pending | 0xSigner1, 0xSigner2        |
| 2025-07-23 | Send 50 USDC   | Success | 0xSigner3, 0xSigner4        |

## 🚀 How To Use

1. Place your dashboard files in the `docs/` directory of your repository.
2. Go to `Settings > Pages > Source`, then choose:

   Branch: main
   Folder: /docs

3. Access the live dashboard at:

4. https://safe-app-eth.github.io//

5. > ✅ Pro Tip: Add a `.nojekyll` file in `docs/` to ensure proper GitHub Pages rendering (especially for files/folders starting with `_`).

## 🔁 Optional Automation

You can automatically update `docs/proposals.json` using:

- 🔗 [Reown API](https://reown.com/)
- ⚙️ Safe transaction events from the Gnosis Safe SDK
- 🤖 GitHub Actions (e.g. `update-proposals.yml` running every 15 mins)

---

Maintained by **SafeVault** — multisig-native automation & governance tooling.
