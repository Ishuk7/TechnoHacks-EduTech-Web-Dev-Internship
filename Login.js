// created by Khushi
const loginBtn = document.querySelector("#button"); 
const registerLink = document.querySelector("#registerLinkA"); 
const loginLink = document.querySelector("#loginLinkA"); 
const formContainer = document.querySelector(".formInput"); 
const loginForm = document.querySelector(".login"); 
const registerForm = document.querySelector(".register"); 
// created by Khushi
document.addEventListener("DOMContentLoaded", function(){
    const loginButton = document.getElementById("button");
    const formInput = document.getElementById("formInput");

    loginButton.addEventListener("click", function(){
        if(formInput.style.display === "none" || formInput.style.display === ""){
            formInput.style.display = "flex";
        } 
        else{
            formInput.style.display = "none";
        }
    });
});
// created by Khushi
loginForm.style.display = "block";
registerForm.style.display = "none";

const showRegisterForm = (e) =>{
    e.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
};
// created by Khushi
const showLoginForm = (e) =>{
    e.preventDefault();
    registerForm.style.display = "none";
    loginForm.style.display = "block";
};

registerLink.addEventListener("click", showRegisterForm);
loginLink.addEventListener("click", showLoginForm);

const togglePasswordVisibility = (element) =>{
    const inputField = element.previousElementSibling;
    if(inputField.type === "password"){
        inputField.type = "text";
        element.classList.replace("fa-eye-slash", "fa-eye");
    }
    else{
        inputField.type = "password";
        element.classList.replace("fa-eye", "fa-eye-slash");
    }
};

const passwordToggles = document.querySelectorAll(".fa");

passwordToggles.forEach(toggle =>{
    toggle.addEventListener("click", () => togglePasswordVisibility(toggle));
});
// created by Khushi
const loginSubmitButton = document.querySelector(".loginSubmitButton");

loginSubmitButton.addEventListener("click", (e) => {
    e.preventDefault(); 

    const username = document.getElementById("userInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passInput").value;

    if(username && email && password){
        loginSubmitButton.textContent = "Logged In";
    } 
    else{
        alert("Please fill out all fields.");
    }
});
// created by Khushi
