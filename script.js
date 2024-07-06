function startGame() {
    document.getElementById('game').classList.add('hidden');
    document.getElementById('clue1').classList.remove('hidden');
}

function checkAnswer1() {
    const answer1 = document.getElementById('answer1').value.toLowerCase();
    // List of acceptable answers
    const acceptableAnswers = ['marron', '3sly', '9hwi', 'loun 3ini', 'my eyes color'];

    if (acceptableAnswers.includes(answer1)) {
        document.getElementById('clue1').classList.add('hidden');
        document.getElementById('clue2').classList.remove('hidden');
        hideWrongAnswerPanel('wrong-answer-panel1');
    } else {
        showWrongAnswerPanel('wrong-answer-panel1', 'loun d3inik huwa: "marron" al3ssel :)');
    }
}

function checkAnswer2() {
    const answer2 = document.getElementById('answer2').value.toLowerCase();
    // List of acceptable answers
    const acceptableAnswers = ['almarji3ia', 'lmrji3ia'];

    if (acceptableAnswers.includes(answer2)) {
        document.getElementById('clue2').classList.add('hidden');
        document.getElementById('clue3').classList.remove('hidden');
        hideWrongAnswerPanel('wrong-answer-panel2');
    } else {
        showWrongAnswerPanel('wrong-answer-panel2', 'wislan, hamria, almarji3ia');
    }
}


function checkAnswer3() {
    const answer3 = document.getElementById('answer3').value.toLowerCase();
    // List of acceptable answers
    const acceptableAnswers = ['houda', 'ana', 'me'];

    if (acceptableAnswers.includes(answer3)) {
        document.getElementById('clue3').classList.add('hidden');
        document.getElementById('apology').classList.remove('hidden');
        hideWrongAnswerPanel('wrong-answer-panel3');
        animateBalloons(); // Assuming animateBalloons() is defined elsewhere
    } else {
        showWrongAnswerPanel('wrong-answer-panel3', 'Nty <3 !!');
    }
}


function showWrongAnswerPanel(panelId, indication) {
    const panel = document.getElementById(panelId);
    panel.textContent = indication;
    panel.style.display = 'block';
}

function hideWrongAnswerPanel(panelId) {
    const panel = document.getElementById(panelId);
    panel.style.display = 'none';
}

function animateBalloons() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon, index) => {
        setTimeout(() => {
            animateBalloon(balloon);
        }, index * 1000); // Stagger animations by 1 second each
    });
}

function animateBalloon(balloon) {
    const animationDuration = 5000;
    const animationDistance = window.innerHeight + balloon.offsetHeight;
    balloon.style.transition = `transform ${animationDuration}ms ease-in-out`;
    balloon.style.transform = `translateY(-${animationDistance}px)`;
    setTimeout(() => {
        balloon.style.opacity = 0; // Fade out after the animation
    }, animationDuration - 500); // Fade out 500ms before the end
}

function restartGame() {
    document.getElementById('apology').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
    document.getElementById('answer1').value = '';
    document.getElementById('answer2').value = '';
    document.getElementById('answer3').value = '';
    hideWrongAnswerPanel('wrong-answer-panel1');
    hideWrongAnswerPanel('wrong-answer-panel2');
    hideWrongAnswerPanel('wrong-answer-panel3');
}
