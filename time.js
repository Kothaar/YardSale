window.onload = displayClock();
function displayClock(){
  var disp = document.getElementById("time");
  var display = new Date().toLocaleTimeString();
  disp.innerHTML = display;
  setTimeout(displayClock, 1000); 
}