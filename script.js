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

const orderForm = document.querySelector("#orderForm");

const customerName = document.querySelector("#customerName");
const customerPhone = document.querySelector("#customerPhone");
const orderProduct = document.querySelector("#orderProduct");
const orderQuantity = document.querySelector("#orderQuantity");
const orderResult = document.querySelector("#orderResult");

const orderPrice = document.querySelector("#orderPrice");
const orderTotal = document.querySelector("#orderTotal");

orderForm.addEventListener("submit", async function(event) {

    event.preventDefault();
const name = customerName.value;
const phone = customerPhone.value;
const product = orderProduct.value;
const quantity = Number(orderQuantity.value);
const price = Number(orderPrice.value);

const total = quantity * price;

orderTotal.textContent = "Total: ₦" + total;

    const order = {
    name: name,
    phone: phone,
    product: product,
    quantity: quantity,
    price: price,
    total: total
};
    
console.log("Order being sent:", order);
    
    try {

        const response = await fetch("https://hook.us1.make.com/9p36fjbyewqprbf5mognxsnkftmb734l", {
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

    } catch (error) {

        console.log("Error:", error);
        orderResult.textContent = "Something went wrong.";

    }

});

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const searchResults = document.querySelector("#searchResults");

searchButton.addEventListener("click", async function() {

    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        searchResults.textContent = "Please enter a product.";
        return;
    }

    try {

        const response = await fetch(
            "https://dummyjson.com/products/search?q=" + searchTerm
        );

        const data = await response.json();

        console.log("Search results:", data);

    } catch (error) {

        console.log("Search error:", error);

    }

});
https://dummyjson.com/products/search?q=phone&limit=5
