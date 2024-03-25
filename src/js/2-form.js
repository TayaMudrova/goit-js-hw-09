const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

textarea.addEventListener('input', onInputData);
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
savedPage();

function savedPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onInputData(event) {
  dataForm = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert(`Будь ласка, заповніть обидва поля.`);
  }

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  dataForm = {};
}
