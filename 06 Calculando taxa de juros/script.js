const capitalInicial = document.querySelector("#capital")
const taxaJuros = document.querySelector("#taxa")
const tempo = document.querySelector("#tempo")
const botao = document.querySelector("#botao")

//montante = amount

botao.addEventListener("click", ()=>{
    let initialCapital = parseInt(capital.value)
    let interestRate = parseInt(taxa.value)
    let time = parseInt(tempo.value)

    let resultadoJurosSimples = calcJurosSimples(initialCapital, interestRate, time)
    let resultadoJurosComposto = calcJurosComposto(initialCapital, interestRate, time)
    

    window.alert(`Calculo de juros simples é igual a: ${resultadoJurosSimples}`)
    window.alert(`Calculo de juros composto é igual a: ${resultadoJurosComposto}`)

   // window.alert(`as respectivas medidas são: ${initialCapital}${interestRate}${time}`)
})

const calcJurosSimples = (C, i , T) =>{
    i = i / 100
    return C * i * T
}

const calcJurosComposto = (C, i, T) => {
    i = i / 100
   let result = C * (1 + i)
    return Math.pow(result, T)
}



