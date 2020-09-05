const screen = document.getElementById("screen");

const btnDirection = document.getElementById("direction");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");

const mode = document.getElementById("mode");
const selectVelocity = document.querySelector("select[name=velocity]");

let position = 0;
let direction = 1;
let oldTime = 0;
let speed = 25;
let run = false;
let kk = 2;

function main(time) {
  const seg = time - oldTime;
  const velocity = ((kk * speed) / 1000) * seg;
  const span = direction * velocity;

  if (run) {
    screen.style.backgroundPositionX = `${position}px`;
    position += span;
  }

  requestAnimationFrame(main);
  oldTime = time;
}

requestAnimationFrame(main);

btnDirection.addEventListener("click", () => {
  direction *= -1;
  btnDirection.innerText = direction > 0 ? "Normal" : "Reverse";
});

btnStart.addEventListener("click", () => {
  run = true;
});

btnStop.addEventListener("click", () => {
  run = false;
});

selectVelocity.addEventListener("change", function () {
  const velocity = parseInt(this.value, 10);
  if (velocity) {
    speed = velocity;
  }
});

mode.addEventListener("click", function ({ target }) {
  if (target) {
    console.log(target.dataset.mode);
  }
});
