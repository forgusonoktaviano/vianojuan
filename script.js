const navBtn = document.querySelector("#navbar-toggler");
const navDiv = document.querySelector(".navbar-collapse");

navBtn.addEventListener("click", () => {
  navDiv.classList.toggle("showNav");
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

const sr = ScrollReveal({
  origin:'top',
  distance:'85px',
  duration:'2500',
  reset:true
});

sr.reveal ('.home-text',{delay:300});
sr.reveal ('.row-left',{delay:400});
sr.reveal ('.container',{delay:400});

sr.reveal ('.abaout-img',{});
sr.reveal ('.abaout-text',{delay:300});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn,.shop-content',{delay:300});

sr.reveal ('.review-content,.content',{delay:300});
