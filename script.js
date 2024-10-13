// Função para exibir/ocultar informações de cada produto
document.querySelectorAll('.btn-leia-mais').forEach(function(button) {
    button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var targetElement = document.getElementById(targetId);
        
        if (targetElement.style.display === "none" || targetElement.style.display === "") {
            targetElement.style.display = "block";
            this.textContent = "Leia Menos";
        } else {
            targetElement.style.display = "none";
            this.textContent = "Leia Mais";
        }
    });
});
