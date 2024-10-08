document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    console.log('Form submitted'); // Log for testing

    // Input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return;
    }

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Display success message
    document.getElementById('successMessage').style.display = 'block'; // Ensure this is correct

    // Log input to console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form
    document.getElementById('contactForm').reset();
});