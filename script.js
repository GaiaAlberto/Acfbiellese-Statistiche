// PASSWORD DI ACCESSO
function checkPassword() {
    const pwd = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (pwd === "Acfbiellese1969") {
        window.location.href = "home.html";
    } else {
        error.textContent = "Password errata!";
    }
}

// CREA IL MENU A TENDINA AUTOMATICAMENTE
window.onload = function() {
    if (typeof players !== "undefined") {
        const dropdown = document.getElementById("dropdown");
        players.forEach(p => {
            const option = document.createElement("option");
            option.value = p.nome.toLowerCase();
            option.textContent = p.nome;
            dropdown.appendChild(option);
        });
    }
};

// CERCA DAL MENU
function selectFromDropdown() {
    const name = document.getElementById("dropdown").value;
    if (name) showPlayer(name);
}

// CERCA MANUALMENTE
function searchPlayer() {
    const name = document.getElementById("manualName").value.toLowerCase();
    showPlayer(name);
}

// MOSTRA LA SCHEDA
function showPlayer(name) {
    const card = document.getElementById("playerCard");
    const player = players.find(p => p.nome.toLowerCase() === name);

    if (!player) {
        card.innerHTML = "<p>Giocatrice non trovata!</p>";
        card.classList.remove("hidden");
        return;
    }

    card.innerHTML = `
        <h2>${player.nome}</h2>
        <img src="${player.img}" alt="${player.nome}">
        <p><strong>Ruolo:</strong> ${player.ruolo}</p>
        <p><strong>Gol:</strong> ${player.gol}</p>
        <p><strong>Presenze:</strong> ${player.presenze}</p>
    `;
    card.classList.remove("hidden");
}
