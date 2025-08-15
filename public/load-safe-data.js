async function loadSafeData() {
  const listEl = document.getElementById('safe-list');
  const errorEl = document.getElementById('error-message');

  try {
    const response = await fetch('./safe-data.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();

    // Render safes
    listEl.innerHTML = '';
    data.addedSafes.forEach(safe => {
      const div = document.createElement('div');
      div.className = 'safe-item';
      div.innerHTML = `
        <strong>${safe.name}</strong> <br/>
        Address: ${safe.address} <br/>
        Network: ${safe.network}
      `;
      listEl.appendChild(div);
    });

  } catch (err) {
    console.error('Error loading Safe data:', err);
    errorEl.textContent = 'Failed to load Safe data. Please try again later.';
    listEl.textContent = '';
  }
}

loadSafeData();
