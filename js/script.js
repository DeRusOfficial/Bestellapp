let toggleBtn = document.querySelector(".menu__toggle");
let mealsField = document.getElementById("mealsField");
let cartField = document.getElementById("cartField");
let deliveryCost = 5;
let dialog = document.getElementById('dialog');

function toggleBg() {
    toggleBtn.classList.toggle("toggle");
}



function init() {
    loadAllMeals();
    showTotalCosts();
    if (localStorage.getItem('mealsDatabaseAtLS') === null) {
        saveMealsAtLS();
    } else {
        renderCart();
    }
}

function renderCart() {
    let mealDataLS = getMealFromLocalStorage();
    for (let i = 0; i < mealDataLS.length; i++) {
        if (mealDataLS[i].amount !== 0) {
            cartField.innerHTML += returnCartTemplate(mealDataLS, i);
        }
    }
}

function saveMealsAtLS() {
    localStorage.setItem('mealsDatabaseAtLS', JSON.stringify(mealsDatabase))
}

function getMealFromLocalStorage() {
    return JSON.parse(localStorage.mealsDatabaseAtLS)
}