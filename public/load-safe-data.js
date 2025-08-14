fetch('safe-data.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('safeTableBody');
    const addressBook = data.addressBook;
    const addedSafes = data.addedSafes;

    Object.keys(addedSafes).forEach(safeAddress => {
      const safeInfo = addedSafes[safeAddress];
      const name = addressBook[safeAddress]?.name || "Unnamed Safe";
      const owners = safeInfo.owners?.join(", ") || "No owners";

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${name}</td>
        <td>${safeAddress}</td>
        <td>${owners}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error loading Safe data:', error));
