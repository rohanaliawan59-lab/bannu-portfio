document.addEventListener('DOMContentLoaded', () => {
  let isDark = 'light';
  const themeButton = document.getElementById('themeButton');
  const body = document.body;

  const applyTheme = (isDark) => {
    // Toggle the dark-theme class on the body
    body.classList.toggle('dark-theme', isDark);
    themeButton.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  };

  // Load theme from localStorage
  const savedTheme = localStorage.getItem('theme') === 'dark';
  applyTheme(savedTheme);

  // Toggle theme on button click
  themeButton.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-theme');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Sort Table
  function sortTable(columnIndex) {
    const table = document.getElementById('academicTable');
    const rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) => a.cells[columnIndex].innerText.localeCompare(b.cells[columnIndex].innerText));
    rows.forEach(row => table.appendChild(row));
  }

  // Add sorting functionality to table headers
  const headers = document.querySelectorAll('#academicTable th');
  headers.forEach((header, index) => {
    header.addEventListener('click', () => sortTable(index));
  });

  // CV Toggle Button
  const cvToggleButton = document.getElementById('cvToggleButton');
  const cvContainer = document.getElementById('cvContainer');
  cvToggleButton.addEventListener('click', () => {
    cvContainer.classList.toggle('visible');
    cvToggleButton.textContent = cvContainer.classList.contains('visible') ? 'Hide CV' : 'Display CV';
  });

 

  // Scroll Progress Tracker
  window.addEventListener('scroll', () => {
    const scrollHeight = document.body.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrolledHeight = window.scrollY;
    const progress = (scrolledHeight / (scrollHeight - clientHeight)) * 100;
    document.getElementById('progressTracker').style.width = `${progress}%`;
  });

  // Carousel Functionality
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  function prevSlide() {
    plusSlides(-1);
  }

  function nextSlide() {
    plusSlides(1);
  }
});