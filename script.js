function pesquisar() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const produtos = document.querySelectorAll(".produto-item");

    produtos.forEach(produto => {
        const titulo = produto.querySelector("h3").textContent.toLowerCase();
        if (titulo.includes(input)) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
}
