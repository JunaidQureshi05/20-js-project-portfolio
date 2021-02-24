let container = document.getElementById('container');
let links = [
  'https://junaidqureshi05.github.io/form-validator/',
  'https://junaidqureshi05.github.io/new-year-countdown/',
  'https://junaidqureshi05.github.io/custom-video-player/',
  'https://junaidqureshi05.github.io/exchange-rate-calculator/',
  'https://junaidqureshi05.github.io/movie-booking/',
  'https://junaidqureshi05.github.io/dom-array-method/',
  'https://junaidqureshi05.github.io/lyrics-search/',
  'https://junaidqureshi05.github.io/break-out-game/',
  'https://junaidqureshi05.github.io/memory-cards/',
  'https://junaidqureshi05.github.io/infinite-scroll/',
  'https://junaidqureshi05.github.io/speak-number-guessing/',
  'https://junaidqureshi05.github.io/speech-text-reader/',
  'https://junaidqureshi05.github.io/hangman-game/',
  'https://junaidqureshi05.github.io/menu-slider-and-modal/',
  'https://junaidqureshi05.github.io/sortable-list/',
  'https://junaidqureshi05.github.io/typing-game/',
  'https://junaidqureshi05.github.io/relaxer/',
  'https://junaidqureshi05.github.io/meal-finder/',
  'https://junaidqureshi05.github.io/music-player/',
  'https://junaidqureshi05.github.io/expense-tracker/',
];

function createBox(link, no) {
  let box = document.createElement('div');
  box.innerHTML = `
  <img src='./img/${no}.png'/>
  <a href=${link}>SeeProject</a>`;
  return box;
}

links.forEach((link, idx) => {
  container.appendChild(createBox(link, idx + 1));
});
console.log(container);
