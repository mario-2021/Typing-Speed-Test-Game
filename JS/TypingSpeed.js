/*
  Advices
  - Always Check The Console
  - Take Your Time To Name The Identifiers
  - DRY

  Steps To Create The Project
  [01] Create HTML Markup
  [02] Add Styling And Separate From Logic
  [03] Create The App Logic
  ---- [01] Add Levels
  ---- [02] Show Level And Seconds
  ---- [03] Add Array Of Words
  ---- [04] ِAdd Start Game Button
  ---- [05] Generate Upcoming Words
  ---- [06] Disable Copy Word And Paste Event + Focus On Input
  ---- [07] Start Play Function
  ---- [08] Start The Time And Count Score
  ---- [09] Add The Error And Success Messages
  [04] Your Trainings To Add Features
  ---- [01] Save Score To Local Storage With Date
  ---- [02] Choose Levels From Select Box
  ---- [03] Break The Logic To More Functions
  ---- [04] Choose Array Of Words For Every Level
  ---- [05] Write Game Instruction With Dynamic Values
  ---- [06] Add 3 Seconds For The First Word
*/

// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

// Setting Levels
const lvls = {
    "Easy": 10,
    "Normal": 6,
    "Hard": 4
};

// Default Level
// let myLevel = document.createElement("ul");
// let lvlEasy = document.createElement("li");
// let lvlNormal = document.createElement("li");
// let lvlHard = document.createElement("li");
// // ul.className = 'lvlSelect'
// myLevel.appendChild(lvlEasy);
// myLevel.appendChild(lvlNormal);
// myLevel.appendChild(lvlHard);
// let myLevelText = document.createTextNode("Select Level");
// let myEasyText = document.createTextNode("Easy");
// let myNormalText = document.createTextNode("Normal");
// let myHardText = document.createTextNode("Hard");
// myLevel.appendChild(myLevelText);
// lvlEasy.appendChild(myEasyText);
// lvlNormal.appendChild(myNormalText);
// lvlHard.appendChild(myHardText);
// myLevel.setAttribute("select Levels")
// myLevel.style.cssText = "display:flex; list-style: none; marign: 0px; "
// lvlEasy.style.cssText = "padding-left: 20px; opacity: 0.7;"
// lvlNormal.style.cssText = "padding-left: 20px; opacity: 0.7;"
// lvlHard.style.cssText = "padding-left: 20px; opacity: 0.7;"

let defaultLevelName = "Normal"; // Change Level From Here

// console.log(myLevel);

let defaultLevelSeconds = lvls[defaultLevelName];

// Catch Selectors
let startButton = document.querySelector(".start");
let restartButton = document.querySelector(".restart");
let lvlNameSpsn = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Setting Level Name + Seconds + Score
lvlNameSpsn.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable Past Event 
input.onpaste = function () {
    return false;
}

// start Game
startButton.onclick = function () {
    this.remove();
    input.focus();

    //Generate Word Function
    genWords();
}

function genWords() {
    // Get Random Word From Array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // console.log(randomWord);

    // Get Word Index
    let wordIndex = words.indexOf(randomWord);
    // console.log(wordIndex);

    // Remove Word From Array
    words.splice(wordIndex, 1);
    // Show The Random Word
    theWord.innerHTML = randomWord;
    // Empty Upcoming Words
    upcomingWords.innerHTML = '';
    // Generate Words
    for (let i = 0; i < words.length; i++) {
        // Create Div Element
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    // Call Start Play Function 
    startPlay();
}

function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0") {
            // Stop Timer
            clearInterval(start);
            // Compare Words 
            if (theWord.innerHTML.toLocaleLowerCase() === input.value.toLocaleLowerCase()) {
                // console.log("Good");

                // Empty Input Field
                input.value = '';
                // Increase Score
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    // Call Generate Word Function
                    genWords();
                } else {
                    let span = document.createElement("span");
                    span.className = 'good';
                    let spanText = document.createTextNode("congratz");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    // Remove Upcoming Words Box
                    upcomingWords.remove();
                }
            } else {
                let span = document.createElement("span");
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000)

}
// Restart Game
restartButton.onclick = function () {
    window.location.href = window.location;
}


function chooseLvls() {
    // let levelDef = lvls;
    // if (levelDef)
}