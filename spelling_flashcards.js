let currentWordIndex = 0;

let past_words = {
    202340: ["high","sigh","right","night","fight","they","he"]
}

let quizwords = ["boat", "soap", "coat", "moat", "moan", "toast", "we", "she"];

let currentQuizWord;

function displayAnimal() {
    if (currentWordIndex >= quizwords.length) {
        currentWordIndex = 0;  // Reset if we've gone through all the quizwords
    }
    
    currentQuizWord = quizwords[currentWordIndex];
    let wordDisplay = document.getElementById("animalWord");
    wordDisplay.textContent = currentQuizWord;
    
    //document.getElementById("currentWordNumber").textContent = currentWordIndex + 1;
    //Refresh word list
    displayWordList();
}

function displayNext() {
    currentWordIndex+=1;
    document.getElementById("userInput").value="";
    displayAnimal();
}

function displayWordList() {
    let wordListElement = document.getElementById("wordList");
    wordListElement.innerHTML="";
    
    quizwords.forEach((animal, index) => {
        let listItem = document.createElement("li");
        if(index==currentWordIndex) listItem.classList.add("currentWord");
        listItem.textContent = obscureWord(animal, index);
        listItem.setAttribute('title', animal);
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
        
        // Throw confetti
        confetti({
            particleCount: 100,
            spread: 70,
            startVelocity: 40,
            ticks: 200
        });
        
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

function speakWord() {
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(currentQuizWord);
        utterance.lang="en-US";
        window.speechSynthesis.speak(utterance);
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

/*createVirtualKeyboard();
displayAnimal();*/


// Call the above functions after the page has loaded
window.onload = function() {
    displayWordList();
    displayAnimal();
    createVirtualKeyboard();   
}

document.addEventListener('keydown', function(event) {
    const keyPressed = event.key.toLowerCase();

    // If the key pressed is a letter
    if (keyPressed === 'backspace') {
        // If the Backspace key is pressed, remove the last letter
        applyBackspace();
    } else if (keyPressed >= 'a' && keyPressed <= 'z') {
            updateInputValue(keyPressed);
    }
});
