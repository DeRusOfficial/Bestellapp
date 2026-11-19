let toggleBtn = document.querySelector(".menu__toggle");
let whiteTheme = document.getElementsByClassName('whiteTheme');
let cardWhiteTheme = document.getElementsByClassName('cardWhiteTheme');

let orderBtn = document.getElementById('orderBtn');
let dialogBtn = document.getElementById('dialogBtn');

let mealsField = document.getElementById("mealsField");
let cartSection = document.getElementById("cartSection");
let cartField = document.getElementById("cartField");
let openCartBtn = document.getElementById("openCartBtn");
let closeCartBtn = document.getElementById("closeCartBtn");
let sideCart = document.getElementById("sideCart");

let sumField = document.getElementById('sum');
let taxField = document.getElementById('tax');
let deliveryCost = 5;

let dialog = document.getElementById('dialog');
let tableHead = document.getElementById('tableHead');
let tableBody = document.getElementById('tableBody');
let modalSum = document.getElementById('modalSum');



function init() {
    if (localStorage.getItem('mealsDatabaseAtLS') === null) {
        firstLoad();
    } else {
        loadAllMeals();
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