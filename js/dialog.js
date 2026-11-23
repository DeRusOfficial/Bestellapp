function openDialog() { 
    dialog.innerHTML = ``;
    dialog.innerHTML = `<p>Wir danken für Ihre Bestellung! Diese wird in Kürze bearbeitet und an Ihre Adresse zugestellt.</p>`;
    dialog.showModal();
    setTimeout(() => {
        closeDialog() 
    }, 3000)
}

function closeDialog() {
    let mealDataLS = getMealFromLocalStorage();
    mealsDatabase = mealDataLS;
    clearCart(mealsDatabase);
    dialog.close();
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