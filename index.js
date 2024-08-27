const buttonE = document.querySelector(".btn");
const inputE = document.getElementById("input");
const copyI = document.querySelector(".fa-copy");
const alertE = document.querySelector(".alert");


buttonE.addEventListener("click", () => {
    createPassword();
});


copyI.addEventListener("click", () => {
    copyPassword();
    showAlert();
});

function createPassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789012345678901234@#$%^&*!-=+/?|~(){}{}";
    const passwordL = 14;
    let password = "";

    for (let index = 0; index < passwordL; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNum);
    }

    inputE.value = password; 
}

function copyPassword() {
    inputE.select();
    inputE.setSelectionRange(0, 9999); 
    navigator.clipboard.writeText(inputE.value);
}

function showAlert() {
    alertE.innerText = "Password copied"; 
    alertE.classList.add("active"); 

    
    setTimeout(() => {
        alertE.classList.remove("active");
    }, 2000);
}
