fetch("proposals.json")
  .then(response => response.json())
  .then(data => {
    const tbody = document.getElementById("proposal-table-body");
    data.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.date}</td>
        <td>${item.description}</td>
        <td>${item.status}</td>
        <td>${item.signers.join(", ")}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => console.error("Error loading proposals:", error));
