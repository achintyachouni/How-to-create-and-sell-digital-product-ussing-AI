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

let getCardWidth = () => {
  const card = document.querySelector('.review-card');
  return card.offsetWidth + 16; // margin adjusted
};

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
});

// Auto scroll every 5 seconds
setInterval(() => {
  if(track.scrollLeft + track.offsetWidth >= track.scrollWidth){
    track.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    track.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
  }
}, 5000);

