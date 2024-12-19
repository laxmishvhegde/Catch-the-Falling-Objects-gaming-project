const basket = document.getElementById('basket');
const object = document.getElementById('object');
const scoreDisplay = document.getElementById('score');

let score = 0;
let objectTop = 0;
let objectLeft = Math.random() * 100;
let basketLeft = 50;


document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && basketLeft > 0) {
    basketLeft -= 5;
  }
  if (event.key === 'ArrowRight' && basketLeft < 100) {
    basketLeft += 5;
  }
  basket.style.left = `${basketLeft}%`;
});


function dropObject() {
  objectTop += 2;
  object.style.top = `${objectTop}px`;
  object.style.left = `${objectLeft}%`;

 
  if (objectTop >= 460 && Math.abs(objectLeft - basketLeft) < 10) {
    score++;
    scoreDisplay.textContent = score;
    resetObject();
  }

 
  if (objectTop > 500) {
    alert('Game Over! Your score: ' + score);
    resetGame();
  }

  requestAnimationFrame(dropObject);
}

function resetObject() {
  objectTop = 0;
  objectLeft = Math.random() * 100;
}


function resetGame() {
  score = 0;
  scoreDisplay.textContent = score;
  objectTop = 0;
  objectLeft = Math.random() * 100;
}

dropObject();
