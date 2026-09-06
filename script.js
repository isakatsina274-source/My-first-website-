const button = document.querySelector("#contactButton");
const heading = document.querySelector(".title");
const message = document.querySelector("p");
const subtitle = document.querySelector(".subtitle");

let clicked = false;

function changeHeading() {
    heading.textContent = "Welcome to My World!";
}
function changeMessage() {
    message.textContent = "You just changed this webpage with JavaScript!";
}
function changeSubtitle() {
    subtitle.textContent = "I am becoming a frontend developer!";
}
function resetHeading() {
    heading.textContent = "Welcome to Isa’s Website";
}
function resetMessage() {
    message.textContent = "Click the button to change the page!";
}

function resetSubtitle() {
    subtitle.textContent = "My First Project";
}
button.addEventListener("click", function () {

 if (clicked === false) {
    changeHeading();
    changeMessage();
  changeSubtitle();
     clicked = true;
} else {
     resetHeading();
       resetMessage();
        resetSubtitle();  
        clicked = false;
    }
});
