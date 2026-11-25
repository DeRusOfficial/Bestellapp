let toggleBtn = document.querySelector(".menu__toggle");
let whiteTheme = document.getElementsByClassName('whiteTheme');
let cardWhiteTheme = document.getElementsByClassName('cardWhiteTheme');

let orderBtn = document.getElementById('orderBtn');

let mealsField = document.getElementById("mealsField");
let cartSection = document.getElementById("cartSection");
let cartField = document.getElementById("cartField");
let openCartBtn = document.getElementById("openCartBtn");
let closeCartBtn = document.getElementById("closeCartBtn");
let sideCart = document.getElementById("sideCart");

let totalAmount = document.getElementById('totalAmount');
let sumField = document.getElementById('sum');
let taxField = document.getElementById('tax');
let deliveryCost = 5;

let dialog = document.getElementById('dialog');



function init() {
    closeCart();
    if (localStorage.getItem('mealsDatabaseAtLS') === null) {
        firstLoad();
    } else {
        loadAllMeals();
        showTotalMealAmount();
        showTotalCosts();
        renderCart();
    }
}

function firstLoad() {
    saveMealsAtLS();
    loadAllMeals();
    showTotalCosts();
}

function saveMealsAtLS() {
    localStorage.setItem('mealsDatabaseAtLS', JSON.stringify(mealsDatabase))
}

function getMealFromLocalStorage() {
    return JSON.parse(localStorage.mealsDatabaseAtLS)
}