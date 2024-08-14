document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const msg = document.getElementById('contactMsg');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form); // Get form data

        // Send the form data via fetch API
        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Convert response to JSON
            } else {
                throw new Error('Form submission failed');
            }
        })
        .then(data => {
            // Handle successful submission, e.g., show a thank-you message
            
            msg.textContent = 'Thank you! Your message has been sent.';
            msg.className = 'Msg success'; // Apply success styling
            msg.style.display = 'block'; // Show the message div
            form.reset(); // Reset the form
        })
        .catch(error => {
            msg.textContent = 'Oops! Something went wrong. Please try again later.';
            msg.className = 'Msg error'; // Apply error styling
            msg.style.display = 'block'; // Show the message div
        });
    });
});
