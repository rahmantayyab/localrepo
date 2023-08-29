// Joke Generator Logic

const jokeText = document.getElementById('joke-text');
const newJokeButton = document.getElementById('new-joke-button');

const jokes = [
  'Why don’t scientists trust atoms? Because they make up everything!',
  'Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them!',
  'Why did the scarecrow win an award? Because he was outstanding in his field!',
  'Why did the bicycle fall over? Because it was two-tired!',
  'What do you call a fish wearing a crown? King Cod!',
  'What do you call a pig that does karate? A pork chop!',
    'What do you call a funny mountain? Hill-arious!',
    'What do you call a fake noodle? An impasta!',
    'What do you call a cow with no legs? Ground beef!',
    'What do you call a cow with two legs? Lean beef!',
    'What do you call a cow with all of its legs? High steaks!',
    'What do you call a cow during an earthquake? A milkshake!',
    'What do you call a cow that plays an instrument? A moo-sician!',
    'What do you call a cow that just gave birth? Decalfinated!',
    'What do you call a cow that can’t give milk? An udder failure!',
    'What do you call a cow that has just had a baby? De-calf-inated!',
    'What do you call a cow eating grass in a paddock? A lawn-mooer!',

];

function generateRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  jokeText.textContent = randomJoke;
}

newJokeButton.addEventListener('click', generateRandomJoke);

// Initial joke generation
generateRandomJoke();