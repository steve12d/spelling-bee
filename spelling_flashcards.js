const all_words = {
    "202340": ["high","sigh","right","night","fight","they","he"],
    "202341": ["boat", "soap", "coat", "moat", "moan", "toast", "we", "she"],
    "202342": ["hook", "good", "look", "soon", "food", "spoon", "all", "are"],
    "202343": ["arm", "dark", "farm", "star", "shark", "start", "march", "spark", "me", "my"],
    "202345": ["torn","fork", "corn", "forty", "story", "stormy", "lord", "pork", "be", "was"],
    "202346": ["burn", "turn", "fur", "hurt", "turkey", "nurse", "purple", "turtle", "and", "the"],
    "202347": ["now", "cow", "owl", "brown", "clown", "flower", "that", "with"],
    "202348": ["coin", "boil", "join", "point", "voice", "toilet", "soil", "foil", "said", "like"],
    "202350": ["ever", "river", "never", "braver", "summer", "sister", "brother", "faster", "do", "come"],
    "202402": ["game", "shake", "make", "same", "plane", "brave", "taste", "take", "little", "there"],
    "202403": ["eve", "even", "evening", "these", "here", "delete", "complete", "out", "have"],
    "202404": ["ride", "nine", "bike", "smile", "white", "shine", "prize", "hive", "so", "some"],
    "202405": ["bone", "nose", "joke", "rope", "stone", "lonely", "spoke", "drove", "one", "were"]
}

