function renderCartAtModal(tableBody, mealDataLS) {
    let totalCosts = calculateTotalCosts(mealDataLS);
    modalSum.innerHTML = totalCosts.toFixed(2) + ' EURO';
    for (let i = 0; i < mealDataLS.length; i++) {
        if (mealDataLS[i].amount !== 0) {
            tableBody.innerHTML += returnCartTemplateAtModal(mealDataLS, i);
        }
    }
}

function makeOrder() {
    let mealDataLS = getMealFromLocalStorage();
    mealsDatabase = mealDataLS;
    feedbackAfterOrder();
    clearCart(mealsDatabase);
    init();
}

function feedbackAfterOrder() {
    tableHead.innerHTML = '';
    tableBody.innerHTML = '';
    modalSum.innerHTML = '';
    tableBody.innerHTML = '<p>Ihre Bestellung wurde aufgegeben und wird in kürze bearbeitet. Wir danken Ihnen vielmals und wünschen Ihnen noch einen angenehmen Tag!</p>';
    orderBtn.classList.add('btn-blocked');
    orderBtn.disable = true;
}

function clearCart(mealsDatabase) {
    for (let i = 0; i < mealsDatabase.length; i++) {
        if (mealsDatabase[i].amount > 0) {
            mealsDatabase[i].amount = 0
            saveMealsAtLS();
            document.getElementById(`position-${mealsDatabase[i].name}`).remove();
            showTotalCosts();
        }
    }
}

function openDialog() {
    let mealDataLS = getMealFromLocalStorage();
    tableBody.innerHTML = ``;
    renderCartAtModal(tableBody, mealDataLS);      
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
    orderBtn.classList.remove('btn-blocked');
    orderBtn.disable = false;
}