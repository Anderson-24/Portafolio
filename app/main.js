AOS.init();
window.onload = init;

function init() {
  let elements = document.getElementsByClassName("container-section");
  let size = window.screen.width;
  if (size <= 1500) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("container");
      elements[i].classList.add("container-fluid");
    }
  } else {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("container");
      elements[i].classList.remove("container-fluid");
    }
  }
}

function linkPosition(e) {
  debugger;
  removeClass();
  e.classList.add("active");
}

function removeClass() {
  const listElement = document.getElementsByClassName("nav-link");
  for (let i = 0; i < listElement.length; i++) {
    const element = listElement[i];
    element.classList.remove("active");
  }
}
