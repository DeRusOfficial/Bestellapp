let toggleBtn = document.querySelector(".menu__toggle");
let mealsField = document.getElementById("mealsField");
let cartField = document.getElementById("cartField");
let deliveryCost = 5;

function toggleBg() {
    toggleBtn.classList.toggle("toggle");
}



function init() {
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

function addToCart(i) {
    let mealDataLS = getMealFromLocalStorage();
    if (!cartField.innerHTML.includes(mealDataLS[i].name)) {
        mealsDatabase[i].amount++;
        saveMealsAtLS();
        mealDataLS = getMealFromLocalStorage();
        cartField.innerHTML += returnCartTemplate(mealDataLS, i);
        showTotalCosts();
    } else {
        addAmount(i);
    }
}

loadMeals()

function loadMeals() {
    for (let i = 0; i < mealsDatabase.length; i++) {
        mealsField.innerHTML += returnMealTemplate(i)
    }
}

function subtractAmount(i) {
    if (mealsDatabase[i].amount === 1) {
        deletePosition(i);
    } else {
        let mealDataLS = getMealFromLocalStorage();
        mealsDatabase = mealDataLS;
        mealsDatabase[i].amount--;
        saveMealsAtLS();
        loadAmountOfMeal(i);
    }
    showTotalCosts();
}

function addAmount(i) {
    let mealDataLS = getMealFromLocalStorage();
    mealsDatabase = mealDataLS;
    mealsDatabase[i].amount++;
    saveMealsAtLS();
    loadAmountOfMeal(i);
    showTotalCosts();
}

function deletePosition(i) {
    let mealDataLS = getMealFromLocalStorage();
    mealsDatabase = mealDataLS;
    mealsDatabase[i].amount = 0;
    saveMealsAtLS();
    document.getElementById(`position-${mealsDatabase[i].name}`).remove();
    showTotalCosts();
}

function showTotalCosts() {
    let sumField = document.getElementById('sum');
    let taxField = document.getElementById('tax');
    let mealDataLS = getMealFromLocalStorage();
    totalCosts = calculateTotalCosts(mealDataLS);
    taxes = calculateTaxes(totalCosts);
    sumField.innerHTML = totalCosts.toFixed(2) + ' EURO';
    taxField.innerHTML = taxes.toFixed(2) + ' EURO';
}

function calculateTotalCosts(mealDataLS) {
    let totalCosts = 0;
    for (let i = 0; i < mealDataLS.length; i++) {
        if (mealDataLS[i].amount !== 0) {
            totalCosts = totalCosts + mealDataLS[i].amount * parseFloat(mealDataLS[i].price);
        }
    }
    totalCosts = totalCosts + deliveryCost;
    return totalCosts
}

function calculateTaxes(totalCosts) {
    let taxes = 0;
    taxes = totalCosts * 0.19;
    return taxes
}

function loadAmountOfMeal(i) {
    let mealDataLS = getMealFromLocalStorage();
    let amountId = document.getElementById(`amountId-${i}`);
    return amountId.innerHTML = mealDataLS[i].amount;
}

function saveMealsAtLS() {
    localStorage.setItem('mealsDatabaseAtLS', JSON.stringify(mealsDatabase))
}

function getMealFromLocalStorage() {
    return JSON.parse(localStorage.mealsDatabaseAtLS)
}