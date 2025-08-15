fetch('./proposals.json')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then(data => {
    const list = document.getElementById('safe-list');
    list.innerHTML = '';
    data.safes.forEach(safe => {
      const div = document.createElement('div');
      div.className = 'safe-item';
      div.textContent = `${safe.name} – ${safe.address}`;
      list.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById('error-message').textContent = `Error loading data: ${err.message}`;
  });
