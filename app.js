window.onload = function() {

    var btn = document.getElementById("btn");
    var start = document.getElementById("start");
    var form = document.getElementById("form");
    var app = document.getElementById("app");
    var go = document.getElementById("go");
    var nameInput = document.getElementById("name");
    var msg = document.getElementById("msg");

    btn.onclick = function() {
        start.style.display = "none";
        form.style.display = "block";
    };

    go.onclick = function() {
        if(nameInput.value !== "") {
            form.style.display = "none";
            app.style.display = "block";
            msg.innerHTML = "Bienvenue " + nameInput.value;
        } else {
            alert("Entre ton nom");
        }
    };

};
