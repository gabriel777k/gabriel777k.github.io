import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "verde-sabor.firebaseapp.com",
    projectId: "verde-sabor",
    storageBucket: "verde-sabor.appspot.com",
    messagingSenderId: "803708320712",
    appId: "1:803708320712:web:e225c98666c67a73bb9efd",
    measurementId: "G-C3FCXHE4RX"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Função de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Login realizado com sucesso!');
            loginModal.style.display = "none";
        })
        .catch((error) => {
            alert('Erro no login: ' + error.message);
        });
});

// Função de cadastro
document.getElementById('register-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Usuário cadastrado com sucesso!');
        })
        .catch((error) => {
            alert('Erro no cadastro: ' + error.message);
        });
});
