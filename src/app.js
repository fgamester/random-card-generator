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

window.onload = function() {
  //write your code here
  const generatedCard = cardNumber[indexGenerator(cardNumber)];
  const generatedColor = cardColor[indexGenerator(cardColor)];
  console.log(generatedCard);
  console.log(generatedColor.symbol);
  console.log(generatedColor.color);
  //llamando la funcion que genera el codigo html necesario
  cardPrinter(generatedColor, generatedCard);
};

//funcion que genera un numero aleatorio necesario para el index de cada elemento
function indexGenerator(arr) {
  return Math.floor(Math.random() * arr.length);
}
//funcion que genera el codigo html, reemplazando el contenido del body en cada recarga de la pagina
function cardPrinter(cColor, cNumber) {
  document.body.style.background = "green";
  document.body.innerHTML = `
  <div class="container-fluid mt-5 d-flex justify-content-center">
    <div class="card col-3 bg-white p-3" style="border-radius:15px; width:285px">
    
      <div class="row text-left pb-5">
        <h1 class="display-1" style="color:${cColor.color}">
          ${cColor.symbol}
        </h1>
      </div>

      <div class"row">
      <h1 class="display-1 text-center">
          ${cNumber}
        </h1>
      </div>

      <div class="row text-end pt-5">
        <h1 class="display-1" style="color:${cColor.color}">
          ${cColor.symbol}
        </h1>
      </div>

    </div>
  </div>`;
}
