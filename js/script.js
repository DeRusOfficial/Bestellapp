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
    let mealData = getMealFromLocalStorage();
    if (!cartField.innerHTML.includes(mealData[i].name)) {
        mealsDatabase[i].amount++;
        saveMealsAtLS();
        mealData = getMealFromLocalStorage();
        cartField.innerHTML += returnCartTemplate(mealData, i);
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
    if (mealsDatabase[i].amount > 1) {
        mealsDatabase[i].amount--;
        saveMealsAtLS();
        loadAmountOfMeal(i);
    }
}

function addAmount(i) {
    mealsDatabase[i].amount++;
    saveMealsAtLS();
    loadAmountOfMeal(i);
}

function deletePosition(i) {
    mealsDatabase[i].amount = 0;
    saveMealsAtLS();
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