let score = 0;
let count = 0;
let time = 60;

let chrono = document.querySelector('#timer')


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
    console.log(elem.value);
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
    let qrElement = document.querySelector('#qr');
    qrElement.style.display = 'block';
    let buttonStartElement = document.querySelector('#startGame')
    buttonStartElement.style.display = 'none';
}

showQ()











function checkTime() {
    if (time == 0) {
        count = 5
        window.clearInterval(timetime)        
    }
}

function times() {
    time--
    chrono.innerHTML = `${time}`
    checkTime()
    if (count == 5) {
    window.clearInterval(timetime)
    }
}

let timetime = window.setInterval(times, 1000)


















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




let score = 0;
let count = 0;
let time = 60;
let random ;

let chrono = document.querySelector('#timer')


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

function Random() {
    random = Math.floor(Math.random() * allQuestion.length)
    document.querySelector('#question').textContent = allQuestion[random]
    document.querySelector('#answerOne').textContent = reponses[random][0]
    document.querySelector('#answerTwo').textContent = reponses[random][1]
    document.querySelector('#answerThree').textContent= reponses[random][2]
    document.querySelector('#answerFour').textContent = reponses[random][3]
}

function Count(elem) {
    let select = elem.textContent

    for (let i = 0; i < goodAnswer.length; i++) {
        if (select == goodAnswer[i]  ) {
            score++
        }
        document.querySelector('#score').innerHTML = `${score}`
    }
    allQuestion.splice(random, 1)
    reponses.splice(random, 1)

    
    
    } if (allQuestion.length == 0) {
      document.querySelector('#question').innerHTML = `le jeu est terminé. vous avez ${score} points`
        document.querySelector('#reponses').setAttribute('style', 'display:none')  
    } 
    if (allQuestion.length > 0) {

        random()
    }














function checkTime() {
    if (time == 0) {
        count = 5
        window.clearInterval(timetime)        
    }
}

function times() {
    time--
    chrono.innerHTML = `${time}`
    checkTime()
    if (count == 5) {
    window.clearInterval(timetime)
    }
}

let timetime = window.setInterval(times, 1000)


Random()















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