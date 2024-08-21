document.addEventListener('DOMContentLoaded', function() {
    const infobox = document.querySelector('.Info-box');

    infobox.addEventListener('mouseenter', function() {
        const infoText = document.getElementById('HeaderInfoText');
        infoText.textContent = 'Sy-Hieu-Pham Information';
    });

    infobox.addEventListener('mouseleave', function() {
        const infoText = document.getElementById('HeaderInfoText');
        infoText.textContent = "Put your mouse here"
    });
});
