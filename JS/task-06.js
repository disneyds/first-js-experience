const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validation);

function validation() {
  const dataLength = Number(inputEl.dataset.length);

  inputEl.value.length === dataLength
    ? inputEl.classList.add('valid') || inputEl.classList.remove('invalid')
    : inputEl.classList.add('invalid') || inputEl.classList.remove('valid');
}
