# 🔐 SafeVault GitHub Dashboard

## ✅ Overview

This is your lightweight GitHub Pages dashboard showing Safe proposal activity.

- Displays proposal **Date**, **Description**, **Status**, and **Signers**
- Data is stored in `docs/proposals.json` and updated automatically every 15 minutes
- Fully static—no frameworks or build steps required

## 🚀 Setup Instructions

1. Ensure `.github/workflows/update-proposals.yml` is present.
2. Place the dashboard files in the `docs/` folder (`index.html`, `proposals.json`, `.nojekyll`).
3. Go to **Settings → Pages**.
   - Set **Branch** to `main`
   - Set **Folder** to `/docs`
4. Save and you’re live at:  
   `https://<your-username>.github.io/<your-repo-name>/`

## 🔁 Automation

The GitHub Action fetches the latest `proposals.json` every 15 minutes from your API. Just update the URL to match your backend service.

---

Maintained by **SafeVault** Multisig Automation • © 2025
