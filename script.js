// 1. select element

const refreshEl = document.querySelector("h1");
console.log(refreshEl);

const img1 = document.querySelector(".img1");
console.log(img1);

const img2 = document.querySelector(".img2");
console.log(img2);

// 2. generate random number:

const random1 = Math.trunc(Math.random() * 6) + 1; // for player1
console.log(random1);

const random2 = Math.trunc(Math.random() * 6) + 1; //for player2
console.log(random2);

// 3. generate images with random num:

img1.src = `./images/dice${random1}.png`;

img2.src = `./images/dice${random2}.png`;

// 4. conditionals

const decisionMaker = () => {
  if (random1 > random2) {
    refreshEl.textContent = "PLayer-1 wins";
  } else if (random1 < random2) {
    refreshEl.textContent = "Player-2 wins";
  } else {
    refreshEl.textContent = "It's a draw";
  }
};

// decisionMaker(); //for check

refreshEl.addEventListener("click", () => {
  window.location.href = "https://ayush754dutta.github.io/dice-game/";
});

refreshEl.onclick = decisionMaker();
