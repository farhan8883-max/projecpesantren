  // mobile menu
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  btn.onclick = () => menu.classList.toggle('active');

  // scroll animation
  const cards = document.querySelectorAll('.card');
  window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.85;
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if(top < trigger){ card.classList.add('show'); }
    });
  });
  const counters = document.querySelectorAll('.counter');
let started = false;

window.addEventListener('scroll', () => {
  const section = document.querySelector('.stats');
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if(sectionTop < screenHeight && !started){
    counters.forEach(counter => {
      let start = 0;
      const target = +counter.dataset.target;
      const speed = 200;

      const update = () => {
        const increment = target / speed;
        start += increment;
        if(start < target){
          counter.innerText = Math.ceil(start);
          requestAnimationFrame(update);
        }else{
          counter.innerText = target;
        }
      };
      update();
    });
    started = true;
  }
});
const buttons = document.querySelectorAll('.gal-btn');
  const items = document.querySelectorAll('.gal-item');

  function showItems(filter){
    items.forEach(item=>{
      item.classList.remove('show');
      if(filter === 'all' || item.classList.contains(filter)){
        setTimeout(()=> item.classList.add('show'), 100);
      }
    });
  }

  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      buttons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      showItems(btn.dataset.filter);
    });
  });

  // tampil awal
  showItems('all');

  const timelineItems = document.querySelectorAll('.timeline-content');

  window.addEventListener('scroll',()=>{
    const trigger = window.innerHeight * 0.85;
    timelineItems.forEach(item=>{
      const top = item.getBoundingClientRect().top;
      if(top < trigger){
        item.classList.add('show');
      }
    });
  });

  const testiCards = document.querySelectorAll('.testi-card');

  window.addEventListener('scroll', ()=>{
    const trigger = window.innerHeight * 0.85;
    testiCards.forEach(card=>{
      if(card.getBoundingClientRect().top < trigger){
        card.classList.add('show');
      }
    });
  });
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item=>{
    item.querySelector('.faq-question').addEventListener('click', ()=>{
      item.classList.toggle('active');
    });
  });
  /* ===== TYPING LOOP EFFECT ===== */
const texts = [
  "Islamic Boarding School",
  "Pendidikan Qurani",
  "Mencetak Generasi Rabbani"
];

const typingEl = document.getElementById("typing-text");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 140;
const deletingSpeed = 80;
const delayAfterType = 1200;

function typeLoop() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingEl.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, delayAfterType);
    }
  } else {
    typingEl.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
}

window.addEventListener("load", typeLoop);

const openVideo = document.getElementById("openVideo");
const videoModal = document.getElementById("videoModal");
const closeVideo = document.getElementById("closeVideo");
const youtubeFrame = document.getElementById("youtubeFrame");

openVideo.addEventListener("click", () => {
  videoModal.style.display = "flex";
  youtubeFrame.src = "https://www.youtube.com/embed/QqMfC4EAym0?autoplay=1&start=3";
});

closeVideo.addEventListener("click", () => {
  videoModal.style.display = "none";
  youtubeFrame.src = "";
});

// Klik area gelap untuk menutup
videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
    youtubeFrame.src = "";
  }
});
