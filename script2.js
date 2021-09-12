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
    alert('данные отправлены')
/*
    form.onsubmit = async (e) => {
        e.preventDefault();
    
        let response = await fetch('/title', {
          method: 'POST',
          body: new FormData(values)
        })
        .then(res => res.json())
        .then(res=> console.log(res))
    
        console.log(result);
    }
*/

   /*
   const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });

  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
  }

  return await response.json();
}


   */
}



form.addEventListener('submit', sendForm);