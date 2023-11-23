const scriptURL = 'https://script.google.com/macros/s/AKfycbyunN0Oax5v3yNg0OIdJyT-80zCz6ZfQZPi4D7JmDZpByXlexBpyZGF4LuBf98fJTkiVA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})