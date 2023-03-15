const nameOnCardFront = document.querySelector(".name-on-card");
const numberOnCardFront = document.querySelector(".number-on-card");
const cvcOnCardBack = document.querySelector(".cvc-on-card");
const expMM = document.querySelector(".exp-on-cardMM"); //for show
const expYY = document.querySelector(".exp-on-cardYY"); //for show
const expirationMonths = document.querySelector(".exp-mm");
const expirationYears = document.querySelector(".exp-yy");
const username = document.querySelector(".card-name");
const cardNumber = document.querySelector(".card-number");
const cvcNumber = document.querySelector(".cvc");

// TODO
// create function to check and prevent further input (for both letters and numbers) ie: e.preventDefault()

function insertSpaces(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if ((i + 1) % 4 === 0 && i !== str.length - 1) {
            result += " ";
        }
    }
    return result;
}

username.addEventListener("input", () => {
    nameOnCardFront.innerText = username.value.toUpperCase();
    if (username.value === "") {
        nameOnCardFront.innerText = "JANE APPLESEED";
    }
});

expirationMonths.addEventListener("input", () => {
    expMM.innerText = expirationMonths.value;
});

expirationYears.addEventListener("input", () => {
    expYY.innerText = expirationYears.value;
});

cardNumber.addEventListener("input", (e) => {
    numberOnCardFront.innerText = insertSpaces(e.target.value);
});

cvcNumber.addEventListener("input", (e) => {
    cvcOnCardBack.innerText = cvcNumber.value;
});
