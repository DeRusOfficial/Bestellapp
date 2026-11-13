let toggleBtn = document.querySelector(".menu__toggle");
let mealsField = document.getElementById("mealsField");

function toggleBg() {
    toggleBtn.classList.toggle("toggle");
}

loadMeals()

function loadMeals() {
    for (let i = 0; i < mealsDatabase.length; i++) {
        mealsField.innerHTML += getMealTemplate(i)
    }

}


