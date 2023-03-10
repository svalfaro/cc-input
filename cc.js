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

username.addEventListener("input", () => {
    nameOnCardFront.innerText = username.value.toUpperCase();
});

expirationMonths.addEventListener("input", () => {
    expMM.innerText = expirationMonths.value;
});

expirationYears.addEventListener("input", () => {
    expYY.innerText = expirationYears.value;
});

cardNumber.addEventListener("input", () => {
    numberOnCardFront.innerText = cardNumber.value;
});

cvcNumber.addEventListener("input", () => {
    cvcOnCardBack.innerText = cvcNumber.value;
});
