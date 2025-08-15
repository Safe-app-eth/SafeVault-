// load-safe-data.js
(async function () {
  const safeListEl = document.getElementById('safe-list');
  const errorEl = document.getElementById('error-message');

  try {
    const url = './proposals.json'; // Relative path works for GitHub Pages & Vercel
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' }
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const safes = await res.json();

    if (!Array.isArray(safes) || safes.length === 0) {
      safeListEl.textContent = 'No Safe data available.';
      return;
    }

    safeListEl.innerHTML = safes.map(safe =>
      `<div class="safe-item">
         <strong>${safe.name || 'Unnamed Safe'}</strong><br>
         Address: ${safe.address}<br>
         Chain: ${safe.chain}
       </div>`
    ).join('');
  } catch (err) {
    console.error('Error loading Safe data:', err);
    errorEl.textContent = 'Failed to load Safe data. Please try again later.';
  }
})();
