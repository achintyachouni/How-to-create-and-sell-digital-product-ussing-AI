// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Review Slider
const track = document.querySelector('.review-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let scrollAmount = 0;
const cardWidth = document.querySelector('.review-card').offsetWidth + 32; // margin included

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

// Auto scroll every 5 seconds
setInterval(() => {
  if(track.scrollLeft + track.offsetWidth >= track.scrollWidth){
    track.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    track.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
}, 5000);
