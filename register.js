< script src = "register.js" >
    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('full-name').value;
        const contact = document.getElementById('contact').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validation for email or phone
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/; // Accepts 10-digit phone numbers

        if (!fullName || !contact || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
            alert('Please enter a valid email or 10-digit phone number.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        console.log('Registering with:', fullName, contact, password);
        alert('Registration successful! Redirecting to login...');
        window.location.href = 'login.html';
    }); <
/script>