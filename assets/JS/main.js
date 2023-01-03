let score = 0;
let count = 0;
let time = 59;
let timetime 

function randomNumber(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

let allQuestion = [
    "Quelle est la monnaie officielle en France ? ",
    "Qu'est ce qui va ajouter du style à une page HTML ? ",
    "Quelle est la capitale de la France ? ",
    "combien avons nous de lettres dans l'alphabet ? ",
    "Comment vas-tu ? "
]

let reponses = [
    ["dinar", "dollar", "rouble", "euro"],
    ["css", "js", "http", "christina cordulla"],
    ["paris", "tunis", "moscou", "londres"],
    ["30", "19", "26", "27"],
    ["mal", "très mal", "en depressions", "super mal"]
]

let goodAnswer = [
    "euro",
    "css",
    "paris",
    "26",
    "super mal",
]

function showQ() {
    let question = document.querySelector('#question')
    question.innerHTML = allQuestion[count]
    showRep()
}

function showRep() {
    let containerReponse = document.querySelector("#reponses")
    let btns = containerReponse.querySelectorAll('input')
    for (let i = 0; i < btns.length; i++) {
        btns[i].value = reponses[count][i]
    }

}

function reply(elem) {
    if (elem.value == goodAnswer[count]) {
        score++
        document.querySelector('#score').innerHTML = score
    }
    count++
    if (count < 5) {
        showQ()
    } else {
        document.querySelector('#question').innerHTML = `le jeu est terminé. vous avez ${score} points`
        document.querySelector('#reponses').setAttribute('style', 'display:none')
    }
}

function display() {
    timetime = window.setInterval(times, 1000)  
    let qrElement = document.querySelector('#qr');
    qrElement.style.display = 'block';
    let buttonStartElement = document.querySelector('#startGame')
    buttonStartElement.style.display = 'none';

                        /*   timetime = intervale d'affichage de 1sec affichera le temps    */
}
function checkTime() {
    if (time == 0) {                                                    /*   si temps = 0   */
        count = 5                                                       /*   alors count = 5 donc fin du jeu   */
        window.clearInterval(timetime)                                  /*   arrête moi l'intervale de temps ayant pour proprieté la variable timetime   */
    }
}

function times() {
    time--                                                              /*   time--   */
    document.querySelector('#timer').innerHTML = `${time}`                                        /*   element html correspondant à chrono affichera le temps restant   */
    checkTime()
    if (count == 5) {                                                   /*   si count est égale à 5   */
        window.clearInterval(timetime)
        document.querySelector('#reponses').setAttribute('style', 'display:none')
        document.querySelector('#question').innerHTML = `le jeu est terminé. vous avez ${score} points`

    }
}
  
function newGame() {
    let refresh = document.getElementById('refresh');                       /*   variable refresh selectionnera refresh sur html    */
    refresh.addEventListener('click', ()=>{
        location.reload()
    });            /*   ajoute un ecouteur d'evenement lorsque clique     */
}



showQ()


/*let temps = 30
const timerElement = document.getElementById("timer")
timerElement.innerText = temps

function diminuerTemps() {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
    
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    
    timerElement.innerText = minutes + ":" + secondes
    temps = temps <= 0 ? 0 : temps - 1
    
    setInterval(diminuerTemps, 1000)
}*/

