const btn = document.querySelector('.btn_access');
const input = document.querySelector('.email_input');
const error = document.querySelector('.error');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showErrorMessage(message) {
  error.textContent = message;
  error.style.visibility = 'visible';
}

btn.addEventListener('click', function() {
  if (input.value === '') {
    showErrorMessage('Oops! Please add your email!');
  } else if (!validateEmail(input.value)) {
    showErrorMessage('Oops! Please check your email!');
  }
});

document.body.addEventListener('click', function(e) {
  if (e.target !== input && e.target !== btn) {
    error.style.visibility = 'hidden';
  }
});