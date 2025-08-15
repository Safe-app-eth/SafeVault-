const fs = require("fs");

const signer = "0xFDf84a0e7D07bC56f7De56696fc409704cC83a24";
const today = new Date();

const safeAppManifest = {
  name: "SafeVault",
  description: "SafeVault – Secure Safe{Wallet} automation & governance platform.",
  url: "https://safe-vault-f44t.vercel.app",
  iconPath: "/icon.png",
  safeAppsPermissions: [],
  verified: {
    signer: signer,
    date: today.toISOString().split("T")[0],
    badge: `✅ Verified by signer ${signer.slice(0, 6)}…${signer.slice(-4)} on ${today.toLocaleDateString()}`
  },
  appUrls: [
    "https://safe-vault-f44t.vercel.app",
    "http://127.0.0.1/#"
  ]
};

fs.writeFileSync("safe-app.json", JSON.stringify(safeAppManifest, null, 2));
console.log("✅ safe-app.json generated successfully.");
