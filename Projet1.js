/*
//const Typewriter = require("typewriter-effect/dist/core");
import Typewriter from 'typewriter-effect/dist/core';
let txtAnim = document.getElementById('bienvenue');

let typewriter = new Typewriter(txtAnim, {
    loop: true,
    delay: 75,
});

typewriter
.pauseFor(1000)
.typeString('Bienvenue en')
.pauseFor(300)
.typeString('<strong> Meuse</strong>')
.pause(1000)
.deleteChars(3)
.typeString('<span style="color: blue">!!!</span>')
.pauseFor(1000)
.deleteChars(5)
.pause(1000)
.deleteChars(3)
.typeString('<span style="color: orange">!!!</span>')
.start();
*/


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("custom-slider");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}



