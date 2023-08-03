function subscribeNewsletter() {
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('newsletter-feedback');
    feedback.textContent = `Thank you for subscribing! You will receive updates at ${email}.`;
}

function submitFeedback() {
    const feedbackText = document.getElementById('feedback').value;
    const feedback = document.getElementById('newsletter-feedback');
    feedback.textContent = "Thank you for your feedback!";
}

function toggleMute() {
    var audio = document.getElementById('background-audio');
    audio.muted = !audio.muted;

    var muteButton = document.getElementById('mute-button');
    muteButton.classList.toggle('muted', audio.muted);
}
