fetch('config/config.json')
  .then(res => res.json())
  .then(config => {
    const chainSelect = document.getElementById('chainSelect');
    const safeList = document.getElementById('safeList');

    // Add chain options
    Object.keys(config.addedSafes).forEach(chainId => {
      const option = document.createElement('option');
      option.value = chainId;
      option.textContent = `Chain ${chainId}`;
      chainSelect.appendChild(option);
    });

    // Display safes for selected chain
    async function showSafes(chainId) {
      safeList.innerHTML = '';
      const safes = config.addedSafes[chainId];
      if (!safes) return;

      for (const [safeAddress, safe] of Object.entries(safes)) {
        const safeDiv = document.createElement('div');
        safeDiv.className = 'safe';

        const safeHeader = document.createElement('h3');
        safeHeader.innerHTML = `<a href="https://etherscan.io/address/${safeAddress}" target="_blank">${safeAddress}</a> (Threshold: ${safe.threshold})`;
        safeDiv.appendChild(safeHeader);

        const ownersUl = document.createElement('ul');
        for (const owner of safe.owners) {
          const li = document.createElement('li');
          const ownerName = config.addressBook[chainId]?.[owner.value] || owner.value;
          
          // Hidden balances (dummy example, static)
          const balance = 'Loading...'; // will replace with live call if needed
          
          li.innerHTML = `<a href="https://etherscan.io/address/${owner.value}" target="_blank">${ownerName}</a> - Balance: ${balance}`;
          ownersUl.appendChild(li);
        }

        safeDiv.appendChild(ownersUl);
        safeList.appendChild(safeDiv);
      }
    }

    chainSelect.addEventListener('change', (e) => showSafes(e.target.value));
    
    // Initialize
    showSafes(chainSelect.value);
  });
