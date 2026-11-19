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


function openCart() {
    cartSection.classList.add('show-flex');
    cartSection.classList.remove('not-shown');
    openCartBtn.classList.add('not-shown');
    closeCartBtn.classList.remove('not-shown');
}

function closeCart() {
    cartSection.classList.add('not-shown');
    cartSection.classList.remove('show-flex');
    openCartBtn.classList.remove('not-shown');
    closeCartBtn.classList.add('not-shown');
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
    let mealDataLS = getMealFromLocalStorage();
    let totalCosts = calculateTotalCosts(mealDataLS);
    let taxes = calculateTaxes(totalCosts);
    proofCostsForDelivery(totalCosts);
    sumField.innerHTML = totalCosts.toFixed(2) + ' EURO';
    taxField.innerHTML = taxes.toFixed(2) + ' EURO';
}

function proofCostsForDelivery(totalCosts) {
    if (totalCosts > 25) {
        dialogBtn.classList.remove('btn-blocked');
        dialogBtn.disabled = false;
    } else {
        dialogBtn.classList.add('btn-blocked');
        dialogBtn.disabled = true;
    }
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

function toggleBg() {
    let arrWhiteTheme = makeThemeArr();
    let arrCardTheme = makeCardThemeArr();
    toggleBtn.classList.toggle('toggle');
    arrWhiteTheme.forEach((element) => {
        element.classList.toggle('darkTheme');
    });
    arrCardTheme.forEach((element) => {
        element.classList.toggle('cardDarkTheme');
    });
}

function makeThemeArr() {
    const whiteThemeArray = [];
    for (let i = 0; i < whiteTheme.length; i++) {
        whiteThemeArray.push(whiteTheme[i])
    }
    return whiteThemeArray
}

function makeCardThemeArr() {
    const cardWhiteThemeArray = [];
    for (let i = 0; i < cardWhiteTheme.length; i++) {
        cardWhiteThemeArray.push(cardWhiteTheme[i])
    }
    return cardWhiteThemeArray
}