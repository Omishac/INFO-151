var mainNav = document.querySelector("#mainNav");
var signIn = document.querySelector("#signIn");
var burgerBtn = document.querySelector("#burger-container button");

var SeeMainNav = false;

function showNav() {
    console.log("button clicked");

    // Check if mainNav and signIn elements exist
    if (mainNav && signIn) {
        if (!SeeMainNav) {
            console.log("show menu");
            mainNav.classList.add("showMainNav");
            signIn.classList.add("showSignIn");
            SeeMainNav = true;
        } else {
            console.log("hide menu");
            mainNav.classList.remove("showMainNav");
            signIn.classList.remove("showSignIn");
            SeeMainNav = false;
        }
    }
}

burgerBtn.addEventListener("click", showNav);

var signInBtn = document.querySelector("#sign-in-btn");

function showSignInModal() {
    console.log("Show sign-in modal now");


}


if (signInBtn) {
    signInBtn.addEventListener("click", showSignInModal);
}