const button = document.querySelector("button");
const heading = document.querySelector(".title");
const message = document.querySelector("p");

button.addEventListener("click", function () {
    heading.textContent = "Welcome to My World!";
    message.textContent = "You just changed this webpage with JavaScript!";
});
