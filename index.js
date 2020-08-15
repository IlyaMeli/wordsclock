let $ = (selector) => document.querySelector(selector);
let $$ = (selector) => document.querySelectorAll(selector);
let GEID = (selector) => document.getElementById(selector);
let shine = "text-shadow: 0px 0px 6px #FFFFFF; color: white";
let rShine = "text-shadow: 0px 0px 0px #000000; color: rgb(30, 30, 30);";
function getCurrentTime() {
  let date = new Date();
  let hour = date.getHours() % 12 || 12;
  let minutes = date.getMinutes();
  hour === 12 ? (nextHour = 1) : (nextHour = hour + 1);
  // console.log(`Current time is ${hour}:${minutes}`);
  for (let i = 1; i < 13; i++) {
    $(".it-is").style.cssText = shine;
    $(".oclock").style.cssText = shine;
    if (hour === i && minutes < 40) {
      GEID(`${i}`).style.cssText = shine;
    }
    if (minutes >= 5 && minutes < 40) {
      $(".past").style.cssText = shine;
    }
    if (minutes >= 30 && minutes < 40) {
      $(".half").style.cssText = shine;
    }
    if ((minutes >= 10 && minutes < 15) || (minutes >= 50 && minutes < 55)) {
      $(".ten").style.cssText = shine;
    }

    if (
      (minutes >= 5 && minutes < 15) ||
      (minutes >= 20 && minutes < 30) ||
      (minutes >= 40 && minutes < 45) ||
      minutes >= 50
    ) {
      $(".minutes").style.cssText = shine;
    }
    if (
      (minutes >= 5 && minutes < 10) ||
      minutes >= 55 ||
      (minutes >= 25 && minutes < 30)
    ) {
      $(".five").style.cssText = shine;
    }
    if ((minutes >= 15 && minutes < 20) || (minutes >= 45 && minutes < 50)) {
      $(".quarter").style.cssText = shine;
    }
    if (minutes >= 40) {
      $(".to").style.cssText = shine;
    }
    if ((minutes >= 40 && minutes < 45) || (minutes >= 20 && minutes < 30)) {
      $(".twenty").style.cssText = shine;
    }
    if (minutes >= 40) {
      GEID(`${nextHour}`).style.cssText = shine;
    }
  }
}

function removeStyle(className) {
  $$(className).forEach((el) => (el.style.cssText = rShine));
}

setInterval(function () {
  removeStyle(".number");
  removeStyle(".words");
  getCurrentTime();
}, 1000);
