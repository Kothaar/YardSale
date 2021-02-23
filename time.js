var display = document.createElement('div');
display.style.display = 'inline-block';
display.style.margin = 'auto';
window.onload = displayClock();
function displayClock(){
  var disp = document.getElementById("time");
  display.innerHTML = new Date().toLocaleTimeString();
  disp.appendChild(display);
  setTimeout(displayClock, 1000); 
}