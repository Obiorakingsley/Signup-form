const form = document.getElementById('form')

const inputName = document.getElementById('name');
const nameError = document.getElementById('error-name');

const inputEmail = document.getElementById('email');
const emailError = document.getElementById('error-email');

const inputPassword = document.getElementById('password');
const passwordError = document.getElementById('error-password');

const inputPhone = document.getElementById('phone');
const phoneError = document.getElementById('error-phone')
  

inputName.addEventListener('input', () => {
  validateForm()
})

inputEmail.addEventListener('input', () => {
  validateForm()
})
inputPassword.addEventListener('input', () => {
  validateForm()
})

inputPhone.addEventListener('input', () => {
  validateForm()
})

const hidePassword = document.getElementById('hide-password');

hidePassword.addEventListener('click', () => {
  if(inputPassword.type === 'password'){
    hidePassword.src = 'images/view.png'
    inputPassword.type = 'text';
    setTimeout(() => {
      inputPassword.type = 'password'
      hidePassword.src = 'images/hide.png'
    }, 3000);
  }else if(inputPassword.type === 'text'){
    hidePassword.src = 'images/hide.png'
    inputPassword.type = 'password';
  }
})



function validateForm() {
  // Name validation

  const name = inputName.value;
  const nameRegex = /^[A-Za-z]+\s+[A-Za-z]+$/;

  if(nameRegex.test(name)){
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i> Enter full name`
    nameError.style.color = 'seagreen'
    nameError.style.display = 'block'
  }else{
    nameError.innerHTML = 'Enter full name'
    nameError.style.color = 'red'
    nameError.style.display = 'block'
  }

  //Email validation


  const email = inputEmail.value
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(emailRegex.test(email)){
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i> Enter email`
    emailError.style.color = 'seagreen'
    emailError.style.display = 'block'
  }else{
    emailError.innerHTML = 'Enter email'
    emailError.style.color = 'red'
    emailError.style.display = 'block'
  }
  

  //Password validation

  const uppercasePassword = document.getElementById('uppercase')
  const lowercasePassword = document.getElementById('lowercase')
  const digitPassword = document.getElementById('digit')
  const symbolPassword = document.getElementById('symbol')
  const minimumPassword = document.getElementById('minimum')

  const password = inputPassword.value;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  if(passwordRegex.test(password)){
    passwordError.innerHTML = `<i class="fa-solid fa-circle-check"></i> Enter password`
    passwordError.style.color = 'seagreen'
    passwordError.style.display = 'block'
  }else{
    passwordError.innerHTML = 'Enter password'
    passwordError.style.color = 'red'
    passwordError.style.display = 'block'
  }


  // At least one uppercase letter

  const uppercaseRegex = /(?=.*[A-Z])/;

  if(uppercaseRegex.test(password)){
    uppercasePassword.innerHTML = `<i class="fa-solid fa-check"></i> At least one uppercase`
    uppercasePassword.style.color = 'seagreen'
    uppercasePassword.style.display = 'block'
  }else{
    uppercasePassword.innerHTML = 'At least one uppercase'
    uppercasePassword.style.color = 'red'
    uppercasePassword.style.display = 'block'
  }

  // At least one lowercase letter

  const lowercaseRegex = /(?=.*[a-z])/;
  if(lowercaseRegex.test(password)){
    lowercasePassword.innerHTML = `<i class="fa-solid fa-check"></i> At least one lowercase`
    lowercasePassword.style.color = 'seagreen'
    lowercasePassword.style.display = 'block'
  }else{
    lowercasePassword.innerHTML = 'At least one lowercase'
    lowercasePassword.style.color = 'red'
    lowercasePassword.style.display = 'block'
  }


// At least one digit (0-9)

const digitRegex = /(?=.*\d)/
  if(digitRegex.test(password)){
    digitPassword.innerHTML = `<i class="fa-solid fa-check"></i> At least one digit`
    digitPassword.style.color = 'seagreen'
    digitPassword.style.display = 'block'
  }else{
    digitPassword.innerHTML = 'At least one digit'
    digitPassword.style.color = 'red'
    digitPassword.style.display = 'block'
  }


  // At least one symbol

  const symbolRegex = /(?=.*[!@#$%^&*])/
  if(symbolRegex.test(password)){
    symbolPassword.innerHTML = `<i class="fa-solid fa-check"></i> At least 1 symbol`
    symbolPassword.style.color = 'seagreen'
    symbolPassword.style.display = 'block'
  }else{
    symbolPassword.innerHTML = 'At least 1 symbol'
    symbolPassword.style.color = 'red'
    symbolPassword.style.display = 'block'
  }

  // Minimum of 8 characters

  const minimumRegex = /^.{8,}$/
  if(minimumRegex.test(password)){
    minimumPassword.innerHTML = `<i class="fa-solid fa-check"></i> At least 8 characters`
    minimumPassword.style.color = 'seagreen'
    minimumPassword.style.display = 'block'
  }else{
    minimumPassword.innerHTML = 'At least 8 characters'
    minimumPassword.style.color = 'red'
    minimumPassword.style.display = 'block'
  }

  //Phone no Validation

  const phone = inputPhone.value
  const phoneRegex = /^[0-9]{10}$/;

  if(phoneRegex.test(phone)){
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i> Enter phone number`
    phoneError.style.color = 'seagreen'
    phoneError.style.display = 'block'
  }else{
    phoneError.innerHTML = 'Phone must be 10 digits'
    phoneError.style.color = 'red'
    phoneError.style.display = 'block'
  }

  
}
// Handlee submission

function isFormValid() {
  const name = inputName.value;
  const email = inputEmail.value;
  const password = inputPassword.value;
  
  const nameRegex = /^[A-Za-z]+\s+[A-Za-z]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  
  return nameRegex.test(name) && emailRegex.test(email) && passwordRegex.test(password);
}

form.addEventListener('submit', (e) => {
  validateForm();
  
  if (!isFormValid()) {
    e.preventDefault();

  }
});