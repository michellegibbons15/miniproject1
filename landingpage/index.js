let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slides"); // Selects each entire slide div

  // Hide all slides
  slides.forEach(slide => (slide.style.display = "none"));

  // Increment slide index
  slideIndex++;

  // Reset index if at the end
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block"; // Show the current slide
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// template for reviews 
function addCard(text, author) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = text;
  template.querySelector(".card-text").innerText = author;
  document.querySelector("#card-list").appendChild(template);
}

const review = [
  {
    text: '"PlayRVA has been such a helpful tool in finding an after school activity for my kids!"',
    author: "Susie, Henrico VA",
  },
  {
    text: '"After graduating, I struggled to find a competetive environment again after my collegiate - playRVA has made it possible and made me fall in love with my sport again!"',
    author: "Annie, Midlothina VA",
  },
  {
    text: '"Been such a nice way to find pick ups and social leagues to join."',
    author: "Tory, Richmond VA",
  },
    
];

review.forEach((review) => {
    addCard(review.text, review.author);
});