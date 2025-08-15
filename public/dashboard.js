async function loadDashboard() {
  const container = document.getElementById("dashboard");
  try {
    const res = await fetch("./proposals.json", {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
      cache: "no-cache",
    });

    if (!res.ok) throw new Error(`Failed to load proposals.json: ${res.status}`);
    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("proposals.json must be an array");
    }

    container.innerHTML = "";
    data.forEach((item, i) => {
      const card = document.createElement("div");
      card.className = "card mb-3";

      card.innerHTML = `
        <div class="card-content">
          <p><strong>${i + 1}. Wallet:</strong> ${item.wallet}</p>
          <p><strong>Proposal:</strong> ${item.proposal}</p>
          <p><strong>Status:</strong> ${item.status}</p>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error(err);
    container.innerHTML = `<p class="has-text-danger">Error loading dashboard data.</p>`;
  }
}

loadDashboard();
