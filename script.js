document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById('animated-text');

    const textPhrases = [
        "building a fantastic game!",
        "creating something special!",
        "crafting an amazing experience!",
        "designing a fun adventure!"
    ];

    let phraseIndex = 0;

    function updateText() {
        animatedText.textContent = textPhrases[phraseIndex];
        phraseIndex = (phraseIndex + 1) % textPhrases.length;
        setTimeout(updateText, 4000);
    }

    updateText();
});