const all_phrases = {
    "202340":[
        "I can jump so high.",
        "She let out a sigh.",
        "After the stop sign, turn right.",
        "I love looking at the stars at night.",
        "I caught the fish, but he put up a big fight.",
        "They are ready to go to the mall",
        "He is my father"
    ],
    "202341":[
        "She sailed the boat across the sea.",
        "Wash your hands with soap and water.",
        "Wear your coat. It's cold outside.",
        "The castle was protected by a moat.",
        "There's no need to moan - we can go to the beach tomorrow instead.",
        "Would you like some peanut butter on your toast?",
        "We are the champions.",
        "She is my sister."
    ],
    "202342":[
        "Please hang your coat on the hook.",
        "You did such a good job.",
        "Look, it's snowing outside.",
        "Soon it will be Halloween.",
        "Pizza is my favorite food.",
        "Would you like a spoon for your yogurt?",
        "Not all dinosaurs were carnivores.",
        "You are such a good friend."
    ],
    "202343": [
        "She raised her arm to wave hello.",
        "It is dark at night.",
        "The pig lives on a farm.",
        "I see a bright star in the sky.",
        "The shark swims fast in the sea.",
        "Start the race by saying 'Go!'",
        "The drummers march in the marching band.",
        "A tiny spark can light a big fire.",
        "Look at me! I can ride this bike.",
        "My dad will pick me up from school today."
    ],
    "202345": [
        "My book is torn.",
        "I eat my salad with a fork.",
        "We have corn on the cob for dinner.",
        "My mom is forty years old.",
        "Dad reads me a story before bed.",
        "The sky is stormy and gray.",
        "In stories, a lord lives in a castle.",
        "We had pork chops for lunch.",
        "I want to be a firefighter.",
        "The cat was sleeping on the chair."
      ],
    "202346": [
        "Don't touch the candle; it can burn you.",
        "Turn the page to read the next story.",
        "The cat has soft fur.",
        "I hurt my knee when I fell down.",
        "We saw a turkey on the farm.",
        "The nurse helps us when we are sick.",
        "My favorite color is purple.",
        "The turtle moves very slowly.",
        "I like apples and bananas.",
        "The sun is shining brightly today."
    ],
    "202347": [
        "Now we can play a game together.",
        "The cow in the field is black and white.",
        "An owl says 'hoot' at night.",
        "My favorite color is brown like chocolate.",
        "The clown at the party made funny faces.",
        "I saw a pretty flower in the garden.",
        "That is my favorite teddy bear.",
        "I like to draw with my colorful crayons."
    ],
    "202348": [
        "I found a shiny coin on the sidewalk.",
        "Mom is going to boil some water to make yummy pasta.",
        "Would you like to join me in playing with colorful blocks?",
        "Can you point to the big, red balloon in the sky?",
        "Use your happy voice when you tell me your favorite story.",
        "Remember to flush the toilet after using it, and wash your hands too!",
        "Plants grow in the dark, rich soil in our garden.",
        "Let's wrap our sandwiches in shiny foil to keep them fresh.",
        "She said, 'I love playing with my best friend.'",
        "I like the taste of yummy ice cream on a hot day."
    ],
    "202350": [
        "I will love my teddy bear forever and ever.",
        "The river flows gently through the forest.",
        "I will never forget to brush my teeth.",
        "Each day I try to be braver than the day before.",
        "In the summer, we go to the beach and build sandcastles.",
        "My sister and I like to play hide-and-seek together.",
        "My brother helps me fly my kite in the park.",
        "I run faster when I'm racing with my friends.",
        "I like to do my homework after school.",
        "Come to the kitchen, dinner is ready!"
    ],
    "202402":[
        "Let's play a fun game with our colorful blocks.",
        "Can you shake the bottle of glitter for our art project?",
        "We can make a big castle with our playdough.",
        "My red crayon is the same color as your apple.",
        "Look at the toy plane fly high in the sky!",
        "You were very brave when you tried the big slide.",
        "Let's taste the yummy cookies we baked together.",
        "Please take your backpack to school every day.",
        "I saw a little frog jump in the pond.",
        "There is a rainbow in the sky after the rain."
      ],
    "202403": [
        "I will see you on Christmas Eve.",
        "My sister has an even number of candies.",
        "We usually take a walk in the evening.",
        "These flowers are so beautiful.",
        "Come here and sit next to me.",
        "Please delete the incorrect word.",
        "She had to complete her homework before playing.",
        "The cat went out through the open window.",
        "I have a blue pen in my pencil case."
      ],
    "202404": [
        "I like to ride my bike in the park.",
        "There are nine flowers in the garden.",
        "I learned how to ride a bike when I was six.",
        "She has a big smile on her face.",
        "The fluffy clouds are white in color.",
        "The sun will shine brightly today.",
        "He won a prize for his beautiful drawing.",
        "We found bees building their hive in the tree.",
        "I am so excited to go to the park.",
        "Some of my friends are coming over to play."
    ],
    "202405": [
        "I found a bone in the backyard.",
        "She has a runny nose.",
        "The clown told a funny joke.",
        "He tied a knot in the rope.",
        "I skipped a stone across the lake.",
        "The little girl felt lonely.",
        "He spoke softly to the baby.",
        "They drove to the park in their car.",
        "I only have one cookie left.",
        "We were late for school this morning."
      ]
}


const correct_images = [
    'dancing-t-rex.gif',
    'velociraptors.gif',
    'peppa-george2.gif',
    'pikachu-dance.gif'
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
    if (userInput === currentQuizWord) {
        // Set the image to be shown
        loadPreferences();

        // Correct answer feedback
        //document.getElementById("feedback").textContent = "Correct! Well done!";
        
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
        
        setTimeout(displayNext, 3000); // Show new animal after 3 seconds to let the user enjoy the celebration.
    } else {
        //document.getElementById("feedback").textContent = "Keep trying!";
    }
}



function updateInputValue(char) {
    let currentInput = document.getElementById("userInput").value;
    let nextPosition = currentInput.length;

    // If the character in the target word at the next position matches the clicked key
    if (currentQuizWord[nextPosition] === char) {
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
    
    } else if (keyPressed.length > 1) {
        event.preventDefault();
        
    } else if (keyPressed >= 'a' && keyPressed <= 'z') {
            updateInputValue(keyPressed);
    }
});
