const btn = document.querySelector('.btn_access');
const input = document.getElementById('email');
const error = document.querySelector('.error_message');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

console.log(error.text)

// console.log(validateEmail('stefamezgmail.com'));

function showErrorMessage(message) {
  error.textContent = message;
  error.style.visibility = 'visible';
}

btn.addEventListener('click', function() {
  if (input.value === '') {
    showErrorMessage('Oops! Please add your email!');
  } else if (!validateEmail(input.value)) {
    showErrorMessage('Oops! Please check your email');
  }
  
});