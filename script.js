let currentPage = 0;
const pages = document.querySelectorAll('.page');
const pageCount = pages.length;

function showPage(pageIndex) {
  pages.forEach((page, index) => {
    page.classList.remove('active');
    if (index === pageIndex) {
      page.classList.add('active');
    }
  });
}

function updateFooter() {
  const footer = document.querySelector('.footer p');
  footer.textContent = `Page ${currentPage + 1} of ${pageCount}`;
}

document.querySelectorAll('.next-btn').forEach((button) => {
  button.addEventListener('click', () => {
    if (currentPage < pageCount - 1) {
      currentPage++;
      showPage(currentPage);
      updateFooter();
    } else {
      alert("You've reached the end of the story!");
    }
  });
});

updateFooter();
