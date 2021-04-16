/* FORMS VALIDATIONS */

let id = (elem) => {
  return document.getElementById(elem);
}

let errores = {};

let form = id('form');
let email = id('email');
let pass = id('password');

let regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


let emailValidation = () => {
  switch (true) {
    case email.value.length == 0:
      errores.email = 'El campo email es obligatorio';
      errorEmail.innerHTML = errores.email;
      email.classList.add('is-invalid');
      break;
    case !regExEmail.test(email.value):
      errores.email = 'Debes escribir un email válido';
      errorEmail.innerHTML = errores.email;
      email.classList.add('is-invalid');
      break;
    default:
      errores.email = '';
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
      errorEmail.innerHTML = ''
  }
}

email.addEventListener('blur', () => {
  emailValidation();
})
email.addEventListener('keyup', () => {
  emailValidation();
})


let passValidation = () => {
  switch (true) {
    case pass.value.length == 0:
      errores.pass = 'El campo Pass es obligatorio';
      errorPass.innerHTML = errores.pass;
      pass.classList.add('is-invalid');
      break;
    default:
      errores.pass = '';
      pass.classList.remove('is-invalid');
      pass.classList.add('is-valid');
      errorPass.innerHTML = ''
  }
}
pass.addEventListener('blur', () => {
  passValidation();
})
pass.addEventListener('keyup', () => {
  passValidation()
})


form.addEventListener('submit', function (event) {
  event.preventDefault()
  emailValidation()
  passValidation()
  if (!errores.email && !errores.pass) {
    form.submit()
  }
})
