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
    function showSafes(chainId) {
      safeList.innerHTML = '';
      const safes = config.addedSafes[chainId];
      if (!safes) return;

      Object.entries(safes).forEach(([safeAddress, safe]) => {
        const safeDiv = document.createElement('div');
        safeDiv.innerHTML = `<strong>${safeAddress}</strong> (Threshold: ${safe.threshold})`;
        
        const ownersUl = document.createElement('ul');
        safe.owners.forEach(owner => {
          const li = document.createElement('li');
          li.textContent = config.addressBook[chainId]?.[owner.value] || owner.value;
          ownersUl.appendChild(li);
        });

        safeDiv.appendChild(ownersUl);
        safeList.appendChild(safeDiv);
      });
    }

    chainSelect.addEventListener('change', (e) => showSafes(e.target.value));
    
    // Initialize
    showSafes(chainSelect.value);
  });
