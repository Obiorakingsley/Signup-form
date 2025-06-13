const form = document.getElementById('form')

const inputName = document.getElementById('name');
const nameError = document.getElementById('error-name');

const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPhone = document.getElementById('phone');

form.addEventListener('submit', (event) => {
  if(!validateName()){
    event.preventDefault()
    validateName()
  }
})

inputName.addEventListener('input', () => {
  validateName()
})


function validateName(){
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
} 
validateName()