const button = document.querySelector("button");
const heading = document.querySelector(".title");
const message = document.querySelector("p");
let clicked = false;
button.addEventListener("click", function () {
    heading.textContent = "Welcome to My World!";
    message.textContent = "You just changed this webpage with JavaScript!";
});
