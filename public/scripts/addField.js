document.querySelector("#add-time") // Procura o botão
.addEventListener('click', cloneField) // Quando clicar no botão

//Executar uma ação
function cloneField() {

    //Duplicar os campos. Quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo limpar
    fields.forEach(function(field) {
        // Pegar o field atual
        field.value = ""
    })

    //Colocar na Pagina: Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}