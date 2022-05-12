
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






