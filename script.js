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

// Função para mostrar/esconder o conteúdo da aveia ao clicar no botão
document.getElementById('readMoreAveiaBtn').addEventListener('click', function() {
  var moreInfoAveia = document.getElementById('moreInfoAveia');
  if (moreInfoAveia.classList.contains('hidden')) {
    moreInfoAveia.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar o conteúdo
    this.textContent = "Leia Menos"; // Muda o texto do botão para 'Leia Menos'
  } else {
    moreInfoAveia.classList.add('hidden'); // Adiciona a classe 'hidden' para esconder o conteúdo
    this.textContent = "Leia Mais"; // Muda o texto do botão para 'Leia Mais'
  }
});

// Função para mostrar/esconder o conteúdo das castanhas ao clicar no botão
document.getElementById('readMoreCastanhasBtn').addEventListener('click', function() {
  var moreInfoCastanhas = document.getElementById('moreInfoCastanhas');
  if (moreInfoCastanhas.classList.contains('hidden')) {
    moreInfoCastanhas.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar o conteúdo
    this.textContent = "Leia Menos"; // Muda o texto do botão para 'Leia Menos'
  } else {
    moreInfoCastanhas.classList.add('hidden'); // Adiciona a classe 'hidden' para esconder o conteúdo
    this.textContent = "Leia Mais"; // Muda o texto do botão para 'Leia Mais'
  }
});
