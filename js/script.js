let toggleBtn = document.querySelector(".menu__toggle");
let mealsField = document.getElementById("mealsField");
let cartField = document.getElementById("cartField");

function toggleBg() {
    toggleBtn.classList.toggle("toggle");
}



function init() {
    saveMealsAtLS();
}

function addToCart(i) {
    mealsDatabase[i].amount++;
    saveMealsAtLS();

    let mealData = getMealFromLocalStorage();
    cartField.innerHTML += returnCartTemplate(mealData, i)
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

function saveMealsAtLS() {
    localStorage.setItem('mealsDatabaseAtLS', JSON.stringify(mealsDatabase))
}

function getMealFromLocalStorage() {
    return JSON.parse(localStorage.mealsDatabaseAtLS)
}