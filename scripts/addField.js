//Procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField)
//Quando clicar o botao

//executar uma acao
function cloneField(){
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function (field) {
        fields.value = ""
    })

    //Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
   