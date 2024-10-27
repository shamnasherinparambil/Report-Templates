const imageScroll = document.getElementById('image-scroll');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');

// Variables to control scrolling
let scrollPosition = 0;
const scrollStep = 150; // Adjust this value to control how much the images move on each click

// Update maximum scroll based on the image container size
function updateMaxScroll() {
    const maxScroll = imageScroll.scrollHeight - imageScroll.parentElement.offsetHeight;
    return maxScroll > 0 ? maxScroll : 0;
}

// Scroll up by clicking the arrow
arrowUp.addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition -= scrollStep;
        if (scrollPosition < 0) scrollPosition = 0;  // Prevent over-scrolling
        imageScroll.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
    updateArrowVisibility();
});

// Scroll down by clicking the arrow
arrowDown.addEventListener('click', () => {
    const maxScroll = updateMaxScroll();
    if (scrollPosition < maxScroll) {
        scrollPosition += scrollStep;
        if (scrollPosition > maxScroll) scrollPosition = maxScroll;  // Prevent over-scrolling
        imageScroll.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
    updateArrowVisibility();
});

// Handle manual scrolling with mouse or trackpad
imageScroll.addEventListener('scroll', () => {
    scrollPosition = imageScroll.scrollTop;
    updateArrowVisibility();
});

// Update arrow visibility based on scroll position
function updateArrowVisibility() {
    const maxScroll = updateMaxScroll();
    arrowUp.style.visibility = scrollPosition > 0 ? 'visible' : 'hidden';
    arrowDown.style.visibility = scrollPosition < maxScroll ? 'visible' : 'hidden';
}



// Initialize arrow visibility
updateArrowVisibility();