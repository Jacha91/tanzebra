< script src = "login.js" >
    // JavaScript for drop-down menu
    function toggleMenu() {
        const dropdown = document.getElementById('dropdownMenu');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

// Close menu if clicked outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdownMenu');
    const button = document.querySelector('.menu-btn');

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = 'none';
    }
});

// JavaScript for login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const identifier = document.getElementById('identifier').value.trim();
    const password = document.getElementById('password').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!identifier || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (!emailPattern.test(identifier) && !phonePattern.test(identifier)) {
        alert('Please enter a valid email or a 10-digit phone number.');
        return;
    }

    alert('Login successful! Redirecting...');
    window.location.href = 'tanzebra.html';
}); <
/script>