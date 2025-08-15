// /public/load-safe-data.js
fetch('./safe-data.json')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return res.json();
  })
  .then(data => {
    console.log("Safe Data Loaded:", data);
    // Call a function to display this on your dashboard
    displaySafeList(data);
  })
  .catch(err => {
    console.error("Failed to load safe-data.json", err);
    document.getElementById('safe-list').innerHTML = "<p>Failed to load data.</p>";
  });

function displaySafeList(safes) {
  const container = document.getElementById('safe-list');
  container.innerHTML = safes.map(safe => `
    <div>
      <strong>${safe.name}</strong><br>
      Address: ${safe.address}<br>
      Network: ${safe.network}
    </div>
  `).join('<hr>');
}
