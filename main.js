const submitButton = document.getElementById("submit-button")
const myForm = document.querySelector("#my-form")
const nameInput = document.querySelector("#name")
const lastNameInput = document.querySelector("#lastName")
const pesoInput = document.querySelector("#peso")
const alturaInput = document.querySelector("#altura")

const errorMessage = document.querySelector(".msg")

const items = document.querySelector(".items")


submitButton.addEventListener('click', function (e) {
    e.preventDefault()

    const nameValue = nameInput.value 
    const lastNameValue = lastNameInput.value 
    const pesoValue = pesoInput.value
    const alturaValue = alturaInput.value

    if (nameValue === '' || lastNameValue === '' || pesoValue === '' || alturaValue === '') {
        errorMessage.textContent = 'Por favor preencha todos os campos'
        errorMessage.classList = 'error'

        setTimeout(() =>{
            errorMessage.textContent = ""
            errorMessage.classList = ""
        }, 5000)
        return
        
    }

    const imc = pesoValue/ Math.pow(alturaValue, 2)


    const li = document.createElement("li")
    li.classList = "item"
    li.innerHTML = `Nome: ${nameValue}<br/> Sobrenome: ${lastNameValue}<br/> peso: ${pesoValue}<br/> altura: ${alturaValue}<br> imc: ${imc.toFixed(2)}`

    items.appendChild(li)

    nameInput.value = ''
    lastNameInput.value = ''
    pesoInput.value = ''
    alturaInput.value = ''
})

