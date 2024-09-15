// Typing Animation Script
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");
    const texts = [
        "Fully customizable template.",
        "Responsive design for all devices.",
        "Fast and lightweight."
    ];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            const text = texts[textIndex].slice(0, charIndex + 1);
            textElement.textContent = text;
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, 1400);
        }
    }

    typeText();
});
