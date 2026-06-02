// INTRO

const intro = document.getElementById("intro");
const envelope = document.querySelector(".envelope-container");
const openBtn = document.getElementById("openBtn");

// MUSICA

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

// CURSOR

const heartCursor = document.getElementById("heartCursor");

document.addEventListener("mousemove", (e) => {

  heartCursor.style.left = e.clientX + "px";
  heartCursor.style.top = e.clientY + "px";

});

// ABRIR CARTA

openBtn.addEventListener("click", () => {

  envelope.classList.add("open");

  music.volume = 0.4;

  music.play();

  musicPlaying = true;

  musicBtn.innerHTML = "🔊";

  setTimeout(() => {

    intro.classList.add("hide-intro");

    document.body.classList.remove("locked");

  }, 2000);

});

// BOTAO MUSICA

musicBtn.addEventListener("click", () => {

  if(musicPlaying){

    music.pause();

    musicBtn.innerHTML = "🔇";

    musicPlaying = false;

  }else{

    music.play();

    musicBtn.innerHTML = "🔊";

    musicPlaying = true;

  }

});

// BOTAO NÃO

const noBtn = document.getElementById("noBtn");
const buttonsArea = document.querySelector(".buttons");

noBtn.addEventListener("mouseover", () => {

  const areaWidth = buttonsArea.clientWidth;
  const areaHeight = buttonsArea.clientHeight;

  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const maxX = areaWidth - buttonWidth;
  const maxY = areaHeight - buttonHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

});

// BOTAO SIM

const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {

  result.classList.remove("hidden");

  // espera renderizar
  setTimeout(() => {

    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }, 100);

});

// CONTADOR

const startDate = new Date("2025-11-15T00:00:00");

function updateCounter(){

  const now = new Date();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (diff / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (diff / (1000 * 60)) % 60
  );

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;

}

updateCounter();

setInterval(updateCounter, 1000);
