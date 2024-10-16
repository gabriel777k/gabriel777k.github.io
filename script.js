function toggleMenu() {
    var menuLateral = document.getElementById("menuLateral");
    menuLateral.style.width = (menuLateral.style.width === "250px") ? "0" : "250px";
}

    }
}

function toggleLeiaMais(id) {
    var elemento = document.getElementById(id);
    elemento.style.display = (elemento.style.display === "block") ? "none" : "block";
}

    }
}

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Função de login com Firebase Auth
document.getElementById('login-btn').addEventListener('submit', function(e) {
  e.preventDefault(); // Previne o formulário de ser enviado

console.log("Botão de login clicado");
    
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Inicialize o auth aqui
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuário logado com sucesso
      var user = userCredential.user;
      alert("Login realizado com sucesso!");
      modal.style.display = "none"; // Fecha o modal
    })
    .catch((error) => {
      // Erro no login
      alert("Erro no login: " + error.message);
    });
});

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDC3ZhmTqjd3P44uvuOeIQccNH8N5x20fE", // Verifique se essa chave está correta
    authDomain: "verde-sabor.firebaseapp.com",
    projectId: "verde-sabor",
    storageBucket: "verde-sabor.appspot.com",
    messagingSenderId: "803708320712",
    appId: "1:803708320712:web:e225c98666c67a73bb9efd",
    measurementId: "G-C3FCXHE4RX"
  };

// Obtenha o modal
var modal = document.getElementById("loginModal");

// Obtenha o botão que abre o modal
var btn = document.getElementById("loginButton");

// Obtenha o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão de login, abre o modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

// Função para realizar login com Firebase
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Previne o formulário de ser enviado

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Usuário logado com sucesso
      var user = userCredential.user;
      alert("Login realizado com sucesso!");
      modal.style.display = "none"; // Fecha o modal
    })
    .catch((error) => {
      // Erro no login
      alert("Erro no login: " + error.message);
    });
});

