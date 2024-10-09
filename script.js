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

/* Castanha */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f9f9f9;
}

h2 {
  color: #4CAF50;
  text-align: center;
}

.intro {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.read-more-btn {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.read-more-btn:hover {
  background-color: #45a049;
}

.hidden {
  display: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 20px auto;
  max-width: 600px;
  font-size: 1rem;
}

ul li {
  margin: 10px 0;
  color: #333;
}

ul li strong {
  color: #4CAF50;
}
