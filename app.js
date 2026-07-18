// Function to check the answer in the Couple's Quiz
function checkAnswer(guess) {
    // Find the paragraph element where we will show the result
    const resultElement = document.getElementById('quiz-result');
    
    // Set the response based on the guess
    if (guess === 'him') {
        resultElement.textContent = "Nice try, but we all know it's her! 🥶";
    } else if (guess === 'her') {
        resultElement.textContent = "Spot on! She is definitely the blanket thief. 🛏️";
    }
    
    // Remove the 'hidden' class so the text appears on the screen
    resultElement.classList.remove('hidden');
}
