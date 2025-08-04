const { ethers } = require("ethers");
const fetch = require("node-fetch");

const {
  SAFE_ADDRESS,
  SAFE_RPC_URL,
  REOWN_API_KEY,
  GITHUB_TOKEN,
  COMMENT_BODY,
  COMMENT_URL,
} = process.env;

// Optional: Load Safe SDK dependencies
const Safe = require('@safe-global/protocol-kit').default;
const EthersAdapter = require('@safe-global/protocol-kit').EthersAdapter;
const { SafeFactory } = require('@safe-global/protocol-kit');

async function main() {
  try {
    console.log("Parsing comment...");
    const command = COMMENT_BODY.trim();

    if (!command.startsWith("/propose-")) {
      console.log("No valid command found. Exiting.");
      return;
    }

    const action = command.split("/propose-")[1].split(" ")[0];
    const args = command.replace(`/propose-${action}`, "").trim().split(" ");

    console.log(`Detected action: ${action}`);
    console.log(`Args: ${args.join(", ")}`);

    // Set up provider and signer
    const provider = new ethers.providers.JsonRpcProvider(SAFE_RPC_URL);
    const signer = provider.getSigner(); // Assumes you're using a pre-funded GitHub runner wallet or bundler

    // Connect Safe SDK
    const ethAdapter = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });

    const safe = await Safe.create({
      ethAdapter,
      safeAddress: SAFE_ADDRESS,
    });

    // Example: handle `/propose-send <to> <value>`
    if (action === "send") {
      const [to, amount] = args;

      const tx = await safe.createTransaction({
        safeTransactionData: {
          to,
          value: ethers.utils.parseEther(amount).toString(),
          data: "0x",
        },
      });

      console.log("Transaction created.");
      console.log(tx);

      // Optional: push to Reown API or log to GitHub comment
      await commentOnGitHub(`✅ Proposed transfer of ${amount} ETH to ${to}.`);
    }

    // Add more commands from SafeVault-Proposal-All-Commands as needed

  } catch (err) {
    console.error("Error handling command:", err);
    await commentOnGitHub(`❌ Error: ${err.message}`);
  }
}

async function commentOnGitHub(message) {
  await fetch(COMMENT_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: message,
    }),
  });
}

main();
