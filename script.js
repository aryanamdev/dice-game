let dice = document.querySelectorAll(".dice img");
let button = document.querySelector("button");
let heading = document.querySelector(".container h1");
let container = document.getElementsByClassName("container");

button.addEventListener("load", changeTextOnload());

function changeTextOnload() {
  button.innerText = "Match";
}

dice.forEach((e) => {
  button.addEventListener("click", (event) => {
    let randomNumber01 = Math.floor(Math.random() * 6) + 1;
    let randomNumber02 = Math.floor(Math.random() * 6) + 1;

    if (e.classList.contains("img1")) {
      let source = `images/dice${randomNumber01}.png`;
      e.setAttribute("src", source);
    } else {
      let source = `images/dice${randomNumber02}.png`;
      e.setAttribute("src", source);
    }

    if (randomNumber01 == randomNumber02) {
      heading.textContent = "Match Tie";
    } else if (randomNumber01 > randomNumber02) {
      heading.textContent = "Player 1 Won!";
    } else if (randomNumber01 < randomNumber02) {
      heading.textContent = "Player 2 Won!";
    }

    button.innerHTML = "Rematch";
  });
});
