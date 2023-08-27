var valorA = document.querySelector('#valorA')
var valorB = document.querySelector('#valorB')
var botao = document.querySelector('#button')

var mensagemA = document.querySelector('.verificaçãoA')
var mensagemB = document.querySelector('.verificaçãoB')


botao.addEventListener('click', ()=> {
    soma(valorA.value, valorB.value)
    subtração(valorA.value, valorB.value)
    multiplicação(valorA.value, valorB.value)
    divisão(valorA.value, valorB.value)
    verificações()
})

const soma = (a, b) => {
    let resultado = parseInt(a) + parseInt(b)
    console.log(`A soma de ${valorA.value} com ${valorB.value} é igual a: ${resultado}`)
}

const subtração = (a, b) => {
    let resultado = parseInt(a) - parseInt(b)
    console.log(`A subtração de ${valorA.value} com ${valorB.value} é igual a: ${resultado}`)
}

const multiplicação = (a, b) => {
    let resultado = parseInt(a) * parseInt(b)
    console.log(`A multiplicação de ${valorA.value} com ${valorB.value} é igual a: ${resultado}`)
}

const divisão = (a, b) => {
    let resultado = parseInt(a) / parseInt(b)
    console.log(`A divisão de ${valorA.value} com ${valorB.value} é igual a: ${resultado}`)
}

const verificações = () => {
    if(valorA.value == 0){
        mensagemA.style.display = 'block';
    } else {
        mensagemA.style.display = 'none';
    }

    if(valorB.value == 0){
        mensagemB.style.display = 'block';
    } else {
        mensagemB.style.display = 'none';
    }
}