// clock.js


// Randomizer
function getRandomNumber(min, max) {
  // Generate a random number between 0 and 1
  const randomFraction = Math.random();

  // Scale the random number to fit the desired range
  const randomNumber = min + randomFraction * (max - min);

  // Use Math.floor to round down to the nearest integer
  return Math.floor(randomNumber);
}


//Randomiz the Digits
function randomiz() {
  // Hiermit greifen wir auf das HTML-Element mit der ID "mainFrame" zu
  var meinElement = document.getElementById('mainFrame');
  var computedStyle = window.getComputedStyle(meinElement);
  var hoeheString  = computedStyle.getPropertyValue('height');

  var height = parseInt(hoeheString);


  hoursDigitOne.style.fontSize = getRandomNumber((height * 1.5) - 2, (height * 1.5) + 2) + "px";
  hoursDigitOne.style.marginRight = "-" + getRandomNumber(4, 8) + "px";
  hoursDigitOne.style.color = "rgba(0, 168, 180, 0.7)";
  hoursDigitOne.style.transform = "rotate(" + getRandomNumber(-8, 8) + "deg)";

  hoursDigitTwo.style.fontSize = getRandomNumber((height * 1.5) - 2, (height * 1.5) + 2) + "px";
  hoursDigitTwo.style.marginRight = "-" + getRandomNumber(4, 8) + "px";
  hoursDigitTwo.style.color = "rgba(54, 234, 245, 0.7)";
  hoursDigitTwo.style.transform = "rotate(" + getRandomNumber(-8, 8) + "deg)";


  delimiter.style.fontSize = getRandomNumber((height * 1.5) - 2, (height * 1.5) + 2) + "px";
  delimiter.style.marginRight = "-" + getRandomNumber(4, 8) + "px";
  delimiter.style.color = "rgba(200, 200, 200, 0.9)"
  delimiter.style.transform = "rotate(" + getRandomNumber(-8, 8) + "deg)";


  minutesDigitOne.style.fontSize = getRandomNumber((height * 1.5) - 2, (height * 1.5) + 2) + "px";
  minutesDigitOne.style.marginRight = "-" + getRandomNumber(4, 8) + "px";
  minutesDigitOne.style.color = "rgba(0, 168, 180, 0.7)";
  minutesDigitOne.style.transform = "rotate(" + getRandomNumber(-8, 8) + "deg)";

  minutesDigitTwo.style.fontSize = getRandomNumber((height * 1.5) - 2, (height * 1.5) + 2) + "px";
  minutesDigitTwo.style.marginRight = "-" + getRandomNumber(4, 8) + "px";
  minutesDigitTwo.style.color = "rgba(54, 234, 245, 0.7)";
  minutesDigitTwo.style.transform = "rotate(" + getRandomNumber(-8, 8) + "deg)";
}


// Function to print the current time on the clock
function clockPrint() {
  // Get the current time and convert it into separate variables for hours and minutes
  var timeNow = new Date();
  var hours = timeNow.getHours();
  var minutes = timeNow.getMinutes();

  // Add a leading zero if the digit is less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Convert the time variables to arrays
  const hoursDigit = Array.from(String(hours));
  const minutesDigit = Array.from(String(minutes));


  // Randomiz the Digits
  var hoursElementOne = document.getElementById("hoursDigitOne");
  var hoursDigitOneOld = hoursElementOne.textContent;

  var hoursElementTwo = document.getElementById("hoursDigitTwo");
  var hoursDigitTwoOld = hoursElementTwo.textContent;

  var minutesElementOne = document.getElementById("minutesDigitOne");
  var minutesDigitOneOld = minutesElementOne.textContent;

  var minutesElementTwo = document.getElementById("minutesDigitTwo");
  var minutesDigitTwoOld = minutesElementTwo.textContent;


  if (String(hoursDigitOneOld) !== String(hoursDigit[0])) {
    randomiz();
  }

  if (String(hoursDigitTwoOld) !== String(hoursDigit[1])) {
    randomiz();
  }

  if (String(minutesDigitOneOld) !== String(minutesDigit[0])) {
    randomiz();
  }

  if (String(minutesDigitTwoOld) !== String(minutesDigit[1])) {
    randomiz();
  }


  // Output to the HTML document
  document.getElementById("hoursDigitOne").innerHTML = hoursDigit[0];
  document.getElementById("hoursDigitTwo").innerHTML = hoursDigit[1];

  document.getElementById("minutesDigitOne").innerHTML = minutesDigit[0];
  document.getElementById("minutesDigitTwo").innerHTML = minutesDigit[1];

  // Output to the Console
  console.log("Current time: " + hours + ":" + minutes);
}

// Update the clock every second
setInterval(clockPrint, 1000);

// Initial call to display the current time immediately
clockPrint();
