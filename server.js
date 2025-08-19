const axios = require('axios');
const { ethers } = require('ethers');
const TelegramBot = require('node-telegram-bot-api');

// ==== CONFIG ====
const SAFE_ADDRESS = '0xFDf84a0e7D07bC56f7De56696fc409704cC83a24';
const RPC_URL = 'https://mainnet.infura.io/v3/989455f6-657a-43f3-96d5-96dcfbba47de';
const TELEGRAM_TOKEN = '7841605450:AAHev-ZXjdtJg2mp5t6uGFqkvTShSW6PAeY';
const TELEGRAM_CHAT_ID = '1097330947'; // Where notifications will be sent
const POLL_INTERVAL = 5000; // in ms

const provider = new ethers.JsonRpcProvider(RPC_URL);
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: false });

// Keep track of processed transactions
const processedTxs = new Set();

// ==== VERIFICATION FUNCTION ====
async function verifyTransaction(tx) {
  console.log(`🔍 Verifying transaction ${tx.transaction_hash}`);

  // Example: your SafeVault verification logic here
  // ...

  // Send Telegram notification
  const message = `
🚨 New Safe Transaction Detected!
Hash: ${tx.transaction_hash}
Executed: ${tx.execution_date || 'Pending'}
From: ${tx.sender?.value || 'N/A'}
To: ${tx.to}
Value: ${ethers.formatEther(tx.value || 0)} ETH
  `;
  try {
    await bot.sendMessage(TELEGRAM_CHAT_ID, message);
  } catch (err) {
    console.error('❌ Telegram notification failed:', err.message);
  }
}

// ==== POLLING FUNCTION ====
async function pollSafeTransactions() {
  console.log(`✅ Started polling Safe transactions for: ${SAFE_ADDRESS}`);
  setInterval(async () => {
    try {
      const response = await axios.get(
        `https://safe-transaction.gnosis.io/api/v1/safes/${SAFE_ADDRESS}/transactions/`
      );
      const transactions = response.data.results;

      for (const tx of transactions) {
        if (!processedTxs.has(tx.transaction_hash)) {
          processedTxs.add(tx.transaction_hash);
          await verifyTransaction(tx);
        }
      }
    } catch (error) {
      console.error('❌ Error polling Safe transactions:', error.message);
    }
  }, POLL_INTERVAL);
}

// ==== START POLLING ====
pollSafeTransactions();
