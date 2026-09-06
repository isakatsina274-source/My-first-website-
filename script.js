const button = document.querySelector("#contactButton");
const heading = document.querySelector(".title");
const message = document.querySelector("p");
const subtitle = document.querySelector(".subtitle");

let clicked = false;

function changeHeading() {
    heading.textContent = "Welcome to My World!";
}

button.addEventListener("click", function () {

 changeHeading();
 
console.log(subtitle);

 
 
 if (clicked === false) {
    changeHeading();
    message.textContent = "You just changed this webpage with JavaScript!";
  subtitle.textContent = "I am becoming a frontend developer!";
     clicked = true;
} else {
     heading.textContent = "Welcome to Isa’s Website";
        message.textContent = "Click the button to change the page!";
  subtitle.textContent = "My First Project";
        clicked = false;
    }
});
