const dividendo = document.querySelector("#dividendo")
const divisor = document.querySelector("#divisor")
const botao = document.querySelector("#botao")

botao.addEventListener("click", ()=>{
    let dividend = parseInt(dividendo.value)
    let divider = parseInt(divisor.value)
    let result = division(dividend, divider)
    window.alert(`${result}`)
    let rest = restOfDivision(dividend, divider)
    window.alert(`${rest}`)
})

const division = (a, b) => {
    return a / b
}

const restOfDivision = (a, b) => {
    return a % b
}