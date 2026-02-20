window.openCategory = function(name) {
    const container = document.getElementById("category-content");
    if (container) {
        container.innerHTML = "<p>Vous avez ouvert la catégorie : <b>" + name + "</b></p>";
    }
};
