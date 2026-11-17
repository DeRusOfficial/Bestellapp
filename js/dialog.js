function renderCartAtModal(modal, mealDataLS) {
    for (let i = 0; i < mealDataLS.length; i++) {
        if (mealDataLS[i].amount !== 0) {
            modal.innerHTML += returnCartTemplateAtModal(mealDataLS, i);
        }
    }
}

function makeOrder() {
    let modal = document.getElementById('modalContent');
    let mealDataLS = getMealFromLocalStorage();
    mealsDatabase = mealDataLS;
    clearCart(mealsDatabase);
    modal.innerHTML = '';
    modal.innerHTML = '<p>Ihre Bestellung wurde aufgegeben</p>';
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
    let modal = document.getElementById('modalContent');
    let mealDataLS = getMealFromLocalStorage();
    modal.innerHTML = ``;
    renderCartAtModal(modal, mealDataLS);
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}