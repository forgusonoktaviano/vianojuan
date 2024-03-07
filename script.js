 let menu = document.querySelector('#menu-btn');
 let navbar = document.querySelector('.header .navbar')
menu.onclick = () => {
    menu.classList.toggle('ri-xrp-line');
    navbar.classList.toggle('active');
}

menu.onscroll = () =>{
    menu.classList.remove('ri-xrp-line')
    navbar.classList.remove('active')
}



// document.addEventListener("DOMContentLoaded", function () {
//     // Menghubungi melalui WhatsApp
//     document.getElementById("whatsappbtn").addEventListener("click", function () {
//       window.location.href =
//         "https://api.whatsapp.com/send?phone=6282131323598&text=Halo%2C%20saya%20tertarik%20dengan%20leptop%20jenis%20asus%20Anda";
//     });
//   });


document.addEventListener("DOMContentLoaded", function () {
  // Menghubungi melalui WhatsApp
  document.body.addEventListener("click", function (event) {
      if (event.target.classList.contains("whatsappbtn")) {
          var phone = event.target.getAttribute("data-phone");
          var message = encodeURIComponent(event.target.getAttribute("data-message"));
          window.location.href = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + message;
      }
  });
});