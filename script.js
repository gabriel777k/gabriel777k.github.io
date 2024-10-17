// Pesquisa de produtos
document.getElementById("search-btn").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const items = document.querySelectorAll(".produto-item h3");

    items.forEach(item => {
        const itemName = item.textContent.toLowerCase();
        if (itemName.includes(searchInput)) {
            item.parentElement.style.display = "block";
        } else {
            item.parentElement.style.display = "none";
        }
    });
});

// Modal de login
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementsByClassName("close")[0];

closeModal.onclick = function() {
  loginModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}
