// Book pages content
const pagesContent = [
    // Cover page with title
    `<h1>Margaux Arevalo</h1>`,

    // Author page
    `<h2>Author: Riez Matthieu</h2>`,

    // Story content (starting from the first page)
    `<p>It all started when I was just laying on my bed...</p>`,
    `<p>My friends didn't really like it when I fell in love very quickly...</p>`,
    `<p>We started talking, asking each other's hobbies...</p>`,
    `<p>After a few weeks, we've completely fallen for each other...</p>`,
    `<p>My friends came up with a stupid idea, they wanted us to meet up...</p>`,
    `<p>And yeah, the night before we met, I was excited?... idk...</p>`,
    `<p>And yeah, I saw her from afar and walked towards her...</p>`,
    `<p>After a few weeks, we lost that spark...</p>`,
    `<p>After a few more days, she blocked me on messenger...</p>`,
    `<p>It has been 1 month and 27 days since we started talking...</p>`,
    `<p>And yeah, we hadn't talked for months...</p>`,
    `<p>Then, March 28, I saw that she unblocked me...</p>`,
    `<p>Then the day that we would meet up, came...</p>`,
    `<p>When she left, I was sobbing but I couldn't do anything...</p>`,
    `<p>And yeah after that day, we didn't talk anymore...</p>`,
    `<p>Maybe she's the right person but it's just the wrong time...</p>`,
    `<p>Or maybe we weren't meant to be at all...</p>`,
];

// Get the book element and the page container
const book = document.getElementById('book');
const leftPage = document.querySelector('.left');
const rightPage = document.querySelector('.right');
const pageNumber = document.getElementById('page-number');

// Track the current page
let currentPage = 0;

// Function to open the book
function openBook() {
    book.style.transform = 'rotateY(0deg)';
    updatePageContent();
}

// Function to update the content on the pages
function updatePageContent() {
    if (currentPage < 0) {
        currentPage = 0; // Prevent going back to a non-existing page
    }

    if (currentPage >= pagesContent.length) {
        closeBook();
        return;
    }

    leftPage.innerHTML = pagesContent[currentPage];
    rightPage.innerHTML = pagesContent[currentPage + 1] || '';

    pageNumber.innerHTML = `${currentPage + 1} / ${pagesContent.length}`;

    // Handle the animation of page turning
    if (currentPage % 2 === 0) {
        leftPage.classList.remove('page-flip');
        rightPage.classList.remove('page-flip');
    } else {
        leftPage.classList.add('page-flip');
        rightPage.classList.add('page-flip');
    }
}

// Function to flip to the next page
function flipNextPage() {
    if (currentPage < pagesContent.length - 1) {
        currentPage++;
        updatePageContent();
    }
}

// Function to flip to the previous page
function flipPreviousPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePageContent();
    }
}

// Function to close the book
function closeBook() {
    book.style.transform = 'rotateY(180deg)';
}

// Event listeners for clicking on the book (turning pages)
leftPage.addEventListener('click', () => {
    if (currentPage === 1) {
        closeBook();
    } else {
        flipPreviousPage();
    }
});

rightPage.addEventListener('click', () => {
    if (currentPage === pagesContent.length - 1) {
        closeBook();
    } else {
        flipNextPage();
    }
});

// Initialize the book with the cover page
document.querySelector('#book-container').addEventListener('click', openBook);
