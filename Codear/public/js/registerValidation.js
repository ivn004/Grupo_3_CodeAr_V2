/* FORMS VALIDATIONS */

let id = (elem) => {
  return document.getElementById(elem);
}

let errores = {};

let form = id('form');
let nombre = id('nombre');
let email = id('email');
let pass = id('password');
let pass2 = id('password2');

let regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


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

let nombreValidation = () => {
  switch (true) {
    case nombre.value.length == 0:
      errores.nombre = 'Debes ingresar un nombre';
      errorNombre.innerHTML = errores.nombre;
      nombre.classList.add('is-invalid');
      break;
    default:
      errores.nombre = '';
      nombre.classList.remove('is-invalid');
      nombre.classList.add('is-valid');
      errorNombre.innerHTML = ''
  }
}
nombre.addEventListener('blur', () => {
  nombreValidation();
})
nombre.addEventListener('keyup', () => {
  nombreValidation();
})


let passValidation = () => {
  switch (true) {
    case pass.value.length == 0:
      errores.pass = 'El campo Pass es obligatorio';
      errorPass.innerHTML = errores.pass;
      pass.classList.add('is-invalid');
      break;
    case !regExPass.test(pass.value):
      errores.pass = 'La contraseña debe tener: al menos 8 caracteres, una mayúscula, una minúscula y un número';
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


let pass2Validation = () => {
  switch (true) {
    case pass2.value == "":
      errores.pass2 = "La verificación de contraseña es obligatorio"
      errorPass2.innerHTML = errores.pass2;
      pass2.classList.add('is-invalid')
      break
    case pass2.value != pass.value:
      errores.pass2 = "Las contraseñas no coinciden"
      errorPass2.innerHTML = errores.pass2;
      pass2.classList.add('is-invalid')
      break;
    default:
      errores.pass2 = ""
      pass2.classList.remove('is-invalid');
      pass2.classList.add('is-valid');
      errorPass2.innerHTML = "";
  }
}
pass2.addEventListener('blur', () => {
  pass2Validation();
})
pass2.addEventListener('keyup', () => {
  pass2Validation()
})


form.addEventListener('submit', function (event) {
  event.preventDefault()
  emailValidation()
  nombreValidation()
  passValidation()
  pass2Validation()
  if (!errores.nombre && !errores.email && !errores.pass && !errores.pass2) {
    form.submit()
  }
})
