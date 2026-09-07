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
})



const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const productStock = document.querySelector("#productStock");

const productDescription = document.querySelector("#productDescription");

const productImage = document.querySelector("#productImage");

async function getCrop() {

    try {
    
    const response = await fetch("https://dummyjson.com/products/1");
        console.log(response.status);
        
if (!response.ok) {
    throw new Error("Failed to fetch product");
}
    const data = await response.json();

    productImage.src = data.thumbnail;
    
productName.textContent = "Product: " + data.title;
productPrice.textContent = "Price: " + data.price;
productStock.textContent = "Stock: " + data.stock;
    
    productDescription.textContent = "Description: " + data.description;
    
console.log("Title:", data.title);
console.log("Price:", data.price);
console.log("Stock:", data.stock);

    } catch (error) {

        console.log("Something went wrong:", error);

    }
}  

getCrop(); 

const order = {
    product: "Grapes",
    quantity: 20
};

fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
    })
.then(response => response.json())
.then(data => {
    console.log("New ID:", data.id);
    console.log("Full response:", data);
});

const orderForm = document.querySelector("#orderForm");
const orderProduct = document.querySelector("#orderProduct");
const orderQuantity = document.querySelector("#orderQuantity");
const orderResult = document.querySelector("#orderResult");

orderForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const product = orderProduct.value;
    const quantity = Number(orderQuantity.value);

    const order = {
        product: product,
        quantity: quantity
    };

    try {

        const response = await fetch("https://hook.us1.make.com/ik63kgc88wf5z8dk6fw42r73n3bmtuyb", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
});

console.log("Webhook status:", response.status);

if (!response.ok) {
    throw new Error("Webhook request failed");
}

orderResult.textContent = "Order sent to Make.com successfully!";
