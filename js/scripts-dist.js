var mainNav=document.querySelector("#mainNav"),signIn=document.querySelector("#signIn"),burgerBtn=document.querySelector("#burger-container button"),SeeMainNav=!1;function showNav(){console.log("button clicked"),SeeMainNav?(console.log("hide menu"),mainNav.classList.remove("showMainNav"),signIn.classList.remove("showSignIn"),SeeMainNav=!1):(console.log("show menu"),mainNav.classList.add("showMainNav"),signIn.classList.add("showSignIn"),SeeMainNav=!0)}burgerBtn.addEventListener("click",showNav);