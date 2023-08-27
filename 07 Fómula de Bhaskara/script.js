const valueA = document.querySelector("#valorA")
const valueB = document.querySelector("#valorB")
const valueC = document.querySelector("#valorC")

const botao = document.querySelector("#btn")

botao.addEventListener("click", ()=>{
    let valorA = parseInt(valueA.value)
    let valorB = parseInt(valueB.value)
    let valorC = parseInt(valueC.value)

    let delta = deltaFormula(valorA, valorB, valorC)

    if(delta < 0){
        window.alert("Delta é negativo")
    } else {
        window.alert(`${delta}`)
    }
})

const deltaFormula = (A, B, C) => {
    return Math.pow(B, 2) - 4*A*C
}