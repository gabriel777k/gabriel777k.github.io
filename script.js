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

