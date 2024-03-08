const header = document.querySelector("header");

window.addEventListener("scroll", function(){
header.classList.toggle("sticky", window.scrollY > 90);
});

let menu = document.querySelector('#menu-btn');
let navlist = document.querySelector('.header .navbar');


menu.onclick = () => {
    menu.classList.toggle('ri-xrp-line');
    navlist.classList.toggle('active');
};

window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal({
    origin:'top',
    distance:'85px',
    duration:'2500',
    reset:true
})

sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay:400});
sr.reveal ('.container',{delay:400});

sr.reveal ('.abaout-img',{});
sr.reveal ('.abaout-text',{delay:300});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn,.shop-content',{delay:300});

sr.reveal ('.review-content,.content',{delay:300});
