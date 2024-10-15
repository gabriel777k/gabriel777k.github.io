document.querySelectorAll('.leia-mais').forEach(button => {
    button.addEventListener('click', () => {
        const hiddenContent = button.nextElementSibling;
        if (hiddenContent.classList.contains('hidden')) {
            hiddenContent.classList.remove('hidden');
            button.textContent = 'Leia menos';
        } else {
            hiddenContent.classList.add('hidden');
            button.textContent = 'Leia mais';
        }
    });
});

// Rolagem suave para âncoras
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
menu de hamburger
function toggleMenu() {
    var menuLateral = document.getElementById("menuLateral");
    if (menuLateral.style.width === "250px") {
        menuLateral.style.width = "0";
    } else {
        menuLateral.style.width = "250px";
    }
}
