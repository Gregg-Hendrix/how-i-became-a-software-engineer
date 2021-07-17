const button = document.querySelector("#switch");

button.addEventListener("click", () => {
  document.body.classList.toggle("mode-dark")
})

const textField = document.querySelector("#text-field");

textField.addEventListener("submit", event => {
  event.preventDefault()
  window.alert("you did it kid")
})