window.checkAdminAccess = function() {
    const password = prompt("Entrez le mot de passe admin");
    if (password === "1234") { // changez le mot de passe ici
        alert("Accès autorisé !");
        const panel = document.getElementById("admin-panel");
        if (panel) panel.style.display = "block";
    } else {
        alert("Mot de passe incorrect !");
    }
};
