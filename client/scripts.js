const nav = document.querySelector('nav')
const inputs = document.querySelectorAll('input')

document.querySelector('.fa-hamburger').addEventListener('click',
// Callback fxn.
() => {
  // Short-circuit OR operator
  nav.classList.replace("is-collapsed", "is-expanded") || nav.classList.replace("is-expanded", "is-collapsed")
})

inputs.forEach(input => {
  input.addEventListener('blur', (event) => {
    const currentInput = event.target
    const regex = new RegExp(currentInput.pattern)

    if (!regex.test(currentInput.value.toUpperCase()) || !currentInput.value) {
      currentInput.classList.replace("is-success", "is-error") || currentInput.classList.add("is-error")
    } else {
      currentInput.classList.replace("is-error", "is-success") || currentInput.classList.add("is-success")
      }
  })
})
