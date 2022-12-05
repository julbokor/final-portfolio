// COGS3 Thursday JS Quiz 11/4 //

// element.addEventListener("click", function);
const alertButton = document.querySelector('.box-2');

function myAlert (){
    alert('I love JavaScript!');
};

alertButton.addEventListener("click", myAlert);

//Mouseover - change the style of the background
const mysteryButton = document.querySelector('.box-3');

function myMystery (){
    mysteryButton.style.fontSize = "4rem";
    mysteryButton.style.color = "green";
};

mysteryButton.addEventListener("mouseover", myMystery); 
