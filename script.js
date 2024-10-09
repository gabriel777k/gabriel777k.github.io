// Função para mostrar/esconder o conteúdo ao clicar no botão
document.getElementById('readMoreBtn').addEventListener('click', function() {
  var moreInfo = document.getElementById('moreInfo');
  if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
    moreInfo.style.display = "block";
    this.textContent = "Leia Menos";
  } else {
    moreInfo.style.display = "none";
    this.textContent = "Leia Mais";
  }
});

