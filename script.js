// Função para exibir ou ocultar informações sobre a Aveia
document.getElementById("readMoreAveiaBtn").addEventListener("click", function() {
    var moreInfo = document.getElementById("moreInfoAveia");
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
        this.innerText = "Leia Menos";
    } else {
        moreInfo.style.display = "none";
        this.innerText = "Leia Mais";
    }
});

// Função para exibir ou ocultar informações sobre as Castanhas
document.getElementById("readMoreCastanhaBtn").addEventListener("click", function() {
    var moreInfo = document.getElementById("moreInfoCastanha");
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
        this.innerText = "Leia Menos";
    } else {
        moreInfo.style.display = "none";
        this.innerText = "Leia Mais";
    }
});
