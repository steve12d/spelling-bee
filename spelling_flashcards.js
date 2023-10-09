let currentWordIndex = 0;

let quizwords = [
    "high",
    "sigh",
    "right",
    "night",
    "fight",
    "they",
    "he"
];
let phrases = [
    "I can jump so high.",
    "She let out a sigh.",
    "After the stop sign, turn right.",
    "I love looking at the stars at night.",
    "I caught the fish, but he put up a big fight.",
    "They are ready to go to the mall",
    "He is my father"
]

let currentQuizWord;

function displayCard() {
    if (currentWordIndex >= quizwords.length) {
        currentWordIndex = 0;  // Reset if we've gone through all the quizwords
    }
    
    currentQuizWord = quizwords[currentWordIndex];
    let wordDisplay = document.getElementById("animalWord");
    /*wordDisplay.textContent = currentQuizWord;*/
    wordDisplay.innerHTML = `
        <p>${currentQuizWord}</p>
        <p class="phrase">${phrases[currentWordIndex]}</p>
    `;
    
    //document.getElementById("currentWordNumber").textContent = currentWordIndex + 1;
    //Refresh word list
    displayWordList();
}

function displayNext() {
    currentWordIndex+=1;
    document.getElementById("userInput").value="";
    displayCard();
}

function displayWordList() {
    let wordListElement = document.getElementById("wordList");
    wordListElement.innerHTML="";
    
    quizwords.forEach((animal, index) => {
        let listItem = document.createElement("li");
        if(index==currentWordIndex) listItem.classList.add("currentWord");
        listItem.textContent = obscureWord(animal, index);
        wordListElement.appendChild(listItem);
    });

    /*document.getElementById("totalWords").textContent = quizwords.length;*/
}

function obscureWord(word, index) {
    let obscured = word.charAt(0); // Show the first character
    for (let i = 1; i < word.length; i++) {
        obscured += '*';
    }
    return obscured;
}

function checkAnswer() {
    let userInput = document.getElementById("userInput").value.toLowerCase();
    if (userInput === currentQuizWord) {
        // Correct answer feedback
        document.getElementById("feedback").textContent = "Correct! Well done!";
        
        // Play trumpet sound
        let audio = new Audio('trumpet.mp3');
        audio.play();
        
        // Show the chosen image
        document.getElementById('answer-correct-img').style.display = 'block';
        
        // Hide the image after a short while (e.g., 3 seconds)
        setTimeout(() => {
            document.getElementById('answer-correct-img').style.display = 'none';
        }, 3000);
 
        // Throw confetti
        confetti({
            particleCount: 100,
            spread: 70,
            startVelocity: 40,
            ticks: 200
        });

        // Say "Good job" if username is defined
        if ('speechSynthesis' in window && document.getElementById('username').value ) {
            let phrase = new SpeechSynthesisUtterance("Good job, " + document.getElementById('username').value);
            phrase.lang = "en-US";
            window.speechSynthesis.speak(phrase);
        }    
        
        setTimeout(displayNext, 3000); // Show new animal after 3 seconds to let the user enjoy the celebration.
    } else {
        document.getElementById("feedback").textContent = "Keep trying!";
    }
}



function updateInputValue(char) {
    let currentInput = document.getElementById("userInput").value;
    let nextPosition = currentInput.length;

    // If the character in the target word at the next position matches the clicked key
    if (currentQuizWord[nextPosition] === char) {
        document.getElementById("userInput").value += char;
        document.getElementById("feedback").textContent = ""; // Reset feedback.
    } else {
        document.getElementById("userInput").value += char;
        document.getElementById("feedback").textContent = "Incorrect! Try again.";
    }

    highlightCorrectness();
    checkAnswer();
}

function highlightCorrectness() {
    let inputField = document.getElementById("userInput");
    let value = inputField.value;
    let correctPart = currentQuizWord.substring(0, value.length);

    if (value === correctPart) {
        inputField.style.color = "green";
    } else {
        inputField.style.color = "red";
    }
}

function speakWord(lang = "en-US") {
    if ('speechSynthesis' in window) {
        let utterance_word = new SpeechSynthesisUtterance(currentQuizWord);
        let utterance_phrase = new SpeechSynthesisUtterance(phrases[currentWordIndex]);
        utterance_word.lang = lang;
        utterance_phrase.lang = lang;
        window.speechSynthesis.speak(utterance_word);
        setTimeout(()=>window.speechSynthesis.speak(utterance_phrase),1000);
    } else {
        alert("Your browser does not support speech synthesis. Try using a modern browser like Chrome or Firefox.");
    }
}

function applyBackspace() {
    let userInput = document.getElementById("userInput");
    userInput.value = userInput.value.slice(0, -1);
    highlightCorrectness();  // Re-check the correctness after removing a character
    checkAnswer();
}

function createVirtualKeyboard() {
    let keyboardContainer = document.getElementById("virtualKeyboard");
    let rows = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];

    for (let row of rows) {
        let rowDiv = document.createElement("div");
        for (let char of row) {
            let keyButton = document.createElement("button");
            keyButton.textContent = char;
            keyButton.onclick = function() {
                //document.getElementById("userInput").value += char;
                updateInputValue(char);
            }
            rowDiv.appendChild(keyButton);
        }
        keyboardContainer.appendChild(rowDiv);
    }

    let clearButton = document.createElement("button");
    clearButton.textContent = "Clear";
    clearButton.onclick = function() {
        document.getElementById("userInput").value = "";
    }
    keyboardContainer.appendChild(clearButton);

    let backspaceButton = document.createElement("button");
    backspaceButton.textContent = "⌫"; // Unicode character for backspace symbol
    backspaceButton.onclick = applyBackspace;
    keyboardContainer.appendChild(backspaceButton);
    backspaceButton.classList.add("backspace");
}


function savePreferences() {
    const username = document.getElementById('username').value;
    const correctImg = document.getElementById('correctImg').value;

    localStorage.setItem('username', username);
    localStorage.setItem('correctImg', correctImg);
}

function loadPreferences() {
    const username = localStorage.getItem('username');
    const correctImg = localStorage.getItem('correctImg');

    if (username) {
        document.getElementById('username').value = username;
    }

    if (correctImg) {
        document.getElementById('correctImg').value = correctImg;
        document.getElementById('answer-correct-img').src = correctImg; // Set the image source
    }
}

// Call loadPreferences() when the page loads
document.addEventListener('DOMContentLoaded', loadPreferences);


// Call the above functions after the page has loaded
window.onload = function() {
    displayWordList();
    displayCard();
    createVirtualKeyboard();
}
