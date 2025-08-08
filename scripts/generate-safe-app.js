const fs = require("fs");

const safeAppManifest = {
  name: "SafeVault",
  description: "SafeVault – Secure Safe{Wallet} automation & governance platform.",
  url: "https://safe-vault-f44t.vercel.app", // Live app URL
  iconPath: "/icon.png",
  safeAppsPermissions: [],
  verified: {
    signer: "0xFDf84a0e7D07bC56f7De56696fc409704cC83a24",
    date: new Date().toISOString().split("T")[0],
    badge: `✅ Verified by signer 0xFDf84… on ${new Date().toLocaleDateString()}`
  },
  appUrls: [
    "https://safe-vault-f44t.vercel.app",
    "http://127.0.0.1/#"
  ]
};

// Save the manifest
fs.writeFileSync("safe-app.json", JSON.stringify(safeAppManifest, null, 2));
console.log("✅ safe-app.json generated successfully.");
