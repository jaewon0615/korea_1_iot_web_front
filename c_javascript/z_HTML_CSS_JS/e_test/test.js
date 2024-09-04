document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
        body.classList.add(savedMode);
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('darkMode', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'dark-mode');
        }
    });
});