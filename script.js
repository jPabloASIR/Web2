// Mostrar/ocultar el menú lateral
/*
function toggleMenu() {
  const menu = document.getElementById("side-menu");
  menu.classList.toggle("hidden");
}


let slideIndex = 0;
let slides;

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".carousel-slide");
  showSlide(slideIndex);
  setInterval(nextSlide, 5000);
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "block" : "none";
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
*/

function toggleMenu() {
  const menu = document.getElementById("side-menu");
  menu.classList.toggle("hidden");
}

/*
let slideIndex = 0;
let slides;

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".carousel-slide");
  showSlide(slideIndex);
  setInterval(nextSlide, 5000);
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
*/
let slideIndex = 0;
let slides;
let slideInterval;

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".carousel-slide");
  showSlide(slideIndex);
  slideInterval = setInterval(nextSlide, 5000);

  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  leftArrow.addEventListener("click", () => {
    clearInterval(slideInterval); // Para que no choque con el intervalo automático
    prevSlide();
    slideInterval = setInterval(nextSlide, 5000); // Reinicia el intervalo
  });

  rightArrow.addEventListener("click", () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 5000);
  });
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}




window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});




// Inicialización de EmailJS con la clave pública
(function() {
  emailjs.init('eCdBqojbTRwTwBsFS'); // Clave pública
})();

// Espera a que el DOM esté listo para añadir el event listener
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('service_5w2bibh', 'template_1q8o5lw', this) // <-- Tu nuevo Template ID aquí
        .then(function() {
          alert('Correo enviado con éxito, ¡gracias!');
          form.reset();
        }, function(error) {
          alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
    });
  }
});











