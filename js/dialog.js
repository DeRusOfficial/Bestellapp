function renderCartAtModal(tableBody, mealDataLS) {
    for (let i = 0; i < mealDataLS.length; i++) {
        if (mealDataLS[i].amount !== 0) {
            tableBody.innerHTML += returnCartTemplateAtModal(mealDataLS, i);
        }
    }
}

function makeOrder() {
    let mealDataLS = getMealFromLocalStorage();
    mealsDatabase = mealDataLS;
    clearCart(mealsDatabase);
    tableHead.innerHTML = '';
    tableBody.innerHTML = '';
    tableBody.innerHTML = '<p>Ihre Bestellung wurde aufgegeben und wird in kürze bearbeitet. Wir danken Ihnen vielmals und wünschen Ihnen noch einen angenehmen Tag!</p>';
    orderBtn.classList.add('btn-blocked');
    orderBtn.disable = true;
    init();
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