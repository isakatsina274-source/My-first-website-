const button = document.querySelector("#contactButton");
const heading = document.querySelector(".title");
const message = document.querySelector("p");
const subtitle = document.querySelector(".subtitle");

let clicked = false;

function changeHeading(text) {
    heading.textContent = text;
}

function changeMessage(text) {
    message.textContent = text;
}

function changeSubtitle(text) {
    subtitle.textContent = text;
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
        changeHeading("Welcome to My World!");
        changeMessage("You just changed this webpage with JavaScript!");
        changeSubtitle("I am becoming a frontend developer!");
        clicked = true;

    } else {
        resetHeading();
        resetMessage();
        resetSubtitle();
        clicked = false;
        }
});

async function getCrop() {

    const response = await fetch("https://dummyjson.com/products/1");

    const data = await response.json();

    console.log(data.title);
}

getCrop();

