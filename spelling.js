const all_words = {
    "202542": ["wait", "train", "paint", "snail", "one"]
}

const all_phrases = {
    "202542":[
        "I have to wait for my mom to finish shopping.",
        "I love watching the train pass by.",
        "I like to paint pictures with lots of colors.",
        "The snail slowly crawled across the sidewalk.",
        "I have one cookie left to eat."
        ]
}

const correct_images = [
    'assets/dancing-t-rex.gif',
    'assets/velociraptors.gif',
    'assets/peppa-george2.gif',
    'assets/pikachu-dance.gif'
]

function getLatestWeek() {
    let latestWeek = Math.max(...Object.keys(all_words).map(x=>parseInt(x))).toString();

    return latestWeek;
}

function getWeekNumberFromUrl() {
    // Assuming the URL is something like "http://spellingbury.netapp.com/?week=202341"
  
    // Use window.location.search to get the query string from the current page URL
    const queryString = window.location.search;
    
    // Use URLSearchParams to parse the query string
    const urlParams = new URLSearchParams(queryString);
  
    // Get the week number. If it doesn't exist, this will be null
    const weekNumber = urlParams.get('week');
  
    // Optional: Convert the week number from string to integer if it's not null
    return weekNumber;
}

// Use the function
const _urlWeekNumber = getWeekNumberFromUrl();
  
const current_week = (_urlWeekNumber && all_words.hasOwnProperty(_urlWeekNumber)) ? _urlWeekNumber : getLatestWeek();

const quizwords = all_words[current_week];

const phrases = all_phrases[current_week];

let currentWordIndex = 0;
let currentQuizWord;

function randbetween(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function localstorage_get(key) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.warn("Couldn't read from localStorage");
        return null;
    }    
}


function localstorage_set(key,value) {
    try {
        return localStorage.setItem(key, value);
    } catch (error) {
        console.warn("Couldn't write to localStorage");
        return null;
    }    
}

let audioContext;

try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
} catch (e) {
    console.error('Web Audio API is not supported in this browser', e);
}

function playWrongAnswerSound() {
    if (!audioContext) return;  // Don't proceed if AudioContext is not available

    const oscillator = audioContext.createOscillator();
    oscillator.type = 'triangle'; // Type of waveform
    oscillator.frequency.setValueAtTime(100, audioContext.currentTime); // Start at 440 Hz
    //oscillator.frequency.exponentialRampToValueAtTime(220, audioContext.currentTime + 0.5); // Descend to 220 Hz in 0.5 seconds

    const gain = audioContext.createGain();
    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    gain.gain.setValueAtTime(0.3, audioContext.currentTime); // Adjusted gain value to 0.3 (quieter)
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1); // Fade out quicker

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3); // Stop after 0.5 seconds

    oscillator.connect(audioContext.destination); // Connect the oscillator to the speakers
}

function playCorrectAnswerSound() {
    if (!audioContext) return;  // Don't proceed if AudioContext is not available

    // Create a series of oscillators to simulate multiple coin clinks
    for (let i = 0; i < 2; i++) {
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';

        // Play with these frequencies to get the desired sound
        oscillator.frequency.setValueAtTime(1000 + i * 300, audioContext.currentTime + i * 0.1); 

        const gain = audioContext.createGain();
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        gain.gain.setValueAtTime(0.2, audioContext.currentTime + i * 0.1); // Adjusted gain value to 0.5 (half volume)
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.1 + 0.5);

        oscillator.start(audioContext.currentTime + i * 0.1);
        oscillator.stop(audioContext.currentTime + i * 0.1 + 0.5);
    }
}



function displayCard() {
    if (currentWordIndex >= quizwords.length) {
        currentWordIndex = 0;  // Reset if we've gone through all the quizwords
    }
    
    currentQuizWord = quizwords[currentWordIndex];
    let wordDisplay = document.getElementById("cardWord");
    wordDisplay.textContent = currentQuizWord;
    

    //Refresh word list
    displayWordList();
}

function displayNext() {
    currentWordIndex+=1;
    document.getElementById("userInput").value="";
    displayCard();
    peekAtCard(2000);
    speakWord("en-US");
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
    if (userInput === currentQuizWord.toLowerCase()) {
        // Set the image to be shown
        loadPreferences();

        // Correct answer feedback
        //document.getElementById("feedback").textContent = "Correct! Well done!";
        
        // Play trumpet sound
        let audio = new Audio('assets/trumpet.mp3');
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
        
        setTimeout(displayNext, 3000); // Show new animal after 3 seconds to let the user enjoy the celebration.
    } else {
        //document.getElementById("feedback").textContent = "Keep trying!";
    }
}



