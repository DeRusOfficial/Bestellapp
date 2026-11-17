let toggleBtn = document.querySelector(".menu__toggle");
let orderBtn = document.getElementById('orderBtn');
let dialogBtn = document.getElementById('dialogBtn');

let mealsField = document.getElementById("mealsField");
let cartField = document.getElementById("cartField");

let sumField = document.getElementById('sum');
let taxField = document.getElementById('tax');
let deliveryCost = 5;

let dialog = document.getElementById('dialog');
let tableHead = document.getElementById('tableHead');
let tableBody = document.getElementById('tableBody');



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

function saveMealsAtLS() {
    localStorage.setItem('mealsDatabaseAtLS', JSON.stringify(mealsDatabase))
}

function getMealFromLocalStorage() {
    return JSON.parse(localStorage.mealsDatabaseAtLS)
}