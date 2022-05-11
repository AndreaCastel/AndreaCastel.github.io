const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim,{
    loop: true
    deleteSpeed: 20
})

.changeDelay(20)
.typeString('Bienvenue en')
.pauseFor(300)
.typeString('<strong> Meuse</strong>')
.pause(1000)
.deleteChars(13)
.typeString(<span style="color: blue">!!!</span>)
.pauseFor(1000)
.deleteChars(5)
.typeString(<span style="color: red">!!!</span>)
.pause(1000)
.deleteChars(13)
.typeString(<span style="color: orange">!!!</span>)
.start()






