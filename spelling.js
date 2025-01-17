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
    "202405": ["bone", "nose", "joke", "rope", "stone", "lonely", "spoke", "drove", "one", "were"],
    "202406": ["rude", "rule", "ruler", "june", "tube", "cube", "tune", "flute", "when", "what"],
    "202408": ["may", "day", "stay", "play", "away", "playtime", "monday", "today", "said", "could"],
    "202409": ["out", "loud", "round", "our", "cloud", "mouse", "proud", "sound", "their", "people"],
    "202410": ["tie", "pie", "lie", "flies", "untie", "cried", "lies", "tried", "Mr", "Mrs"],
    "202411": ["boy", "toy", "joy", "annoy", "destroy", "enjoy", "loyal", "royal", "asked", "some"],
    "202415": ["true", "clue", "blue", "rescue", "glue", "barbecue", "continue", "argue", "there", "come"],
    "202416": ["saw", "paw", "awful", "draw", "yawn", "strawberry", "claw", "crawl", "little", "out"],
    "202417": ["first", "skirt", "birthday", "thirsty", "third", "shirt", "girl", "bird", "said", "like"],
    "202418": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "202419": ["Where", "whisper", "wheel", "whale", "Who", "What", "When", "Why", "have", "so"],
    "202420": ["dolphin", "photo", "phone", "trophy", "elephant", "photograph", "alphabet", "headphones", "some", "where"],
    "202421": ["toe", "tiptoe", "goes", "foe", "tomatoes", "potatoes", "shoe", "canoe", "what", "could"],
    "202422": ["August", "astronaut", "haunted", "haunt", "Autumn", "taught", "their", "people"],
    "202423": ["monkey", "journey", "donkey", "money", "honey", "key", "chimney", "looked", "called"],
    "202437": ["train", "afraid", "complain", "shake", "escape", "delay", "display", "great", "strange", "straight"],
    "202438": ["agree", "cheese", "increase", "peace", "squeal", "complete", "extreme", "believe", "piece", "recent"],
    "202439": ["reply", "describe", "guide", "surprise", "exercise", "island", "bicycle", "library", "fright", "height"],
    "202440": ["throat", "croak", "below", "tomorrow", "hero", "stroke", "phone", "toast", "potatoes", "suppose"],
    "202441": ["continue", "statue", "gloom", "tooth", "flute", "chew", "bruise", "group", "through", "fruit"],
    "202442": ["house", "school", "didn't", "couldn't", "with", "went", "there", "their", "should", "doesn't"],
    "202443": ["accidentally", "accident", "difficult", "disappear", "experience", "interest", "history", "imagine", "important", "experiment"],
    "202444": ["ground", "pound", "count", "found", "sound", "power", "howl", "owl", "tower", "flower"],
    "202445": ["pages", "foxes", "babies", "armies", "thieves", "children", "feet", "animals", "drains", "chefs"],
    "202446": ["quickly", "rudely", "sweetly", "bravely", "secretly", "angrily", "lazily", "busily", "wearily", "clumsily"],
    "202447": ["redecorate", "reappear", "reapply", "repay", "rebuild", "rewrite", "refresh", "replay", "reread", "reheat"],
    "202448": ["shouldn't", "I'm", "didn't", "couldn't", "I'll", "it's", "wouldn't", "wasn't"],
    "202449": ["medicine", "particular", "minute", "ordinary", "notice", "peculiar", "position", "possible", "promise", "various"],
    "202450": ["kind", "happy", "locked", "certain", "lead", "behave", "place", "appear", "like", "honest"],
    "202503": ["bicycle", "biannual", "biceps", "biweekly", "bilingual", "bicolour", "bifocals", "biplane", "bisect", "biped"]
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
      ],
    "202406": [
        "He was rude to his little sister.",
        "Always remember to follow the rule.",
        "Use a ruler to draw a straight line.",
        "My birthday is in June.",
        "She likes to watch videos on YouTube.",
        "The shape of the dice is a cube.",
        "Let's sing along to the tune of this song.",
        "She played a beautiful melody on the flute.",
        "When will mommy come home from work?",
        "What is your favorite color?"
      ],
      "202408": [
        "May I have a cookie?",
        "I like playing all day.",
        "I will stay with my friend.",
        "Let's play soccer!",
        "Go away, scary monster!",
        "It's time for playtime!",
        "Monday is the first day of the week.",
        "Today is Friday.",
        "She said hello to me.",
        "I could jump really high."
    ],
    "202409": [
        "Let's go play outside and throw the ball out.",
        "Can you sing a song out loud for us?",
        "The Earth is a big round planet.",
        "These are our toys to share.",
        "The sky is full of white clouds today.",
        "I saw a tiny mouse running by.",
        "We should be proud of our hard work.",
        "I heard a loud sound coming from the kitchen.",
        "Their dog is chasing a squirrel.",
        "People come in all different shapes and sizes."
    ],
    "202410": [
        "My dad helps me tie my shoes.",
        "I love eating cherry pie for dessert.",
        "It is not nice to tell a lie.",
        "The flies are buzzing around the trash.",
        "I need to untie my shoelaces before I can take off my shoes.",
        "The baby cried when she dropped her toy.",
        "My mom says telling lies is not okay.",
        "I tried really hard on my math homework.",
        "Mr. Johnson is my teacher.",
        "Mrs. Smith is our neighbor."
       ],
    "202411": [
        "Tom is a naughty boy.",
        "Sara loves playing with her toy.",
        "The children were filled with joy during the party.",
        "The loud music began to annoy the neighbors.",
        "The tornado can destroy houses and trees.",
        "We all enjoy playing outside in the sun.",
        "He is a loyal friend who always sticks up for others.",
        "The royal family lives in the castle.",
        "He asked his mom for help with his homework.",
        "I want some cookies for dessert."
    ],
    "202415": [
        "I have a true friend who always plays with me.",
        "I need a clue to solve this puzzle.",
        "The sky is a beautiful shade of blue today.",
        "The firefighters had to rescue the kitten from the tree.",
        "Don't forget to use glue when crafting.",
        "We're going to have a barbecue in the backyard.",
        "Let's continue playing the game.",
        "Please don't argue with your sister.",
        "Is that book over there yours?",
        "Come with me to the park." 
    ],
    "202416": [
        "I saw a bird in the tree.",
        "The cat hurt its paw.",
        "The food was awful.",
        "I can draw a picture of a dog.",
        "I yawn when I'm sleepy.",
        "I like to eat strawberry ice cream.",
        "The bear has a sharp claw.",
        "The baby learned how to crawl.",
        "I have a little sister.",
        "Let's go out to play."
    ],
    "202417": [
        "First day of school is always exciting!",
        "I wore my new skirt to the party.",
        "Today is my birthday, I'm turning 6!",
        "I feel thirsty after playing outside.",
        "The third cookie is mine.",
        "My shirt has a cool design on it.",
        "The girl is wearing a pretty dress.",
        "I saw a bird flying in the sky.",
        "My mom said we can have pizza for dinner.",
        "I like to play with my toys."
    ],
    "202418": [
        "I have school on Monday.",
        "Tomorrow is Tuesday.",
        "My favorite day is Wednesday.",
        "We have pizza for dinner on Thursday.",
        "Friday is the last day of the school week.",
        "I go to the park on Saturday.",
        "My family has a big dinner on Sunday."
    ],
    "202419": [
        "Where is the red ball?",
        "I will whisper a secret in your ear.",
        "The wheel on the bus goes round and round.",
        "The whale swims in the big ocean.",
        "Who is that girl over there?",
        "What color is that flower?",
        "When is your birthday party?",
        "Why did the cat run away?",
        "I have a toy car to play with.",
        "I am so happy to see you."  
    ],
    "202420": [
        "Daisy saw a dolphin jump out of the water at the beach.",
        "Mom took a photo of us at the park.",
        "Can you hear me on the phone?",
        "Sam won a trophy at his soccer game.",
        "An elephant has big ears and a long trunk.",
        "She showed me a photograph of her new puppy.",
        "We learned the alphabet in school today.",
        "She listens to music on her headphones.",
        "Would you like some juice?",
        "Where are my socks?"
      ],
    "202421": [
        "I stubbed my toe on the table.",
        "I walked on my tiptoe to sneak up on my brother.",
        "My dog goes for a walk every morning.",
        "The hero defeated the evil foe.",
        "We picked tomatoes and potatoes from the garden.",
        "I like eating french fries with ketchup on my potatoes.",
        "I need to tie my shoe before we play outside.",
        "We rowed a canoe in the lake.",
        "What color is your shirt?",
        "I could hear the birds chirping in the trees." 
    ],
    "202422": [
        "August is the eighth month of the year.",
        "The astronaut went to space in a rocket ship.",
        "The haunted house was spooky and scary.",
        "Ghosts like to haunt old houses.",
        "Autumn is my favorite season because of the colorful leaves.",
        "My teacher taught me how to write my name.",
        "Their dog is very friendly.",
        "People come in all shapes and sizes."
    ],
    "202423": [
        "I saw a funny monkey at the zoo.",
        "My family went on a long journey to the beach.",
        "The donkey in the field is eating grass.",
        "I found some shiny money on the sidewalk.",
        "Please pass me the jar of sticky honey.",
        "I can't find the key to open the door.",
        "Smoke comes out of the chimney on our house.",
        "I looked for my favorite toy all day.",
        "I called my friend to invite him to my birthday party."
    ],
    "202437": [
        "I saw a big train chugging along the tracks.",
        "I am afraid of the dark.",
        "Don't complain about your lunch, eat it.",
        "I like to shake my toys to make noise.",
        "The cat tried to escape from the room.",
        "There was a delay in the start of the race.",
        "The museum had a display of dinosaur skeletons.",
        "Today is a great day to go to the park.",
        "That is a strange looking bug.",
        "Draw a straight line from the top to the bottom of the page."
    ],
    "202438": [
        "I agree with you.",
        "Can I have some cheese on my sandwich?",
        "We need to increase our efforts at recycling.",
        "I hope we can find peace in the world.",
        "The pig started to squeal when I picked it up.",
        "I need to complete my homework before I can play.",
        "That roller coaster was extreme!",
        "I believe in magic.",
        "Can I have a piece of your candy?",
        "Have you heard the news about the recent discoveries?" 
    ],
    "202439": [
        "I will reply to your message soon.",
        "Can you describe what the animal looks like?",
        "My dad will guide me on how to ride a bike.",
        "Mom said she has a surprise for us.",
        "Let's go outside and get some exercise!",
        "We are going on a trip to a tropical island.",
        "I like riding my bicycle around the neighborhood.",
        "We can borrow books from the library.",
        "The loud noise gave me a fright.",
        "I'm getting taller, my height is increasing."
    ],
    "202440": [
        "I have a sore throat and need some medicine.",
        "The frog likes to croak loudly by the pond.",
        "The treasure is buried below the ground.",
        "We will go to the zoo tomorrow to see the animals.",
        "My dad is my hero because he is brave.",
        "Be careful not to stroke the dog too hard.",
        "I can call my friend on the phone to chat.",
        "I like to eat buttered toast for breakfast.",
        "My favorite food is mashed potatoes.",
        "I suppose we should go to bed soon." 
    ],
    "202441": [
        "I will continue coloring my picture.",
        "The statue in the park is very big.",
        "Don't be sad, try to cheer up the gloom.",
        "I lost my tooth and put it under my pillow for the tooth fairy.",
        "I want to learn how to play the flute.",
        "It's important to chew your food before swallowing.",
        "I got a bruise on my knee when I fell down.",
        "We all work together in a group.",
        "Let's walk through the forest and see the trees.",
        "I love to eat fruit for a snack."
    ],
    "202442": [
        "I live in a big house.",
        "I go to school every day.",
        "I didn't eat my vegetables.",
        "I couldn't find my favorite toy.",
        "I play with my dog in the park.",
        "I went to the zoo with my family.",
        "There is a rainbow in the sky.",
        "Their toys are colorful.",
        "We should clean up our room.",
        "He doesn't like broccoli."
    ],
    "202443": [
        "I accidentally dropped my ice cream on the ground.",
        "I got into an accident while riding my bike.",
        "Math can be difficult, but with practice, you can get better.",
        "My toy seems to disappear whenever my little brother comes around.",
        "I had a fun experience at the zoo with my family.",
        "I have an interest in learning about dinosaurs.",
        "We are studying ancient history in school.",
        "Let's imagine we are flying in a rocket ship to outer space.",
        "It is important to always be kind to others.",
        "We are going to do a science experiment in class today."
    ],
    "202444": [
        "Let's play in the sand on the ground.",
        "I can pound on the drum to make music.",
        "I can count how many apples are in the basket.",
        "I found a shiny penny on the sidewalk.",
        "The bird makes a chirping sound.",
        "The superhero has super power.",
        "The wolf lets out a loud howl.",
        "The owl hoots at night.",
        "The princess lives in a tall tower.",
        "I picked a beautiful flower from the garden."
    ],
    "202445": [
        "I like to color in my coloring book with lots of pages.",
        "Foxes are clever animals that live in the forest.",
        "The babies giggled and clapped their hands.",
        "The armies marched in neat rows on the parade ground.",
        "Thieves try to steal things from others.",
        "Children played tag in the park.",
        "I can wiggle my toes on my feet.",
        "We saw many different animals at the zoo.",
        "The drains were clogged with leaves and dirt.",
        "The chefs cooked delicious meals in the restaurant."
    ],
    "202446": [
        "She ran quickly to the finish line.",
        "He spoke rudely to his teacher.",
        "The puppy barked sweetly at the baby.",
        "The knight bravely fought the dragon.",
        "She whispered the secretely to her friend.",
        "He stomped angrily when he lost the game.",
        "The cat stretched lazily in the sun.",
        "The bees buzzed busily around the hive.",
        "She yawned wearily after a long day at school.",
        "He tripped clumsily over the rock."
    ],
    "202447": [
        "Let's redecorate your room with new curtains and a bedspread.",
        "The magician will reappear on stage after disappearing behind a curtain.",
        "Don't forget to reapply sunscreen every two hours at the beach.",
        "We need to repay the money we borrowed from Grandma.",
        "The construction crew will rebuild the old barn next week.",
        "You should rewrite your name neatly on your homework sheet.",
        "I need to refresh my memory before the spelling test.",
        "Let's replay that funny video of the baby laughing.",
        "I will reread my favorite book for the third time.",
        "Be careful not to reheat your soup for too long in the microwave."
    ],
    "202448": [
        "Mom said I shouldn't eat too much candy.",
        "I'm excited to go to the park with my friends.",
        "I didn't finish my homework yet.",
        "I couldn't reach the top shelf.",
        "I'll see you tomorrow at school.",
        "It's time to brush your teeth before bed.",
        "I wouldn't eat the broccoli.",
        "It wasn't raining when I left the house."
    ],
    "202449": [
        "I need to take my medicine when I'm sick.",
        "Can you find the particular toy I'm looking for?",
        "Wait just a minute, I'll be right back.",
        "It's an ordinary day at school.",
        "Did you notice the new flowers blooming?",
        "That's a peculiar looking bug.",
        "What is your favorite position to play in soccer?",
        "It's possible to finish your homework before dinner.",
        "I promise to be quiet during the movie.",
        "There are various colors in the rainbow."
       ],
    "202450": [
        "I am being kind to my friend by sharing my toys.",
        "I feel happy when I play outside with my dog.",
        "The door is locked so we need the key to open it.",
        "I am certain that I left my backpack in the classroom.",
        "The teacher will lead the class on a nature walk.",
        "If you behave in class, you can earn a sticker.",
        "This is a good place to have a picnic in the park.",
        "The rabbit will appear in the magic hat during the show.",
        "I like to eat pizza for dinner.",
        "It is important to be honest and tell the truth."
    ],
    "202503": [
        "Mom bought me a new bicycle for my birthday.",
        "We see our grandparents biannually, which means twice a year.",
        "Look at his big biceps from working out.",
        "We get paid biweekly, every two weeks.",
        "My cousin is bilingual and speaks both English and Spanish.",
        "I like the bicolour pattern on your dress.",
        "Grandpa wears bifocals to help him see better.",
        "The biplane flew low over the field.",
        "The math teacher taught us how to bisect a line in half.",
        "A kangaroo is a biped because it walks on two legs."
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
