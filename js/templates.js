function getMealTemplate(i) {
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
            <button><img src="./assets/icons/counter/plus.svg" alt="Button als Plus-Bild"></button>
        </div>
    `;
}