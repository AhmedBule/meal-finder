const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeaeding = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal'),


//Search Meal and fetch from api

function searchMeal(e) {
    e.preventDefault();

    //Clear single meal
    single_mealEl.innerHTML = '';

    //Get seach term
    const term = search.value

    //Check for empty 
    if (term.trim()) {

    } else {
        alert("Please enter a seach term")
    }

};

console.log(term)

// Event Listener
submit.addEventListener('submit', searchMeal);