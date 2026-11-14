let toggleBtn = document.querySelector(".menu__toggle");
let mealsField = document.getElementById("mealsField");
let cartField = document.getElementById("cartField");

function toggleBg() {
    toggleBtn.classList.toggle("toggle");
}

loadMeals()

function loadMeals() {
    for (let i = 0; i < mealsDatabase.length; i++) {
        mealsField.innerHTML += returnMealTemplate(i)
    }
}

loadCart()

function loadCart() {
    for (let i = 0; i < mealsDatabase.length; i++) {
        if (mealsDatabase[i].amount !== 0) {
            cartField.innerHTML += returnCartTemplate(i)
        }
    }
}