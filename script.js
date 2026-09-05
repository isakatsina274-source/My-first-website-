const button = document.querySelector("button");
const heading = document.querySelector(".title");
const message = document.querySelector("p");

let clicked = false;

button.addEventListener("click", function () {
 if (clicked === false) {
    heading.textContent = "Welcome to My World!";
    message.textContent = "You just changed this webpage with JavaScript!";
     clicked = true;
} else {
     heading.textContent = "Welcome to Isa’s Website";
        message.textContent = "Click the button to change the page!";
        clicked = false;
    }
});
