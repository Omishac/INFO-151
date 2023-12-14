var mainNav = document.querySelector("#mainNav");
var signIn = document.querySelector("#signIn");
var burgerBtn = document.querySelector("#burger-container button");

var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");


var SeeMainNav = false;

function showNav() {
    console.log("button clicked");

    if (!SeeMainNav) {
        console.log("show menu");
        mainNav.classList.add("showMainNav");
        signIn.classList.add("showSignIn");
        SeeMainNav = true;

        burgerBars.classList.add("hide-burger-bars");

        burgerX.classList.remove("hide-burger-x");


    } else {
        console.log("hide menu");
        mainNav.classList.remove("showMainNav");
        signIn.classList.remove("showSignIn");


        burgerBars.classList.remove("hide-burger-bars");

        burgerX.classList.add("hide-burger-x");

        SeeMainNav = false;
    }
}

burgerBtn.addEventListener("click", showNav);


var signUpBtn = document.querySelector("#sign-up-btn");
var signUpContainer = document.querySelector("#sign-up-container"); 
var closesignUpModalBtn = document.querySelector("#close-signup-modal-btn"); 


function showSignUpModal() {
   
    signUpContainer.classList.add("show-signUp-container");
    mainNav.classList.remove("showMainNav");

    signIn.classList.remove("showSignIn");
}

function hideSignUpModal(){

    signUpContainer.classList.remove("show-signUp-container");
    

}

signUpBtn.addEventListener("click", showSignUpModal);
closesignUpModalBtn.addEventListener("click", hideSignUpModal);