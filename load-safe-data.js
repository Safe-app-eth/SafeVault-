// load-safe-data.js
const safeListEl = document.getElementById('safe-list');
const errorMessageEl = document.getElementById('error-message');

// Replace with your Safe address & chain
const SAFE_ADDRESS = '0xFDf84a0e7D07bC56f7De56696fc409704cC83a24';
const CHAIN = 'mainnet'; // or 'polygon', 'arbitrum', etc.

async function loadSafeData() {
  try {
    safeListEl.innerHTML = 'Fetching Safe data...';

    // Fetch latest transactions from Safe API
    const response = await fetch(`https://safe-transaction-${CHAIN}.safe.global/api/v1/safes/${SAFE_ADDRESS}/multisig-transactions/?limit=10`);
    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const data = await response.json();
    const results = data.results || [];

    if (results.length === 0) {
      safeListEl.innerHTML = '<p>No proposals found.</p>';
      return;
    }

    safeListEl.innerHTML = results.map(tx => `
      <div class="safe-item">
        <strong>Nonce:</strong> ${tx.nonce} <br/>
        <strong>To:</strong> ${tx.to} <br/>
        <strong>Value:</strong> ${tx.value} wei <br/>
        <strong>Created:</strong> ${new Date(tx.submissionDate).toLocaleString()} <br/>
        <strong>Status:</strong> ${tx.isExecuted ? 'Executed ✅' : 'Pending ⏳'}
      </div>
    `).join('');

  } catch (err) {
    console.error(err);
    errorMessageEl.textContent = err.message;
    safeListEl.innerHTML = '';
  }
}

loadSafeData();
