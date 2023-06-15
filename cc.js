const nameOnCardFront = document.querySelector('.name-on-card');
const numberOnCardFront = document.querySelector('.number-on-card');
const cvcOnCardBack = document.querySelector('.cvc-on-card');
const expMM = document.querySelector('.exp-on-cardMM'); //for show
const expYY = document.querySelector('.exp-on-cardYY'); //for show
const expirationMonths = document.querySelector('.exp-mm');
const expirationYears = document.querySelector('.exp-yy');
const username = document.querySelector('.card-name');
const cardNumber = document.querySelector('.card-number');
const cvcNumber = document.querySelector('.cvc');
const confirmed = document.querySelector('.confirm-btn');
const mainContainer = document.querySelector('.main-container');
const tyContainer = document.querySelector('.thank-you-container');
const hiddenErrorCardNumber = document.querySelector('.card-number-holder');

function enableWarning() {
    document
        .querySelector('.warning')
        .classList.remove('hidden-error-disabled');
    document.querySelector('.warning').classList.add('hidden-error-enabled');
    document.querySelector(`.${errorType}`).classList.add('outline-error');
}

function disableWarning() {
    document.querySelector('.warning').classList.add('hidden-error-disabled');
    document.querySelector('.warning').classList.remove('hidden-error-enabled');
}

function cantBeBlankEnabled(errorType) {
    document
        .querySelector(`.${errorType}`)
        .classList.remove('hidden-blank-disabled');
    document
        .querySelector(`.${errorType}`)
        .classList.add('hidden-blank-enabled');
}

function cantBeBlankDisabled(errorType) {
    document
        .querySelector(`.${errorType}`)
        .classList.add('hidden-blank-disabled');
    document
        .querySelector(`.${errorType}`)
        .classList.remove('hidden-blank-enabled');
}

function onlyLettersEnabled() {
    document
        .querySelector('.letter-warning')
        .classList.remove('hidden-letter-disabled');
    document
        .querySelector('.letter-warning')
        .classList.add('hidden-letter-enabled');
}

function onlyLettersDisabled() {
    document
        .querySelector('.letter-warning')
        .classList.add('hidden-letter-disabled');
    document
        .querySelector('.letter-warning')
        .classList.remove('hidden-letter-enabled');
}

function onlyNumbersEnabled() {
    document
        .querySelector('.number-warning')
        .classList.remove('hidden-error-disabled');
    document
        .querySelector('.number-warning')
        .classList.add('hidden-error-enabled');
}

function onlyNumbersDisabled() {
    document
        .querySelector('.number-warning')
        .classList.add('hidden-error-disabled');
    document
        .querySelector('.number-warning')
        .classList.remove('hidden-error-enabled');
}

function limitCharsEnabled(errorType) {
    document
        .querySelector(`.${errorType}`)
        .classList.remove('hidden-character-disabled');
    document
        .querySelector(`.${errorType}`)
        .classList.add('hidden-character-enabled');
}

function limitCharsDisabled(errorType) {
    document
        .querySelector(`.${errorType}`)
        .classList.add('hidden-character-disabled');
    document
        .querySelector(`.${errorType}`)
        .classList.remove('hidden-character-enabled');
}

function inputError(inputBox) {
    inputBox.classList.add('outline-error');
}

function removeInputError(inputBox) {
    inputBox.classList.remove('outline-error');
}

function insertSpaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if ((i + 1) % 4 === 0 && i !== str.length - 1) {
            result += ' ';
        }
    }
    return result;
}

function numberLimiter(field, maxLength) {
    if (field.value.length > maxLength) {
        field.value = field.value.slice(0, maxLength);
    }
    return field;
}

function isNumber(value) {
    const pattern = /^\d+$/;
    const isValid = pattern.test(value);
    return isValid;
}

function lengthCheck(val) {
    if (val.value === 0) {
        return false;
    }

    return true;
}

function isAlpha(value) {
    const pattern = /^[a-zA-z]+([\s][a-zA-Z]+)+$/;
    const isValid = pattern.test(value);
    return isValid;
}

username.addEventListener('input', (e) => {
    if (username.value === '') {
        nameOnCardFront.innerText = 'JANE APPLESEED';
    }
    nameOnCardFront.innerText = username.value.toUpperCase();
});

