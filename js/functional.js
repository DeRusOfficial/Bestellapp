function loadAllMeals() {
    mealsField.innerHTML = '';
    for (let i = 0; i < mealsDatabase.length; i++) {
        mealsField.innerHTML += returnMealTemplate(i)
    }
}

function filterMeals(filter) {
    mealsField.innerHTML = '';
    for (let i = 0; i < mealsDatabase.length; i++) {
        if (mealsDatabase[i].category === filter)
            mealsField.innerHTML += returnMealTemplate(i);
    }
}

function addToCart(i) {
    let mealDataLS = getMealFromLocalStorage();
    if (!cartField.innerHTML.includes(mealDataLS[i].name)) {
        mealsDatabase = mealDataLS;
        mealsDatabase[i].amount++;
        saveMealsAtLS();
        cartField.innerHTML += returnCartTemplate(mealsDatabase, i);
        showTotalCosts();
    } else {
        addAmount(i);
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

function loadAmountOfMeal(i) {
    let mealDataLS = getMealFromLocalStorage();
    let amountId = document.getElementById(`amountId-${i}`);
    return amountId.innerHTML = mealDataLS[i].amount;
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