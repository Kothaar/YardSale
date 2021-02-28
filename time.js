var display = document.createElement('div');
display.style.display = 'inline-block';
display.style.margin = 'auto';
display.style.width = "100%";
window.onload = displayClock();
function displayClock(){
  var disp = document.getElementById("time");
  display.innerHTML = '<font size="100vw">'+new Date().toLocaleTimeString()+'</font>';
  disp.appendChild(display);
  setTimeout(displayClock, 1000); 
}