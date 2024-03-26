const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);
emailInput.addEventListener('input', onInputData);
messageInput.addEventListener('input', onInputData);

let formData = loadFormDataFromStorage();

function loadFormDataFromStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  return savedData ? JSON.parse(savedData) : {};
}

function saveFormDataToStorage(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onTextareaInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveFormDataToStorage(formData);
}

function onInputData(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveFormDataToStorage(formData);
}

function onFormSubmit(event) {
  event.preventDefault();
  const { email, message } = formData;

  if (!email || !message) {
    return alert('Будь ласка, заповніть обидва поля.');
  }

  console.log({ email, message });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = {};
}
