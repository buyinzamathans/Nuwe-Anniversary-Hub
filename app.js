function checkAnswer(guess) {
    const resultElement = document.getElementById('quiz-result');
    
    resultElement.className = 'quiz-result'; 

    if (guess === 'him') {
        resultElement.innerHTML = "Nice try, but we all know it's her! 🥶";
        resultElement.style.color = "#2C3539"; 
    } else if (guess === 'her') {
        resultElement.innerHTML = "Spot on! She is definitely the blanket thief. 🛏️";
        resultElement.style.color = "#C5A059"; 
    }
    
    resultElement.classList.remove('hidden');
}
