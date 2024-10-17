// Configurações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Configuração do seu Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDC3ZhmTqjd3P44uvuOeIQccNH8N5x20fE",
    authDomain: "verde-sabor.firebaseapp.com",
    projectId: "verde-sabor",
    storageBucket: "verde-sabor.appspot.com",
    messagingSenderId: "803708320712",
    appId: "1:803708320712:web:e225c98666c67a73bb9efd",
    measurementId: "G-C3FCXHE4RX"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função de Login
document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login com sucesso
            alert("Login realizado com sucesso!");
            window.location.href = "produtos.html"; // Redireciona para a página de produtos
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Erro no login: " + errorMessage);
        });
});

// Função de Cadastro
document.getElementById('register-btn').addEventListener('click', function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Cadastro com sucesso
            alert("Cadastro realizado com sucesso!");
            window.location.href = "produtos.html"; // Redireciona para a página de produtos
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Erro no cadastro: " + errorMessage);
        });
});