function updateInputValue(char) {
    let currentInput = document.getElementById("userInput").value;
    let nextPosition = currentInput.length;

    // If the character in the target word at the next position matches the clicked key
    if (currentQuizWord.toLowerCase()[nextPosition] === char) {
        document.getElementById("userInput").value += char;
        //document.getElementById("feedback").textContent = ""; // Reset feedback.
        playCorrectAnswerSound();
    } else {
        document.getElementById("userInput").value += char;
        playWrongAnswerSound();
        //document.getElementById("feedback").textContent = "Incorrect! Try again.";
    }

    highlightCorrectness();
    checkAnswer();
}

function highlightCorrectness() {
    let inputField = document.getElementById("userInput");
    let value = inputField.value;
    let correctPart = currentQuizWord.toLowerCase().substring(0, value.length);

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
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', "'"],  // Apostrophe added to this row
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];

    for (let row of rows) {
        let rowDiv = document.createElement("div");
        for (let char of row) {
            let keyButton = document.createElement("button");
            keyButton.textContent = char;
            keyButton.onclick = function() {
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

/* Settings drawer */
function closeSettings() {
    const settingsMenu = document.getElementById('settingsMenu');
    const dashboard = document.getElementById('dashboard');

    // Hide settings
    settingsMenu.classList.add('hidden');
    
    // Show dashboard
    if (dashboard.classList.contains('hidden')) {
        dashboard.classList.remove('hidden');
    }
}

function toggleSettings() {
    const settingsMenu = document.getElementById('settingsMenu');
    const dashboard = document.getElementById('dashboard');

    if (settingsMenu.classList.contains('hidden')) {
        // Show settings and hide dashboard
        settingsMenu.classList.remove('hidden');
        dashboard.classList.add('hidden');
    } else {
        // Hide settings and show dashboard
        closeSettings();
    }
}

function savePreferences(correctImg) {
    localstorage_set('correctImg', correctImg);
    if (correctImg && (correctImg != "random")) document.getElementById('answer-correct-img').src = correctImg; // Set the image source
    setTimeout(closeSettings, 100);
}

function loadPreferences() {
    let correctImg = localstorage_get('correctImg');
    if(!correctImg) {
        // If correct image isn't set in local storage, set the default value of 'random'
        localstorage_set('correctImg', "random");
        correctImg = "random";
    }
    if (correctImg != "random") {
        document.getElementById('answer-correct-img').src = correctImg; // Set the image source
    } else {
        document.getElementById('answer-correct-img').src=correct_images[randbetween(0,correct_images.length-1)];
    }
}

function peekAtCard(duration = 1000) { // duration is the time the card is shown in milliseconds
    const cardInner = document.querySelector('.card-inner');
    
    // If there's no card, there's nothing to peek at
    if (!cardInner) return;
  
    // Define a function to set multiple styles
    const setTransform = (element, value) => {
      element.style.webkitTransform = value; // for Safari and older Chrome versions
      element.style.transform = value; // standard property
    };
    
    // Temporarily show the card
    setTransform(cardInner, 'rotateY(180deg)'); // This assumes the "revealed" state is rotated 180 degrees on the Y axis
  
    // Then, after [duration] milliseconds, hide it again
    setTimeout(() => {
      setTransform(cardInner, '');
    }, duration);
}
  
// Call the above functions after the page has loaded
window.onload = function() {
    displayWordList();
    displayCard();
    createVirtualKeyboard();
    loadPreferences();
    // Pre-load images
    correct_images.forEach(imagePath => {
        const img = new Image();
        img.src = imagePath;
    });    
}

document.addEventListener('keydown', function(event) {
    const keyPressed = event.key.toLowerCase();

    // If the key pressed is a letter
    if (keyPressed === 'backspace') {
        // If the Backspace key is pressed, remove the last letter
        applyBackspace();
    
    } else if (keyPressed.length > 1 && keyPressed !== "'") {
        event.preventDefault();
        
    } else if ((keyPressed >= 'a' && keyPressed <= 'z') || keyPressed === "'") {
            updateInputValue(keyPressed);
    }
});
