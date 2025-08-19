import express from "express";
import bodyParser from "body-parser";
import { ethers } from "ethers";

const app = express();
app.use(bodyParser.json());

app.post("/verify", async (req, res) => {
  try {
    const { address, signature, message } = req.body;

    // Recover signer from signature
    const recovered = ethers.verifyMessage(message, signature);

    if (recovered.toLowerCase() === address.toLowerCase()) {
      console.log("✅ Verified Safe owner:", address);
      return res.json({ success: true });
    } else {
      return res.json({ success: false, error: "Invalid signature" });
    }
  } catch (err) {
    console.error("Verification error:", err);
    res.json({ success: false, error: err.message });
  }
});

app.listen(4000, () => console.log("🚀 Server running on http://localhost:4000"));
