let $ = (selector) => document.querySelector(selector);
let ts = "0px 0px 6px #FFFFFF";
let w = "white";

function getCurrentTime() {
  let date = new Date();

  let currentHour = date.getHours() % 12 || 12;
  let currentMin = date.getMinutes();
  let nextHour;
  currentHour === 12 ? (nextHour = 1) : (nextHour = currentHour + 1);

  console.log(`Current time is ${currentHour}:${currentMin}`);
  for (let i = 1; i < 13; i++) {
    $(".it-is").style.color = w;
    $(".it-is").style.textShadow = ts;
    $(".oclock").style.color = w;
    $(".oclock").style.textShadow = ts;

    if (currentHour === i && currentMin < 40) {
      document.getElementById(`${i}`).style.color = w;
      document.getElementById(`${i}`).style.textShadow = ts;
    }

    if (currentMin >= 30 && currentMin < 40) {
      $(".half").style.color = w;
      $(".half").style.textShadow = ts;
      $(".past").style.color = w;
      $(".past").style.textShadow = ts;
    }
    if (currentMin >= 10 && currentMin < 30) {
      $(".ten").style.color = w;
      $(".ten").style.textShadow = ts;
      $(".minutes").style.color = w;
      $(".minutes").style.textShadow = ts;
      $(".past").style.color = w;
      $(".past").style.textShadow = ts;
    }
    if (currentMin >= 5 && currentMin < 10) {
      $(".five").style.color = w;
      $(".five").style.textShadow = ts;
      $(".minutes").style.color = w;
      $(".minutes").style.textShadow = ts;
      $(".past").style.color = w;
      $(".past").style.textShadow = ts;
    }
    if (currentMin >= 15 && currentMin < 20) {
      $(".quarter").style.color = w;
      $(".quarter").style.textShadow = ts;
      $(".past").style.color = w;
      $(".past").style.textShadow = ts;
    }
    if (currentMin >= 40 && currentMin < 45) {
      $(".twenty").style.color = w;
      $(".twenty").style.textShadow = ts;
      $(".to").style.color = w;
      $(".to").style.textShadow = ts;
      document.getElementById(`${nextHour}`).style.color = w;
      document.getElementById(`${nextHour}`).style.textShadow = ts;
    }

    if (currentMin >= 45) {
      $(".quarter").style.color = w;
      $(".quarter").style.textShadow = ts;
      $(".to").style.color = w;
      $(".to").style.textShadow = ts;
      document.getElementById(`${nextHour}`).style.color = w;
      document.getElementById(`${nextHour}`).style.textShadow = ts;
    }
  }
}

setInterval(function () {
  getCurrentTime();
}, 1000);
