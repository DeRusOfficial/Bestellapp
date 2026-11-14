function returnMealTemplate(i) {
    return `
        <div class="meals__card">
            <div class="meals__card_img">
                <img loading="lazy" src="${mealsDatabase[i].img}" alt="${mealsDatabase[i].img}">
            </div>
            <div class="meals__card_content">
                <h3 class="meals__card_content-header">${mealsDatabase[i].name}</h3>
                <div class="meals__card_content-category">${mealsDatabase[i].category}</div>
                <div class="meals__card_content-price">${mealsDatabase[i].price}</div>
                <div class="meals__card_content-descr">${mealsDatabase[i].description}</div>
            </div>
            <button><img src="./assets/icons/counter/plus.svg" alt="Button als Plus-Bild" onclick="addToCart(${i})"></button>
        </div>
    `;
}

function returnCartTemplate(mealData, i) {
    return `
        <div class="card__positions_meal">
            <div class="card__positions_meal-details">
                <p class="meal-name">${mealsDatabase[i].name}</p>
                <p class="meal-price">${mealsDatabase[i].price}</p>
            </div>
            <div class="card__positions_meal-count">
                <button><img src="./assets/icons/counter/minus.svg" alt="Weniger"></button>
                <p>${mealData[i].amount}</p>
                <button><img src="./assets/icons/counter/plus.svg" alt="Mehr"></button>
            </div>
            <button class="card__positions_meal-bin" role="button">
                <img src="./assets/icons/bin.svg" alt="Mülltonne">
            </button>
        </div>
    `;
}