expirationMonths.addEventListener('input', () => {
    numberLimiter(expirationMonths, 2);
    expMM.innerText = expirationMonths.value;
});

expirationYears.addEventListener('input', () => {
    numberLimiter(expirationYears, 2);
    expYY.innerText = expirationYears.value;
});

cardNumber.addEventListener('input', (e) => {
    numberLimiter(cardNumber, 16);
    numberOnCardFront.innerText = insertSpaces(e.target.value);
    // cardNumberArr.push(e.target.value);
});

cvcNumber.addEventListener('input', (e) => {
    numberLimiter(cvcNumber, 3);
    cvcOnCardBack.innerText = cvcNumber.value;
});

function validateUsername(username) {
    let flag = false;
    if (username.value === '') {
        onlyLettersDisabled();
        cantBeBlankEnabled('blank-warning-username');
        inputError(username);
    } else if (username.value !== '' && !isAlpha(username.value)) {
        cantBeBlankDisabled('blank-warning-username');
        onlyLettersEnabled();
        inputError(username);
    } else {
        cantBeBlankDisabled('blank-warning-username');
        onlyLettersDisabled();
        removeInputError(username);
        return true;
    }
    return flag;
}

function validateCardNumbers(cardNumber) {
    let flag = false;
    if (cardNumber.value === '') {
        cantBeBlankEnabled('blank-warning-cardnumber');
        onlyNumbersDisabled();
        limitCharsDisabled('character-warning');
        inputError(cardNumber);
    } else if (cardNumber.value !== '' && !isNumber(cardNumber.value)) {
        cantBeBlankDisabled('blank-warning-cardnumber');
        onlyNumbersEnabled();
        limitCharsDisabled('character-warning');
        inputError(cardNumber);
    } else if (cardNumber.value.length !== 16) {
        cantBeBlankDisabled('blank-warning-cardnumber');
        onlyNumbersDisabled();
        limitCharsEnabled('character-warning');
        inputError(cardNumber);
    } else {
        cantBeBlankDisabled('blank-warning-cardnumber');
        onlyNumbersDisabled();
        limitCharsDisabled('character-warning');
        removeInputError(cardNumber);
        return true;
    }
    return flag;
}

function validateMonthsYears(mm, yy) {
    let flag = false;
    if (mm.value === '' || yy.value === '') {
        cantBeBlankEnabled('blank-warning-my');
        limitCharsDisabled('character-warning-my');
        inputError(mm);
        inputError(yy);
    } else if (
        (mm.value !== '' && !isNumber(mm.value)) ||
        (yy.value !== '' && !isNumber(yy.value))
    ) {
        cantBeBlankDisabled('blank-warning-my');
        limitCharsDisabled('character-warning-my');
        inputError(mm);
        inputError(yy);
    } else if (mm.value.length !== 2 || yy.value.length !== 2) {
        cantBeBlankDisabled('blank-warning-my');
        limitCharsEnabled('character-warning-my');
        inputError(mm);
        inputError(yy);
    } else {
        cantBeBlankDisabled('blank-warning-my');
        limitCharsDisabled('character-warning-my');
        removeInputError(mm);
        removeInputError(yy);
        return true;
    }
    return flag;
}

function validateCVC(cvc) {
    let flag = false;
    if (cvc.value === '') {
        cantBeBlankEnabled('blank-warning-cvc');
        limitCharsDisabled('character-warning-cvc');
        inputError(cvc);
    } else if (cvc.value !== '' && !isNumber(cvc.value)) {
        cantBeBlankDisabled('blank-warning-cvc');
        limitCharsDisabled('character-warning-cvc');
        inputError(cvc);
    } else if (cvc.value.length !== 3) {
        cantBeBlankDisabled('blank-warning-cvc');
        limitCharsEnabled('character-warning-cvc');
        inputError(cvc);
    } else {
        cantBeBlankDisabled('blank-warning-cvc');
        limitCharsDisabled('character-warning-cvc');
        removeInputError(cvc);
        return true;
    }
    return flag;
}

confirmed.addEventListener('click', () => {
    if (
        validateUsername(username) &&
        validateCardNumbers(cardNumber) &&
        validateMonthsYears(expirationMonths, expirationYears) &&
        validateCVC(cvcNumber)
    ) {
        mainContainer.remove();
        tyContainer.classList.remove('hide-me');
    }
});
