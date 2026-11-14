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
    let mealData = getMealFromLocalStorage();
    for (let i = 0; i < mealData.length; i++) {
        if (mealData[i].amount !== 0) {
            cartField.innerHTML += returnCartTemplate(mealData, i);
        }
    }
}

function addToCart(i) {
    let mealData = getMealFromLocalStorage();
    if (!cartField.innerHTML.includes(mealData[i].name)) {
        mealsDatabase[i].amount++;
        saveMealsAtLS();
        mealData = getMealFromLocalStorage();
        cartField.innerHTML += returnCartTemplate(mealData, i);
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
        let mealData = getMealFromLocalStorage();
        mealsDatabase[i].amount = mealData[i].amount;
        mealsDatabase[i].amount--;
        saveMealsAtLS();
        loadAmountOfMeal(i);
    }
    showTotalCosts();
}

function addAmount(i) {
    let mealData = getMealFromLocalStorage();
    mealsDatabase[i].amount = mealData[i].amount;
    mealsDatabase[i].amount++;
    saveMealsAtLS();
    loadAmountOfMeal(i);
    showTotalCosts();
}

function deletePosition(i) {
    mealsDatabase[i].amount = 0;
    saveMealsAtLS();
    let mealData = getMealFromLocalStorage();
    document.getElementById(`position-${mealData[i].name}`).remove();
    showTotalCosts();
}

function showTotalCosts() {
    let sumField = document.getElementById('sum');
    let taxField = document.getElementById('tax');
    let mealData = getMealFromLocalStorage();
    totalCosts = calculateTotalCosts(mealData);
    taxes = calculateTaxes(totalCosts);
    sumField.innerHTML = totalCosts.toFixed(2) + ' EURO';
    taxField.innerHTML = taxes.toFixed(2) + ' EURO';
}

function calculateTotalCosts(mealData) {
    let totalCosts = 0;
    for (let i = 0; i < mealData.length; i++) {
        if (mealData[i].amount !== 0) {
            totalCosts = totalCosts + mealData[i].amount * parseFloat(mealData[i].price);
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
    let mealData = getMealFromLocalStorage();
    let amountId = document.getElementById(`amountId-${i}`);
    return amountId.innerHTML = mealData[i].amount;
}

function saveMealsAtLS() {
    localStorage.setItem('mealsDatabaseAtLS', JSON.stringify(mealsDatabase))
}

function getMealFromLocalStorage() {
    return JSON.parse(localStorage.mealsDatabaseAtLS)
}