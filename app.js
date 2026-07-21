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
// 1. Gather all the necessary elements from the HTML
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const galleryImages = document.querySelectorAll('.gallery-grid img');

// 2. Add a click event to every single image in the gallery
galleryImages.forEach(function(img) {
    img.addEventListener('click', function() {
        // Change the display property to show the dark overlay
        lightbox.style.display = 'flex';
        // Grab the 'src' of the image that was just clicked, and assign it to the giant lightbox image
        lightboxImg.src = this.src;
    });
});

// 3. Add a click event to the 'X' button to close the lightbox
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// 4. Bonus feature: Close the lightbox if the user clicks the dark background outside the photo
lightbox.addEventListener('click', function(event) {
    if (event.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});
