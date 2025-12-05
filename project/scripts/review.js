// review.js
document.addEventListener('DOMContentLoaded', () => {
    // Get current count from localStorage, default to 0 if not found
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;

    // Increment the count for the successful submission
    reviewCount++;

    // Update localStorage with the new count
    localStorage.setItem('reviewCount', reviewCount);

    // Display the new count on the page
    const countElement = document.getElementById('review-counter');
    if (countElement) {
        countElement.textContent = reviewCount;
    }
});