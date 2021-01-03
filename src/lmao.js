// Set the date we're counting down to
var countDownDate = new Date("Oct 8, 2021 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var daysInflection = ["DNÍ", "DNY", "DEN"];
  var hoursInflection = ["HODIN", "HODINY", "HODINA"];
  var minutesInflection = ["MINUT", "MINUTY", "MINUTA"];
  var secondsInflection = ["SEKUND", "SEKUNDY", "SEKUNDA"];
    
  var daysWord;
  var hoursWord;
  var minutesWord;
  var secondsWord;

  var space = " ";
  var newline = "<br/>";

  switch(days) {
    case 0:
      daysWord = daysInflection[0];
      break;
    case 1:
      daysWord = daysInflection[2];
      break;
    case 2:
      daysWord = daysInflection[1];
      break;
    case 3:
      daysWord = daysInflection[1];
      break;
    case 4:
      daysWord = daysInflection[1];
      break;
    default:
      daysWord = daysInflection[0];
  }

  switch(hours) {
    case 1:
      hoursWord = hoursInflection[2];
      break;
    case 2:
      hoursWord = hoursInflection[1];
      break;
    case 3:
      hoursWord = hoursInflection[1];
      break;
    case 4:
      hoursWord = hoursInflection[1];
      break;
    default:
      hoursWord = hoursInflection[0];
  }

  switch(minutes) {
    case 1:
      minutesWord = minutesInflection[2];
      break;
    case 2:
      minutesWord = minutesInflection[1];
      break;
    case 3:
      minutesWord = minutesInflection[1];
      break;
    case 4:
      minutesWord = minutesInflection[1];
      break;
    default:
      minutesWord = minutesInflection[0];
  }

  switch(seconds) {
    case 1:
      secondsWord = secondsInflection[2];
      break;
    case 2:
      secondsWord = secondsInflection[1];
      break;
    case 3:
      secondsWord = secondsInflection[1];
      break;
    case 4:
      secondsWord = secondsInflection[1];
      break;
    default:
      secondsWord = secondsInflection[0];
  }

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + space + daysWord + newline + hours + space + hoursWord + newline + minutes + space + minutesWord + newline + seconds + space + secondsWord;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Jdi volit!";
  }
}, 1000);