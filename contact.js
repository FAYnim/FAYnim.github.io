document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contact');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('inp-name').value;
        const email = document.getElementById('inp-email').value;
        const message = document.getElementById('inp-message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Check if email is valid
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message, ' + name + '! We will get back to you at ' + email + '.');
    });
});