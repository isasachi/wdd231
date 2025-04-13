const carousel = document.getElementById('testimonial-carousel');
let currentIndex = 0;
let testimonials = [];

async function loadTestimonials() {
  try {
    const response = await fetch('data/testimonials.json');
    testimonials = await response.json();
    showTestimonial();
    setInterval(nextTestimonial, 5000); // Slide every 5 seconds
  } catch (error) {
    console.log(error);
    carousel.innerHTML = '<p>Error loading testimonials.</p>';
  }
}

function showTestimonial() {
    const t = testimonials[currentIndex];
  
    const newCard = document.createElement('div');
    newCard.classList.add('testimonial-card', 'slide-in');
    newCard.innerHTML = `
      <p class="quote">"${t.quote}"</p>
      <p class="author">— ${t.name}, ${t.title}</p>
    `;
  
    const existingCard = carousel.querySelector('.testimonial-card');
  
    if (existingCard) {
      // Add slide-out animation
      existingCard.classList.add('slide-out');
  
      // Wait for animation to complete, then replace
      setTimeout(() => {
        carousel.innerHTML = '';
        carousel.appendChild(newCard);
      }, 500);
    } else {
      // No testimonial currently shown
      carousel.appendChild(newCard);
    }
  }
  

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial();
}

loadTestimonials();
