let slides = document.getElementById('slides')
let imgs = document.querySelectorAll('.imagens img')

let contador = 0;

function carousel() {
    contador++;

    if (contador > imgs.length - 1) {
        contador = 0;
    }

    slides.style.transform = `translateX(${-contador * 100}%)`;
}

setInterval(carousel, 2000);