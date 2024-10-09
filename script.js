// Função para mostrar/esconder o conteúdo ao clicar no botão
document.getElementById('readMoreBtn').addEventListener('click', function() {
  var moreInfo = document.getElementById('moreInfo');
  if (moreInfo.classList.contains('hidden')) {
    moreInfo.classList.remove('hidden');
    this.textContent = "Leia Menos";
  } else {
    moreInfo.classList.add('hidden');
    this.textContent = "Leia Mais";
  }
});
