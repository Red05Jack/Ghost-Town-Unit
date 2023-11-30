// clock.js

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

  // Output to the Console
  console.log("Current time: " + hours + ":" + minutes);
}

// Update the clock every second
setInterval(clockPrint, 1000);

// Initial call to display the current time immediately
clockPrint();
