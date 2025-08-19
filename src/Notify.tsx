import React, { useState } from "react";
import { ethers } from "ethers";

export default function Notify() {
  const [selectedSafe, setSelectedSafe] = useState<string>("");
  const [verified, setVerified] = useState(false);

  async function handleVerify() {
    if (!window.ethereum) {
      alert("Please install MetaMask or connect a wallet.");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    const message = `Verify ownership of Safe: ${address}`;
    const signature = await signer.signMessage(message);

    const res = await fetch("http://localhost:4000/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, signature, message }),
    });

    const data = await res.json();
    if (data.success) {
      setVerified(true);
      alert("✅ Safe verified! Notifications enabled.");
    } else {
      alert("❌ Verification failed.");
    }
  }

  return (
    <div>
      <h2>Safe Notification Setup</h2>
      <input
        type="checkbox"
        checked={!!selectedSafe}
        onChange={() => setSelectedSafe("enabled")}
      />{" "}
      Enable notifications
      <br />
      <button disabled={!selectedSafe} onClick={handleVerify}>
        Verify & Enable
      </button>
      {verified && <p>Notifications are now active!</p>}
    </div>
  );
}
