let toggleBtn = document.querySelector(".menu__toggle");
let mealsContent = document.getElementById("meals");

function toggleBg() {
  toggleBtn.classList.toggle("toggle");
}

loadMeals()

function loadMeals() {
    for (let i = 0; i < mealsDatabase.length; i++) {
        mealsContent.innerHTML += getMealTemplate(i)
    }

}


