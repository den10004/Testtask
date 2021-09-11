const form = document.getElementById('form')
const loginArray = document.getElementById('textArray')
const passwordArray = document.getElementById('textArray2')
const digitArray = document.getElementById('textArray3')

function sendForm(event) {
    event.preventDefault();

    const login = form.querySelector('[name="login"]'),
        password = form.querySelector('[name="password"]'),
        digit = form.querySelector('[name="digit"]');

    const values = {
        login: login.value,
        password: password.value,
        digit: digit.value,
    };

    loginArray.innerHTML=values.login
    passwordArray.innerHTML=values.password
    digitArray.innerHTML=values.digit

    console.log('массив данных', values);
}



form.addEventListener('submit', sendForm);