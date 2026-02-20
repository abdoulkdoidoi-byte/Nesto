window.onload = function() {
    const btnSIAPI = document.getElementById("btn-siapiservice");
    const startScreen = document.getElementById("start-screen");
    const userForm = document.getElementById("user-form");
    const app = document.getElementById("app");
    const btnContinue = document.getElementById("btn-continue");
    const usernameInput = document.getElementById("username");
    const welcomeMessage = document.getElementById("welcome-message");

    // Bouton SIAPiSERVICE
    btnSIAPI.onclick = function() {
        startScreen.style.display = "none";
        userForm.style.display = "block";
    };

    // Continuer après formulaire
    btnContinue.onclick = function() {
        const name = usernameInput.value.trim();
        if (name === "") {
            alert("Veuillez entrer votre nom");
            return;
        }
        userForm.style.display = "none";
        app.style.display = "block";
        welcomeMessage.innerHTML = "Bienvenue " + name + " dans SIAPiSERVICE !";
    };
};
