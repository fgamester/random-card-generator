/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// declarando los colores de las cartas
const diamond = { symbol: "♦", color: "red" };
const heart = { symbol: "♥", color: "red" };
const spade = { symbol: "♠", color: "black" };
const club = { symbol: "♣", color: "black" };
//declarando los arrays que contienen lo necesario para generar las cartas
const cardColor = [diamond, heart, spade, club];
const cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//declarando elemento button e inputs
const rerollBtn = document.getElementById("reroll");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
//almacenando los elementos generados en variables
let generatedCard = cardNumber[indexGenerator(cardNumber)];
let generatedColor = cardColor[indexGenerator(cardColor)];
//variables necesarias para el timer
const htmlTimer = document.getElementById("timer");
let timer = 10;
let timerInteval = setInterval(timerPrinter, 1000);

window.onload = function() {
  //write your code here
  //llamando la funcion que genera el codigo html necesario
  cardPrinter();
};

//accion de reroll en caso de un clic
rerollBtn.addEventListener("click", function(event) {
  if (event.target === rerollBtn) {
    newCard();
    timer = 10;
  }
});

//cambiando el width
widthInput.addEventListener("keypress", function(event) {
  if (
    event.key == "Enter" &&
    widthInput.value >= 150 &&
    widthInput.value <= 600
  ) {
    cardPrinter();
    console.log(widthInput.value);
  }
});

//cambiando el height
heightInput.addEventListener("keypress", function(event) {
  if (
    event.key == "Enter" &&
    heightInput.value >= 200 &&
    heightInput.value <= 700
  ) {
    cardPrinter();
    console.log(widthInput.value);
  }
});

//funcion que genera un numero aleatorio necesario para el index de cada elemento
function indexGenerator(arr) {
  return Math.floor(Math.random() * arr.length);
}

//set interval que genera una nueva carta cada 10 segundos
function timerPrinter() {
  timer -= 1;
  htmlTimer.innerHTML = `<h1 style="color:white">New card will be generated in ${timer} seconds...</h1>`;
  if (timer <= 0) {
    timer = 10;
    newCard();
    timerPrinter();
  }
}

//funcion que genera el codigo html, reemplazando el contenido del body en cada recarga de la pagina
function cardPrinter() {
  //guardando en una variable el lugar donde irá la carta generada e impresa
  const spot = document.getElementById("card-space");
  //valor minimo por defecto de width
  if (
    widthInput.value == "" ||
    widthInput.value < 150 ||
    widthInput.value > 600
  )
    widthInput.value = "200";
  //valor minimo por defecto de heght
  if (
    heightInput.value == "" ||
    heightInput.value < 150 ||
    heightInput.value > 700
  )
    heightInput.value = "300";
  //color verde de fondo
  document.body.style.background = "green";
  //imprimiendo la carta
  spot.innerHTML = `
  <div class="container-fluid mt-5 d-flex justify-content-center">
    <div class="card bg-white position-relative" style="border-radius:15px; width:${widthInput.value}px; height:${heightInput.value}px">
    
      <h1 class="display-1 position-absolute top-0 start-0 ms-2" style="color:${generatedColor.color}">
        ${generatedColor.symbol}
      </h1>

      <h1 class="display-1 position-absolute top-50 start-50 translate-middle">
          ${generatedCard}
      </h1>

      <h1 class="display-1 position-absolute bottom-0 end-0 me-2" style="color:${generatedColor.color}">
        ${generatedColor.symbol}
      </h1>

    </div>
  </div>`;
}

//funcion que genera una nueva carta y luego la imprime llamando la funcion cardPrinter
function newCard() {
  clearInterval(timerInteval);
  timer = 10;
  generatedCard = cardNumber[indexGenerator(cardNumber)];
  generatedColor = cardColor[indexGenerator(cardColor)];
  cardPrinter();
  timerInteval = setInterval(timerPrinter, 1000);
}
