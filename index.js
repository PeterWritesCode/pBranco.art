

var draggable = document.getElementById('grab1');
var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

draggable.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseDown(e) {
  e.preventDefault();
  
  posX = e.clientX - draggable.offsetLeft;
  posY = e.clientY - draggable.offsetTop;
  window.addEventListener('mousemove', moveElement, false);
  return false;  
}

function mouseUp() {
  draggable.classList.remove("dragging");
  window.removeEventListener('mousemove', moveElement, false);
  e=undefined;
}

function moveElement(e) {
  draggable.classList.add("dragging");
  mouseX = e.clientX - posX;
  mouseY = e.clientY - posY;
  if(mouseX>(-window.innerWidth/2) && mouseX<(window.innerWidth/2) && mouseY>(0-window.innerHeight*0.1)){
    draggable.style.left = mouseX + 'px';
    draggable.style.top = mouseY + 'px';
  }

  return false;
}

var myFullpage = new fullpage('#fullpage', {
    verticalCentered: true,
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE']
});


