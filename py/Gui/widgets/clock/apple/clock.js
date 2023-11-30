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


//
function randomiz(element) {

  const fontSize = getRandomNumber(95, 105);
  const marginRight = getRandomNumber(0, 8);
  const color = "rgba(0, 128, 255, 0.7)";
  const rotation = getRandomNumber(-8, 8);

  console.log(fontSize);
    console.log(marginRight);
      console.log(color);
        console.log(rotation);

  hoursDigitOne.style.fontSize = fontSize + "px";
  hoursDigitOne.style.marginRight = "-" + marginRight + "px";
  hoursDigitOne.style.color = color
  hoursDigitOne.style.transform = "rotate(" + rotation + "deg)";

  // Output to the Console
  console.log("Test");
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

  // Output to the HTML document
  document.getElementById("hoursDigitOne").innerHTML = hoursDigit[0];
  document.getElementById("hoursDigitTwo").innerHTML = hoursDigit[1];

  document.getElementById("minutesDigitOne").innerHTML = minutesDigit[0];
  document.getElementById("minutesDigitTwo").innerHTML = minutesDigit[1];

  // Randomiz the Digits
  randomiz();

  // Output to the Console
  console.log("Current time: " + hours + ":" + minutes);
}

// Update the clock every second
setInterval(clockPrint, 60000);

// Initial call to display the current time immediately
clockPrint();
