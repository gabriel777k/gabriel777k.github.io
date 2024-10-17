// Função de pesquisa
document.getElementById('searchBtn').addEventListener('click', function() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const productItems = document.querySelectorAll('.produto-item');

  productItems.forEach(function(item) {
    const productName = item.getAttribute('data-name');
    if (productName.includes(searchTerm)) {
      item.style.display = 'block'; // Exibe o produto se o termo corresponder
    } else {
      item
