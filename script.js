function subscribeNewsletter() {
    // Get the user's email address
    const email = document.getElementById('email').value;

    // You can implement your own logic here to subscribe the user to the newsletter.
    // For this example, we'll just display a success message.
    const feedback = document.getElementById('newsletter-feedback');
    feedback.textContent = `Thank you for subscribing! You will receive updates at ${email}.`;
}

function submitFeedback() {
    // Get the user's feedback
    const feedbackText = document.getElementById('feedback').value;

    // You can implement your own logic here to handle the user's feedback.
    // For this example, we'll just display a success message.
    const feedback = document.getElementById('newsletter-feedback');
    feedback.textContent = "Thank you for your feedback!";
}
