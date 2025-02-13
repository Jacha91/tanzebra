< script src = "fogot.js" >
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

// JavaScript for form submission
document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const identifier = document.getElementById('identifier').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!identifier) {
        alert('Please enter your email or phone number.');
        return;
    }

    if (!emailPattern.test(identifier) && !phonePattern.test(identifier)) {
        alert('Please enter a valid email or a 10-digit phone number.');
        return;
    }

    alert('A password reset link has been sent to your email or phone.');
    window.location.href = 'login.html';
}); <
/script>